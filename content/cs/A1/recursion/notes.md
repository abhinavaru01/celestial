# Recursion

> [!intro] Thinking recursively, base cases, and recursion vs iteration.

## A function that calls itself

Recursion solves a problem by reducing it to a smaller version of itself, until a base case stops the recursion. It suits naturally nested problems (trees, factorials).

## Base case is essential

Without a base case, recursion never stops (stack overflow). Every recursion needs a shrinking input and a stopping condition.

```formula Key syntax & rules
Every recursion needs a base case
Each call moves toward the base case
No base case → stack overflow
```

> [!example] **Worked example**
> **Problem.** Trace factorial(3) with factorial(n)=n·factorial(n−1), base factorial(0)=1.
> >
> > **Solution.** 3·factorial(2) = 3·2·factorial(1) = 3·2·1·factorial(0) = 3·2·1·1 = 6.

## What you should be able to do

- Write recursive functions
- Identify base and recursive cases
- Compare recursion and iteration

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
