# Global competition for economic migration

`talk.qmd` is the 15-substantive-slide presentation, followed by linked backups.
Title and section transitions are outside that count. Every backup has a return
button; the final reference section uses native Quarto citations and the local
Zotero-exported CSL bibliography in `references.json`.

The presentation uses the unchanged teaching theme in `assets/slides.scss` and
the local Roboto Light font, with its SIL Open Font License. `talk.css` adds
scoped figure, table and navigation layout; it does not replace the theme’s
global typography.

## Build and review

From the repository root:

```sh
quarto render GlobalCompetitionForEconomicMigration/talk/talk.qmd --to revealjs
```

There are no executable analytical cells. Rendering does not estimate a model,
scan source histories, collect legal data or start the AEAI VM.

`review/capture.ts` captures the rendered deck and checks visible element bounds
through a caller-owned, isolated Chromium CDP browser on loopback port 9239. Its
private package contains only review typings. After starting that browser:

```sh
bun install --cwd GlobalCompetitionForEconomicMigration/talk/review --ignore-scripts
bun check --no-script -p GlobalCompetitionForEconomicMigration/talk/review/tsconfig.json
bun GlobalCompetitionForEconomicMigration/talk/review/capture.ts \
  GlobalCompetitionForEconomicMigration/talk/talk.html
```

Screen captures and the layout report are generated under `review/`. A successful
render, numerical reconciliation or bounds check is not scientific acceptance;
read the actual slides and figures as well.

The retained `talk.pdf` has 59 non-empty widescreen pages, including the title,
section transitions and 36 backup/reference slides. Its internal buttons remain
clickable. To reproduce it, start a dedicated Chromium CDP browser on loopback
port 9241, then run:

```sh
bun GlobalCompetitionForEconomicMigration/talk/review/export-pdf.ts \
  GlobalCompetitionForEconomicMigration/talk/talk.html
```

The exporter checks the slide count, citations, equations and a real backup/return
click sequence. In the print-only DOM, it converts Reveal's browser-route hashes
to plain fragment destinations so that Chromium preserves PDF links. It does not
modify the Quarto source or the live HTML navigation.

## Figure definitions and numerical ownership

Figures are retained or re-rendered from numerical objects in the
[`visa-revisions-spec` presentation worktree](https://github.com/Applied-Economics-With-AI/visa_proj/tree/letta/visa-revisions-spec-858e8de2/slides/research/visa-stylized-facts).
Its `presentation-figure-review.md` identifies exact sources, producers,
denominators, units and checks. Figure content hashes and source names are
recorded in `figure-manifest.json`.

- The six-date ECDF uses 2000/05/10/15/20/25, 22 nonmilitary occupation groups and
  two overlapping hypothetical education scenarios. The main comparison fixes
  167 represented destinations and equal cell weights. Coded screen passes are
  not complete legal choice sets.
- Region and income plots show actual joint origin/destination cells, not
  destination marginals. They cover 83,651,638 broad verified-country
  international events in 2010–2025. Unknown groups remain visible. Region
  metadata is fixed at the retained October 2026 vintage; income groups use
  fixed World Bank FY2011 classifications.
- Occupational matrices use a different strict-history sample: 55,732,453
  international events including unknown occupations. Analytical families
  aggregate all 23 SOC major groups plus unknown, preserving both margins.
  They are not a skill ranking. The known-code family-switch rate is 26.14734%;
  the SOC-major-switch rate is 55.19646%. Neither is individual skill upgrading.
- Current monetary figures show conditional-index slopes per USD 1,000. Samples
  and fixed effects differ; no current standard errors, causal migration
  elasticities or government resource-cost estimates are claimed.

The accompanying outline remains `../presentation-outline.md`. The talk also
has an exact-source copy under the Visa task branch’s presentation folder;
neither repository’s main branch is the integration target for this work.
