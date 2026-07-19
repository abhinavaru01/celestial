# Platform Architecture & Content Model

## Tech stack (and why)

**Zero-build static web app** (`decisions.md#d-001`):
- **Content:** Markdown (prose layers) + JSON (structured data) in `content/`.
- **Build/validate:** a single Node script `scripts/build.mjs` (no dependencies, no `npm install`) that validates every topic against the content contract, assembles the dependency graph and board-coverage report, and emits bundled JSON to `app/data/`.
- **Frontend:** a vanilla-JS single-page app in `app/` — no framework, no bundler. Renders notes, quizzes, signature layers, progress, dependency map, and the competitive section. Markdown is rendered by a small self-contained renderer (`app/js/md.js`).
- **Progress/mastery:** client-side `localStorage` for the MVP, behind a `Storage` interface so a sync backend can replace it with no content or UI changes.
- **Deploy:** any static host. `python3 -m http.server` or any static server runs it locally.

**Why not a framework/DB now:** the PRD demands low-friction to run and deploy, and content-as-data. The app is a thin renderer over authored data; a framework and database add operational cost without leverage until multi-device accounts and real school rosters exist. That is the documented trigger to add a backend — not before.

## The content contract (guarantees all six signature layers)

Each topic is a **directory** at `content/<subject>/<tier>/<slug>/` containing **exactly these files** — the build fails if any are missing (`decisions.md#d-002`). This is how the PRD's "all six signature layers present for every topic" is enforced *mechanically*.

| File | Signature layer | Format |
|---|---|---|
| `topic.json` | metadata + **prerequisite links** (layer 6) + board/competitive mapping | JSON |
| `notes.md` | **Concept-deep notes** (layer 1) | Markdown |
| `quiz.json` | **Quizzes & graded question sets** (layer 2) | JSON |
| `mistakes.md` | **Common Mistakes** (layer 3) | Markdown |
| `tricks.md` | **Tricks & problem-solving techniques** (layer 4) | Markdown |
| `memory-aids.md` | **Memory & retention aids** (layer 5) | Markdown |

Adding a subject or tier = creating directories that follow this contract. No bespoke work; the pattern is identical everywhere.

### `topic.json` schema
```json
{
  "id": "physics.F1.motion",
  "subject": "physics",
  "tier": "F1",
  "title": "Motion: Speed, Velocity & Acceleration",
  "slug": "motion-speed-velocity-acceleration",
  "core": true,
  "order": 2,
  "estMinutes": 240,
  "summary": "One-sentence description.",
  "outcomes": ["Define ...", "Compute ...", "Interpret ..."],
  "prereqs": ["math.F1.ratio-proportion-percentage"],
  "boardMap": {
    "CBSE": ["Cl.7 Motion & Time", "Cl.9 Motion"],
    "ICSE": ["Cl.7-9 Motion"],
    "IB":   ["MYP Sciences: Change"]
  },
  "competitiveTags": ["JEE-Main"],
  "keywords": ["speed", "velocity", "acceleration"]
}
```

### `quiz.json` schema
```json
{
  "topicId": "physics.F1.motion",
  "levels": {
    "1": [ { "id": "q1", "type": "mcq", "prompt": "...", "choices": ["a","b","c","d"], "answer": 1, "explanation": "..." } ],
    "2": [ { "id": "q7", "type": "numeric", "prompt": "...", "answer": 12.5, "tolerance": 0.1, "unit": "m/s", "explanation": "..." } ],
    "3": [ { "id": "q13", "type": "mcq", "prompt": "...", "choices": [...], "answer": 2, "explanation": "...", "competitive": true } ]
  }
}
```
Supported question `type`s in the MVP engine: `mcq` (single correct, `answer` = choice index) and `numeric` (`answer` + `tolerance`, optional `unit`). Every question carries an `explanation` shown on submit (instant feedback).

## Progress / mastery data model

Stored under `localStorage` key `pc.progress.v1`, shaped exactly as in `mastery-gating.md`:
- `topics[topicId]`: `{ status, levelScores, attempts[], retentionConfidence, lastReviewedAt, nextReviewDue }`
- `gates[gateId]`: `{ passed, bestScore, attempts[], weakObjectives[] }`

Mastery logic (`app/js/progress.js`):
- Topic `mastered` when `levelScores["3"] >= 0.8`.
- Topic `available` when all `prereqs` mastered; else `locked`.
- Gate `passed` when all core topics in the sub-level mastered **and** gate exam `>= 0.75`.

## Build outputs (`app/data/`)
- `content.json` — all topics with their rendered-ready prose + quiz data.
- `graph.json` — validated dependency graph (nodes, edges, in-degree).
- `board-coverage.json` — objective coverage matrix + uncovered-objectives report.
- `manifest.json` — subjects, tiers, topic ordering for navigation.

## Folder map
```
/                         PRD.md, memory.md, decisions.md, README.md
/content/<subject>/<tier>/<slug>/   the six-file topic contract
/content/tiers.json                 canonical tier ladder
/content/competitive/               optional competitive section content
/scripts/build.mjs                  validator + bundler (no deps)
/app/index.html  /app/js  /app/css  the SPA
/app/data/                          build outputs (generated)
/docs/curriculum/                   syllabi, tier system, graph, gating, timeline, board map
/docs/platform/                     this file
/docs/business/                     positioning, roadmap, research notes
```
