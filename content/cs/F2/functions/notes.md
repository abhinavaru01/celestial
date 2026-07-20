# Functions

> [!intro] Defining functions with parameters, return values and scope — decomposition in code.

## Reusable blocks

A function packages a task under a name so you can reuse it. Parameters pass data in; return sends a result back. Functions are decomposition made concrete.

## Scope

Variables inside a function are local — they do not leak out. This keeps functions independent and predictable, the basis of larger programs.

```formula Key syntax & rules
def name(params): defines a function
return sends a value back (print only displays)
Local variables stay inside the function
```

> [!example] **Worked example**
> **Problem.** What does this return? def sq(n): return n*n — call sq(5).
> >
> > **Solution.** 25 — the function returns 5 × 5. The value can be stored or used, unlike a bare print.

## What you should be able to do

- Define and call functions
- Use parameters and return values
- Understand local scope

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
