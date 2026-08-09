# Polynomials & Factoring Basics

> [!intro] **Factoring is multiplication run backwards, and it is the single most reused skill in algebra.** Solving quadratics, simplifying algebraic fractions, finding where a graph crosses the axis, integrating in A1 — all of them begin by turning a sum into a product. The reason a product is so valuable is one fact: **if a product is zero, one of its factors must be zero.** Nothing similar is true for sums.

## 1. The vocabulary, and why degree matters

A **polynomial** is a sum of terms of the form (number) × (variable to a whole-number power): $3x^2 - 5x + 7$.

- The **degree** is the highest power present. Degree 1 is *linear*, 2 *quadratic*, 3 *cubic*.
- The **coefficient** is the number multiplying a power; the **constant term** has no variable.
- Expressions with a variable in the denominator ($\tfrac{1}{x}$) or under a root ($\sqrt{x}$) are **not** polynomials — the powers must be whole numbers.

Degree matters because it predicts behaviour before you do any work: a polynomial of degree $n$ has at most $n$ roots, and its graph has at most $n-1$ turning points. A quadratic can cross the $x$-axis twice, once, or not at all — never three times.

**Adding and subtracting** polynomials is just collecting like terms. The only trap is subtraction, where the minus applies to every term of the second bracket:

$$(3x^2 - 2x + 1) - (x^2 - 5x + 4) = 2x^2 + 3x - 3$$

Note $-(-5x) = +3x$ overall and $1 - 4 = -3$.

## 2. Multiplying: every term by every term

Multiplication is the distributive law applied repeatedly — **each term in the first bracket multiplies each term in the second.**

