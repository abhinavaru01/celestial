# PRD — Project Compression
### A Restructured Global Curriculum + Learning Platform

**Document type:** Product Requirements Document (build brief for Claude Code)
**Owner:** Founder (single stakeholder — minimal interference during execution)
**Status:** Ready to build
**Version:** 1.0

---

## 0. HOW CLAUDE CODE MUST WORK ON THIS PROJECT (READ FIRST, EVERY TIME)

These are standing operating rules. They apply to every session, not just the first.

### 0.1 The `memory.md` protocol (MANDATORY)

- On **every session start**, the FIRST action is to open and fully read `/memory.md`. Do not begin any task before reading it. It is the single source of truth for project state.
- If `/memory.md` does not exist yet, create it immediately using the template in **Appendix A** before doing anything else.
- **After every meaningful unit of work** (a feature built, a decision made, a subject module drafted, a bug fixed, a dependency added), update `/memory.md` before ending the session or moving to an unrelated task.
- `memory.md` must always let a fresh instance of Claude Code resume with zero re-learning. If reading it would leave a newcomer confused, it is incomplete — fix it.
- Never delete history from `memory.md`; append and mark items as superseded. Keep a running changelog at the bottom.

### 0.2 The "fine-tune, verify, then notify" protocol (MANDATORY)

For every deliverable, follow this loop before declaring anything done:

1. **Build** the feature/content.
2. **Fine-tune** it — refine, polish, tighten, improve.
3. **Verify** against a real checklist: does it run, does it render, are there errors, is content accurate, does it meet the quality bar in this PRD?
4. Ask internally: **"Is this actually ready to publish?"** Be honest. If not, keep working.
5. **Only when genuinely ready, NOTIFY the founder** with a concise status: what's done, what was verified, what's next, and any decision that needs founder input.
6. Do **not** notify the founder for routine progress — only at meaningful "ready" checkpoints or when genuinely blocked.

### 0.3 Autonomy rules

- Work autonomously. Where something is ambiguous, choose the strongest defensible option, **write the assumption into `memory.md`**, and proceed. Do not stall waiting for answers.
- Document reasoning for major decisions in `/decisions.md` (see Appendix A) so the founder can review the finished thinking without having been in the loop.
- Prioritize depth and correctness over breadth. A smaller amount of excellent, correct work beats a broad shallow outline.

---

## 1. VISION & GOALS

Design and build an entirely new education system — a **compressed, restructured curriculum** delivering the equivalent of grades 6–12 (ideally foundational 0–12 knowledge) in **3 years or less**, without diluting depth, plus the **web platform** that delivers it.

The existing NCERT/legacy syllabus is treated as outdated and structurally broken. This project reimagines the knowledge sequence from first principles.

**A graduate of this program must be able to:**
1. Master school-level, board-equivalent knowledge.
2. Be simultaneously prepared for competitive exams (JEE, NEET, and similar), with time to spare.
3. **Build real software projects** independently — not just pass tests.

This is also a **commercial venture**: the deliverable is intended to be a viable business and a candidate for a new *global* curriculum standard. Treat quality, differentiation, and scalability accordingly.

**Primary success metric:** a student following this path reaches board-equivalent + competitive-exam readiness in roughly half the conventional time, provably losing nothing essential.

---

## 2. LOCKED DECISIONS (design around these — do not relitigate)

| Area | Direction |
|---|---|
| **Audience** | BOTH independent self-learners AND schools/institutions. Produce student-facing **and** teacher-facing material. |
| **Curriculum structure** | Organized by **difficulty tiers**: Foundation → Intermediate → Advanced. Define exact tier count, naming, and progression logic. |
| **Pedagogical style** | **Hybrid** — concise but concept-deep. Visual/intuitive where it aids understanding, rigorous where mastery demands it. |
| **Board alignment** | **Entirely independent** of CBSE/ICSE/IB, while covering equivalent content. Internally map coverage to those boards to prove equivalence. |
| **Competitive prep** | A **separate, dedicated section** (JEE/NEET-level sets, previous-year questions, strategy guides) that runs parallel to and follows up with the main syllabus. Optional for students. |
| **Progression model** | **Mastery-based** (a student proves mastery of a tier before advancing), not purely time-based. |
| **Compression source** | Compression comes primarily from **removing redundancy and interleaving concepts**, NOT from inflating daily study hours. Guard against burnout. |
| **Platform scope** | Build everything: notes, quizzes, question banks, progress tracking, competitive-prep section, teacher tools — sequenced via a realistic roadmap (Section 7). |

