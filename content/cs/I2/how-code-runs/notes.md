# How Code Becomes Execution

> [!intro] Memory layout and compilation stages, intuitively.

## From source to machine

Compilation goes source → preprocessing → compiling → assembling → linking → an executable of machine instructions the CPU runs directly.

## Memory layout

A running program uses regions: code, static data, the stack (locals) and the heap (malloc). Knowing the map explains many bugs and behaviours.

```formula Key syntax & rules
Preprocess → compile → assemble → link → executable
Stack: local variables; Heap: malloc
Linker combines compiled parts
```

> [!example] **Worked example**
> **Problem.** Where does memory from malloc come from — stack or heap?
> >
> > **Solution.** The heap — used for dynamic allocation; the stack holds local variables and function calls.

## What you should be able to do

- Describe compilation stages
- Explain memory layout
- Connect source to execution

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
