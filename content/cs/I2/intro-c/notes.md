# Intro to C

> [!intro] The compilation model, types and functions in C — contrasting with Python.

## Compiled, not interpreted

C is compiled to machine code before running, unlike Python's interpreter. This is faster but stricter — you must declare types and compile.

## What Python hid

C exposes details Python hides: explicit types, manual structure, and (soon) memory. Learning it deepens your understanding of how programs really run.

```formula Key syntax & rules
C is compiled before running
Every variable has a declared type
gcc prog.c → ./a.out
```

> [!example] **Worked example**
> **Problem.** Name one thing C makes explicit that Python hides.
> >
> > **Solution.** Types — in C you must declare int/float/char etc.; Python infers them dynamically at runtime.

## What you should be able to do

- Compile and run a C program
- Use C types and functions
- Contrast C with Python

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
