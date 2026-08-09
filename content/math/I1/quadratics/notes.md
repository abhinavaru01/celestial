# Quadratics

> [!intro] **The quadratic is the first genuinely curved relationship you meet, and it is everywhere** — a thrown ball's path, the area of a field as one side varies, braking distance against speed, profit against price. Its defining feature is a *squared* term, and that single square is what bends the graph into a parabola, gives it a maximum or minimum, and allows two solutions where a linear equation had one.

## 1. What makes an equation quadratic

A quadratic has the form

$$ax^2 + bx + c = 0, \qquad a \ne 0$$

The condition $a \ne 0$ is not pedantry — if $a$ were 0 the $x^2$ term vanishes and it is linear again. The three coefficients each control something visible on the graph:

- **$a$** — the *shape*. Positive opens upward (a valley, with a minimum); negative opens downward (a hill, with a maximum). Larger $|a|$ means a narrower curve.
- **$c$** — the **$y$-intercept**, since setting $x = 0$ leaves $y = c$. Free information, always.
- **$b$** — shifts the curve sideways in combination with $a$; on its own it has no simple reading.

Because the graph is a **parabola**, it is symmetric about a vertical line through its turning point (the **vertex**). That symmetry is the source of most shortcuts in this topic — the two roots are always equidistant from the axis of symmetry.

A quadratic has **at most two roots**, and the graph shows why: a parabola can cross a horizontal line twice, touch it once, or miss it entirely. Never three times.

## 2. Method 1 — factorising (fast when it works)

Factorising uses the zero-product property from F2: get everything to one side, factorise, then set each factor to zero.

$$x^2 - 5x + 6 = 0 \Rightarrow (x-2)(x-3) = 0 \Rightarrow x = 2 \text{ or } x = 3$$

**The two non-negotiable steps** are the ones students skip:

1. **Everything on one side first.** From $x^2 = 5x$, dividing both sides by $x$ gives $x = 5$ and *loses the root $x = 0$*. Instead: $x^2 - 5x = 0$, so $x(x-5) = 0$, giving $x = 0$ or $x = 5$. **Never divide an equation by a variable** — you may be dividing by zero and discarding a solution.
2. **Check both roots** by substitution.

Factorising is the quickest method when the numbers are friendly, but most real quadratics do not factorise over the integers — which is exactly why the formula exists.

## 3. Method 2 — completing the square (the one that explains everything)

Completing the square rewrites the quadratic so the variable appears **only once**, which makes it directly solvable and reveals the vertex.

Solve $x^2 + 6x + 5 = 0$:

$$x^2 + 6x = -5 \;\Rightarrow\; (x+3)^2 - 9 = -5 \;\Rightarrow\; (x+3)^2 = 4 \;\Rightarrow\; x + 3 = \pm2$$

so $x = -1$ or $x = -5$. The **$\pm$ is where the second root comes from** — forgetting it is the classic error, and it is also why a quadratic has two solutions at all.

The mechanism: take half the coefficient of $x$, square it, add and subtract. Half of 6 is 3, and $3^2 = 9$.

The real prize is the **vertex form**:

$$y = a(x - h)^2 + k \quad\text{with vertex } (h, k)$$

For $y = x^2 + 6x + 5 = (x+3)^2 - 4$, the vertex is $(-3, -4)$ and the axis of symmetry is $x = -3$. Since a square is never negative, the minimum value is $-4$, reached at $x = -3$ — so completing the square **solves optimisation problems without calculus**.

> [!example] **Optimisation without calculus**
>
> **Problem.** A farmer has 40 m of fencing for a rectangular pen against a wall (three sides fenced). What dimensions maximise the area?
>
> **Solution.** Let the two equal sides be $x$, so the third is $40 - 2x$ and the area is $A = x(40-2x) = 40x - 2x^2$. Complete the square: $A = -2(x^2 - 20x) = -2[(x-10)^2 - 100] = -2(x-10)^2 + 200$. Since $-2(x-10)^2 \le 0$, the maximum is $200$ m² at $x = 10$ — a pen 10 m by 20 m.
>
> *Negative leading coefficient means the vertex is a maximum; vertex form hands you the answer.*

## 4. Method 3 — the quadratic formula, and what the discriminant tells you

