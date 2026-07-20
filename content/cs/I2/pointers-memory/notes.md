# Pointers & Memory

> [!intro] The core C idea: addresses, dereferencing, and the stack.

## Pointers hold addresses

A pointer stores the memory address of a value. & gets an address; * dereferences it (reads the value there). This is the idea Python hid entirely.

## The stack

Local variables live on the stack, which grows and shrinks as functions are called and return. Understanding it demystifies how programs use memory.

```formula Key syntax & rules
&x = address of x; *p = value at p
A pointer stores a memory address
Local variables live on the stack
```

> [!example] **Worked example**
> **Problem.** If int x = 5; int *p = &x; what does *p give?
> >
> > **Solution.** *p dereferences the pointer to the value at x’s address → 5.

## What you should be able to do

- Explain what a pointer is
- Use addresses and dereferencing
- Describe the stack

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
