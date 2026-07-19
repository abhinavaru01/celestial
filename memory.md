# PROJECT MEMORY — Project Compression
_Last updated: 2026-07-19 by session 1_

## 1. What this project is (one paragraph)
A compressed, restructured global curriculum delivering grades 6–12 equivalent knowledge in ≤3 years, plus the web platform that delivers it. Compression comes from **removing redundancy and interleaving concepts across subjects** (teach each idea once, reuse it everywhere via a knowledge dependency graph), NOT from longer study days. Progression is **mastery-based** through six difficulty sub-levels (F1→A2). Subjects: Math, Physics, Chemistry, Biology, English, CS (Python→C). Every topic ships six signature layers (deep notes, quizzes, common mistakes, tricks, memory aids, prerequisite links). See `PRD.md` for the full brief.

## 2. Current status
- **Phase:** Phases 0–3 COMPLETE & verified; Phases 4–6 scaffolded. (Roadmap: `docs/business/roadmap.md`.)
- **Overall % complete (rough):** foundation/blueprint/platform ≈ 100% for the MVP slice; total curriculum *content* build-out is early (3 of ~200+ topics authored — by design, depth over breadth).
- **DONE and verified:**
  - Scaffold: `memory.md`, `decisions.md`, `PRD.md`, `README.md`, repo structure.
  - Content model: six-file topic contract, enforced by `scripts/build.mjs` (build FAILS if a layer is missing). Schema: `docs/platform/architecture.md`.
  - Tier system (`docs/curriculum/tier-system.md`, `content/tiers.json`) and dependency-graph format (derived from content).
  - Full Phase-1 blueprint: 6 subject syllabi (`docs/curriculum/syllabus/*.md`), dependency graph, board-equivalence, timeline model, mastery-gating, competitive integration.
  - 3 proof-of-model topics, all six layers each: `math.F1.ratio-proportion-percentage`, `physics.F1.motion` (reuses the math topic — compression demonstrated), `cs.F1.python-variables-types-expressions`.
  - Platform MVP (`app/`): notes, 3-level quiz engine (mcq+numeric, instant feedback), mastery/progress engine with prerequisite unlocking, per-topic Mistakes/Tricks/Memory tabs, board-map tab, dependency-map view, search, teacher coverage matrix. **Verified end-to-end in a real Chromium browser: renders correctly, quiz→mastery→unlock flow works, 0 JS errors.**
  - Competitive sample (`content/competitive/jee/`), business docs (positioning, roadmap, research notes).
- **IN PROGRESS:** none (session 1 checkpoint reached).
- **NEXT:** author more topics (highest-leverage first — see roadmap "immediate next content targets"); make competitive sets first-class in-app data; multi-student rosters (needs backend — the documented trigger).

## 3. How to run the project
- **Stack:** zero-build static app. Node (18+) for the build script; any static server to serve.
- **Setup:** none — no `npm install`, no dependencies.
- **Build/validate:** `node scripts/build.mjs` (writes `app/data/*.json`); `node scripts/build.mjs --check` validates only.
- **Run:** `python3 -m http.server 8000` from repo root, open `http://localhost:8000/app/`.
- **Where content lives:** `content/<subject>/<tier>/<slug>/` (six files per topic); `content/tiers.json`; `content/competitive/`.
- **Where the schema is defined:** `docs/platform/architecture.md`; enforced in `scripts/build.mjs`.

