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
