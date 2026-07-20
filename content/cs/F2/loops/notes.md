# Loops

> [!intro] while and for loops, range, and reasoning about repetition.

## Repetition

Loops repeat code without rewriting it. for loops iterate a known number of times (often with range); while loops repeat until a condition changes.

## Loop reasoning

A loop must make progress toward stopping, or it runs forever. Thinking about what changes each pass prevents infinite loops.

```formula Key syntax & rules
range(n) → 0,1,…,n−1
for i in range(n): repeats n times
while runs until its condition is False
```

> [!example] **Worked example**
> **Problem.** What does sum(range(5)) equal?
> >
> > **Solution.** range(5) is 0,1,2,3,4; their sum is 0+1+2+3+4 = 10.

## What you should be able to do

- Write while and for loops
- Use range()
- Avoid infinite loops

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