## 4. Architecture summary
- **Tech stack + why:** vanilla-JS SPA + Markdown/JSON content + one zero-dep Node build script. Low-friction to run/deploy, content-as-data, no framework churn. Backend deferred until multi-device accounts/rosters exist (`decisions.md#d-001`).
- **Content model:** directory-per-topic with six mandatory files; build fails if any missing → the "all six layers" guarantee is mechanical (`decisions.md#d-002`). `topic.json` carries metadata + `prereqs` + `boardMap` + `competitiveTags`.
- **Progress/mastery model:** per-topic `{status, levelScores, attempts, retentionConfidence, nextReviewDue}`, per-gate `{passed, bestScore, weakObjectives}`; localStorage behind a Storage interface (backend-swappable). Topic mastered at ≥80% L3; topic available when all prereqs mastered; gate at ≥75% (`app/js/progress.js`, `docs/curriculum/mastery-gating.md`, `decisions.md#d-004`).
- **Dependency graph:** derived from each topic's `prereqs`; build checks dangling refs, cycles, tier-order (`decisions.md#d-005`).
- **Folder structure map:** see `README.md` / `docs/platform/architecture.md`.
- **Build outputs (generated, committed for out-of-box serving):** `app/data/{manifest,content,graph,board-coverage,summary}.json`. Regenerate with `node scripts/build.mjs` after any content change.

## 5. Curriculum state
- **Tier system:** 3 tiers × 2 sub-levels — F1, F2 (Foundation), I1, I2 (Intermediate), A1, A2 (Advanced). ~20 weeks each; per-subject strands advance independently. Defined: `docs/curriculum/tier-system.md`, `content/tiers.json`.
- **Subjects drafted (syllabi):** all 6 have full tier-by-tier syllabi. **Topics fully built (all 6 layers):** 3 (Math/Physics/CS, all F1). Remaining topics: unbuilt (author on the same repeatable pattern).
- **Dependency graph:** format + live slice in `docs/curriculum/dependency-graph.md`; machine graph in `app/data/graph.json`.
- **Board-equivalence mapping:** `docs/curriculum/board-equivalence.md`; computed coverage in `app/data/board-coverage.json`.

## 6. Key assumptions made (autonomous decisions)
- Tech stack = zero-build static app → `decisions.md#d-001`
- Content model = six-file topic contract → `decisions.md#d-002`
- Tier ladder = 3 tiers × 2 sub-levels → `decisions.md#d-003`
- Mastery model (80% L3 / 75% gate + interleaved retention items) → `decisions.md#d-004`
- Dependency graph derived from content, not hand-maintained → `decisions.md#d-005`
- Proof-of-model topic choices (ratio → motion reuse; python entry) → `decisions.md#d-006`
- Session-1 scope = deliver Phases 0–3, scaffold 4–6 → `decisions.md#d-007`

## 7. Open questions for founder (only if truly blocking)
- None blocking. Future decision (not yet needed): when to add a backend — trigger is multi-student rosters / cross-device accounts (documented in architecture + roadmap).

## 8. Known issues / tech debt
- Math rendering is a lightweight Unicode prettifier (no external math engine, by the zero-dependency design decision). Adequate and readable for current notes; if heavy LaTeX is needed later, bundle a vendored KaTeX locally (still no network) rather than a CDN.
- Progress is single-device (localStorage) — intended for MVP; backend swap-in point is isolated in `app/js/progress.js`.
- Competitive content is Markdown docs, not yet first-class in-app quiz data (Phase 4).
- `app/data/*.json` is generated but committed; remember to re-run `build.mjs` after content edits (or add a pre-commit hook later).

## 9. Changelog (append-only, newest at top)
- 2026-07-19 (session 1) — Delivered Phases 0–3 end-to-end and scaffolded 4–6: full scaffold + content model + validating build script; tier system; 6 subject syllabi; dependency-graph/board-equivalence/timeline/mastery-gating/competitive-integration blueprints; 3 fully-built proof-of-model topics (Math/Physics/CS); platform MVP (notes/quiz/mastery/signature-layer tabs/dependency map/search/teacher tools) verified in a real browser with 0 JS errors; competitive sample content; business positioning/roadmap/research-notes; README. Build passes (`3 topics, all six layers, graph acyclic`).
- 2026-07-19 (session 1) — memory.md created from Appendix A template; Phase 0 begun.
