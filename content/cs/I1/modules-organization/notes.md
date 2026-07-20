# Modules & Program Organization

> [!intro] Multi-file programs, imports, and the standard library.

## Organising code

As programs grow, splitting them into modules (files) keeps related code together and reusable. import brings a module's functions into another file.

## Standard library

Python ships with a rich standard library (math, random, datetime). Reusing it saves you from reinventing common tools.

```formula Key syntax & rules
import module, then module.function()
One module = one responsibility
Reuse the standard library
```

> [!example] **Worked example**
> **Problem.** How do you use sqrt from the math module?
> >
> > **Solution.** import math, then math.sqrt(9) returns 3.0 — reusing the standard library instead of writing your own.

## What you should be able to do

- Split code across modules
- Import and reuse code
- Use the standard library

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
