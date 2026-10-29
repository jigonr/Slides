---
title: "Global competition for economic migration: presentation outline"
status: draft
date: 2026-10-29
---

# Question and organising argument

**How do governments design visa policies in response to workers’ choices and other countries’ policies?** Do they compete for talent through more attractive combinations of eligibility, costs and rights, and what are the allocation and welfare consequences?

This retains the PhD Review’s government-competition question. The empirical starting point is to document what governments offer and how workers’ careers cross jobs, occupations and countries. Worker substitution elasticities are inputs to analysing competing offers; they do not alone identify government objectives, resource costs or welfare.

The talk follows a dependency chain:

**Policy episodes → competing legal offers → contribution → two datasets and their bridge → three descriptive facts → worker responses and cost preliminaries → government/firm questions.**

There are **15 substantive slides** below. The title, optional contents and section transitions are outside that count. This is an outline, not a slide implementation or a script. Backup buttons identify specific destinations and return to their invoking slide; the full graph collection is an evidence library rather than an additional main sequence.

## Presentation design

- Use large graph labels, ticks, legends and cell values. Remove sample-size annotations and graph footnotes; retain the sample definitions, coverage and sources in speaker notes and the figure documentation. Preserve counts when they are the plotted outcome.
- Present the literature vertically, without columns or a comparison table. Each main bullet states the literature and its previous findings, with parenthetic citations; its indented sub-bullet states our contribution to that literature.
- Preserve `slides.scss` and its default citation and colour settings. Avoid pink emphasis in the literature slide; use the bullet hierarchy to distinguish previous findings from our contribution. Give slides informative subtitles.
- Use Paul Tol Vibrant for the graphs, matching the teaching theme. After content review, Iris implements the section, normal, emphasis and alert slide treatments using the existing theme.

# Main sequence

## Motivation, question and contribution

### 1. Governments compete over access, costs and rights

**Subtitle:** A change in a legal pathway changes the offer facing a potential migrant.

**Purpose:** Motivate the economic object before naming its database or model. Use two contrasting, dated examples: an opportunity expands on one dimension while another closes or changes terms. Explain why fees alone or one openness index cannot describe the offer.

**Exhibit:** A compact comparison of two genuine route bundles, with citizenship/profile, policy date and legal terms stated. The earlier presentation’s UK engineer and French nurse examples provide a useful explanatory structure, but their mixed 2019/2026 thresholds must not be recycled as verified historical comparisons. Use the independently checked episode evidence to select the actual example. Argentina’s investment-linked citizenship announcement can motivate the breadth of legal offers, but it concerns citizenship, not a work visa, and announced terms are distinct from operational access. A 2026 episode motivates a panel ending in 2025; it is not an observation in that panel.

**Backups:** B1 legal chronology; B2 citizenship-specific preferential routes. Policy resemblance is not yet evidence of a strategic response.

### 2. How do governments design offers when workers and rival countries respond?

**Subtitle:** Worker substitution connects visa menus to competition for talent.

**Purpose:** State the main question and organise the subquestions rather than offer an unstructured research agenda.

**Exhibit:** Three linked objects: government menu → worker choices and composition → government response. Place employers alongside this chain as recruiters, sponsors and wage setters, not as an assumed component of the government’s objective.

**Questions:** Which terms attract which workers? Do reforms generate moves or divert them? How do portability, family rights and continuation opportunities affect choices? Do rival governments change their offers? What happens to workers, employers, origin residents and destination residents?

**Boundary:** Descriptive menu questions do not require elasticity estimation. Strategic counterfactuals additionally require government objectives, constraints, feasible deviations and equilibrium closure.

### 3. The contribution is to connect legal offers with global career allocation

**Subtitle:** Route-level policy detail and worker histories complement existing policy and migration research.

**Purpose:** Combine literature and contribution on one slide. Avoid claiming that policy measurement, international substitution or visa-induced employer mobility is new.

**Exhibit:** Three top-level bullets, each stating previous findings with parenthetic citations, followed by an indented contribution sub-bullet. No columns or comparison table:

