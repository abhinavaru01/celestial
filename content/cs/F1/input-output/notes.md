# Input, Output & Simple Interaction

> [!intro] Reading user input, producing output, and building interactive programs.

## Two-way programs

input() pauses and reads what the user types (always as a string). Combined with print(), it makes programs that interact rather than just run.

## Formatting output

f-strings insert values into text cleanly: f"Hello {name}". Clear output makes programs usable.

```formula Key syntax & rules
input() returns a string
int(input(...)) to read a number
f"Hello {name}" inserts a value
```

> [!example] **Worked example**
> **Problem.** Why does int(input("Age? ")) + 1 work but input("Age? ") + 1 fail?
> >
> > **Solution.** input() returns a string; adding a string and an int errors. int(...) converts it to a number first, so +1 works.

## What you should be able to do

- Read input with input()
- Format output clearly
- Build a simple interactive program

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
