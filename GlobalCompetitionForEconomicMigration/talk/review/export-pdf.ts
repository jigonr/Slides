import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Integration-owned PDF export; use a dedicated browser on loopback port 9241.
const html = resolve(Bun.argv[2] ?? "");
const port = Bun.argv[3] ?? "9241";
if (!html.endsWith(".html") || !(await Bun.file(html).exists())) {
  throw new Error("Supply the rendered presentation HTML");
}
const page = await (
  await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, {
    method: "PUT",
  })
).json();
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise<void>((ok, fail) => {
  ws.onopen = () => ok();
  ws.onerror = () => fail(new Error("CDP connection failed"));
});
let sequence = 0;
const pending = new Map<
  number,
  { resolve: (value: any) => void; reject: (error: Error) => void }
>();
ws.onmessage = (event) => {
  const message = JSON.parse(String(event.data));
  const waiter = pending.get(message.id);
  if (!waiter) return;
  pending.delete(message.id);
  if (message.error) waiter.reject(new Error(JSON.stringify(message.error)));
  else waiter.resolve(message.result);
};
function send(
  method: string,
  params: Record<string, unknown> = {},
): Promise<any> {
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`CDP timeout: ${method}`));
    }, 60000);
    pending.set(id, {
      resolve: (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      reject: (error) => {
        clearTimeout(timer);
        reject(error);
      },
    });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression: string): Promise<any> {
  const answer = await send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (answer.exceptionDetails)
    throw new Error(JSON.stringify(answer.exceptionDetails));
  return answer.result.value;
}
async function waitFor(expression: string) {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (await evaluate(`Boolean(${expression})`)) return;
    await Bun.sleep(150);
  }
  throw new Error(`Timed out: ${expression}`);
}
try {
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
    mobile: false,
  });
  const url = pathToFileURL(html).href;
  await send("Page.navigate", { url });
  await waitFor("window.Reveal?.isReady()");
  const audit = await evaluate(`(()=>({
    slides:Reveal.getSlides().length,
    brokenLinks:[...document.querySelectorAll('a[href^="#"]')].filter(a=>{
      const id=decodeURIComponent(a.hash.slice(1).replace(/^\\//,""));
      return id && !document.getElementById(id);
    }).map(a=>a.getAttribute('href')),
    citations:document.querySelectorAll('.csl-entry').length
  }))()`);
  if (audit.slides < 15 || audit.brokenLinks.length || audit.citations < 11) {
    throw new Error(`Deck structure failure: ${JSON.stringify(audit)}`);
  }
  // Test native backup/return clicks on the integrated deck, not merely hrefs.
  await evaluate(
    "(()=>{const i=Reveal.getIndices(document.getElementById('group-transitions')); Reveal.slide(i.h,i.v??0)})()",
  );
  await waitFor("Reveal.getCurrentSlide()?.id==='group-transitions'");
  await evaluate("document.fonts.ready.then(()=>true)");
  for (const target of ["region-counts", "group-transitions"]) {
    const point = await evaluate(`(()=>{
      const a=[...Reveal.getCurrentSlide().querySelectorAll('a')].find(a=>a.hash.endsWith(${JSON.stringify(target)}));
      if(!a) throw new Error('Missing navigation button');
      const b=a.getBoundingClientRect(); return {x:b.x+b.width/2,y:b.y+b.height/2};
    })()`);
    await send("Input.dispatchMouseEvent", {
      type: "mousePressed",
      ...point,
      button: "left",
      clickCount: 1,
    });
    await send("Input.dispatchMouseEvent", {
      type: "mouseReleased",
      ...point,
      button: "left",
      clickCount: 1,
    });
    await waitFor(`Reveal.getCurrentSlide()?.id===${JSON.stringify(target)}`);
  }
  await send("Page.navigate", { url: `${url}?print-pdf` });
  await waitFor(
    `document.querySelectorAll('.pdf-page').length===${audit.slides}`,
  );
  await evaluate(
    "(async()=>{await document.fonts.ready; if(window.MathJax?.startup?.promise) await MathJax.startup.promise; return true})()",
  );
  await waitFor("[...document.images].every(i=>i.complete&&i.naturalWidth>0)");
  const math = await evaluate(
    "({rendered:document.querySelectorAll('mjx-container').length,errors:document.querySelectorAll('mjx-merror').length})",
  );
  if (!math.rendered || math.errors)
    throw new Error(`Math rendering failure: ${JSON.stringify(math)}`);
  // Reveal hashes are browser routes. Plain fragments give Chromium real PDF
  // destinations without changing the source HTML or its live navigation.
  await evaluate(`(()=>{
    for(const a of document.querySelectorAll('a[href^="#/"]')) {
      a.setAttribute('href',a.getAttribute('href').replace(/^#\\//,'#'));
    }
    return true;
  })()`);
  const pdf = await send("Page.printToPDF", {
    printBackground: true,
    preferCSSPageSize: true,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  });
  const output = html.replace(/\.html$/, ".pdf");
  await Bun.write(output, Buffer.from(pdf.data, "base64"));
  console.log(
    JSON.stringify({ ...audit, math, navigationRoundTrip: true, output }),
  );
} finally {
  ws.close();
  await fetch(`http://127.0.0.1:${port}/json/close/${page.id}`);
}