- **Policy measurement:** restrictions and selection vary across instruments and migrant groups (IMPIC, DEMIG POLICY and Czaika–Parsons).
  - **Our contribution:** dated route-level bundles across migration motives and worker profiles, conditional on route identity and legal validation.
- **Migration allocation:** alternatives and third-country diversion shape bilateral migration (Bertoli–Fernández-Huertas Moraga; Brinatti–Guo).
  - **Our contribution:** connect legal-menu variation to domestic and international career transitions.
- **Legal options and labour markets:** employer restrictions and connected labour markets affect mobility, wages and policy responses (Townsend–Allan; Borusyak et al.).
  - **Our contribution:** study competing countries’ offers, with employer responses as a distinct extension requiring its own evidence.

**Backups:** B3 detailed literature map, including dynamic mobility, demand identification and government-policy inversion. Define each paper’s contribution rather than listing names.

## Data: legal offers, worker histories and their intersection

### 4. The Atlas has a broad pathway inventory and a detailed work-oriented panel

**Subtitle:** Migration motives and detailed contract characteristics are two distinct layers.

**Purpose:** Define the unit and distinguish the all-motives ambition from the work-selected characteristics release. Explain this before showing any pathway growth.

**Exhibit:** Nested data diagram. Broad discovery includes work, study, family, protection, treaty and other routes; detailed extraction selects work-oriented entries. Name the retained unit as destination–route ID–year, with constructed annual states and field statuses. Display 2000–2025 as the presentation window, not as proof of uniform historical coverage.

**Retained counts and vintage:** The **25 October retained broad export** has **5,744 unique country/name entries across 194 destination labels**, with 2000/2025 search-window metadata. This verifies the delivered file, not exhaustive legal discovery or complete history. Its category codes comprise work 1,480; study 446; family 571; protection 576; business/investment 579; visit 669; and other 1,423. Those codes sum to 5,744, but a separate `ai_category` field is blank for 3,693 entries, so they are not a completed, independently validated motive classification. The detailed annual export has **2,195 country/route-ID pairs, 43,049 rows and 164 columns: four keys, 80 value fields and 80 status companions**. The inspected schema also has 80 literal field definitions; use **80 characteristics** for this retained release, not the earlier untraced “81”. These are different populations, not successive totals of interchangeable pathways. A slug is not a legally adjudicated route identity. Keep the seven-category detail in backup rather than crowding the main diagram.

**Characteristic families for exposition:** eligibility and selection; financial burdens and amounts; sponsorship and employment restrictions; duration, renewal and settlement; family and dependent rights; administration, quotas and safeguards. This is an explanatory grouping, not a claim that all fields measure independent instruments.

**Backups:** B4 field catalogue and family crosswalk; B5 route lineage, historical construction and coverage. Study or family routes may confer work rights; a route’s label alone does not determine its work-access content.

### 5. Revelio lets us follow job histories, not just count international movers

**Subtitle:** Distinct people, positions, spells and transitions answer different questions.

**Purpose:** Establish the observational advantage and denominators. Say explicitly that both domestic and international job-country transitions are observed.

**Exhibit:** One person’s sequence of jobs with a domestic employer change, an international transition and an onward/return event. Alongside it, show a source-to-analysis count ladder: distinct people → positions with usable dates/countries → retained histories → domestic and international events. Include the period and geographic support of the displayed analytical sample.

**Existing foundation evidence:** 1,765,970,337 positions and 549,729,026 keyed people in the retained 512-bucket foundation; the strict history rule retains 303,499,990 people and 1,117,773,296 positions. These are not counts for every presentation window or the entire commercial product. For the broad verified-country **2010–2025** geography sample, 975,853,764 adjacent events comprise **892,202,126 domestic and 83,651,638 international** transitions. This broad construction removes missing-country records before ordering and has unresolved ties; it is not the strict sample. The corrected strict, resolved-country, recognized-occupation comparison on slide 12 has a different denominator. Do not mix these constructions in one sample funnel or describe the separate user-attributes build count as history people.