---

## 3. CURRICULUM REQUIREMENTS

### 3.1 Core subjects (primary focus)

1. **Mathematics**
2. **Science** — Physics, Chemistry, Biology as distinct rigorous strands.
3. **English** — more advanced than standard school English (comprehension, argumentation, writing, vocabulary depth).
4. **Computer Science** — assume **zero prior coding experience**. Sequence: **Python first, then C.** By program end, students must build projects independently. Include CS fundamentals: computational thinking, basic data structures, basic algorithms, and version-control basics — not only language syntax.

### 3.2 The tier system

- Define a concrete tier ladder (e.g., Foundation → Intermediate → Advanced, with sub-levels if useful).
- Each tier states: entry prerequisites, learning outcomes, and the mastery bar required to advance.

### 3.3 Signature content layers (REQUIRED for every topic, every subject)

Each topic must ship with all of the following:

- **Concept-deep notes** — the hybrid explanation (intuitive + rigorous).
- **Quizzes & graded question sets** — progressive difficulty.
- **Common Mistakes** — the specific traps students fall into on this topic.
- **Tricks & problem-solving techniques** — shortcuts, heuristics, elegant methods.
- **Memory & retention aids** — mnemonics, visualization, spaced-repetition prompts, "how to remember this."
- **Prerequisite links** — what must be understood first (feeds the dependency graph).

### 3.4 Curriculum deliverables

- **Full tier-by-tier syllabus** for all core subjects, with justification for *why this sequence* enables faster mastery.
- **Knowledge dependency map** (prerequisite graph) — the mechanism that makes compression real by removing redundancy and interleaving concepts across subjects.
- **Board-equivalence mapping** — proof nothing essential from grades 6–12 is lost (map to CBSE/ICSE/IB internally).
- **Timeline model** — how 6 years compresses into ≤3, with honest weekly/daily load assumptions.
- **Competitive-exam integration points** — where JEE/NEET readiness is woven in without adding separate burden.
- **Assessment & mastery-gating logic** — how a student proves tier mastery before advancing.

### 3.5 Proof-of-model sample content (build early)

Produce **at least 3 fully built topics** end-to-end — one Math, one Science, one CS — with every signature layer above. These set the quality bar concretely.

---

## 4. PLATFORM REQUIREMENTS (the website)

### 4.1 Must-have features

- **Structured notes delivery** — organized by subject → tier → topic.
- **Quiz / question engine** — progressive sets, instant feedback, per-topic.
- **Progress tracking** — mastery status per topic/tier, per student.
- **Competitive-prep section** — separate, dedicated: JEE/NEET-level problem sets, previous-year questions, strategy guides; optional and linked back to relevant syllabus topics.
- **Common Mistakes / Tricks / Memory-aid views** surfaced within each topic.
- **Teacher-facing tools** — curriculum overview, ability to track/assign, view the dependency map.
- **Search & navigation** driven by the subject/tier/topic structure and the prerequisite graph.

### 4.2 Technical expectations

- Recommend and justify the **tech stack**, the **content model** (how notes/quizzes/mistakes/tricks/memory-aids are represented so they scale across all subjects and tiers), and the data model for **mastery/progress**.
- Content must be **scalable** — adding a new subject or tier should follow a clear, repeatable pattern, not bespoke work each time.
- Prefer a **content-as-data** approach (structured/authored content that renders consistently) so the signature layers are guaranteed present for every topic.
- Keep the stack pragmatic and low-friction to run and deploy.