$$(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$$

For two binomials that is four products (often taught as FOIL: First, Outer, Inner, Last), but FOIL is only a mnemonic for the two-by-two case. For bigger products, use a **grid**, which never lets you miss a term:

| × | $x$ | $-2$ |
|---|---|---|
| $2x$ | $2x^2$ | $-4x$ |
| $+3$ | $3x$ | $-6$ |

Reading the grid: $(2x+3)(x-2) = 2x^2 - 4x + 3x - 6 = 2x^2 - x - 6$.

Two expansions occur so often they are worth recognising instantly rather than expanding each time:

$$(a+b)^2 = a^2 + 2ab + b^2, \qquad (a-b)^2 = a^2 - 2ab + b^2$$
$$(a+b)(a-b) = a^2 - b^2$$

The middle term $2ab$ is the one students drop. The last identity — **difference of two squares** — is the most useful factorisation in all of algebra.

```formula Key formulas
(a + b)² = a² + 2ab + b²
(a − b)² = a² − 2ab + b²
(a + b)(a − b) = a² − b²  (difference of two squares)
Degree n ⇒ at most n roots
```

## 3. Factoring, step 1: always take out the common factor first

Before any other technique, look for a factor common to **every** term — the highest common factor of the coefficients, together with the lowest power of each shared variable.

$$6x^3 + 9x^2 = 3x^2(2x + 3)$$

Two reasons this comes first: it makes everything that follows smaller, and it is often *all* the factorisation available. Students who skip it end up factorising $12x^2 + 18x$ as a quadratic and get lost.

**Check by expanding.** $3x^2(2x+3) = 6x^3 + 9x^2$. ✓ Every factorisation is instantly checkable — you should never be unsure.

For four terms with no common factor overall, try **grouping** in pairs:

$$x^3 + 2x^2 + 3x + 6 = x^2(x+2) + 3(x+2) = (x+2)(x^2+3)$$

The signal that grouping worked is that both pairs leave the *same* bracket.

## 4. Factoring quadratics

For $x^2 + bx + c$ (leading coefficient 1), find two numbers that **multiply to $c$ and add to $b$**:

$$x^2 + 8x + 15 = (x+3)(x+5) \quad\text{since } 3\times5=15,\; 3+5=8$$

Use the signs to narrow the search before listing anything:

- $c > 0$: both numbers share the sign of $b$ (both positive if $b>0$, both negative if $b<0$).
- $c < 0$: the numbers have opposite signs, and the larger magnitude carries the sign of $b$.

For $x^2 - 2x - 15$: $c<0$ so opposite signs; product 15, difference 2 → 3 and 5; $b<0$ so the larger is negative: $(x-5)(x+3)$.

**Difference of two squares** is instant once recognised: $x^2 - 49 = (x-7)(x+7)$, and $9x^2 - 25 = (3x-5)(3x+5)$. Note there is no such factorisation for a *sum* of squares over the real numbers.

When the leading coefficient is not 1, split the middle term: for $2x^2 + 7x + 3$, find two numbers multiplying to $2\times3 = 6$ and adding to 7 — namely 6 and 1:

$$2x^2 + 6x + x + 3 = 2x(x+3) + 1(x+3) = (x+3)(2x+1)$$

> [!example] **Full factorisation, in the right order**
>
> **Problem.** Factorise $2x^3 - 18x$ completely.
>
> **Solution.** Common factor first: $2x(x^2 - 9)$. Now recognise the difference of two squares: $x^2 - 9 = (x-3)(x+3)$. So $2x^3 - 18x = 2x(x-3)(x+3)$.
>
> *Common factor first, then a special form. Stopping at $2x(x^2-9)$ is a half-finished answer.*

## 5. Why factoring is worth the trouble: the zero-product property

If $AB = 0$, then $A = 0$ or $B = 0$. That is a genuinely special property of zero — from $AB = 12$ you can conclude nothing about $A$ and $B$ individually.

This is why solving an equation almost always begins with "get everything on one side, then factorise":

$$x^2 + 8x + 15 = 0 \Rightarrow (x+3)(x+5) = 0 \Rightarrow x = -3 \text{ or } x = -5$$

The same structure gives the **roots** of a polynomial, which are exactly where its graph crosses the $x$-axis — the link between algebra and geometry that I1 Quadratics develops fully.

Factoring also **simplifies algebraic fractions**, and here the rule from F1 returns: you may cancel a common *factor*, never a term of a sum.

$$\frac{x^2 - 9}{x + 3} = \frac{(x-3)(x+3)}{x+3} = x - 3 \quad (x \ne -3)$$

The restriction matters: the original expression is undefined at $x = -3$, so the simplified form is only equal to it elsewhere.

> [!example] **Solving by factorising**
>
> **Problem.** Solve $x^2 - 2x - 15 = 0$.
>
> **Solution.** Opposite signs are needed with product 15 and difference 2: 5 and 3, with the larger negative since $b<0$. So $(x-5)(x+3) = 0$, giving $x = 5$ or $x = -3$. Check $x=5$: $25 - 10 - 15 = 0$. ✓

```formula Key formulas
(a ± b)² = a² ± 2ab + b²;  (a+b)(a−b) = a² − b²
x² + bx + c = (x + p)(x + q) where pq = c and p + q = b
Zero-product property: AB = 0 ⇒ A = 0 or B = 0
Order of factorising: common factor → special form → quadratic pair/grouping
Cancel factors, never terms of a sum
```

## What you should be able to do

- Add, subtract and multiply polynomials
- Factor out common factors
- Factor simple quadratics

## Summary — the mental toolkit

1. Degree predicts the number of roots and turning points before any work is done.
2. Multiplication means every term times every term — use a grid beyond two-by-two.
3. Memorise (a±b)² and a² − b²; the missing 2ab is the classic slip.
4. Always extract the common factor first, then look for a special form.
5. For x² + bx + c, find two numbers with product c and sum b; the signs narrow the search.
6. Factoring matters because AB = 0 forces A = 0 or B = 0 — nothing like it holds for sums.
7. Every factorisation is checkable by expanding, so you never need to be uncertain.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