**Backups:** B6 construction and sample-flow table; B7 ties, concurrent jobs, gaps and censoring. A domestic job change is not remaining in the same job. A job-country change is not automatically a residence move, and missing updates are not genuine staying.

### 6. The policy–history bridge needs a common classification and a defined profile

**Subtitle:** Citizenship, occupation and education must mean the same thing on both sides.

**Purpose:** Explain what can be matched before interpreting the facts or the choice model. Show temporal and cross-sectional support for both datasets, rather than only their largest totals.

**Exhibit:** A compact bridge: legal profile (citizenship, destination, year, occupation, education and other relevant conditions) ↔ observed career fields. Add a small coverage strip or two concise support summaries. Display annual coverage and country/profile overlap, not a synthetic global balance.

**Occupation distinction:** The retained official reference has **23 SOC major groups, 98 minor, 459 broad and 867 detailed occupations**. These are reference taxonomy counts, not observed Revelio cardinalities. The detailed Atlas schema enumerates **22 nonmilitary SOC-2018 major groups**; earlier analysis menus select 11, profile screens use all 22, and current monetary gravity selects SOC 15/17/25/29. Revelio retains `onet_code`, with `role_k1500` lookup in an older source fallback; 23 valid major groups including military appear in source support. Actual finer-level observed counts, complete native vendor levels and the source taxonomy vintage remain unverified. A provider’s fine occupation label, an O*NET code and a harmonised two-digit major group are not interchangeable. Show this hierarchy and the analytical restrictions in backup.

**Other bridges:** Prior job country is not citizenship; highest lifetime education need not precede a transition; career seniority is not age or verified experience eligibility. Recorded occupation/education screen passes do not establish a complete legal choice set. Unknown nationality, sponsorship or salary conditions remain unresolved, not satisfied.

**Coverage design:** Put a common 2000–2025 policy axis beside the verified 2010–2025 transition axis and mark their overlap. Show represented countries/profiles by year and state the fixed-support denominator used in the facts. Annual profile support, historical legal validation and professional-history representativeness are different checks; a high count in one cannot validate the other.

**Backups:** B8 complete occupational taxonomy and crosswalk; B9 education timing, origin/citizenship and common support.

## Three facts about menus and mobility

### 7. The number of recorded active pathways has grown

**Subtitle:** Separate wider country representation from larger menus within represented countries.

**Purpose:** Present the first requested fact at its actual measurement level before claiming expanded opportunities for fixed people.

**Exhibit:** Recorded active IDs over 2000–2025, paired with represented-country support or a coherent extensive/intensive decomposition. Distinguish a broader country universe from growth on fixed country support. Do not infer policy adoption from first appearance in the collected panel.

**Interpretation:** This is a trend in the retained work-oriented panel unless the broad inventory’s lifecycle has separately been reconstructed. Entries, exits, renamings, successors and unknown status can alter counts. “More routes” is not yet “more people legally able to move” or “more liberal policy”.

**Backups:** B5 identity/coverage decomposition; B10 entrants, successors and unresolved lifecycle status.

### 8. Average recorded menus expand on fixed destination–profile support

**Subtitle:** Pool all supported profiles at six dates, keeping the comparison population explicit.

**Purpose:** Establish that the mean expansion is not only more represented countries or one selected profession’s experience. Do not strengthen this into a claim that every profile gains or the entire distribution shifts monotonically.

**Exhibit specification:** Six ECDFs, **2000, 2005, 2010, 2015, 2020 and 2025**, pooling all supported occupation–education profiles. Use six Paul Tol Bright colours, direct year labels and supplementary line patterns. The existing SOC-15 undergraduate plot is not this pooled statistic.

**Baseline object:** The distribution of occupation/education-coded passing route counts across destination × occupation × education cells, using all 22 schema groups and both retained degree scenarios. Each cell receives equal weight; under/post scenarios overlap and are hypothetical comparisons, not independent people. If the supported input does not evaluate nationality, do not pretend this is already an origin–destination profile distribution. A citizenship-conditioned version requires resolved nationality gates and a separately declared origin grid.

