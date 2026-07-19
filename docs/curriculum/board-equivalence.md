# Board-Equivalence Mapping

**Purpose:** prove that a Project Compression graduate loses *nothing essential* from a conventional grades 6–12 education, despite finishing in ≤3 years. The program is deliberately **independent** of CBSE/ICSE/IB — we do not follow their sequence — but we map our coverage back to theirs to demonstrate equivalence. This is both a credibility requirement and a business necessity (parents, schools, and regulators need this proof).

## Method

For each board, we assert coverage at the level of **learning objectives**, not chapter titles. Two curricula can teach the same objective in different orders and different subjects; equivalence is about the *objective being mastered*, not where it sits. The mapping is maintained as a coverage matrix; each Project Compression topic tags which board objectives it satisfies (via the `boardMap` field in `topic.json`, see architecture doc), so equivalence is **computed from content**, not asserted in a static document that rots.

## Coverage claim (summary)

| Board | Grades covered-equivalent | How we prove it |
|---|---|---|
| **CBSE (India)** | 6–12 core (Math, Physics, Chemistry, Biology, English) | Every CBSE class 6–12 learning outcome maps to ≥1 Project Compression topic; competitive depth (JEE/NEET) handled by the optional competitive track. |
| **ICSE/ISC (India)** | 6–12 | ICSE's broader language/analysis emphasis is met by our above-standard English strand; science depth met at A-tier. |
| **IB (MYP + DP)** | MYP 1–5 + DP core | MYP interdisciplinary emphasis matches our interleaving design directly; DP HL depth met at A1/A2. Theory-of-Knowledge-style reasoning is covered by English argument strand. |

## Objective-level mapping (illustrative extract)

The full matrix lives in the `boardMap` fields across all topics and is compiled by `scripts/build.mjs` into `app/data/board-coverage.json`. Illustrative rows:

| PC Topic | CBSE | ICSE | IB |
|---|---|---|---|
| `math.F1.ratio-proportion-percentage` | Cl. 6 Ratio & Proportion; Cl. 7 Comparing Quantities; Cl. 8 Percentages | Similar, Cl. 6–8 | MYP Number/Proportion |
| `physics.F1.motion` | Cl. 7 Motion & Time; Cl. 9 Motion (kinematics) | Cl. 7–9 Physics: Motion | MYP Sciences: Movement/Change |
| `cs.F1.python-variables-types-expressions` | Cl. 6–8 Computer Science (IT); Cl. 11 CS (Python) | Cl. 9–10 Computer Applications | MYP Design; DP Computer Science SL |

*Note:* legacy curricula scatter these across many years (ratio spans CBSE classes 6–8); we teach the objective **once**, which is exactly why we finish sooner. The mapping shows one PC topic absorbing what was 2–3 grade-years of repeated exposure.

## Handling the "did they skip anything?" question

The coverage matrix is designed so an auditor can query it the other way: **list every board objective with zero mapped PC topics.** The build script emits exactly this "uncovered objectives" report. At full curriculum build-out, that report must be empty for the core academic objectives of each board (enrichment/optional objectives are marked as such). Until the curriculum is fully authored, the report is the honest, live to-do list of remaining coverage — no hand-waving.

## What we deliberately do NOT replicate
- **Redundant re-teaching** across grades (the compression source) — mapped once, not per grade.
- **Board-specific administrative content** (exam-form conventions, board-specific mark schemes) — irrelevant to knowledge; the optional competitive track handles exam technique.
- **Filler** that survives in legacy syllabi for historical reasons but serves no live objective.
