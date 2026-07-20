# PROJECT MEMORY — Project Compression ("The Ultimate Learner")
_Last updated: 2026-07-20 by session 1 (cont.)_

> **Website brand name is "The Ultimate Learner"** (D-010). "Project Compression" is the internal initiative/PRD name.
> **Everything is open** — locking, mastery gates, and completion tracking were removed from the platform (D-009).
> **Full curriculum is built:** all 192 topics across 6 subjects × 6 tiers exist with all six layers (3 flagship deep-dives + 189 generated modules, D-008).

## 1. What this project is (one paragraph)
A compressed, restructured global curriculum delivering grades 6–12 equivalent knowledge in ≤3 years, plus the web platform that delivers it. Compression comes from **removing redundancy and interleaving concepts across subjects** (teach each idea once, reuse it everywhere via a knowledge dependency graph), NOT from longer study days. Progression is **mastery-based** through six difficulty sub-levels (F1→A2). Subjects: Math, Physics, Chemistry, Biology, English, CS (Python→C). Every topic ships six signature layers (deep notes, quizzes, common mistakes, tricks, memory aids, prerequisite links). See `PRD.md` for the full brief.

## 2. Current status
- **Phase:** Full platform live at https://abhinavaru01.github.io/celestial/ (auto-deploys on push to `main`). Phases 0–4 done; 5–6 partial.
- **Overall % complete (rough):** all 192 topics authored across 6 subjects × 6 tiers, each with all six layers + Key formulas/facts + a worked example; 3 flagships are the deepest hand-written exemplars. Rendering upgraded (textbook sup/sub, SVG diagrams, responsive). Remaining: promote more topics to flagship depth; first-class competitive data; teacher rosters (needs backend).
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
- **Subjects drafted (syllabi):** all 6 have full tier-by-tier syllabi. **Topics built (all 6 layers):** all 192. Content = base datasets `scripts/curriculum/<subject>.mjs` + depth `scripts/curriculum/augment.mjs` (key formulas/facts + worked example per topic), expanded by `scripts/generate-content.mjs`; 3 flagship dirs are hand-written and skipped by the generator.
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
- Math rendering is a dependency-free renderer (`app/js/md.js`): real `<sup>`/`<sub>` for exponents/subscripts + light LaTeX cleanup for `$…$`. Good for the current notation; if heavy LaTeX is needed later, vendor KaTeX locally (no CDN).
- Locking/mastery/completion removed from the app (D-009); `progress.js` deleted. Everything open. Re-enabling mastery would restore that module + gating UI.
- Module topics carry Key formulas/facts + one worked example; only the 3 F1 flagships are flagship-length. Promoting more topics to flagship depth is the main remaining content work.
- Competitive content is Markdown docs, not yet first-class in-app quiz data.
- `app/data/*.json` is generated but committed; re-run `node scripts/generate-content.mjs && node scripts/build.mjs` after content edits.
- `app/data/*.json` is generated but committed; remember to re-run `build.mjs` after content edits (or add a pre-commit hook later).

## 9. Changelog (append-only, newest at top)
- 2026-07-20 (session 1 cont.) — **Quality level-up (D-012).** Textbook `<sup>`/`<sub>` math rendering (a^n, 2^2, a^(m+n)); SVG diagrams + Key-formulas/facts/syntax blocks + worked-example callouts; deepened EVERY subject to JEE/NEET level via scripts/curriculum/augment.mjs (key formulas/facts + worked example per topic) with chemistry deepened inline; full responsive CSS overhaul (0 overflow at 360px). Removed dead progress.js; refreshed README/dependency-graph docs. Verified desktop+mobile in Chromium, 0 JS errors. Deployed via PR #4.
- 2026-07-20 (session 1 cont.) — **Full curriculum + rebrand + de-gating.** Authored the entire 6×6 curriculum: all 192 topics now exist with all six signature layers (37 math, 30 physics, 30 chemistry, 30 biology, 28 english, 37 CS) via structured datasets `scripts/curriculum/*.mjs` + `scripts/generate-content.mjs` (3 flagship deep-dives kept; 189 generated modules). Build passes: 192 topics, 282 dependency edges (24 cross-subject), acyclic. Removed locking/mastery/completion from the platform — everything open (D-009); rewrote `app/js/app.js`, retired `app/js/progress.js`. Rebranded site to "The Ultimate Learner" (D-010). Fixed the math renderer that was mangling flagship LaTeX (D-011). Verified end-to-end in Chromium: 192 topics browsable, all tabs render, quizzes work, flagship math clean, 0 JS errors. Decisions D-008…D-011 logged. Deploy workflow already live (GitHub Pages, auto-deploys on push to main).
- 2026-07-19 (session 1) — Delivered Phases 0–3 end-to-end and scaffolded 4–6: full scaffold + content model + validating build script; tier system; 6 subject syllabi; dependency-graph/board-equivalence/timeline/mastery-gating/competitive-integration blueprints; 3 fully-built proof-of-model topics (Math/Physics/CS); platform MVP (notes/quiz/mastery/signature-layer tabs/dependency map/search/teacher tools) verified in a real browser with 0 JS errors; competitive sample content; business positioning/roadmap/research-notes; README. Build passes (`3 topics, all six layers, graph acyclic`).
- 2026-07-19 (session 1) — memory.md created from Appendix A template; Phase 0 begun.