**Computed comparison:** Across the same **167 destinations × 44 scenarios = 7,348 cells** at all six dates, mean passing counts are **0.3665, 0.4228, 0.5765, 0.7945, 1.0125 and 1.2226**. Zero-count shares fall from **71.67% to 50.52%**, but the median remains zero. Changing-support comparisons cover 167/177/187/193/193/193 destinations and give means 0.3665/0.4215/0.5907/0.8464/1.1279/1.3533; the 2025 median becomes one. Thus both coverage and within-fixed-support expansion matter. These retained-data calculations support the average-count claim, not complete legal access or first-order stochastic dominance.

**Comparison safeguards:** Use the common 167-destination/profile support for the primary temporal comparison, distinguish a known zero count from no observation, and retain unresolved evaluations alongside passes. Put changing support in backup rather than filling missing cells with zero. An increase in average counts does not establish legal liberalisation. The exact requested pooled ECDF can be rendered from the retained `represented_destination_profiles.csv`; no VM or raw-data pass is needed.

**Two example buttons:** B11 one clearly labelled occupation/education profile; B12 one fixed-country or citizenship-conditioned example, only to the extent its existing inputs support the stated conditions. Both return to this slide.

### 9. Countries screen through different combinations of instruments

**Subtitle:** Instrument incidence, requirement intensity and information coverage are separate margins.

**Purpose:** Establish what “different screening” means. Select the most informative documented contrast rather than show all fields or countries.

**Exhibit:** A small, interpretable comparison of common instrument families. Possible margins are the share of applicable routes using a given instrument and the distribution of a comparable threshold conditional on use. Show the supported denominator and unresolved share. An absent field is not an instrument set to zero, and a larger count of fields is not more restrictive policy.

**Conditional comparison:** Hold occupation, education and year fixed; add citizenship when actually supported. Compare destination differences separately from multiple routes within a destination. Monetary values need compatible fee/salary periods, currency conversion, and an explicit nominal or real unit. Do not normalise heterogeneous field counts into “emphasis” without specifying what the index measures.

**Backups:** B4 exact fields; B13 threshold distributions and complete cases; B14 within-cell versus between-cell decomposition, only where retained tables support it.

### 10. The same profile can face different bundles, not one universally best pathway

**Subtitle:** Eligibility, sponsorship, fees and rights can create meaningful trade-offs.

**Purpose:** Show a joint-route comparison so the audience can see why a multidimensional menu matters for self-selection.

**Exhibit:** Two or three actual routes in one destination/year with the same stated occupation/education profile. Keep each row a real joint bundle: do not combine the cheapest fee from one route with the rights of another. The retained Czech 2024 SOC-15 undergraduate route vectors are an available candidate, subject to their partial-screen scope.

**Dominance rule:** Only compare routes accessible to the same profile at the same stage. Call a route descriptively dominated on a declared set of dimensions only if it is weakly worse on every comparable, monotonically valued dimension and strictly worse on at least one, with no decisive unknowns. Distinguish “no observed dominance”, “incomparable” and “unassessable”. Complete economic dominance additionally requires access probabilities, processing risk, rights, continuation and preferences that the panel may not observe.

**Backups:** B15 partial/Pareto ordering; B2 citizenship-specific preference versus general route. A nationality preference can coexist with less attractive duration or intent conditions; it is not necessarily universally superior.

### 11. International transitions connect origin groups to destination groups

**Subtitle:** Geographic and income-group directions describe destinations, not workers’ skill gains.

**Purpose:** Introduce the mobility fact with a clearly defined event and show where people’s recorded careers go. Keep domestic transitions visible as a comparison population.

**Exhibit:** Origin-group × destination-group matrices for international events, with origin groups in rows and destination groups in columns. Region and income-group versions must retain the actual joint cells, not destination marginals or only same/different summaries. Show origin-conditional shares in the main comparison and counts separately in backup; label the exact window and group vintage. Diagonal cells remain international transitions between countries in the same group. Use equal country weights only for a declared country-comparison estimand; event weights describe recorded transitions. Retain the dominant high-income-to-high-income margin if supported rather than force an upward-migration narrative.

