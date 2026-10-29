import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Capture a rendered Reveal deck through an isolated, caller-owned CDP browser.
// Start that browser on loopback port 9239 before running this script.
const html = resolve(Bun.argv[2] ?? "");
if (!html.endsWith(".html") || !(await Bun.file(html).exists())) {
  throw new Error("Supply an existing rendered HTML deck");
}
const requested = new Set((Bun.argv[3] ?? "").split(",").filter(Boolean));
const targets = (await (
  await fetch("http://127.0.0.1:9239/json/list")
).json()) as { type: string; webSocketDebuggerUrl: string }[];
const target = targets.find((t) => t.type === "page");
if (!target) throw new Error("No page in the isolated preview browser");
const ws = new WebSocket(target.webSocketDebuggerUrl);
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
  const response = JSON.parse(String(event.data));
  const waiter = pending.get(response.id);
  if (!waiter) return;
  pending.delete(response.id);
  if (response.error) waiter.reject(new Error(JSON.stringify(response.error)));
  else waiter.resolve(response.result);
};
ws.onclose = () => {
  for (const waiter of pending.values()) {
    waiter.reject(new Error("CDP socket closed"));
  }
  pending.clear();
};
function send(
  method: string,
  params: Record<string, unknown> = {},
): Promise<any> {
  return new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression: string): Promise<any> {
  const answer = await send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (answer.exceptionDetails) {
    throw new Error(JSON.stringify(answer.exceptionDetails));
  }
  return answer.result.value;
}
async function waitFor(expression: string, limit = 30000) {
  const deadline = Date.now() + limit;
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
  await send("Page.navigate", { url: pathToFileURL(html).href });
  await waitFor("window.Reveal?.isReady()");
  await evaluate(`(async()=>{
    await document.fonts.ready;
    if(window.MathJax?.startup?.promise) await MathJax.startup.promise;
    return true;
  })()`);
  const slides = (await evaluate(`Reveal.getSlides().map(s=>({
    id:s.id, title:s.querySelector('h1,h2')?.innerText,
    indices:Reveal.getIndices(s)
  }))`)) as { id: string; title: string; indices: { h: number; v: number } }[];
  const out = resolve(html, "..", "review");
  const report: Record<string, unknown>[] = [];
  for (const slide of slides) {
    if (requested.size && !requested.has(slide.id)) continue;
    if (!slide.id) throw new Error("Every captured slide needs an identifier");
    await evaluate(`Reveal.slide(${slide.indices.h},${slide.indices.v ?? 0})`);
    await waitFor(`Reveal.getCurrentSlide()?.id===${JSON.stringify(slide.id)}`);
    await waitFor(
      "[...Reveal.getCurrentSlide().querySelectorAll('img')].every(i=>i.complete&&i.naturalWidth>0)",
    );
    await evaluate(
      "new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(()=>r(true))))",
    );
    const layout = await evaluate(`(()=>{
      const s=Reveal.getCurrentSlide(),box=s.getBoundingClientRect();
      const bad=[...s.querySelectorAll('h2,h3,p,table,ul,.nav')]
        .filter(e=>!e.closest('.notes'))
        .map(e=>({tag:e.tagName,text:e.innerText?.slice(0,90),b:e.getBoundingClientRect()}))
        .filter(x=>x.b.bottom>1082||x.b.right>1922||x.b.left< -2);
      return {height:box.height,overflow:bad.map(x=>({tag:x.tag,text:x.text,bottom:x.b.bottom,right:x.b.right}))};
    })()`);
    const image = await send("Page.captureScreenshot", { format: "png" });
    await Bun.write(
      `${out}/${slide.id}.png`,
      Buffer.from(image.data, "base64"),
    );
    report.push({ ...slide, ...layout });
  }
  await Bun.write(`${out}/layout-report.json`, JSON.stringify(report, null, 2));
  console.log(
    JSON.stringify({
      totalSlides: slides.length,
      captured: report.length,
      output: out,
      overflow: report.filter((slide) => (slide.overflow as unknown[]).length),
    }),
  );
} finally {
  ws.close();
}
