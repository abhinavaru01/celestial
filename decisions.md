# DECISIONS LOG — Project Compression
_Append-only. Each entry: decision, options considered, reasoning, date. Referenced from memory.md by anchor._

---

## D-001: Tech stack — zero-build static app (vanilla HTML/CSS/JS) + Node build/validate script <a id="d-001"></a>
**Date:** 2026-07-19

**Options considered:**
1. Next.js / React SPA with a database backend
2. Static site generator (Astro/Eleventy)
3. **Zero-dependency static app: vanilla JS SPA + `node scripts/build.mjs` that validates content and bundles it to JSON** ← chosen

**Reasoning:** The PRD demands "pragmatic and low-friction to run and deploy." Option 3 requires only Node (no npm install, no lockfile churn, no framework upgrades), deploys to any static host (GitHub Pages/Netlify/S3), and works offline. The content is data (JSON + Markdown), so the app is a thin renderer — a framework adds cost without leverage at this stage. Progress/mastery is stored client-side (localStorage) for the MVP; the data model is designed so a sync backend can be added later without reshaping content (see D-004). Revisit when multi-device accounts or teacher dashboards with real rosters are needed — that is the trigger to add a backend, not before.

## D-002: Content model — content-as-data, one directory per topic with six mandatory files <a id="d-002"></a>
**Date:** 2026-07-19

**Options considered:** single big markdown per topic; database/CMS; **directory-per-topic with fixed files** ← chosen.

**Reasoning:** The six signature layers must be *guaranteed present* for every topic. A fixed file contract (`topic.json`, `notes.md`, `mistakes.md`, `tricks.md`, `memory-aids.md`, `quiz.json`) lets the build script **fail the build** when any layer is missing — the guarantee is mechanical, not aspirational. Markdown for prose (author-friendly, diffable), JSON for structured data (quiz engine, prerequisites, board mapping). Adding a subject or tier = adding directories that follow the same contract; zero bespoke work. Schema documented in `docs/platform/architecture.md`; enforced by `scripts/build.mjs`.

## D-003: Tier ladder — 3 tiers × 2 sub-levels (F1, F2, I1, I2, A1, A2), one sub-level ≈ one semester <a id="d-003"></a>
**Date:** 2026-07-19

**Options considered:** 3 flat tiers; 5 flat tiers; **3 named tiers with 2 sub-levels each** ← chosen.

**Reasoning:** Three names (Foundation/Intermediate/Advanced) keep the mental model simple for students and marketing; sub-levels give six gates over ~3 years (≈1 per semester), which is the right granularity for mastery gating — coarse enough that gates are meaningful milestones, fine enough that a struggling student repeats a semester of material, not a year. Maps cleanly to the timeline model (6 sub-levels × ~20 weeks = 3 years with slack). Full spec in `docs/curriculum/tier-system.md`.

## D-004: Mastery model — per-topic mastery from quiz levels; tier gate = all core topics mastered + gate exam <a id="d-004"></a>
**Date:** 2026-07-19

**Reasoning:** Each topic's `quiz.json` has 3 difficulty levels. Topic mastery = ≥80% on Level 3 (with Level 1–2 as scaffolding, not gates). Tier advancement = every core topic in the sub-level mastered **plus** a mixed gate exam (interleaved across the sub-level's topics) at ≥75%, because per-topic quizzes measure isolated skill and the gate exam measures retention + transfer — the thing compression must not sacrifice. Spaced-repetition review prompts drawn from `memory-aids.md`. Progress record is per-student per-topic: `{status, attempts[], bestLevelScores, lastReviewedAt}` — deliberately backend-agnostic (localStorage now, API later). Spec: `docs/curriculum/mastery-gating.md`.

## D-005: Dependency graph — derived from `topic.json` `prereqs`, not maintained by hand <a id="d-005"></a>
**Date:** 2026-07-19

**Reasoning:** A hand-drawn master graph rots. Each topic declares its own prerequisites (topic IDs, cross-subject allowed and encouraged); the build script assembles the global graph, checks for cycles and dangling references, and emits it for the platform's map view. The graph is therefore always exactly as current as the content. Format: `docs/curriculum/dependency-graph.md`.

## D-006: Proof-of-model topics — Ratio/Proportion/Percentage (Math), Motion (Physics), Python Variables & Expressions (CS) <a id="d-006"></a>
**Date:** 2026-07-19

**Reasoning:** Chosen for maximum downstream fan-out and to demonstrate interleaving concretely: ratio/rate thinking is the single highest-leverage Foundation math skill (feeds physics rates, chemistry moles, probability, finance); Motion consumes it immediately (speed *is* a rate — the physics topic explicitly reuses instead of re-teaching, which is the compression mechanism on display); Python variables/expressions is the zero-prerequisite CS entry point. All three sit in F1 so they also exercise the "start of the program" experience.

## D-007: Session-1 scope — Phases 0–3 delivered, 4–6 scaffolded <a id="d-007"></a>
**Date:** 2026-07-19