**Backups:** B16 region/income matrices, country-pair concentrations and group definitions; B17 return/onward movement and observation horizons. A move to a higher-income country is not automatically a wage increase or welfare gain for that person.

### 12. Occupational switching is common in both domestic and international job transitions

**Subtitle:** A code change is observable; upgrading needs a validated ranking.

**Purpose:** Connect job histories to heterogeneity and substitution without conflating switching with skill progression.

**Exhibit:** An origin-occupation-group × destination-occupation-group matrix, following the same joint-transition convention as the region and income figures. Do not substitute a destination-only distribution or a switching bar for that object. Use a verified skill-group mapping if available; otherwise label the matrix SOC major groups, not skills. The corrected **2010–2025** summary provides context: domestic **335,730,244 / 623,487,006 = 53.84719%** switch; international **30,699,456 / 55,618,521 = 55.19646%** switch. The denominator requires resolved countries and recognised full occupation codes; it excludes 1,850,579 domestic and 113,932 international unknown-occupation events. Another 7,324 country-unresolved transitions are outside these two groups. These are event-weighted major-group changes, not distinct people or fine-occupation changes. The older 52.98%/54.37% plot uses all retained years and prefix recognition; do not mix its denominator with the corrected figures. The joint corrected output is retained and can be plotted without a VM pass. Counts, conditional shares, the domestic comparison and one observation-rule sensitivity belong in backup rather than six main curves.

**Interpretation:** The approximately 50% fact depends on aggregation level and chronology. SOC codes are not an ordinal skill ladder. The existing broad SOC-to-ISCO reference exercise leaves upward/equal/downward possibilities overlapping for about 95% of events, so it does not establish meaningful upgrading shares. Routine/non-routine and cognitive/manual measures are task dimensions, not a common high-to-low ordering.

**Backups:** B8 occupation hierarchy and the selected subset; B18 skill/task crosswalk feasibility and ambiguity; B7 chronology and weighting sensitivity. A supported upgrading decomposition can replace—not silently supplement—the code-switch exhibit after its measurement bridge is established.

## Elasticities, costs and policy questions

### 13. Workers choose among the pathways they can access

**Subtitle:** A random-utility model separates fixed geography from government-chosen offers.

**Purpose:** Explain the parameter required by the research question, the alternatives over which it operates and the variation that could identify it.

**Exhibit:** Utility with net wage $\widetilde w$, fixed geographic attributes in blue and government-chosen visa characteristics in orange, followed by a choice probability over an eligibility-dependent set including staying. Define the product as destination–pathway. Net wage deducts taxes and annualised application charges on a consistent horizon. Cite migration RUM and destination-substitution precedents.

**Evidence boundary:** Domestic job transitions are available, but they do not by themselves supply same-job stayers or an exhaustive population risk set. Legal rules can restrict opportunities, yet unknown sponsorship, admission and consideration still separate preferences from access. Repeated histories add transition information; they do not by themselves identify unrestricted preferences or exogenous policy variation.

**Presentation scope:** Do not show the current gravity estimates. The equations introduce an illustrative demand framework, not an adopted or fitted structural model.

**Backups:** B19 denominator/PPML–MPML mapping; B20 policy variation left after fixed effects; B21 sample inclusion and zero alternatives. Do not present a coefficient based only on positive policy-matched cells as the unconditional migration response.

### 14. Estimation must separate preferences from access

**Subtitle:** Gravity connects individual choices to flows; zeros alone do not reveal why an option is absent.

**Purpose:** Explain the extra endogeneity beyond net wages: governments choose characteristics and selection rules; actual accessible alternatives are partly unobserved.

**Exhibit:** Aggregate individual pathway probabilities into expected origin–destination flows. Three short estimation routes: demand inversion/instruments; latent or restricted choice sets; revealed-preference information bounds. Cite the papers supporting each route. A standard gravity or PPML representation needs aggregation and identification assumptions; handling count zeros does not itself identify unavailable alternatives.

