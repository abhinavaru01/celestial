# Coordinate Geometry

> [!intro] **Coordinate geometry is Descartes' great idea: every geometric question becomes an algebraic one.** Instead of proving things about lengths and angles with constructions, you compute with coordinates. Distance becomes Pythagoras, a line becomes an equation, a circle becomes $x^2+y^2=r^2$ — and problems that need real ingenuity in pure geometry become routine algebra.

## 1. Distance and midpoint — Pythagoras in disguise

The **distance** between $(x_1,y_1)$ and $(x_2,y_2)$ is

$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

This is not a new formula to memorise — it *is* Pythagoras. Draw the horizontal and vertical differences and you have a right triangle whose legs are $|x_2-x_1|$ and $|y_2-y_1|$; the distance is its hypotenuse. Because the differences are squared, **the order of subtraction does not matter** here.

The **midpoint** is simply the average of the coordinates:

$$M = \left(\frac{x_1+x_2}{2},\; \frac{y_1+y_2}{2}\right)$$

which makes sense — the middle of a journey is the average of its ends, done separately in each direction.

The **section formula** generalises this: the point dividing the segment in the ratio $m:n$ (from the first point) is

$$\left(\frac{mx_2 + nx_1}{m+n},\; \frac{my_2 + ny_1}{m+n}\right)$$

Note the cross-pairing — $m$ goes with $x_2$. Setting $m=n=1$ recovers the midpoint, which is the check to use if you cannot recall the arrangement.

```formula Key formulas
Distance d = √((x₂−x₁)² + (y₂−y₁)²)  — Pythagoras
Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)
Section (ratio m:n) = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))
```

## 2. Lines: gradient, parallel and perpendicular

Gradient is unchanged from F2: $m = \dfrac{y_2-y_1}{x_2-x_1}$. What is new is the perpendicular relationship.

- **Parallel:** $m_1 = m_2$ — same rate.
- **Perpendicular:** $m_1 m_2 = -1$, equivalently $m_2 = -\dfrac{1}{m_1}$ — the **negative reciprocal**.

Both parts matter: negative *and* reciprocal. A line of gradient $\tfrac23$ is perpendicular to one of gradient $-\tfrac32$ — flip the fraction and change the sign.

Why $-1$? Rotating a direction by $90°$ turns a "run $a$, rise $b$" step into "run $-b$, rise $a$", so the gradient $\tfrac{b}{a}$ becomes $-\tfrac{a}{b}$, and the product is $-1$. The special cases are consistent: horizontal ($m=0$) and vertical (undefined) are perpendicular, though the product rule cannot be applied literally there.

Three equation forms, each convenient for different data:

| Form | Equation | Use when |
|---|---|---|
| Gradient–intercept | $y = mx + c$ | you know $m$ and the intercept |
| **Point–gradient** | $y - y_1 = m(x - x_1)$ | you know $m$ and any point |
| General | $ax + by + c = 0$ | for tidy integer coefficients |

The point–gradient form is the workhorse — it needs no rearranging to use and no separate step to find $c$.

> [!example] **Perpendicular through a point**
>
> **Problem.** Find the line through (2, 7) perpendicular to $y = \tfrac23 x + 1$.
>
> **Solution.** The given gradient is $\tfrac23$, so the perpendicular gradient is $-\tfrac32$. Point–gradient form: $y - 7 = -\tfrac32(x-2)$, giving $y = -\tfrac32 x + 10$. Check the product: $\tfrac23 \times -\tfrac32 = -1$ ✓, and at $x=2$, $y = -3+10 = 7$ ✓.

## 3. The circle as an equation

A circle is the set of points at a fixed distance $r$ from a centre. Apply the distance formula to that sentence and the equation appears:

$$(x-h)^2 + (y-k)^2 = r^2 \qquad \text{centre } (h,k), \text{ radius } r$$

Centred at the origin it is simply $x^2 + y^2 = r^2$.

**Read the signs carefully.** $(x-3)^2 + (y+2)^2 = 25$ has centre $(3, -2)$ — the sign flips, because the form subtracts the centre's coordinates. And the right-hand side is $r^2$, so the radius here is 5, not 25.

Circles often arrive **expanded**, and completing the square recovers the centre and radius:

$$x^2 + y^2 - 6x + 4y - 12 = 0$$
$$(x-3)^2 - 9 + (y+2)^2 - 4 - 12 = 0 \Rightarrow (x-3)^2 + (y+2)^2 = 25$$

So the same circle as above. This is exactly the completing-the-square skill from Quadratics, used twice.

A useful geometric fact for later: **the tangent at a point is perpendicular to the radius at that point.** Combined with the negative-reciprocal rule, that gives you tangent equations with no calculus.

> [!example] **Recovering a circle from expanded form**
>
> **Problem.** Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.
>
> **Solution.** Complete the square in each variable: $x^2-6x = (x-3)^2-9$ and $y^2+4y = (y+2)^2-4$. Substituting: $(x-3)^2 + (y+2)^2 = 25$. Centre $(3,-2)$, radius 5.
>
> *The sign of the centre flips relative to the bracket, and the constant is r², not r.*

## 4. Proving geometry with algebra

The real power of coordinates is that geometric claims become computations anyone can verify.

To show a quadrilateral is a **parallelogram**, show both pairs of opposite sides have equal gradients — or, more slickly, that the **diagonals share a midpoint** (a single midpoint calculation each).

To show a triangle is **right-angled**, show two sides have gradients multiplying to $-1$ — or verify Pythagoras on the three squared distances.

To show a triangle is **isosceles**, compute the three side lengths and find two equal. Note you can compare $d^2$ values and skip the square roots entirely, since lengths are positive.

*Worked proof.* Show that $A(1,2)$, $B(4,6)$, $C(8,3)$ form a right-angled triangle.

Gradients: $m_{AB} = \dfrac{6-2}{4-1} = \dfrac43$, and $m_{BC} = \dfrac{3-6}{8-4} = -\dfrac34$. Their product is $-1$, so $AB \perp BC$ and the right angle is at $B$.

Cross-check with distances: $AB^2 = 9+16 = 25$, $BC^2 = 16+9=25$, $AC^2 = 49+1 = 50$. Since $25+25 = 50$, Pythagoras confirms it — and incidentally the triangle is isosceles too.

```formula Key formulas
d = √((x₂−x₁)² + (y₂−y₁)²);  midpoint = averages of the coordinates
Parallel: m₁ = m₂.  Perpendicular: m₁m₂ = −1 (negative reciprocal)
Point–gradient form: y − y₁ = m(x − x₁)
Circle: (x − h)² + (y − k)² = r², centre (h, k), radius r
Tangent ⊥ radius at the point of contact
```

## What you should be able to do

- Use distance, midpoint and section formulas
- Find equations of lines in various forms
- Recognise the equation of a circle

## Summary — the mental toolkit

1. The distance formula is Pythagoras applied to coordinate differences.
2. The midpoint is the average of the endpoints, coordinate by coordinate.
3. Parallel means equal gradients; perpendicular means the product is −1 — negative AND reciprocal.
4. Point–gradient form is the fastest route to a line through a known point.
5. A circle is the distance formula rearranged; the centre signs flip and the constant is r².
6. Completing the square converts an expanded circle back to centre–radius form.
7. Geometric properties become computations: equal gradients, −1 products, equal squared distances.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
