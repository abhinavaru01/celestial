# Computer Science — Tier-by-Tier Syllabus

**Assumes zero prior coding experience.** Sequence: **Python first, then C.** The goal is not syntax coverage — it is a student who can **independently build real, version-controlled software projects** and reason about correctness and efficiency. CS fundamentals (computational thinking, data structures, algorithms, version control) are taught alongside language, never as an afterthought.

**Sequencing principle:** Python first because it lets a beginner build working, motivating programs with minimal ceremony — the student learns *thinking* (decomposition, state, iteration) without fighting the compiler. C comes after the ideas are solid, to expose what Python hides: memory, pointers, and how the machine actually runs code. Version control (git) is introduced the day a student writes their second file, not in a final "tools" module.

## F1 — Python foundations & computational thinking
1. **Computational thinking** — decomposition, pattern recognition, abstraction, algorithms as precise recipes (unplugged before any code).
2. **First programs** — running Python, print, comments, the edit-run loop.
3. **Variables, types & expressions** *(built — proof-of-model topic)* — the model of a variable as a labeled box; int/float/str/bool; operators.
4. **Input, output & simple interaction.**
5. **Booleans & conditionals** — if/elif/else; boolean logic (shared with Math logic).
6. **Version control basics I** — git init/add/commit; why history matters (introduced here, used forever after).

## F2 — Control, structure, first real programs
1. **Loops** — while, for, range; loop reasoning (invariants intuitively).
2. **Lists & iteration** — the first data structure; indexing, mutation, traversal.
3. **Functions** — definition, parameters, return, scope; decomposition in practice.
4. **Strings at depth** — methods, slicing, formatting.
5. **Dictionaries & sets** — key-value modeling; when to use which structure.
6. **Version control basics II** — branches, remotes, pushing to GitHub; a first published repo.
7. **Project 1** — a complete small program (e.g., a quiz game or text tool), committed to git.

## I1 — Program design & core data structures
1. **File I/O & data formats** — reading/writing files, CSV, JSON.
2. **Error handling & debugging discipline** — exceptions, reading tracebacks, print/assert debugging.
3. **Modules & program organization** — multi-file programs, the standard library.
4. **Data structures: stacks, queues, linked lists (in Python)** — build them, understand tradeoffs.
5. **Algorithms I** — linear vs binary search, basic sorting; correctness reasoning.
6. **Complexity intuition** — Big-O as "how does work grow with input" (uses Math logs/exponentials).
7. **Project 2** — a program with persistent data and a clean module structure.

## I2 — From Python to C; how machines run code
1. **Intro to C** — compilation model, types, functions; contrasting with Python (what was hidden).
2. **Control flow & arrays in C.**
3. **Pointers & memory** — the core C idea; addresses, dereferencing, the stack.
4. **Strings & manual memory management in C** — malloc/free, why Python didn't need it.
5. **Structs & building data structures in C** — re-implement a linked list with pointers.
6. **How code becomes execution** — memory layout, compilation stages (intuitive).

## A1 — Algorithms, and object-oriented design
1. **Object-oriented programming (Python)** — classes, objects, encapsulation, inheritance; modeling with objects.
2. **Recursion** — thinking recursively; recursion vs iteration.
3. **Trees & graphs** — representation, traversal (BFS/DFS).
4. **Algorithms II** — divide and conquer, efficient sorting (merge/quick), hashing.
5. **Algorithmic problem solving** — patterns, approach under constraints (serves competitive programming track).
6. **Testing** — writing tests, thinking about edge cases.

## A2 — Building real software (capstone)
1. **Software design** — requirements, decomposition, data modeling, interfaces.
2. **Web & data basics** — a program that talks to the outside world (HTTP/API or a simple UI) and stores data.
3. **Working with a codebase** — reading unfamiliar code, git collaboration workflows, code review.
4. **Databases intro** — relational modeling, basic SQL.
5. **Capstone project (graduation requirement)** — an independently designed, built, tested, and version-controlled software project of real utility, documented in a README. This is the CS graduation bar per the PRD.

## Why this sequence produces builders, not test-passers
- **Projects at F2, I1, A2** — students ship working software repeatedly, not once at the end.
- **Git from F1** — version control is a habit built over three years, not a topic crammed at the end.
- **Python→C ordering** teaches *thinking* first, then *machine reality*, so pointers land as "the thing Python was hiding" rather than an abstract hurdle.
- **Fundamentals interleaved** — data structures, algorithms, and complexity arrive when the student has programs big enough to need them, so they are motivated, not academic.
- The **A2 capstone** is the direct instrument of PRD graduate outcome #3 ("build real software projects independently").

Board/curriculum-equivalence: see `../board-equivalence.md`.