**Zero-flow interpretation:** An unavailable pathway, prohibitive cost, low preferences, sampling and measurement can all generate an observed zero. Do not equate every zero with selection or every positive flow with exogenous access.

**Core distinction:** Applicant fees, employer levies, salary requirements and capital deposits are different burdens. A fee payment is not pure resource loss, a salary floor is not revenue paid to government, and waiting time is not measured government staff cost. A fee-choice model may recover a net marginal incentive under interior optimality and identified fee derivatives; it does not separate unrestricted government benefits from resource costs. Label any WTP/fee equivalent as conditional on its utility and access assumptions.

**Backups:** B22 retained demand diagnostics and monetary units; B23 government fee first-order condition, capacity multipliers and benefit/cost non-identification. If no estimate passes the needed checks, retain the input-to-estimand diagram as the preliminary result rather than manufacture a cost estimate.

### 15. Demand elasticities connect design, costs and welfare

**Subtitle:** The same demand estimates can discipline a firm model or a government model.

**Purpose:** Close the research loop from the initial question. Summarise the three defensible descriptive messages and state the next estimable object and policy counterfactual.

**Exhibit:** Estimated demand elasticities enter a provider/government objective with revenue, benefits and costs. Supply optimality gives marginal-cost or incentive restrictions under explicit objectives, constraints and conduct assumptions. Use one concrete design: a portable work visa replacing employer-tied permission. Ask who applies, how employers and rival governments respond, and who gains.

**Required additions:** Route-linked applications/admissions or usable-access evidence; credible policy/attribute variation; government instruments and objectives; market adjustment and the welfare population. Cross-country policy co-movement alone does not identify competition. State which questions can be answered with existing evidence, which require additional identification and which remain longer-term extensions.

**Backups:** B3 literature; B23 cost identification; B24 feasible unilateral deviations and welfare scope.

# Backup-button map and readiness

Every backup needs a labelled return to its source slide. Button labels should name an economist’s question, not a filename or an undifferentiated “appendix”.

| Backups | Main return | Evidence or computation boundary |
| --- | --- | --- |
| B1 episodes; B2 preferential versus general routes | 1 or 10 | Existing legal treatments can supply dated comparisons; distinguish law, announcement and actual access. |
| B3 literature and contributions | 3 or 15 | Existing curated source accounts; no new literature search required. |
| B4 characteristics catalogue; B5 route identity/coverage | 4 or 7 | Existing schema, construction audit and retained panel. Do not imply all-motives characteristics are complete. |
| B6 sample flow; B7 chronology/weighting | 5 or 12 | Existing foundation and history sensitivity tables; window-specific counts must be read back. |
| B8 taxonomy; B9 education and citizenship bridge | 6 or 12 | Existing field metadata/crosswalks; unverified source taxonomy/vintage stays unverified. |
| B10 lifecycle; B11–B12 two profile examples | 7 or 8 | Retained lifecycle/profile outputs; exact six-date pooled summary is computed and its ECDF is renderable from retained cell counts, without a VM. |
| B13 instrument thresholds; B14 conditional variation | 9 | Existing summaries where denominator/comparability is established; otherwise specify a bounded aggregation, not an invented result. |
| B15 dominance audit | 10 | Existing joint-route vectors support partial comparisons; complete economic dominance is not established. |
| B16 geography/income; B17 persistence | 11 | Existing aggregates and corrected horizon results; interrupted follow-ups are not complete evidence. |
| B18 occupational upgrading/tasks | 12 | Existing ambiguity analysis is computable and informative; fine task/skill estimates require verified finer code/vintage. |
| B19–B21 demand accounting and sensitivity | 13 | Retained design/fit objects; do not create missing alternatives or stayers through normalisation. |
| B22 monetary diagnostics; B23 cost inversion | 14 | Existing retained tables and analytical derivations, with their distinct sample and identifying scope. |
| B24 strategic counterfactual and welfare population | 15 | Existing finite examples/benchmark can illustrate assumptions; not an estimated policy equilibrium. |

