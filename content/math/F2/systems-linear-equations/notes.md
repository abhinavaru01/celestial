# Systems of Linear Equations

> [!intro] **One equation with two unknowns has infinitely many solutions; two equations usually pin them both down.** Geometrically you are asking where two lines cross — and that question has exactly three possible answers, which is why a system can have one solution, none, or infinitely many. Every method below is just a way of removing one unknown so that the F1 skill of solving a single linear equation can finish the job.

## 1. What a system asks

A **system** (or simultaneous equations) is two or more equations that must hold *at the same time*:

$$2x + y = 11, \qquad x - y = 1$$

A solution is a **pair** $(x, y)$ satisfying **both**. Here $(4, 3)$ works: $2(4)+3 = 11$ ✓ and $4 - 3 = 1$ ✓. Checking in *both* equations is not optional — a pair satisfying only one is not a solution at all.

Each linear equation is a line, so solving the system means **finding the intersection**. That geometric picture gives you all three outcomes immediately:

| Picture | Solutions | Algebraic signal |
|---|---|---|
| Lines cross once | exactly one | you get $x = $ a number |
| Lines parallel, distinct | none | a contradiction like $0 = 5$ |
| Same line twice | infinitely many | an identity like $0 = 0$ |

So if both variables vanish during your working, you have not made a mistake — you have discovered which of the three cases you are in.

```svg
<svg viewBox="0 0 400 170" role="img" aria-label="Two lines intersecting at one point" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="145" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="145" x2="370" y2="145" stroke="#6b7a99" stroke-width="2"/>
  <line x1="60" y1="35" x2="330" y2="130" stroke="#6366f1" stroke-width="3"/>
  <line x1="60" y1="135" x2="330" y2="40" stroke="#6ee7a8" stroke-width="3"/>
  <circle cx="196" cy="86" r="6" fill="#fff" stroke="#0b1020" stroke-width="2"/>
  <text x="206" y="76" font-size="12" fill="#e6ecff">the solution (x, y)</text>
  <text x="200" y="163" font-size="11" fill="#9aa8c4" text-anchor="middle">solving a system = finding where the lines meet</text>
</svg>
```

## 2. Substitution: when one variable is already alone

**Method:** rearrange one equation to make a variable the subject, substitute into the other, solve, then back-substitute.

Solve $y = 2x - 1$ and $3x + y = 9$.

The first equation already gives $y$, so substitute directly:

$$3x + (2x - 1) = 9 \Rightarrow 5x - 1 = 9 \Rightarrow x = 2$$

Back-substitute: $y = 2(2) - 1 = 3$. Solution $(2, 3)$. Check in the *other* equation: $3(2) + 3 = 9$. ✓

**Choose substitution when a variable has coefficient 1** (or is already isolated) — then no fractions appear. If every coefficient is 2 or more, elimination is usually cleaner.

Two habits prevent the standard errors: **bracket the substituted expression** (writing $3x + 2x - 1$ without brackets is fine here, but with $-(2x-1)$ it is fatal), and **back-substitute into the simpler equation.**

## 3. Elimination: add or subtract to cancel

**Method:** scale one or both equations so that one variable has matching coefficients, then add or subtract to eliminate it.

Solve $2x + y = 11$ and $x - y = 1$.

The $y$ coefficients are already $+1$ and $-1$, so **adding** eliminates $y$:

$$3x = 12 \Rightarrow x = 4, \qquad\text{then } 4 - y = 1 \Rightarrow y = 3$$

When coefficients do not match, scale first. For $3x + 2y = 16$ and $5x - 4y = 12$: double the first to get $6x + 4y = 32$, then add to the second — the $y$ terms cancel, giving $11x = 44$ and $x = 4$.

**Same signs → subtract; opposite signs → add.** This is where most errors happen, because subtracting an equation means subtracting *every* term, including the constant. Writing the operation beside the line ("$E_1 - E_2$") and lining the terms up in columns prevents nearly all of them.

```formula Key formulas
Substitution: isolate one variable, substitute, solve, back-substitute
Elimination: match coefficients, then add (opposite signs) or subtract (same signs)
Always check the pair in BOTH original equations
Contradiction (0 = 5) ⇒ no solution;  identity (0 = 0) ⇒ infinitely many
```

> [!example] **Elimination with scaling**
>
> **Problem.** Solve $3x + 2y = 16$ and $5x - 4y = 12$.
>
> **Solution.** Double the first: $6x + 4y = 32$. Add to the second: $11x = 44$, so $x = 4$. Substitute into $3x + 2y = 16$: $12 + 2y = 16$, giving $y = 2$. Check in the second: $5(4) - 4(2) = 20 - 8 = 12$. ✓

## 4. Modelling with two unknowns

Systems earn their keep whenever a problem has **two unknowns and two independent pieces of information** — typically a "how many" fact and a "how much" fact.

*Example.* Tickets cost ₹40 for adults and ₹25 for children. 12 tickets were sold for ₹390. How many of each?

1. **Name both unknowns:** let $a$ = adult tickets, $c$ = child tickets.
2. **Write one equation per fact:**
   - counting: $a + c = 12$
   - money: $40a + 25c = 390$
3. **Solve.** From the first, $c = 12 - a$. Substituting: $40a + 25(12 - a) = 390$, so $15a + 300 = 390$, giving $a = 6$ and $c = 6$.
4. **Check against the words**, not just the algebra: 6 adults and 6 children is 12 tickets, costing $240 + 150 = ₹390$. ✓

The commonest failure is writing two versions of the *same* fact — for instance "$a + c = 12$" and "$c + a = 12$". Two equations only determine two unknowns if they are **independent**; a repeat gives the parallel-or-identical case and no unique answer.

**Sanity-check the answer's meaning too.** Tickets cannot be fractional or negative, so an answer of $a = 6.5$ signals a mis-set-up equation rather than an arithmetic slip.

> [!example] **The classic two-fact model**
>
> **Problem.** Five pens and three notebooks cost ₹235. Three pens and two notebooks cost ₹150. Find each price.
>
> **Solution.** Let $p$, $n$ be the prices. $5p + 3n = 235$ and $3p + 2n = 150$. Multiply the first by 2 and the second by 3: $10p + 6n = 470$ and $9p + 6n = 450$. Subtract: $p = 20$. Then $3(20) + 2n = 150$ gives $n = 45$. Check the first: $100 + 135 = 235$. ✓
>
> *Scale both equations to make the coefficients of one variable match, then subtract.*

```formula Key formulas
A solution is a PAIR (x, y) satisfying every equation
Substitution — best when a coefficient is 1
Elimination — best when no coefficient is 1; same signs subtract, opposite signs add
One solution ⇔ lines cross;  none ⇔ parallel;  infinitely many ⇔ identical lines
Two facts about two unknowns must be INDEPENDENT
```

## What you should be able to do

- Solve systems by substitution and elimination
- Interpret a solution as the intersection of two lines
- Model two-condition problems with a system

## Summary — the mental toolkit

1. A system asks for values satisfying all equations at once — geometrically, where lines meet.
2. Three outcomes only: one solution, none (parallel), or infinitely many (same line).
3. Substitution suits a variable with coefficient 1; elimination suits everything else.
4. Same signs subtract, opposite signs add — and subtraction applies to every term.
5. Always back-substitute and check in both original equations.
6. Word problems need two independent facts; a restated fact determines nothing.
7. If both variables vanish, read the leftover statement: 0 = 5 means none, 0 = 0 means infinitely many.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
