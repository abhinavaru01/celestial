# Control Flow & Arrays in C

> [!intro] Conditionals, loops and arrays in C, and how they differ from Python.

## Familiar logic, stricter syntax

C has if, for and while like Python, but with braces and semicolons, and no automatic bounds checking on arrays.

## Fixed-size arrays

A C array is a fixed block of same-type elements. Unlike Python lists, it does not grow, and going out of bounds is undefined behaviour, not an error.

```formula Key syntax & rules
C arrays are fixed size
No bounds checking (out of bounds = undefined behaviour)
Braces group blocks; semicolons end statements
```

> [!example] **Worked example**
> **Problem.** What is the risk of writing to arr[10] in a 10-element C array (indices 0–9)?
> >
> > **Solution.** Undefined behaviour — C does not check bounds, so it may corrupt memory or crash unpredictably.

## What you should be able to do

- Write C conditionals and loops
- Use C arrays
- Note differences from Python

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