# Questions the audience is likely to ask

**Pathway growth:** Is this better historical collection or actual policy change? Are renamings/successors counted twice? Does the result survive fixed countries and fixed profiles? Does a zero mean no compatible route or missing information? Do more routes expand the union of eligible people, or split an unchanged group? Why should the pooled profile weighting represent an economically interesting population?

**Screening and trade-offs:** Are instruments actually absent or merely undocumented? Are nationality, sponsor, salary and continuation conditions jointly satisfied? Are thresholds comparable across periods and currencies? Is “dominated” a property of complete bundles for the same applicant, or only selected fields? Does an apparent inferior route serve a legally distinct population or access stage?

**Mobility and occupation:** What fraction of relevant people appears in professional histories? Do country, sector and time coverage change? Are international transitions moves of residence, employers’ remote locations or concurrent jobs? Which occupation resolution generates the switching rate? Can a crosswalk actually identify skill/task changes? Are results event-weighted or person-weighted? How are same-job staying, gaps and attrition distinguished?

**Estimation:** Which policy variation survives the fixed effects? Are unobserved destinations truly unavailable or simply unrecorded? Why is the policy exogenous to worker demand? Are fees paid by applicants or successful entrants? What separates preferences, legal access and administration? Does a recovered cost mean private moving cost, a money-metric utility equivalent, or government resource cost net of benefits?

# Literature emphasis and departures

The main slide should present three compact comparisons; this expanded map supports discussion.