Completing the square on the general form $ax^2+bx+c=0$ produces the formula that always works:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The expression under the root, $\Delta = b^2 - 4ac$, is the **discriminant**, and it answers "how many roots?" before you compute anything:

| Discriminant | Roots | Graph |
|---|---|---|
| $\Delta > 0$ | two distinct real roots | crosses the $x$-axis twice |
| $\Delta = 0$ | one repeated root | touches the axis at the vertex |
| $\Delta < 0$ | no real roots | never reaches the axis |

For $2x^2 + 3x - 5 = 0$: $\Delta = 9 + 40 = 49$, so $x = \dfrac{-3 \pm 7}{4}$, giving $x = 1$ or $x = -2.5$.

Two errors dominate here, both mechanical:

- **The whole numerator is divided by $2a$**, not just the root term. Write the fraction bar full width.
- **$-b$ means the negation of $b$.** If $b = -3$, then $-b = +3$. Substituting $b$ with its sign attached, in brackets, prevents this entirely.

A negative discriminant is not a failure — it is the honest answer "no real solution", which in a model usually means the situation described cannot occur (the ball never reaches that height).

```formula Key formulas
ax² + bx + c = 0, a ≠ 0
x = (−b ± √(b² − 4ac)) / (2a)
Discriminant Δ = b² − 4ac:  >0 two roots, =0 one, <0 none
Vertex form y = a(x − h)² + k, vertex (h, k), axis x = h
Sum of roots = −b/a;  product of roots = c/a
```

## 5. Graphs, and reading a quadratic model

Sketching a parabola needs four pieces of information, and all are cheap:

1. **Direction:** sign of $a$.
2. **$y$-intercept:** $c$.
3. **Roots** (if any): factorise or use the formula — these are the $x$-intercepts.
4. **Vertex:** at $x = -\dfrac{b}{2a}$ (the midpoint of the roots, by symmetry), then substitute to get $y$.

The link between algebra and picture is exact: **roots are where the graph crosses the $x$-axis.** So "solve $x^2-5x+6=0$" and "where does $y = x^2-5x+6$ cross the axis?" are the same question asked twice.

In modelling, the vertex is usually the point of interest — maximum height, maximum profit, minimum cost. For a ball thrown upward, $h = -5t^2 + 20t$ has roots at $t = 0$ and $t = 4$ (launch and landing), so by symmetry the peak is at $t = 2$, giving $h = 20$ m.

**Always sanity-check roots against context.** A negative time or a negative length is arithmetically valid but physically meaningless — quadratics routinely produce one sensible root and one to discard, and saying *why* you discarded it is part of the answer.

> [!example] **Discarding the impossible root**
>
> **Problem.** A rectangle is 3 m longer than it is wide and has area 40 m². Find its width.
>
> **Solution.** Let width $w$: $w(w+3) = 40$, so $w^2 + 3w - 40 = 0$ and $(w+8)(w-5) = 0$, giving $w = -8$ or $w = 5$. A width cannot be negative, so $w = 5$ m (and the length is 8 m). Check: $5\times8 = 40$. ✓
>
> *Two algebraic roots, one physical answer — state the reason for rejecting the other.*

```formula Key formulas
Standard form ax² + bx + c = 0 (a ≠ 0)
Quadratic formula x = (−b ± √(b² − 4ac))/(2a)
Δ = b² − 4ac decides the number of real roots
Vertex at x = −b/(2a);  vertex form y = a(x − h)² + k
Completing the square: half the x-coefficient, then square it
a > 0 opens up (minimum);  a < 0 opens down (maximum)
```

## What you should be able to do

- Solve quadratics by factoring and the formula
- Sketch a parabola and find its vertex
- Model with quadratic equations

## Summary — the mental toolkit

1. A quadratic is defined by its x² term; a ≠ 0 is what stops it being linear.
2. a sets the shape and direction, c is the y-intercept, and the parabola is symmetric about its vertex.
3. Factorising is fastest when it works — but never divide by a variable, or you lose a root.
4. Completing the square isolates x, produces the ± that gives two roots, and reveals the vertex.
5. Vertex form solves maximum/minimum problems with no calculus.
6. The discriminant b² − 4ac tells you the number of real roots before you solve.
7. Roots are x-intercepts; in models, check each root against physical sense and discard impossible ones.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
