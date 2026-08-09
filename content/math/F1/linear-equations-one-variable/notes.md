# Linear Equations in One Variable

> [!intro] **An equation is a balance, and solving one is a sequence of moves that keeps it balanced.** That single image explains every step you will ever take: whatever you do to one side you must do to the other. Master it here on linear equations and the same logic carries you through simultaneous equations, rearranging physics formulas, and chemistry's concentration calculations.

## 1. What an equation claims — and what solving means

An **expression** ($2x + 3$) is a recipe. An **equation** ($2x + 3 = 11$) is a *claim*: these two recipes produce the same number. **Solving** means finding every value of the letter that makes the claim true.

That definition gives you a free check: substitute your answer back. If $x = 4$, then $2(4) + 3 = 11$. ✓ A solved equation is one you have verified, not merely one you have finished writing.

Three outcomes are possible, and students who only ever meet the first are baffled by the others:

- **Exactly one solution:** $2x + 3 = 11 \Rightarrow x = 4$.
- **No solution:** $x + 1 = x + 2$ simplifies to $1 = 2$, false for every $x$.
- **Infinitely many:** $2(x + 1) = 2x + 2$ simplifies to $0 = 0$, true for every $x$ — an *identity*, not really an equation to solve.

## 2. The balance model

Picture a pair of scales holding $2x + 3$ on the left and $11$ on the right, level. Any operation applied to **both** pans keeps it level:

- take 3 from both pans: $2x = 8$
- halve both pans: $x = 4$

That is the entire method. "Change the side, change the sign" and "take it across and flip it" are *shorthand for this*, and students who learn only the shorthand come unstuck the moment an equation looks unfamiliar. Whenever you are unsure, go back to "what do I do to both sides?"

**Choose the inverse operation** that peels off the outermost layer:

| To undo | Do |
|---|---|
| $+3$ | subtract 3 |
| $-3$ | add 3 |
| $\times2$ | divide by 2 |
| $\div2$ | multiply by 2 |

Work outside-in, the reverse of the order of operations: in $2x + 3$ the last thing done to $x$ was "add 3", so that is the first thing you undo.

```svg
<svg viewBox="0 0 400 140" role="img" aria-label="Balance scale showing 2x plus 3 equals 11" xmlns="http://www.w3.org/2000/svg">
  <line x1="60" y1="42" x2="340" y2="42" stroke="#6b7a99" stroke-width="3"/>
  <polygon points="200,42 186,104 214,104" fill="#6b7a99"/>
  <rect x="82" y="52" width="110" height="34" rx="6" fill="#6366f1"/>
  <text x="137" y="74" font-size="14" fill="#fff" text-anchor="middle">2x + 3</text>
  <rect x="220" y="52" width="110" height="34" rx="6" fill="#6ee7a8"/>
  <text x="275" y="74" font-size="14" fill="#0b1020" text-anchor="middle">11</text>
  <text x="200" y="128" font-size="11" fill="#9aa8c4" text-anchor="middle">do the same to both pans and it stays level</text>
</svg>
```

## 3. The standard procedure

For any linear equation, in order:

1. **Clear fractions** by multiplying every term by the LCM of the denominators.
2. **Expand brackets.**
3. **Collect the letter terms on one side, numbers on the other.** Move whichever keeps the coefficient positive — it prevents sign errors.
4. **Divide by the coefficient.**
5. **Check by substituting back.**

Watch step 1 carefully, because "every term" means *every* term:

$$\frac{x}{3} + \frac{x-1}{2} = 4 \;\;\xrightarrow{\times 6}\;\; 2x + 3(x-1) = 24$$

The 4 on the right becomes 24. Forgetting that is the classic fraction-clearing error. Note also the bracket around $x - 1$: multiplying $\tfrac{x-1}{2}$ by 6 gives $3(x-1)$, not $3x - 1$.

> [!example] **Letters on both sides**
>
> **Problem.** Solve 5x − 3 = 2x + 9.
>
> **Solution.** Subtract $2x$ from both sides: $3x - 3 = 9$. Add 3: $3x = 12$. Divide by 3: $x = 4$. Check: left $= 5(4) - 3 = 17$; right $= 2(4) + 9 = 17$. ✓
>
> *Moving the smaller letter term keeps the coefficient positive.*

## 4. Equations with fractions and brackets

Solve $\dfrac{x}{3} + \dfrac{x-1}{2} = 4$.

Multiply every term by $\mathrm{LCM}(3,2) = 6$:

$$2x + 3(x-1) = 24$$

Expand: $2x + 3x - 3 = 24$, so $5x = 27$ and $x = \tfrac{27}{5} = 5.4$.

Check: $\tfrac{5.4}{3} = 1.8$ and $\tfrac{4.4}{2} = 2.2$; $1.8 + 2.2 = 4$. ✓

**A non-integer answer is not a mistake.** Real problems rarely produce whole numbers, and the check is what tells you whether $\tfrac{27}{5}$ is right — not whether it looks tidy.

## 5. Modelling word problems

Linear equations earn their keep on word problems. The reliable procedure:

1. **Name the unknown in words**, then assign a letter: "let $n$ = the number of ₹5 coins".
2. **Express every other quantity in terms of that letter.**
3. **Find the sentence that states an equality** — usually a total, a "same as", or a "how long until".
4. Solve, then **answer the question actually asked** (often not the letter itself).

*Example.* A father is 30 years older than his son. In 5 years he will be three times as old. How old is the son now?

Let $s$ = son's age now, so father is $s + 30$. In 5 years: son $s + 5$, father $s + 35$. The condition:

$$s + 35 = 3(s + 5) \Rightarrow s + 35 = 3s + 15 \Rightarrow 20 = 2s \Rightarrow s = 10.$$

Son is 10, father is 40. Check: in 5 years they are 15 and 45, and $45 = 3\times15$. ✓ Notice how the check uses the *original words*, not the algebra — that is what catches a mis-translated sentence.

> [!example] **Consecutive-number problem**
>
> **Problem.** The sum of three consecutive integers is 72. Find them.
>
> **Solution.** Let the middle number be $n$; the three are $n-1$, $n$, $n+1$. Their sum is $3n = 72$, so $n = 24$ and the integers are 23, 24, 25.
>
> *Naming the *middle* term rather than the first makes the algebra collapse — choosing the unknown well is part of the skill.*

```formula Key formulas
Balance rule: any operation applied to both sides preserves equality
Undo outside-in: reverse the order of operations
Clear fractions by multiplying EVERY term by the LCM of denominators
ax + b = c  ⇒  x = (c − b)/a
No solution ⇒ a false statement like 1 = 2; infinitely many ⇒ 0 = 0
```

## What you should be able to do

- Solve linear equations by inverse operations
- Keep an equation balanced at every step
- Model word problems with a single equation

## Summary — the mental toolkit

1. An equation claims two expressions are equal; solving finds the values making it true.
2. The balance model — do the same to both sides — justifies every legitimate step.
3. Undo operations outside-in, the reverse of the order of operations.
4. Clear fractions by multiplying every term (including the constant) by the LCM.
5. Collect letters on the side that keeps the coefficient positive.
6. Always substitute back — and for word problems, check against the original sentence.
7. Contradictions mean no solution; identities mean infinitely many.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