- **Legal measurement:** [Helbling et al. (2017)](https://github.com/jigonr/Notes/blob/main/papers/helblingMeasuringImmigrationPolicies2017.md), [de Haas et al. (2018)](https://github.com/jigonr/Notes/blob/main/papers/dehaasGrowingRestrictivenessChanging2018.md), and [Czaika and Parsons (2017)](https://github.com/jigonr/Notes/blob/main/papers/czaikaGravityHighSkilledMigration2017.md). Proposed departure: joint, dated route terms and profile-conditioned comparisons, not the claim that existing work ignores visa policy.
- **International allocation and diversion:** [Bertoli and Fernández-Huertas Moraga (2013)](https://github.com/jigonr/Notes/blob/main/papers/bertoliMultilateralResistanceMigration2013.md) and [Brinatti and Guo (2024)](https://github.com/jigonr/Notes/blob/main/papers/brinattiThirdCountryEffectsUS2024.md). Proposed departure: broader legal-menu and career-history coverage, not the first model of competing destinations or third-country responses.
- **Dynamic careers and constrained labour markets:** [Kennan and Walker (2011)](https://github.com/jigonr/Notes/blob/main/papers/kennanEffectExpectedIncome2011.md), [Townsend and Allan (2025)](https://github.com/jigonr/Notes/blob/main/papers/townsendHowRestrictingMigrants2025.md), and [Borusyak, Dix-Carneiro and Kovak (2026)](https://github.com/jigonr/Notes/blob/main/papers/borusyakUnderstandingMigrationResponses2026.md). The recent papers sharpen rather than erase the gap: legal options can matter without a realised move; individual and market-wide policy changes differ; connected alternatives and shock covariance matter. Their domestic/employer-specific closures and coefficients do not transfer automatically internationally.
- **Demand under constrained choice and screening:** [Berry and Haile (2024)](https://github.com/jigonr/Notes/blob/main/papers/berryNonparametricIdentificationDifferentiated2024.md), [Agarwal and Somaini](https://github.com/jigonr/Notes/blob/main/papers/agarwalDemandAnalysisLatent2025.md), and [Aryal and Zincenko (2024)](https://github.com/jigonr/Notes/blob/main/papers/aryalIdentificationEstimationMultidimensional2024.md). Contribution requires a setting-specific identification argument. Observed statutory rules and rich histories do not reveal every feasible set or turn salary thresholds into transfers.
- **Government objectives:** [Adão and coauthors’ trade-policy comparison](https://github.com/jigonr/Notes/blob/main/papers/adaoWorldTradingSystem2025.md) provides an inversion discipline: observed policies plus incidence and optimality assumptions can reveal local as-if objectives, not unrestricted primitives. The Visa application must accommodate non-price rights, access uncertainty and government/firm incidence.

# Source and implementation ownership

The research question is recovered from the [PhD Review Visa brief](https://github.com/jigonr/Notes/blob/main/projects/visa/phd-review-brief.md) and the [earlier presentation](https://slides.jigonzalez.com/GlobalCompetitionForEconomicMigration/). Earlier slide thresholds, coverage claims and pilot estimates are historical, not automatically evidence for this talk.

The analytical evidence library is `slides/research/visa-stylized-facts/` on `letta/visa-revisions-spec-858e8de2` in `Applied-Economics-With-AI/visa_proj`; its `figure-index.md` owns numerical sources and producers. Ariadne retains analytical code, figures and scientific readback. This outline is maintained on a task branch in `jigonr/Slides` and copied, by the active owner, into that presentation folder. Neither repository’s main branch is the publication target for this request. No new slide implementation or speech is included.

## Numerical readback and outstanding checks

Within the presentation research worktree, the principal retained inputs are:

- `results/atlas/annual-profile-cdf/represented_destination_profiles.csv`: all 44 scenario-cell counts; the six-date fixed/changing-support summary was computed on 29 October. The exact requested pooled six-year figure is **not yet rendered**; it needs no VM or raw scan.
- `results/historical/2026-10-25/delivery/Global-Visa-Atlas-broad-inventory.csv` and `Global-Visa-Atlas-annual-characteristics.csv`: directly inspected retained export counts, broad category codes, search-window metadata and the 80 paired value/status fields. These are dated deliveries, not certification that the catalogue is exhaustive or every historical legal rule is validated.
- `results/monetary/annual_recorded_turnover.csv`: recorded active route counts, represented countries and lifecycle transitions. Active IDs are 744 in 2000, 1,178 in 2010, 1,731 in 2020, 1,934 in 2024 and 1,965 in 2025. These are work-panel records, not broad-inventory legal opportunities.
- `results/history/country_pathways_report.md` and `results/geography/annual-transition-breakdown/fixed-2010/annual-reconciliation.csv`: foundation/history and broad verified-geography counts, respectively; keep their populations distinct.
- `results/history/remaining-horizon-correction/`: corrected full-code 2010–2025 joint-transition and margin Parquets imported from `184b69f`; the two-bar comparison using these corrected numbers is **not yet rendered**.
- `results/historical/2026-10-26/occupation-reference-scenario/SOC_Structure.xlsx` and the taxonomy inventory: reference hierarchy, not a measured complete vendor taxonomy.
- `results/monetary/joint-pathway-fees/`: joint route vectors and comparable-cell fee contrasts. Existing rights-share summaries use represented route records rather than active-only routes; their denominators cannot silently be interchanged.
- `docs/research/static-gravity-audit-2026-10-28.md`: exact current MPML equations, sample, monetary units, fixed effects and independent PPML comparison. Legacy joint demand/WTP diagnostics remain a separate collection.

The retained broad-category counts and the annual export’s 80 paired fields are established by local readback. Exact equality of all 80 export value names, 80 status-companion bases and 80 current schema names also passes; annual country/route/year keys are unique. Raw annual years span 1940–2026, distinct from the intended 2000–2025 search/presentation window. Remaining data-appendix tasks are to verify observed finer occupation counts, complete native vendor levels and taxonomy vintage. The origin of the earlier “81” is not established and should not override the inspected release. Motive classification quality and legal completeness remain validation questions rather than missing arithmetic. These are evidence-recovery tasks, not new substantive choices for the author. No VM restart or missing-data imputation has been performed for this outline.

The AEAI VM was last checked stopped after Spot pre-emption. Corrected horizon outputs are complete, whereas the interrupted education-gap/conditional-return follow-up is not a completed full result. Do not make the latter a necessary backup for this talk.