**Reasoning:** PRD favors depth over breadth. This session delivers: Phase 0 (scaffold + content model), Phase 1 (blueprint docs v1: tier system, six syllabi, board equivalence, timeline, mastery gating, competitive integration, dependency-graph spec), Phase 2 (3 full topics), Phase 3 (platform MVP with notes/quiz/progress/signature-layer views wired to real content). Phase 4 gets its section structure + one sample JEE-linked set; Phases 5–6 get concise docs + roadmap. Rationale: a working vertical slice (content model → real content → rendering platform) de-risks everything else; remaining phases are content-scaling work on a validated pattern.

## D-008: Full curriculum via a structured dataset + generator (192 topics) <a id="d-008"></a>
**Date:** 2026-07-20

**Decision:** Author the entire 6×6 curriculum (all ~190 topics) as structured datasets (`scripts/curriculum/<subject>.mjs`) expanded by a generator (`scripts/generate-content.mjs`) into the six-file topic contract, keeping the 3 hand-written flagship topics as depth exemplars (`depth: "flagship"` vs `"module"`).

**Reasoning:** The founder requires the complete curriculum — the website's whole purpose. Authoring ~190 topics × 6 deep-dive layers by hand in one pass is not achievable with integrity, so the honest, scalable path (exactly what the content-as-data architecture was designed for, D-002) is: real, tier-appropriate module content for every topic (genuine concepts, common mistakes, tricks, memory aids, prerequisite links, and concept-check quizzes), generated consistently and machine-validated, with three flagship topics setting the target depth. Prerequisites are auto-chained per subject plus explicit cross-subject links (24 cross-subject edges), giving a real 282-edge dependency graph. Every topic still passes the six-layer enforcement in `build.mjs`. Modules are labelled "structured module" in-app so depth is transparent; deepening them to flagship level is ongoing content work on a validated pattern.

## D-009: Remove locking / mastery-gating / completion from the platform <a id="d-009"></a>
**Date:** 2026-07-20

**Decision:** Per founder instruction, make everything open: no locked topics, no prerequisite blocking, no mastery/completion status or gate logic in the UI. Prerequisites are retained purely as informational "builds on / leads to" links. Quizzes remain as optional self-check with instant feedback (not graded or gating). `app/js/progress.js` is retired from the app; the mastery-gating design remains documented in `docs/curriculum/mastery-gating.md` for future optional re-enablement.

**Reasoning:** The founder explicitly asked to "remove this complete and unlock features." Open access maximises exploration and matches the "everything unlocked" positioning. The dependency graph still informs a recommended path without enforcing it.

## D-010: Rebrand the website to "The Ultimate Learner" <a id="d-010"></a>
**Date:** 2026-07-20

**Decision:** The public/site-facing name is **The Ultimate Learner** (title, header brand, footer, dashboard hero, favicon ✦). "Project Compression" is retained internally as the initiative/PRD name in the docs.

**Reasoning:** Direct founder instruction on the website name.

## D-011: Dependency-free math rendering hardened (bug fix) <a id="d-011"></a>
**Date:** 2026-07-20

**Decision:** Rewrote `prettifyMath` in `app/js/md.js` to correctly convert LaTeX (`\frac`/`\dfrac`/`\tfrac`, `\text`, `\quad`, greek letters, symbols, super/subscripts) to clean readable math, unwrapping `\text{}` before fractions and mapping unknown/spacing commands to spaces so words never jam.

**Reasoning:** The prior prettifier mangled flagship notes (e.g., "quadwhich meansquad", "dfracab"). Fix keeps the zero-dependency, no-external-math-engine constraint (D-001) while rendering correctly. Verified against the actual flagship content.

## D-012: Textbook math rendering, per-subject depth, diagrams, responsiveness <a id="d-012"></a>
**Date:** 2026-07-20

**Decision:** Upgrade the platform's quality without adding runtime dependencies: (1) render exponents/subscripts as real `<sup>`/`<sub>` across all prose so `a^n`, `2^2`, `a^(m+n)` look like a textbook (scoped to avoid breaking code identifiers); (2) support embedded SVG diagrams and styled "Key formulas/facts/syntax" + worked-example callouts in the Markdown renderer; (3) deepen **every** subject to JEE/NEET level via `scripts/curriculum/augment.mjs` (key formulas/facts + a worked example per module topic, merged by the generator) plus inline chemistry depth and flagship/chemistry diagrams; (4) a full responsive CSS overhaul verified at 360px mobile through desktop with zero horizontal overflow.

**Reasoning:** The founder asked for textbook-quality math, deeper notes across all subjects (chemistry first, then all), visual/animated information, and device responsiveness. The augmentation-file approach adds depth to ~155 topics by authoring only the new content once (not rewriting the 900-line datasets), keeping the zero-dependency design (D-001). Verified end-to-end in Chromium (desktop + mobile): superscripts, formula blocks, worked examples, diagrams render; 0 JS errors.