### 4.3 Quality bar for "ready to publish"

Before any feature is called done: it runs without errors, renders correctly, content is accurate and complete (all signature layers present), navigation works, and it meets this PRD's standards. Only then does the "notify founder" step fire (see 0.2).

---

## 5. BUSINESS & ROLLOUT LAYER

- **Positioning & differentiation** vs. existing edtech; why this can become a global standard.
- **Phased build roadmap** — because "everything at once" isn't achievable without sequencing. Define what ships first and what follows.
- Note the tension to optimize for: real compression via **redundancy removal + interleaving**, not longer study days.

---

## 6. RESEARCH & DECISION DISCIPLINE

- **Research before designing** — cognitive science on accelerated learning, curriculum design, spaced repetition, cognitive load, and what specifically makes JEE/NEET hard. Record sources/reasoning in `/decisions.md`.
- Make major choices autonomously; log each with its rationale.
- Re-verify any external/product facts rather than relying on stale assumptions.

---

## 7. SUGGESTED BUILD PHASES (sequence "everything" realistically)

> Claude Code may refine this ordering, but must record the final chosen order in `memory.md`.

**Phase 0 — Foundations & scaffolding**
- Create `memory.md`, `decisions.md`, repo structure, and the **content model / data schema** for topics + signature layers + mastery.
- Draft the **tier system** and the **dependency-graph format**.

**Phase 1 — Curriculum blueprint (design)**
- Full tier-by-tier syllabus across all subjects.
- Knowledge dependency map, board-equivalence mapping, timeline model, mastery-gating logic.

**Phase 2 — Proof-of-model content**
- The 3 fully built sample topics (Math, Science, CS) with all signature layers. Validate the content model against real content.

**Phase 3 — Platform MVP**
- Notes delivery, quiz engine, progress tracking, topic-level Common Mistakes/Tricks/Memory views. Wire in the sample content.

**Phase 4 — Competitive-prep section**
- Separate section with problem sets, previous-year questions, strategy guides, linked to syllabus topics.

**Phase 5 — Teacher tools + polish**
- Curriculum overview, assignment/tracking, dependency-map view. Fine-tune, verify end-to-end, prepare for publish.

**Phase 6 — Business layer & launch readiness**
- Positioning, differentiation, roadmap doc, and a final "ready to publish?" verification pass → notify founder.

At the end of **each phase**: fine-tune → verify → confirm "ready to publish?" → update `memory.md` → notify founder.

---

## 8. WHAT WAS ADDED / FLAGGED (so nothing's missing)

- **Knowledge dependency graph** — the actual mechanism enabling compression (not just "teach faster").
- **Board-equivalence mapping** — proof students lose nothing; needed for credibility and the business case.
- **Mastery-based progression + gating logic** — fits the vision better than time-based advancement.
- **Explicit anti-burnout stance** — compression from redundancy removal, not longer days.
- **CS fundamentals beyond syntax** — data structures, algorithms, version control, computational thinking.
- **Phased rollout** — "build everything" needs a launch order to be achievable.
- **Content-as-data model** — guarantees every topic has all signature layers and scales cleanly.

---

## APPENDIX A — REQUIRED PROJECT FILES

### A.1 `/memory.md` — see live file at repo root (template per PRD v1.0).
### A.2 `/decisions.md` — append-only log of every major autonomous decision.

## APPENDIX B — DEFINITION OF DONE (per deliverable)

A deliverable is "done / ready to publish" only when **all** are true:
- [ ] It runs / renders with no errors.
- [ ] Content is accurate and complete — **all six signature layers present** for any topic.
- [ ] It matches the tier + subject structure and links into the dependency graph.
- [ ] Navigation and progress tracking work where applicable.
- [ ] `memory.md` and `decisions.md` are updated.
- [ ] It meets the quality bar in this PRD.
- [ ] Founder has been notified **at the appropriate checkpoint** (not for routine progress).
