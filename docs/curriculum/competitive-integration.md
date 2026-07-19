# Competitive-Exam Integration (JEE / NEET and similar)

**Locked decision:** competitive prep is a **separate, optional, dedicated section** that runs *parallel to and after* the main syllabus — it must **not** add burden to the core path or become mandatory. This document defines how JEE/NEET readiness is woven in *without* inflating study load, and how the optional track is structured.

## Design principle: readiness by depth, not by extra hours

The core curriculum is already **quantitative and rigorous** (F-tier science is calculation-based; math runs ahead of convention). That rigor means a core graduate is *most of the way* to competitive readiness as a byproduct of learning properly the first time. The competitive track then adds the two things core mastery doesn't automatically provide:

1. **Exam-specific problem-solving under time pressure** — pattern recognition, speed, question-type familiarity.
2. **The extra depth/edge cases** that competitive exams probe beyond board level.

Neither requires re-learning content — so the marginal load is opt-in practice, not a second curriculum.

## Two mechanisms

### 1. Integration points inside core topics (zero added burden)
Every core topic can tag **competitive integration points** in its `topic.json` (`competitiveTags`: e.g., `["JEE-Main", "NEET"]`) and include competitive-flavored items at Quiz Level 3. A student who never opts into the competitive track still benefits from the deeper L3 items; a student who does opt in sees these topics linked from the competitive section. The link is **bidirectional**: each competitive problem set references the syllabus topics it exercises, so a student who struggles is routed back to the exact core topic (and its Common-Mistakes/Tricks layers).

### 2. The dedicated competitive section (opt-in, parallel + follow-up)
A separate area of the platform (`content/competitive/`), structured as:

- **Strategy guides** — per exam (JEE-Main, JEE-Advanced, NEET): structure, marking, time strategy, what makes each hard, a realistic prep calendar that *overlays* the core timeline rather than extending it.
- **Graded problem sets** — organized by topic and by difficulty, mapped to core topics via `linkedTopics`. Progressive: exam-entry → exam-standard → exam-hard.
- **Previous-year questions (PYQs)** — organized by topic and year, with worked solutions emphasizing *method and traps*, not just answers.
- **Mock/timed sets** — full-length timed practice with analytics (accuracy, speed, per-topic weakness) once the bank is deep enough.

## What makes JEE/NEET hard — and how the core curriculum pre-empts it

(Research summarized in `docs/business/research-notes.md`.)

| What makes it hard | How Project Compression's core design already addresses it |
|---|---|
| **Multi-step problems combining topics** | Interleaving + gate exams with transfer items train cross-topic combination from F-tier onward. |
| **Depth beyond rote** (NEET biology's applied reasoning; JEE's non-standard framings) | Model-first biology and mechanism-based chemistry mean students reason rather than recall; math taught for transfer. |
| **Speed under time pressure** | The competitive track's timed sets; core fluency (Quiz Level 2) builds the underlying automaticity first. |
| **Common traps** | Every topic's Common-Mistakes layer is exactly the trap catalog these exams exploit. |
| **Calculation stamina** | Quantitative-from-the-start science means years of calculation practice, not a last-year scramble. |

## Timeline overlay (no extra calendar)

The competitive track is designed to be worked **concurrently** with I-tier and A-tier core study by students who want it — the PYQs and sets for a topic unlock once that core topic is mastered, so competitive practice *replaces* generic revision time rather than adding to it. A student aiming at JEE/NEET typically engages the track heavily during A1–A2 and the months after A2, using time that in a conventional path would be a separate 1–2 year coaching program. Net effect: competitive readiness with **time to spare**, per the vision.

## Sample content in this repo
`content/competitive/jee/` contains a sample strategy note and a topic-linked problem set (linked to `math.F1.ratio-proportion-percentage` and `physics.F1.motion`) demonstrating the structure. Full build-out is Phase 4.
