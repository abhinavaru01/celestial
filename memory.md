# PROJECT MEMORY — Project Compression ("The Ultimate Learner")
_Last updated: 2026-08-09 by session 2_

> **Website brand name is "The Ultimate Learner"** (D-010). "Project Compression" is the internal initiative/PRD name.
> **Everything is open** — locking, mastery gates, and completion tracking were removed from the platform (D-009).
> **Full curriculum is built:** all 192 topics across 6 subjects × 6 tiers exist with all six layers (3 flagship deep-dives + 189 generated modules, D-008).
> **CURRENT INITIATIVE — depth (D-012).** The layers all existed but were thin (~1.2KB of notes per topic; 189 topics had at least one empty quiz level). There is now a **depth bar enforced by `build.mjs`**, and topics are being re-authored to textbook depth via `scripts/curriculum/deep/<subject>/<tier>.mjs` + `node scripts/deepen.mjs`. **Run `node scripts/build.mjs` to see the live depth dashboard — that is the progress tracker.**

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
- **IN PROGRESS (session 2): the depth initiative (D-012, D-013).** Pipeline + enforcement are complete and verified. Content re-authoring is underway, subject by subject, tier by tier.
  - **Done:** Math F1, F2, I1 (20 of 37 math topics at the bar).
  - **Remaining:** Math I2/A1/A2, then Physics, Chemistry, Biology, English, CS — 170 topics.
  - **How to continue:** add entries to `scripts/curriculum/deep/<subject>/<tier>.mjs` (schema documented in `scripts/curriculum/deep/index.mjs`), then `node scripts/deepen.mjs --only=<subject>` and `node scripts/build.mjs`. Author bodies with **`String.raw`** — in a plain template literal `\frac` becomes a form-feed character.
  - Work is on branch `deep-content-initiative` → PR #5 (not merged; merging redeploys the live site).
- **NEXT after depth:** flip `build.mjs` to `--strict` permanently once the backlog is empty; then make competitive sets first-class in-app data (Phase 4); multi-student rosters (needs backend — the documented trigger).

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
- **170 topics are still below the depth bar** (the module backlog from D-008). `node scripts/build.mjs` prints the per-subject dashboard; `--strict` fails on them. This is the active work, not a latent bug.
- Math rendering is a lightweight Unicode prettifier (no external math engine, by the zero-dependency design decision). Adequate and readable for current notes; if heavy LaTeX is needed later, bundle a vendored KaTeX locally (still no network) rather than a CDN.
- Progress is single-device (localStorage) — intended for MVP; backend swap-in point is isolated in `app/js/progress.js`.
- Competitive content is Markdown docs, not yet first-class in-app quiz data (Phase 4).
- `app/data/*.json` is generated but committed; remember to re-run `build.mjs` after content edits (or add a pre-commit hook later).

## 9. Changelog (append-only, newest at top)
- 2026-08-09 (session 2) — **Depth initiative begun (D-012, D-013).** Audited the build and found the six-layer contract was being met in form but not substance: 184/192 topics had notes under 1.5KB against a 7.5KB flagship bar, and 189/192 had at least one empty quiz level (158 empty at L3) — all while the build reported success. Added a **deep-content pipeline** (`scripts/curriculum/deep/<subject>/<tier>.mjs` + `scripts/deepen.mjs`, idempotent, never touches flagships) and a **depth audit enforced in `build.mjs`** (≥3500 chars notes, ≥4 sections, ≥1 worked example, ≥1 formula/facts block, ≥3 quiz questions at every level, ≥4 items per signature layer); `deep`/`flagship` topics now fail the build if they miss it, `module` topics warn and appear in a per-subject dashboard. Re-authored **Math F1, F2 and I1** to textbook depth (19 topics, ~1.2KB → ~6KB notes each, 12 quiz questions apiece across all three levels). Fixed two rendering bugs: `md.js` rendered brace-less LaTeX (`\tfrac34`) as the literal text "tfrac34" — **this was affecting the live site**, including the physics flagship — and generated worked-example callouts nested into `> >`. Verified in Chromium at desktop and 375px: 0 console errors, 0 nested callouts, 0 raw LaTeX, quiz grading correct, no horizontal overflow. Depth: **22/192** (was 3/192). Branch `deep-content-initiative`, PR #5, not merged.
- 2026-07-20 (session 1 cont.) — **Full curriculum + rebrand + de-gating.** Authored the entire 6×6 curriculum: all 192 topics now exist with all six signature layers (37 math, 30 physics, 30 chemistry, 30 biology, 28 english, 37 CS) via structured datasets `scripts/curriculum/*.mjs` + `scripts/generate-content.mjs` (3 flagship deep-dives kept; 189 generated modules). Build passes: 192 topics, 282 dependency edges (24 cross-subject), acyclic. Removed locking/mastery/completion from the platform — everything open (D-009); rewrote `app/js/app.js`, retired `app/js/progress.js`. Rebranded site to "The Ultimate Learner" (D-010). Fixed the math renderer that was mangling flagship LaTeX (D-011). Verified end-to-end in Chromium: 192 topics browsable, all tabs render, quizzes work, flagship math clean, 0 JS errors. Decisions D-008…D-011 logged. Deploy workflow already live (GitHub Pages, auto-deploys on push to main).
- 2026-07-19 (session 1) — Delivered Phases 0–3 end-to-end and scaffolded 4–6: full scaffold + content model + validating build script; tier system; 6 subject syllabi; dependency-graph/board-equivalence/timeline/mastery-gating/competitive-integration blueprints; 3 fully-built proof-of-model topics (Math/Physics/CS); platform MVP (notes/quiz/mastery/signature-layer tabs/dependency map/search/teacher tools) verified in a real browser with 0 JS errors; competitive sample content; business positioning/roadmap/research-notes; README. Build passes (`3 topics, all six layers, graph acyclic`).
- 2026-07-19 (session 1) — memory.md created from Appendix A template; Phase 0 begun.
