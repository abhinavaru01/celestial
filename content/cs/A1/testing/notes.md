# Testing

> [!intro] Writing tests and thinking about edge cases.

## Tests check behaviour

A test runs code with known input and checks the output. Automated tests catch bugs early and prevent regressions when you change code.

## Edge cases

Bugs hide at the edges: empty input, one element, maximum values, invalid input. Thinking about edges is where good testing lives.

```formula Key syntax & rules
Test normal, boundary and invalid inputs
A failing test pins down a bug
Re-run tests after every change (catch regressions)
```

> [!example] **Worked example**
> **Problem.** What edge cases should you test for a function that averages a list?
> >
> > **Solution.** An empty list (avoid divide-by-zero), a single element, and negative numbers.

## What you should be able to do

- Write basic tests
- Identify edge cases
- Use tests to catch regressions

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
