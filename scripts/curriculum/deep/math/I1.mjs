// Deep content: math I1. See ../index.mjs for the entry schema.
//
// Bodies use String.raw so LaTeX backslashes survive template-literal escaping.

export default {

  // ==========================================================================
  'math.I1.quadratics': {
    estMinutes: 270,
    hook: String.raw`**The quadratic is the first genuinely curved relationship you meet, and it is everywhere** — a thrown ball's path, the area of a field as one side varies, braking distance against speed, profit against price. Its defining feature is a *squared* term, and that single square is what bends the graph into a parabola, gives it a maximum or minimum, and allows two solutions where a linear equation had one.`,
    sections: [
      { h: 'What makes an equation quadratic',
        body: String.raw`A quadratic has the form

$$ax^2 + bx + c = 0, \qquad a \ne 0$$

The condition $a \ne 0$ is not pedantry — if $a$ were 0 the $x^2$ term vanishes and it is linear again. The three coefficients each control something visible on the graph:

- **$a$** — the *shape*. Positive opens upward (a valley, with a minimum); negative opens downward (a hill, with a maximum). Larger $|a|$ means a narrower curve.
- **$c$** — the **$y$-intercept**, since setting $x = 0$ leaves $y = c$. Free information, always.
- **$b$** — shifts the curve sideways in combination with $a$; on its own it has no simple reading.

Because the graph is a **parabola**, it is symmetric about a vertical line through its turning point (the **vertex**). That symmetry is the source of most shortcuts in this topic — the two roots are always equidistant from the axis of symmetry.

A quadratic has **at most two roots**, and the graph shows why: a parabola can cross a horizontal line twice, touch it once, or miss it entirely. Never three times.`,
      },
      { h: 'Method 1 — factorising (fast when it works)',
        body: String.raw`Factorising uses the zero-product property from F2: get everything to one side, factorise, then set each factor to zero.

$$x^2 - 5x + 6 = 0 \Rightarrow (x-2)(x-3) = 0 \Rightarrow x = 2 \text{ or } x = 3$$

**The two non-negotiable steps** are the ones students skip:

1. **Everything on one side first.** From $x^2 = 5x$, dividing both sides by $x$ gives $x = 5$ and *loses the root $x = 0$*. Instead: $x^2 - 5x = 0$, so $x(x-5) = 0$, giving $x = 0$ or $x = 5$. **Never divide an equation by a variable** — you may be dividing by zero and discarding a solution.
2. **Check both roots** by substitution.

Factorising is the quickest method when the numbers are friendly, but most real quadratics do not factorise over the integers — which is exactly why the formula exists.`,
      },
      { h: 'Method 2 — completing the square (the one that explains everything)',
        body: String.raw`Completing the square rewrites the quadratic so the variable appears **only once**, which makes it directly solvable and reveals the vertex.

Solve $x^2 + 6x + 5 = 0$:

$$x^2 + 6x = -5 \;\Rightarrow\; (x+3)^2 - 9 = -5 \;\Rightarrow\; (x+3)^2 = 4 \;\Rightarrow\; x + 3 = \pm2$$

so $x = -1$ or $x = -5$. The **$\pm$ is where the second root comes from** — forgetting it is the classic error, and it is also why a quadratic has two solutions at all.

The mechanism: take half the coefficient of $x$, square it, add and subtract. Half of 6 is 3, and $3^2 = 9$.

The real prize is the **vertex form**:

$$y = a(x - h)^2 + k \quad\text{with vertex } (h, k)$$

For $y = x^2 + 6x + 5 = (x+3)^2 - 4$, the vertex is $(-3, -4)$ and the axis of symmetry is $x = -3$. Since a square is never negative, the minimum value is $-4$, reached at $x = -3$ — so completing the square **solves optimisation problems without calculus**.`,
        example: { title: 'Optimisation without calculus',
          q: 'A farmer has 40 m of fencing for a rectangular pen against a wall (three sides fenced). What dimensions maximise the area?',
          solution: 'Let the two equal sides be $x$, so the third is $40 - 2x$ and the area is $A = x(40-2x) = 40x - 2x^2$. Complete the square: $A = -2(x^2 - 20x) = -2[(x-10)^2 - 100] = -2(x-10)^2 + 200$. Since $-2(x-10)^2 \\le 0$, the maximum is $200$ m² at $x = 10$ — a pen 10 m by 20 m.',
          moral: 'Negative leading coefficient means the vertex is a maximum; vertex form hands you the answer.' },
      },
      { h: 'Method 3 — the quadratic formula, and what the discriminant tells you',
        body: String.raw`Completing the square on the general form $ax^2+bx+c=0$ produces the formula that always works:

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

A negative discriminant is not a failure — it is the honest answer "no real solution", which in a model usually means the situation described cannot occur (the ball never reaches that height).`,
        formulas: ['ax² + bx + c = 0, a ≠ 0',
          'x = (−b ± √(b² − 4ac)) / (2a)',
          'Discriminant Δ = b² − 4ac:  >0 two roots, =0 one, <0 none',
          'Vertex form y = a(x − h)² + k, vertex (h, k), axis x = h',
          'Sum of roots = −b/a;  product of roots = c/a'],
      },
      { h: 'Graphs, and reading a quadratic model',
        body: String.raw`Sketching a parabola needs four pieces of information, and all are cheap:

1. **Direction:** sign of $a$.
2. **$y$-intercept:** $c$.
3. **Roots** (if any): factorise or use the formula — these are the $x$-intercepts.
4. **Vertex:** at $x = -\dfrac{b}{2a}$ (the midpoint of the roots, by symmetry), then substitute to get $y$.

The link between algebra and picture is exact: **roots are where the graph crosses the $x$-axis.** So "solve $x^2-5x+6=0$" and "where does $y = x^2-5x+6$ cross the axis?" are the same question asked twice.

In modelling, the vertex is usually the point of interest — maximum height, maximum profit, minimum cost. For a ball thrown upward, $h = -5t^2 + 20t$ has roots at $t = 0$ and $t = 4$ (launch and landing), so by symmetry the peak is at $t = 2$, giving $h = 20$ m.

**Always sanity-check roots against context.** A negative time or a negative length is arithmetically valid but physically meaningless — quadratics routinely produce one sensible root and one to discard, and saying *why* you discarded it is part of the answer.`,
        example: { title: 'Discarding the impossible root',
          q: 'A rectangle is 3 m longer than it is wide and has area 40 m². Find its width.',
          solution: 'Let width $w$: $w(w+3) = 40$, so $w^2 + 3w - 40 = 0$ and $(w+8)(w-5) = 0$, giving $w = -8$ or $w = 5$. A width cannot be negative, so $w = 5$ m (and the length is 8 m). Check: $5\\times8 = 40$. ✓',
          moral: 'Two algebraic roots, one physical answer — state the reason for rejecting the other.' },
      },
    ],
    formulas: ['Standard form ax² + bx + c = 0 (a ≠ 0)',
      'Quadratic formula x = (−b ± √(b² − 4ac))/(2a)',
      'Δ = b² − 4ac decides the number of real roots',
      'Vertex at x = −b/(2a);  vertex form y = a(x − h)² + k',
      'Completing the square: half the x-coefficient, then square it',
      'a > 0 opens up (minimum);  a < 0 opens down (maximum)'],
    summary: [
      'A quadratic is defined by its x² term; a ≠ 0 is what stops it being linear.',
      'a sets the shape and direction, c is the y-intercept, and the parabola is symmetric about its vertex.',
      'Factorising is fastest when it works — but never divide by a variable, or you lose a root.',
      'Completing the square isolates x, produces the ± that gives two roots, and reveals the vertex.',
      'Vertex form solves maximum/minimum problems with no calculus.',
      'The discriminant b² − 4ac tells you the number of real roots before you solve.',
      'Roots are x-intercepts; in models, check each root against physical sense and discard impossible ones.',
    ],
    mistakes: [
      '**Dividing both sides by x.** From x² = 5x concluding x = 5 only. **Why:** you divided by something that might be zero. **Fix:** move everything to one side and factorise: x(x − 5) = 0 gives x = 0 and x = 5.',
      '**Losing the ± in the formula or when square-rooting.** **Fix:** √4 = ±2 when solving (x+3)² = 4. The ± is the entire reason a quadratic has two roots.',
      '**Dividing only the root term by 2a.** Writing −b ± √Δ/2a. **Fix:** the whole numerator sits over 2a — draw the fraction bar the full width.',
      '**Sign error on −b when b is negative.** For b = −3, −b = +3. **Fix:** substitute values in brackets: −(−3) ± … .',
      '**Treating a negative discriminant as an error.** **Fix:** Δ < 0 is the answer "no real roots" — the graph never meets the axis.',
      '**Completing the square with the full coefficient instead of half.** For x² + 6x, using 6² = 36 rather than 3² = 9. **Fix:** halve first, then square.',
      '**Forgetting to factor out a before completing the square** when a ≠ 1. **Fix:** write a(x² + (b/a)x) + c first.',
      '**Accepting a physically impossible root.** Reporting a width of −8 m. **Fix:** check each root against the context and state why one is rejected.',
    ],
    tricks: [
      '**Compute the discriminant first.** It tells you how many roots exist and whether the numbers will be friendly (a perfect-square Δ means it factorises).',
      '**Find the vertex from x = −b/(2a)** — it is the midpoint of the roots, so symmetry gives it free once you have them.',
      '**Use sum and product of roots to check:** sum = −b/a, product = c/a. For 2x² + 3x − 5, roots 1 and −2.5 give sum −1.5 = −3/2 ✓ and product −2.5 = −5/2 ✓.',
      '**Sketch before solving a word problem.** Knowing whether you want a maximum or a minimum stops you reporting the wrong end.',
      '**Recognise the special forms:** a difference of two squares (x² − 9 = 0) and a perfect square (x² + 6x + 9) both solve instantly without the formula.',
      '**For "when does it hit the ground?", set the height to 0**; for "when is it highest?", use the vertex. The question tells you which.',
    ],
    memory: [
      '"a ≠ 0, or it is not quadratic at all."',
      '"a positive smiles, a negative frowns."',
      '"Never divide by x — you may throw away a root."',
      '"Half it, square it" for completing the square.',
      '"b² − 4ac: positive two, zero one, negative none."',
      '"Roots are where the curve crosses; the vertex is where it turns."',
      '"Two roots, one answer" — always check the context.',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'Solve x² − 5x + 6 = 0.', choices: ['x = 2 or x = 3', 'x = −2 or x = −3', 'x = 1 or x = 6', 'x = 5 or x = 6'], answer: 0, explanation: '(x−2)(x−3) = 0, so each factor gives a root.' },
      { lvl: 1, type: 'numeric', prompt: 'For y = 2x² + 3x − 5, what is the y-intercept?', answer: -5, tolerance: 0, explanation: 'Setting x = 0 leaves y = c = −5.' },
      { lvl: 1, type: 'mcq', prompt: 'If a > 0, the parabola y = ax² + bx + c:', choices: ['opens upward and has a minimum', 'opens downward and has a maximum', 'is a straight line', 'has no vertex'], answer: 0, explanation: 'A positive leading coefficient gives a valley shape with a lowest point.' },
      { lvl: 1, type: 'numeric', prompt: 'How many real roots does a quadratic with discriminant 49 have?', answer: 2, tolerance: 0, explanation: 'Δ > 0 means two distinct real roots.' },
      { lvl: 2, type: 'mcq', prompt: 'Solve 2x² + 3x − 5 = 0.', choices: ['x = 1 or x = −2.5', 'x = −1 or x = 2.5', 'x = 5 or x = −2', 'no real roots'], answer: 0, explanation: 'Δ = 9 + 40 = 49, so x = (−3 ± 7)/4, giving 1 and −2.5.' },
      { lvl: 2, type: 'mcq', prompt: 'Write x² + 6x + 5 in completed-square form.', choices: ['(x + 3)² − 4', '(x + 3)² + 4', '(x + 6)² − 31', '(x + 3)² − 9'], answer: 0, explanation: 'Half of 6 is 3; (x+3)² = x² + 6x + 9, so subtract 4 to restore the +5.' },
      { lvl: 2, type: 'mcq', prompt: 'Solve x² = 5x correctly.', choices: ['x = 0 or x = 5', 'x = 5 only', 'x = 0 only', 'no solution'], answer: 0, explanation: 'Move everything across: x(x−5) = 0. Dividing by x would discard the root x = 0.' },
      { lvl: 2, type: 'numeric', prompt: 'For y = x² + 6x + 5, what is the x-coordinate of the vertex?', answer: -3, tolerance: 0, explanation: 'x = −b/(2a) = −6/2 = −3.' },
      { lvl: 3, type: 'numeric', prompt: 'A rectangle is 3 m longer than it is wide and has area 40 m². What is its width in metres?', answer: 5, tolerance: 0, explanation: 'w² + 3w − 40 = 0 gives (w+8)(w−5) = 0. The width cannot be −8, so w = 5 m.' },
      { lvl: 3, type: 'numeric', prompt: 'A farmer fences three sides of a rectangular pen with 40 m of fencing. What is the maximum area in m²?', answer: 200, tolerance: 0, explanation: 'A = x(40−2x) = −2(x−10)² + 200, so the maximum is 200 m² at x = 10.' },
      { lvl: 3, type: 'mcq', prompt: 'A quadratic model gives a discriminant of −16. What does this mean in context?', choices: ['there are no real solutions — the described situation never occurs', 'there are two solutions, both negative', 'the model has an arithmetic error', 'there is one repeated solution'], answer: 0, explanation: 'Δ < 0 means the parabola never meets the axis. In a model — say, a ball reaching a given height — it means that height is never attained.' },
      { lvl: 3, type: 'mcq', prompt: 'For 2x² + 3x − 5 = 0, which check confirms the roots 1 and −2.5?', choices: ['sum = −b/a = −1.5 and product = c/a = −2.5', 'sum = b/a and product = −c/a', 'sum = a/b and product = a/c', 'the roots must multiply to give b'], answer: 0, explanation: 'Sum of roots = −b/a = −3/2 = −1.5 ✓, product = c/a = −5/2 = −2.5 ✓. A fast, independent verification.' },
    ],
  },

  // ==========================================================================
  'math.I1.coordinate-geometry': {
    estMinutes: 240,
    hook: String.raw`**Coordinate geometry is Descartes' great idea: every geometric question becomes an algebraic one.** Instead of proving things about lengths and angles with constructions, you compute with coordinates. Distance becomes Pythagoras, a line becomes an equation, a circle becomes $x^2+y^2=r^2$ — and problems that need real ingenuity in pure geometry become routine algebra.`,
    sections: [
      { h: 'Distance and midpoint — Pythagoras in disguise',
        body: String.raw`The **distance** between $(x_1,y_1)$ and $(x_2,y_2)$ is

$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

This is not a new formula to memorise — it *is* Pythagoras. Draw the horizontal and vertical differences and you have a right triangle whose legs are $|x_2-x_1|$ and $|y_2-y_1|$; the distance is its hypotenuse. Because the differences are squared, **the order of subtraction does not matter** here.

The **midpoint** is simply the average of the coordinates:

$$M = \left(\frac{x_1+x_2}{2},\; \frac{y_1+y_2}{2}\right)$$

which makes sense — the middle of a journey is the average of its ends, done separately in each direction.

The **section formula** generalises this: the point dividing the segment in the ratio $m:n$ (from the first point) is

$$\left(\frac{mx_2 + nx_1}{m+n},\; \frac{my_2 + ny_1}{m+n}\right)$$

Note the cross-pairing — $m$ goes with $x_2$. Setting $m=n=1$ recovers the midpoint, which is the check to use if you cannot recall the arrangement.`,
        formulas: ['Distance d = √((x₂−x₁)² + (y₂−y₁)²)  — Pythagoras',
          'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)',
          'Section (ratio m:n) = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))'],
      },
      { h: 'Lines: gradient, parallel and perpendicular',
        body: String.raw`Gradient is unchanged from F2: $m = \dfrac{y_2-y_1}{x_2-x_1}$. What is new is the perpendicular relationship.

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

The point–gradient form is the workhorse — it needs no rearranging to use and no separate step to find $c$.`,
        example: { title: 'Perpendicular through a point',
          q: 'Find the line through (2, 7) perpendicular to $y = \\tfrac23 x + 1$.',
          solution: 'The given gradient is $\\tfrac23$, so the perpendicular gradient is $-\\tfrac32$. Point–gradient form: $y - 7 = -\\tfrac32(x-2)$, giving $y = -\\tfrac32 x + 10$. Check the product: $\\tfrac23 \\times -\\tfrac32 = -1$ ✓, and at $x=2$, $y = -3+10 = 7$ ✓.' },
      },
      { h: 'The circle as an equation',
        body: String.raw`A circle is the set of points at a fixed distance $r$ from a centre. Apply the distance formula to that sentence and the equation appears:

$$(x-h)^2 + (y-k)^2 = r^2 \qquad \text{centre } (h,k), \text{ radius } r$$

Centred at the origin it is simply $x^2 + y^2 = r^2$.

**Read the signs carefully.** $(x-3)^2 + (y+2)^2 = 25$ has centre $(3, -2)$ — the sign flips, because the form subtracts the centre's coordinates. And the right-hand side is $r^2$, so the radius here is 5, not 25.

Circles often arrive **expanded**, and completing the square recovers the centre and radius:

$$x^2 + y^2 - 6x + 4y - 12 = 0$$
$$(x-3)^2 - 9 + (y+2)^2 - 4 - 12 = 0 \Rightarrow (x-3)^2 + (y+2)^2 = 25$$

So the same circle as above. This is exactly the completing-the-square skill from Quadratics, used twice.

A useful geometric fact for later: **the tangent at a point is perpendicular to the radius at that point.** Combined with the negative-reciprocal rule, that gives you tangent equations with no calculus.`,
        example: { title: 'Recovering a circle from expanded form',
          q: 'Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.',
          solution: 'Complete the square in each variable: $x^2-6x = (x-3)^2-9$ and $y^2+4y = (y+2)^2-4$. Substituting: $(x-3)^2 + (y+2)^2 = 25$. Centre $(3,-2)$, radius 5.',
          moral: 'The sign of the centre flips relative to the bracket, and the constant is r², not r.' },
      },
      { h: 'Proving geometry with algebra',
        body: String.raw`The real power of coordinates is that geometric claims become computations anyone can verify.

To show a quadrilateral is a **parallelogram**, show both pairs of opposite sides have equal gradients — or, more slickly, that the **diagonals share a midpoint** (a single midpoint calculation each).

To show a triangle is **right-angled**, show two sides have gradients multiplying to $-1$ — or verify Pythagoras on the three squared distances.

To show a triangle is **isosceles**, compute the three side lengths and find two equal. Note you can compare $d^2$ values and skip the square roots entirely, since lengths are positive.

*Worked proof.* Show that $A(1,2)$, $B(4,6)$, $C(8,3)$ form a right-angled triangle.

Gradients: $m_{AB} = \dfrac{6-2}{4-1} = \dfrac43$, and $m_{BC} = \dfrac{3-6}{8-4} = -\dfrac34$. Their product is $-1$, so $AB \perp BC$ and the right angle is at $B$.

Cross-check with distances: $AB^2 = 9+16 = 25$, $BC^2 = 16+9=25$, $AC^2 = 49+1 = 50$. Since $25+25 = 50$, Pythagoras confirms it — and incidentally the triangle is isosceles too.`,
      },
    ],
    formulas: ['d = √((x₂−x₁)² + (y₂−y₁)²);  midpoint = averages of the coordinates',
      'Parallel: m₁ = m₂.  Perpendicular: m₁m₂ = −1 (negative reciprocal)',
      'Point–gradient form: y − y₁ = m(x − x₁)',
      'Circle: (x − h)² + (y − k)² = r², centre (h, k), radius r',
      'Tangent ⊥ radius at the point of contact'],
    summary: [
      'The distance formula is Pythagoras applied to coordinate differences.',
      'The midpoint is the average of the endpoints, coordinate by coordinate.',
      'Parallel means equal gradients; perpendicular means the product is −1 — negative AND reciprocal.',
      'Point–gradient form is the fastest route to a line through a known point.',
      'A circle is the distance formula rearranged; the centre signs flip and the constant is r².',
      'Completing the square converts an expanded circle back to centre–radius form.',
      'Geometric properties become computations: equal gradients, −1 products, equal squared distances.',
    ],
    mistakes: [
      '**Taking the reciprocal without the negative** (or the negative without the reciprocal) for perpendicular gradients. **Fix:** check the product equals −1 before proceeding — it costs one multiplication.',
      '**Reading the circle centre with the wrong sign.** Taking (x−3)² + (y+2)² = 25 to have centre (−3, 2). **Fix:** the form subtracts the centre, so the centre is (3, −2). Substitute the centre back — it should give 0 + 0 = 0 on the left of the shifted terms.',
      '**Treating the right-hand side as the radius.** Reporting radius 25 instead of 5. **Fix:** the constant is r²; take the square root.',
      '**Subtracting coordinates in different orders** within the gradient formula, flipping the sign. **Fix:** fix a first and second point and keep that order in both differences.',
      '**Forgetting to halve when completing the square** for a circle, so the centre is wrong. **Fix:** half the coefficient of x, then square — the same rule as quadratics.',
      '**Using the section formula with m and n paired to the wrong points.** **Fix:** set m = n = 1 and confirm you recover the midpoint; if not, the pairing is reversed.',
      '**Computing square roots unnecessarily** when comparing lengths. **Fix:** compare d² values — the comparison is identical and the arithmetic is exact.',
    ],
    tricks: [
      '**Compare squared distances** when proving isosceles or right-angled properties. No surds, no rounding, no error.',
      '**Use point–gradient form** rather than y = mx + c whenever you have a point — it removes the step of solving for c.',
      '**Prove a parallelogram via diagonals sharing a midpoint** — two calculations instead of four gradients.',
      '**Sketch the points before computing.** A rough plot tells you what to expect and catches sign errors immediately.',
      '**Verify a perpendicular gradient by multiplying** — the product must be exactly −1.',
      '**For tangent problems, use "tangent ⊥ radius"**: find the radius gradient, take the negative reciprocal, then apply point–gradient form.',
      '**Recover a circle\'s centre by halving the x and y coefficients and flipping their signs** — for x² + y² − 6x + 4y + c = 0 the centre is (3, −2) directly.',
    ],
    memory: [
      '"Distance is Pythagoras with coordinates."',
      '"Midpoint is the average."',
      '"Perpendicular: flip it and negate it."',
      '"The circle equation subtracts the centre, so the sign you see is the opposite of the centre."',
      '"The constant is r squared."',
      '"Tangent is perpendicular to the radius."',
      '"Compare d², not d."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'Find the distance between (1, 2) and (4, 6).', answer: 5, tolerance: 0, explanation: '√(3² + 4²) = √25 = 5.' },
      { lvl: 1, type: 'mcq', prompt: 'Find the midpoint of (2, 4) and (6, 10).', choices: ['(4, 7)', '(8, 14)', '(2, 3)', '(4, 6)'], answer: 0, explanation: 'Average each coordinate: ((2+6)/2, (4+10)/2) = (4, 7).' },
      { lvl: 1, type: 'mcq', prompt: 'What is the centre of the circle (x − 3)² + (y + 2)² = 25?', choices: ['(3, −2)', '(−3, 2)', '(3, 2)', '(−3, −2)'], answer: 0, explanation: 'The form subtracts the centre, so the signs in the brackets are reversed relative to the centre.' },
      { lvl: 1, type: 'numeric', prompt: 'What is the radius of the circle (x − 3)² + (y + 2)² = 25?', answer: 5, tolerance: 0, explanation: 'The constant is r², so r = √25 = 5.' },
      { lvl: 2, type: 'mcq', prompt: 'What gradient is perpendicular to 2/3?', choices: ['−3/2', '3/2', '−2/3', '2/3'], answer: 0, explanation: 'Take the negative reciprocal. Check: (2/3)(−3/2) = −1.' },
      { lvl: 2, type: 'mcq', prompt: 'Find the line through (2, 7) with gradient −3/2.', choices: ['y = −1.5x + 10', 'y = −1.5x + 7', 'y = 1.5x + 4', 'y = −1.5x − 10'], answer: 0, explanation: 'y − 7 = −1.5(x − 2) gives y = −1.5x + 3 + 7 = −1.5x + 10.' },
      { lvl: 2, type: 'mcq', prompt: 'Find the centre and radius of x² + y² − 6x + 4y − 12 = 0.', choices: ['centre (3, −2), radius 5', 'centre (−3, 2), radius 5', 'centre (3, −2), radius 25', 'centre (6, −4), radius 12'], answer: 0, explanation: 'Completing the square gives (x−3)² + (y+2)² = 25.' },
      { lvl: 2, type: 'numeric', prompt: 'A line has gradient 4. What is the gradient of a line perpendicular to it? Give your answer as a decimal.', answer: -0.25, tolerance: 0.001, explanation: 'Negative reciprocal of 4 is −1/4 = −0.25.' },
      { lvl: 3, type: 'mcq', prompt: 'A(1,2), B(4,6), C(8,3). Where is the right angle?', choices: ['at B, since m_AB × m_BC = (4/3)(−3/4) = −1', 'at A', 'at C', 'the triangle is not right-angled'], answer: 0, explanation: 'The gradients of AB and BC multiply to −1, so those sides are perpendicular at B. Distances confirm it: 25 + 25 = 50.' },
      { lvl: 3, type: 'mcq', prompt: 'What is the quickest way to prove a quadrilateral is a parallelogram using coordinates?', choices: ['show the diagonals share a midpoint', 'compute all four side lengths', 'show all angles are 90°', 'show the area is positive'], answer: 0, explanation: 'Diagonals of a parallelogram bisect each other, so two midpoint calculations suffice — fewer steps than four gradients.' },
      { lvl: 3, type: 'mcq', prompt: 'Why can you compare d² instead of d when testing whether a triangle is isosceles?', choices: ['distances are positive, so squaring preserves the comparison and avoids surds', 'because d² is always an integer', 'it is not valid — you must take square roots', 'because Pythagoras requires squares'], answer: 0, explanation: 'Squaring is increasing on positive numbers, so equal squares mean equal lengths — with exact arithmetic and no rounding.' },
      { lvl: 3, type: 'mcq', prompt: 'To find the tangent to a circle at a point on it, what is the key fact?', choices: ['the tangent is perpendicular to the radius at that point', 'the tangent passes through the centre', 'the tangent has the same gradient as the radius', 'the tangent is horizontal'], answer: 0, explanation: 'Find the radius gradient, take its negative reciprocal, then use point–gradient form — no calculus needed.' },
    ],
  },

  // ==========================================================================
  'math.I1.trigonometry-i': {
    estMinutes: 270,
    hook: String.raw`**Trigonometry exists because of similarity.** All right triangles with the same acute angle are similar, so their side *ratios* depend only on that angle — never on size. Those fixed ratios get names (sine, cosine, tangent), and suddenly you can find distances you cannot measure: the height of a tower, the width of a river, the resolved components of a force in physics.`,
    sections: [
      { h: 'Why the ratios are well-defined',
        body: String.raw`Take any right triangle with an acute angle $\theta$. Any other right triangle with the same $\theta$ has the same three angles, so by **AA** the two are similar (F2 Geometry II), and corresponding sides are in proportion.

Therefore the ratio $\dfrac{\text{opposite}}{\text{hypotenuse}}$ is **the same for every** right triangle containing that angle. It depends on $\theta$ alone — so it deserves a name, and it is called $\sin\theta$.

Relative to the chosen angle $\theta$:

- **Opposite** — the side facing $\theta$.
- **Adjacent** — the side touching $\theta$ that is not the hypotenuse.
- **Hypotenuse** — opposite the right angle; always the longest, and never changes role.

$$\sin\theta = \frac{O}{H}, \qquad \cos\theta = \frac{A}{H}, \qquad \tan\theta = \frac{O}{A}$$

remembered as **SOH-CAH-TOA**.

**Opposite and adjacent swap when you change reference angle** — this is the single biggest source of error. The hypotenuse is fixed by the right angle, but the other two labels depend entirely on which acute angle you are working from. Label the triangle *after* choosing $\theta$, every time.

Two immediate consequences: since $O < H$ and $A < H$, both $\sin\theta$ and $\cos\theta$ are **always less than 1** for an acute angle. An answer of $\sin\theta = 1.4$ is impossible — a reliable error detector. $\tan\theta$, however, has no such bound.`,
        svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Right triangle labelled opposite adjacent hypotenuse" xmlns="http://www.w3.org/2000/svg">
  <polygon points="70,140 320,140 320,40" fill="none" stroke="#6ee7a8" stroke-width="2.5"/>
  <rect x="303" y="123" width="17" height="17" fill="none" stroke="#9aa8c4" stroke-width="2"/>
  <path d="M110 140 A 40 40 0 0 0 100 118" fill="none" stroke="#6366f1" stroke-width="2"/>
  <text x="112" y="128" font-size="13" fill="#6366f1">θ</text>
  <text x="180" y="158" font-size="12" fill="#9aa8c4">adjacent</text>
  <text x="330" y="95" font-size="12" fill="#9aa8c4">opposite</text>
  <text x="160" y="80" font-size="12" fill="#9aa8c4">hypotenuse</text>
  <text x="70" y="24" font-size="11" fill="#e6ecff">labels depend on which angle is θ</text>
</svg>`,
      },
      { h: 'Using the ratios: find a side, find an angle',
        body: String.raw`**To find a side**, pick the ratio containing the side you want and the side you know.

A ladder makes $60°$ with the ground and reaches 4 m up a wall. How long is the ladder? Here the 4 m is *opposite* the $60°$ and the ladder is the *hypotenuse*, so use sine:

$$\sin 60° = \frac{4}{L} \Rightarrow L = \frac{4}{\sin 60°} \approx \frac{4}{0.866} \approx 4.6 \text{ m}$$

**To find an angle**, use the inverse functions $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$ (also written arcsin, etc.). If the opposite is 3 and the adjacent 4:

$$\tan\theta = \tfrac34 \Rightarrow \theta = \tan^{-1}(0.75) \approx 36.9°$$

Two mechanical cautions that cause more lost marks than any concept here:

- **$\sin^{-1}$ is not $\dfrac{1}{\sin}$.** It is the inverse *function* — "which angle has this ratio?" The reciprocal $\tfrac{1}{\sin\theta}$ is a different thing entirely (called cosec).
- **Check the calculator is in degrees.** A calculator in radian mode gives confidently wrong answers with no warning. Verify by computing $\sin 30°$: it must be exactly 0.5.

**Choosing which ratio to use:** label the three sides relative to your angle, mark which two are involved (one known, one wanted), and the pair names the ratio. Only one of SOH, CAH, TOA will fit.`,
        example: { title: 'Angle of elevation',
          q: 'From 50 m away, the angle of elevation to the top of a tower is 32°. How tall is the tower?',
          solution: 'The 50 m is *adjacent* to the angle and the height is *opposite*, so use tangent: $\\tan 32° = \\dfrac{h}{50}$, giving $h = 50\\tan 32° \\approx 50 \\times 0.625 \\approx 31.2$ m.',
          moral: 'Angle of elevation is measured up from the horizontal; angle of depression is measured down from it — and the two are equal between the same pair of points (alternate angles).' },
      },
      { h: 'The exact values, and where they come from',
        body: String.raw`Three angles have exact ratios you should know without a calculator, and they come from two simple triangles.

**The $45°$ triangle:** take a unit square and cut along the diagonal. Both legs are 1 and the hypotenuse is $\sqrt2$, so $\sin45° = \cos45° = \tfrac{1}{\sqrt2}$ and $\tan45° = 1$.

**The $30°$–$60°$ triangle:** take an equilateral triangle of side 2 and drop a perpendicular. It splits into two right triangles with hypotenuse 2, short side 1 and (by Pythagoras) long side $\sqrt3$.

| $\theta$ | $\sin$ | $\cos$ | $\tan$ |
|---|---|---|---|
| $0°$ | 0 | 1 | 0 |
| $30°$ | $\tfrac12$ | $\tfrac{\sqrt3}{2}$ | $\tfrac{1}{\sqrt3}$ |
| $45°$ | $\tfrac{1}{\sqrt2}$ | $\tfrac{1}{\sqrt2}$ | 1 |
| $60°$ | $\tfrac{\sqrt3}{2}$ | $\tfrac12$ | $\sqrt3$ |
| $90°$ | 1 | 0 | undefined |

Read the pattern rather than memorising 15 numbers: **sine increases from 0 to 1 as the angle grows; cosine decreases from 1 to 0**; and the $30°$ and $60°$ values are each other's swapped. That reflects the identity $\sin\theta = \cos(90°-\theta)$ — the two acute angles in a right triangle are complementary, and one's opposite is the other's adjacent.

$\tan 90°$ is undefined because the adjacent side shrinks to zero, and division by zero is undefined — the same reason a vertical line has no gradient.`,
        formulas: ['sin θ = O/H,  cos θ = A/H,  tan θ = O/A  (SOH-CAH-TOA)',
          'tan θ = sin θ / cos θ',
          'sin²θ + cos²θ = 1  (Pythagoras, in ratio form)',
          'sin θ = cos(90° − θ)',
          'For acute θ: 0 < sin θ < 1 and 0 < cos θ < 1'],
      },
      { h: 'The unit circle and the first identity',
        body: String.raw`Place a right triangle with hypotenuse 1 inside a circle of radius 1, with $\theta$ at the origin. Then the horizontal leg is $\cos\theta$ and the vertical leg is $\sin\theta$ — so the point on the circle is exactly $(\cos\theta, \sin\theta)$.

Applying Pythagoras to that triangle gives the most important identity in trigonometry:

$$\sin^2\theta + \cos^2\theta = 1$$

(The notation $\sin^2\theta$ means $(\sin\theta)^2$, not $\sin(\theta^2)$.) This is not a new fact — it *is* Pythagoras, written with ratios instead of lengths.

It is immediately useful: given $\sin\theta = \tfrac35$ for an acute angle, $\cos^2\theta = 1 - \tfrac{9}{25} = \tfrac{16}{25}$, so $\cos\theta = \tfrac45$, and then $\tan\theta = \tfrac{\sin\theta}{\cos\theta} = \tfrac34$. One ratio determines the other two.

The unit circle also explains what happens **beyond $90°$**, where "opposite over hypotenuse" no longer makes sense: the coordinates keep going, so $\sin$ and $\cos$ are defined for any angle, taking negative values in the appropriate quadrants. That extension — and the wave shape it produces — is the subject of Trigonometry II, and it is why sine describes oscillations in physics.`,
        example: { title: 'One ratio gives the rest',
          q: 'For an acute angle, $\\sin\\theta = \\tfrac35$. Find $\\cos\\theta$ and $\\tan\\theta$.',
          solution: 'From $\\sin^2\\theta+\\cos^2\\theta=1$: $\\cos^2\\theta = 1-\\tfrac{9}{25} = \\tfrac{16}{25}$, so $\\cos\\theta = \\tfrac45$ (positive, since $\\theta$ is acute). Then $\\tan\\theta = \\tfrac{3/5}{4/5} = \\tfrac34$.',
          moral: 'This is the 3-4-5 triangle — recognising Pythagorean triples makes trigonometry questions instant.' },
      },
    ],
    formulas: ['SOH-CAH-TOA: sin = O/H, cos = A/H, tan = O/A',
      'Inverse functions sin⁻¹, cos⁻¹, tan⁻¹ find the ANGLE (not a reciprocal)',
      'sin²θ + cos²θ = 1;  tan θ = sin θ / cos θ',
      'Exact: sin30 = ½, cos60 = ½, sin45 = cos45 = 1/√2, tan45 = 1, tan60 = √3',
      'sin θ = cos(90° − θ)'],
    summary: [
      'The ratios are well-defined because all right triangles with a given acute angle are similar.',
      'Opposite and adjacent depend on the chosen angle; only the hypotenuse is fixed.',
      'For acute angles sin and cos are always below 1 — a built-in error check.',
      'Pick the ratio from the two sides involved: one known, one wanted.',
      'Inverse functions find angles; sin⁻¹ is not 1/sin, and the calculator must be in degrees.',
      'The 45° and 30°–60° triangles generate all the exact values worth memorising.',
      'sin²θ + cos²θ = 1 is Pythagoras in ratio form, and one ratio determines the other two.',
    ],
    mistakes: [
      '**Mislabelling opposite and adjacent** after switching reference angle. **Fix:** choose θ first, then label all three sides relative to it. Only the hypotenuse keeps its role.',
      '**Treating sin⁻¹ as 1/sin.** **Fix:** sin⁻¹ answers "which angle gives this ratio?" The reciprocal 1/sin θ is cosec θ, a different quantity.',
      '**Leaving the calculator in radian mode.** Answers are wrong with no warning. **Fix:** test sin 30° — it must be exactly 0.5.',
      '**Accepting sin θ > 1.** **Fix:** impossible for any angle, since the opposite side cannot exceed the hypotenuse. Recheck which side you called the hypotenuse.',
      '**Using the ratios in a non-right triangle.** SOH-CAH-TOA requires a right angle. **Fix:** either drop a perpendicular to create one, or wait for the sine and cosine rules in Trigonometry II.',
      '**Multiplying when you should divide** when the unknown is in the denominator. From sin 60° = 4/L, writing L = 4 sin 60°. **Fix:** rearranging gives L = 4 ÷ sin 60°; check that the hypotenuse came out as the longest side.',
      '**Reading sin²θ as sin(θ²).** **Fix:** sin²θ means (sin θ)², the ratio squared.',
      '**Rounding intermediate values** and carrying the error forward. **Fix:** keep full precision in the calculator until the final answer, then round once.',
    ],
    tricks: [
      '**Sketch and label the triangle before touching a calculator.** Most trigonometry errors are labelling errors, not arithmetic ones.',
      '**Check plausibility with the size rule:** the side opposite the larger angle is longer, and the hypotenuse is longest of all.',
      '**Reconstruct the exact values from the two special triangles** (unit square cut diagonally; equilateral triangle of side 2 split in half) rather than memorising a table you might misremember.',
      '**Use sin θ = cos(90° − θ)** to halve what you need to recall.',
      '**Spot Pythagorean triples in trig questions** — 3-4-5 and 5-12-13 turn a calculation into instant recall.',
      '**When the unknown is in the denominator, take reciprocals of both sides** rather than cross-multiplying under pressure.',
      '**Verify a found angle by substituting back** into the original ratio.',
    ],
    memory: [
      '"SOH-CAH-TOA" — and label the sides only after choosing the angle.',
      '"Similar triangles are why the ratios exist at all."',
      '"Sine and cosine can never exceed 1."',
      '"sin⁻¹ finds an angle; it is not one over sine."',
      '"Check the calculator with sin 30 = 0.5."',
      '"sin² + cos² = 1 is just Pythagoras."',
      '"Sine rises, cosine falls" from 0° to 90°.',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'In a right triangle, sin θ equals:', choices: ['opposite ÷ hypotenuse', 'adjacent ÷ hypotenuse', 'opposite ÷ adjacent', 'hypotenuse ÷ opposite'], answer: 0, explanation: 'SOH: sine is opposite over hypotenuse.' },
      { lvl: 1, type: 'numeric', prompt: 'What is sin 30°? Give your answer as a decimal.', answer: 0.5, tolerance: 0.001, explanation: 'From the half-equilateral triangle: the side opposite 30° is 1 and the hypotenuse is 2.' },
      { lvl: 1, type: 'numeric', prompt: 'What is tan 45°?', answer: 1, tolerance: 0.001, explanation: 'In the half-square triangle the opposite and adjacent are equal, so the ratio is 1.' },
      { lvl: 1, type: 'mcq', prompt: 'Which side is never relabelled when you switch reference angle?', choices: ['the hypotenuse', 'the opposite', 'the adjacent', 'all three change'], answer: 0, explanation: 'The hypotenuse is fixed by the right angle. Opposite and adjacent swap with the chosen acute angle.' },
      { lvl: 2, type: 'numeric', prompt: 'From 50 m away, the angle of elevation to a tower top is 32°. How tall is the tower, in metres (1 dp)?', answer: 31.2, tolerance: 0.3, explanation: 'tan 32° = h/50, so h = 50 tan 32° ≈ 31.2 m.' },
      { lvl: 2, type: 'numeric', prompt: 'A right triangle has opposite 3 and adjacent 4. Find θ in degrees (1 dp).', answer: 36.9, tolerance: 0.2, explanation: 'tan θ = 3/4, so θ = tan⁻¹(0.75) ≈ 36.9°.' },
      { lvl: 2, type: 'mcq', prompt: 'A ladder makes 60° with the ground and reaches 4 m up a wall. How long is it?', choices: ['about 4.6 m', 'about 3.5 m', 'about 8.0 m', 'about 2.0 m'], answer: 0, explanation: 'sin 60° = 4/L so L = 4 ÷ 0.866 ≈ 4.6 m — longer than 4 m, as a hypotenuse must be.' },
      { lvl: 2, type: 'mcq', prompt: 'Why can sin θ never exceed 1 for an acute angle?', choices: ['the opposite side cannot be longer than the hypotenuse', 'because angles are less than 90°', 'because sine is a decimal', 'it can exceed 1 for large triangles'], answer: 0, explanation: 'The hypotenuse is the longest side, so O/H < 1 always. A value above 1 signals a labelling error.' },
      { lvl: 3, type: 'mcq', prompt: 'For an acute angle with sin θ = 3/5, what is tan θ?', choices: ['3/4', '4/5', '5/3', '4/3'], answer: 0, explanation: 'cos²θ = 1 − 9/25 = 16/25 so cos θ = 4/5, and tan θ = (3/5)/(4/5) = 3/4. This is the 3-4-5 triangle.' },
      { lvl: 3, type: 'mcq', prompt: 'Why is tan 90° undefined?', choices: ['the adjacent side shrinks to zero, and division by zero is undefined', 'because sine is 1 there', 'because 90° is not an acute angle', 'it equals infinity, which is a valid answer'], answer: 0, explanation: 'tan = O/A and A → 0 as the angle approaches 90°. The same reason a vertical line has no gradient.' },
      { lvl: 3, type: 'mcq', prompt: 'What guarantees that sin θ is the same for every right triangle containing angle θ?', choices: ['all such triangles are similar by AA, so corresponding sides are proportional', 'they all have the same area', 'the hypotenuse is always 1', 'it is true only for the special angles'], answer: 0, explanation: 'Equal angles force similarity, and similar triangles have equal side ratios — which is precisely why the ratios can be named as functions of the angle alone.' },
      { lvl: 3, type: 'mcq', prompt: 'A student computes sin 60° and gets −0.305. What has gone wrong?', choices: ['the calculator is in radian mode', 'the triangle was mislabelled', 'sine can be negative for acute angles', 'the answer is correct'], answer: 0, explanation: 'sin 60° ≈ 0.866 in degrees. The value −0.305 is sin(60 radians) — always confirm with sin 30° = 0.5.' },
    ],
  },

  // ==========================================================================
  'math.I1.sequences-series': {
    estMinutes: 240,
    hook: String.raw`**A sequence is a pattern with a rule, and a series is what you get when you add it up.** Two patterns dominate everything: adding a constant each step (arithmetic — the discrete version of a straight line) and multiplying by a constant each step (geometric — the discrete version of exponential growth). Compound interest, population growth, loan repayments and the halving in radioactive decay are all one of these two.`,
    sections: [
      { h: 'Sequences, terms and the two kinds of rule',
        body: String.raw`A **sequence** is an ordered list of numbers; each entry is a **term**, and $a_n$ (or $u_n$) denotes the $n$-th one.

Rules come in two flavours, and both are useful:

- **Recursive** — defines each term from the previous one: $a_1 = 3$, $a_{n+1} = a_n + 4$. Natural to write, but to reach the 100th term you must pass through 99 others.
- **Explicit (position-to-term)** — gives $a_n$ directly from $n$: $a_n = 4n - 1$. This is the one worth having, because $a_{100}$ is a single substitution.

The two dominant patterns:

- **Arithmetic:** a constant **common difference** $d$ is *added*. $3, 7, 11, 15,\ldots$ with $d = 4$.
- **Geometric:** a constant **common ratio** $r$ is *multiplied*. $2, 6, 18, 54,\ldots$ with $r = 3$.

**Diagnose before choosing a formula** — this is where most errors begin. Compute successive differences; if they are constant, it is arithmetic. Otherwise compute successive ratios; if those are constant, it is geometric. If neither, it is some other pattern (squares, Fibonacci, …) and neither formula applies.`,
      },
      { h: 'Arithmetic sequences and their sum',
        body: String.raw`With first term $a$ and common difference $d$:

$$a_n = a + (n-1)d$$

The $(n-1)$ is the detail students get wrong: reaching the $n$-th term takes $n-1$ *steps*, not $n$, because the first term is already there. Check on a small case — $a_1 = a + 0\cdot d = a$ ✓.

For the sum of the first $n$ terms (an **arithmetic series**):

$$S_n = \frac{n}{2}\big(2a + (n-1)d\big) = \frac{n}{2}(a + l)$$

where $l$ is the last term. The second form is the more memorable: **the sum is the number of terms times the average of the first and last.**

The reason is Gauss's trick. Write the sum forwards and backwards and add them in pairs:

$$1+2+\cdots+100$$
$$100+99+\cdots+1$$

Every column totals 101, and there are 100 columns, so twice the sum is $100\times101 = 10100$ and $S = 5050$. That pairing argument *is* the formula, and reconstructing it takes ten seconds if you forget the algebra.`,
        formulas: ['Arithmetic: aₙ = a + (n − 1)d',
          'Sum: Sₙ = (n/2)(2a + (n−1)d) = (n/2)(a + l)',
          'The sum is n × (average of first and last term)'],
        example: { title: 'Finding the position of a term',
          q: 'For the sequence 3, 7, 11, 15, …, which term equals 99?',
          solution: 'Here $a=3$, $d=4$, so $a_n = 3 + 4(n-1) = 4n - 1$. Setting $4n - 1 = 99$ gives $n = 25$. So 99 is the 25th term.',
          moral: 'Simplify the explicit formula first — 4n − 1 is far easier to work with than 3 + 4(n−1).' },
      },
      { h: 'Geometric sequences and their sum',
        body: String.raw`With first term $a$ and common ratio $r$:

$$a_n = ar^{\,n-1}$$

Again the exponent is $n-1$, for the same reason: the first term has been multiplied zero times.

The sum of the first $n$ terms:

$$S_n = \frac{a(1 - r^n)}{1 - r} \qquad (r \ne 1)$$

The behaviour depends entirely on $|r|$, and reading it correctly matters more than the algebra:

- $|r| > 1$ — terms grow without bound (compound interest, unchecked population).
- $|r| < 1$ — terms shrink toward zero (decay, bouncing ball, drug clearance).
- $r < 0$ — terms alternate in sign.

When $|r| < 1$, the terms shrink so fast that an *infinite* number of them still adds to a finite total:

$$S_\infty = \frac{a}{1-r} \qquad (|r| < 1)$$

That is genuinely surprising the first time: $1 + \tfrac12 + \tfrac14 + \tfrac18 + \cdots = \dfrac{1}{1-\tfrac12} = 2$. Adding infinitely many positive numbers gives exactly 2 — never more. The condition $|r|<1$ is essential; without it the sum diverges and the formula is meaningless.`,
        formulas: ['Geometric: aₙ = ar^(n−1)',
          'Sum: Sₙ = a(1 − rⁿ)/(1 − r), r ≠ 1',
          'Infinite sum: S∞ = a/(1 − r), valid ONLY if |r| < 1',
          '|r| > 1 grows;  |r| < 1 decays;  r < 0 alternates'],
        example: { title: 'An infinite sum that is finite',
          q: 'A ball is dropped from 10 m and each bounce reaches 60% of the previous height. Find the total vertical distance travelled before it stops.',
          solution: 'It falls 10 m, then each bounce contributes an up *and* a down. The bounce heights form a geometric sequence with $a = 6$, $r = 0.6$, summing to $\\dfrac{6}{1-0.6} = 15$ m — counted twice (up and down) gives 30 m. Total: $10 + 30 = 40$ m.',
          moral: 'Infinitely many bounces, finite total distance — because |r| < 1.' },
      },
      { h: 'Where sequences model the real world',
        body: String.raw`The two patterns correspond to the two most common kinds of change, and telling them apart is the real-world skill.

| Situation | Type | Why |
|---|---|---|
| Saving ₹500 a month | arithmetic | a fixed amount *added* |
| Compound interest at 8% | geometric, $r = 1.08$ | a fixed *proportion* added |
| Simple interest | arithmetic | interest on the original only |
| Radioactive half-life | geometric, $r = 0.5$ | halves each period |
| Depreciation at 15%/yr | geometric, $r = 0.85$ | retains 85% each year |

**Compound interest** is the most important instance. An amount $P$ at rate $i$ per period, after $n$ periods:

$$A = P(1+i)^n$$

₹10 000 at 8% for 10 years gives $10000\times1.08^{10} \approx ₹21\,589$ — more than double, whereas simple interest would give ₹18 000. The gap between the two *is* the difference between adding and multiplying, and it widens with time.

Two modelling cautions worth stating:

- **Match the rate to the period.** 12% per year compounded monthly means $i = 0.01$ and $n = 12$ per year, not $i = 0.12$.
- **Growth models eventually fail.** No population grows geometrically forever; resources run out. The model is valid over a domain, exactly as with linear models.`,
      },
    ],
    formulas: ['Arithmetic: aₙ = a + (n−1)d;  Sₙ = (n/2)(2a + (n−1)d) = (n/2)(a + l)',
      'Geometric: aₙ = ar^(n−1);  Sₙ = a(1 − rⁿ)/(1 − r)',
      'S∞ = a/(1 − r), only when |r| < 1',
      'Compound interest: A = P(1 + i)ⁿ',
      'Diagnose: constant difference → arithmetic; constant ratio → geometric'],
    summary: [
      'A sequence lists terms by a rule; explicit rules beat recursive ones for reaching far-off terms.',
      'Arithmetic adds a constant d; geometric multiplies by a constant r.',
      'Diagnose by checking differences first, then ratios — before selecting any formula.',
      'Both nth-term formulas use n − 1, because the first term has taken zero steps.',
      'An arithmetic sum is the number of terms times the average of the first and last (Gauss pairing).',
      'A geometric series with |r| < 1 has a finite infinite sum, a/(1 − r).',
      'Fixed amounts are arithmetic; fixed percentages are geometric — which is why compound beats simple interest.',
    ],
    mistakes: [
      '**Using n instead of n − 1** in the nth-term formula. **Fix:** test with n = 1; the formula must return the first term exactly.',
      '**Choosing a formula before diagnosing the sequence.** Applying the arithmetic formula to 2, 6, 18, 54. **Fix:** check differences (4, 12, 36 — not constant), then ratios (3, 3, 3 — constant), so it is geometric.',
      '**Applying S∞ when |r| ≥ 1.** The formula returns a number, but it is meaningless — the series diverges. **Fix:** check |r| < 1 before using it.',
      '**Confusing the common ratio with the percentage increase.** For 8% growth, r = 1.08, not 0.08. **Fix:** r is the multiplier: add 1 for growth, subtract from 1 for decay (15% loss → r = 0.85).',
      '**Mismatching rate and period in compound interest.** Using i = 0.12 with monthly compounding. **Fix:** divide the annual rate by the number of periods and multiply n by the same factor.',
      '**Counting the bounces only once** in the bouncing-ball problem. **Fix:** after the first drop, every bounce contributes both an upward and a downward journey.',
      '**Assuming a sequence must be arithmetic or geometric.** Squares (1, 4, 9, 16) and Fibonacci are neither. **Fix:** if neither differences nor ratios are constant, look for a different pattern.',
      '**Extending a growth model indefinitely.** **Fix:** state the domain over which the model holds; geometric growth is always eventually limited in reality.',
    ],
    tricks: [
      '**Diagnose in two steps: differences, then ratios.** Ten seconds of checking prevents using the wrong formula entirely.',
      '**Simplify the explicit formula** — 3 + 4(n−1) becomes 4n − 1, which is easier to solve and to substitute into.',
      '**Rebuild the arithmetic sum by Gauss pairing** if you forget the formula: pair the first with the last, and every pair has the same total.',
      '**Use Sₙ = (n/2)(a + l)** whenever you know the last term; it is far quicker than the expanded form.',
      '**Read r straight from a percentage:** +8% → 1.08, −15% → 0.85, halving → 0.5.',
      '**Solve "which term is X?" by setting the explicit formula equal to X** and solving for n. A non-integer answer means X is not in the sequence.',
      '**Sanity-check compound interest against simple interest** — the compound answer must be larger, and the gap should grow with n.',
    ],
    memory: [
      '"Arithmetic adds, geometric multiplies."',
      '"n minus one steps, because the first term is free."',
      '"Sum = how many × average of the ends."',
      '"|r| < 1 or there is no infinite sum."',
      '"r is the multiplier, not the percentage."',
      '"Compound beats simple, and the gap grows."',
      '"Differences first, then ratios" — always diagnose before computing.',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'For the sequence 3, 7, 11, 15, …, what is the common difference?', answer: 4, tolerance: 0, explanation: 'Each term exceeds the previous by 4.' },
      { lvl: 1, type: 'numeric', prompt: 'For 2, 6, 18, 54, …, what is the common ratio?', answer: 3, tolerance: 0, explanation: 'Each term is 3 times the previous one.' },
      { lvl: 1, type: 'numeric', prompt: 'For an arithmetic sequence with a = 3 and d = 4, what is the 10th term?', answer: 39, tolerance: 0, explanation: 'a₁₀ = 3 + 9(4) = 39. Note 9 steps, not 10.' },
      { lvl: 1, type: 'mcq', prompt: 'A sequence increases by a constant multiplier each step. It is:', choices: ['geometric', 'arithmetic', 'linear', 'neither'], answer: 0, explanation: 'A constant ratio defines a geometric sequence; a constant difference would be arithmetic.' },
      { lvl: 2, type: 'numeric', prompt: 'For 3, 7, 11, 15, …, which term equals 99?', answer: 25, tolerance: 0, explanation: 'aₙ = 4n − 1 = 99 gives n = 25.' },
      { lvl: 2, type: 'numeric', prompt: 'Find the sum 1 + 2 + 3 + … + 100.', answer: 5050, tolerance: 0, explanation: 'S = (100/2)(1 + 100) = 50 × 101 = 5050 — Gauss pairing.' },
      { lvl: 2, type: 'numeric', prompt: 'Find the infinite sum 1 + 1/2 + 1/4 + 1/8 + …', answer: 2, tolerance: 0.001, explanation: 'S∞ = a/(1−r) = 1/(1 − 0.5) = 2, valid because |r| < 1.' },
      { lvl: 2, type: 'mcq', prompt: 'For 8% annual growth, what is the common ratio?', choices: ['1.08', '0.08', '8', '0.92'], answer: 0, explanation: 'r is the multiplier: the amount retains 100% and gains 8%, so r = 1.08.' },
      { lvl: 3, type: 'numeric', prompt: '₹10 000 is invested at 8% compound interest for 10 years. What is the value, to the nearest rupee?', answer: 21589, tolerance: 5, explanation: 'A = 10000 × 1.08¹⁰ ≈ ₹21 589 — well above the ₹18 000 that simple interest would give.' },
      { lvl: 3, type: 'numeric', prompt: 'A ball is dropped from 10 m; each bounce reaches 60% of the previous height. What total vertical distance does it travel, in metres?', answer: 40, tolerance: 0.1, explanation: 'Initial drop 10 m, plus bounces summing to 6/(1−0.6) = 15 m counted twice (up and down) = 30 m. Total 40 m.' },
      { lvl: 3, type: 'mcq', prompt: 'Why does the formula S∞ = a/(1 − r) fail when r = 2?', choices: ['the terms grow without bound, so the series diverges and has no finite sum', 'because a might be negative', 'because 1 − r is negative', 'it does not fail; the answer is just negative'], answer: 0, explanation: 'The formula is only valid for |r| < 1. With r = 2 the terms increase, the partial sums grow without limit, and the algebraic result is meaningless.' },
      { lvl: 3, type: 'mcq', prompt: 'A loan quotes 12% per year compounded monthly. What values should you use?', choices: ['i = 0.01 per month with n = 12 per year', 'i = 0.12 with n = 12', 'i = 0.12 with n = 1', 'i = 0.01 with n = 1'], answer: 0, explanation: 'The rate must match the compounding period: 12% ÷ 12 = 1% per month, over 12 months per year.' },
    ],
  },

  // ==========================================================================
  'math.I1.statistics-ii': {
    estMinutes: 210,
    hook: String.raw`**Statistics II is where you learn to distrust a number properly.** An average alone is nearly useless; what matters is how the data is *spread*, whether a comparison is fair, and whether the sample can support the claim being made. These are the tools that let you read a medical study, a poll or a performance report without being led by whoever drew the chart.`,
    sections: [
      { h: 'Grouped data: what you gain and what you lose',
        body: String.raw`Large data sets are usually presented in **class intervals** (0–10, 10–20, …). Grouping makes the shape visible but **loses the individual values**, so every statistic computed from grouped data is an *estimate*.

To estimate the mean, assume every value sits at its class **midpoint**:

$$\bar{x} \approx \frac{\sum f x_m}{\sum f}$$

where $x_m$ is the midpoint and $f$ the frequency. For the interval 10–20 the midpoint is 15.

Two structural points matter:

- **The modal class** is the interval with the highest frequency — but only if the classes are of *equal width*. With unequal widths you must compare frequency *density* (frequency ÷ class width), which is exactly what a histogram plots on its vertical axis.
- **A histogram is not a bar chart.** Bars touch (the scale is continuous), and it is the **area** that represents frequency. That is why the vertical axis is frequency density whenever widths vary — drawing raw frequency with unequal widths misrepresents the data.

You can also read the **median class** from a cumulative-frequency curve: go up to half the total frequency, across to the curve, and down to the value.`,
        formulas: ['Grouped mean ≈ Σ(f × midpoint) ÷ Σf',
          'Midpoint = (lower bound + upper bound) ÷ 2',
          'Frequency density = frequency ÷ class width',
          'Histogram: AREA represents frequency; bars touch'],
      },
      { h: 'Measuring spread properly',
        body: String.raw`Two data sets can share a mean and be nothing alike. Spread is what distinguishes them.

- **Range** = max − min. Uses only two values, so a single outlier destroys it.
- **Interquartile range** IQR = $Q_3 - Q_1$ — the spread of the middle 50%, **resistant** to outliers.
- **Standard deviation** $\sigma$ — the typical distance of a value from the mean. Uses every value, so it is informative but **sensitive** to outliers.

$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}}$$

Read the formula as a procedure rather than a symbol: take each deviation from the mean, **square** it (so that positives and negatives do not cancel — their plain sum is always zero), average the squares, then square-root to return to the original units. That final root is why $\sigma$ is measured in the same units as the data, whereas the variance $\sigma^2$ is not.

**Pair your statistics correctly:** median with IQR (both resistant), mean with standard deviation (both use every value). Quoting a median alongside a standard deviation mixes philosophies and misleads.

**Outliers** are conventionally values below $Q_1 - 1.5\times\mathrm{IQR}$ or above $Q_3 + 1.5\times\mathrm{IQR}$. Identifying one is the start of an investigation, not permission to delete it — an outlier may be a measurement error, or it may be the most important observation in the set.`,
        example: { title: 'Why spread decides the answer',
          q: 'Two machines fill bottles with a mean of 500 ml. Machine A has σ = 2 ml; machine B has σ = 20 ml. Which is better?',
          solution: 'Machine A. Identical means, but A\'s output clusters within a few ml of target while B\'s varies by tens of ml, so B will produce many bottles well under or over 500 ml.',
          moral: 'For quality control the spread, not the average, is the whole story.' },
      },
      { h: 'Comparing distributions, and the box plot',
        body: String.raw`A **five-number summary** — minimum, $Q_1$, median, $Q_3$, maximum — captures a distribution compactly, and a **box plot** draws it: a box from $Q_1$ to $Q_3$ with the median marked, and whiskers to the extremes.

Box plots exist to be **compared side by side**, and reading them well means commenting on three things, always:

1. **Centre** — which median is higher?
2. **Spread** — which box (IQR) is wider?
3. **Shape/skew** — is the median off-centre in its box, or one whisker much longer?

**Skew** is worth naming. If the right whisker is long, the distribution is *positively skewed* (a tail of high values) and the mean is pulled above the median. If the left tail is long, it is negatively skewed and the mean sits below the median. So **comparing the mean with the median is itself a skew test** — an equality suggests symmetry.

A full comparison sounds like: *"Class B has a higher median (68 vs 61) but a much wider IQR (24 vs 9), so it performed better on average but far less consistently."* Two sentences covering centre and spread — that is what a complete answer looks like.`,
        example: { title: 'Reading a five-number summary',
          q: 'A data set has min 12, Q₁ = 20, median 24, Q₃ = 32, max 70. Are there outliers?',
          solution: 'IQR $= 32 - 20 = 12$, so $1.5\\times\\mathrm{IQR} = 18$. The fences are $20 - 18 = 2$ and $32 + 18 = 50$. The maximum, 70, lies above 50 and is therefore an outlier; the minimum, 12, is inside the lower fence and is not.',
          moral: 'The long upper tail also tells you the distribution is positively skewed — expect the mean to exceed the median of 24.' },
      },
      { h: 'Reading real studies critically',
        body: String.raw`The statistics are usually the easy part; the judgement is where studies succeed or fail.

**Sampling.** A conclusion applies only to the population actually sampled. A **biased** sample — a survey of canteen queuers, an online poll answered by the motivated, a study of volunteers — systematically excludes people, and no sample size repairs it. **Random** sampling is what licenses generalisation; **stratified** sampling (proportional representation of known subgroups) improves it further.

**Correlation is not causation.** Ice-cream sales correlate with drowning deaths, but neither causes the other — hot weather causes both. That third variable is a **confounder**, and it is the standard reason a real correlation misleads. The only reliable route from correlation to causation is a **controlled experiment** with random allocation.

**Questions that hide the trick.** Watch for:

- **Loaded wording:** "Do you agree that this unfair tax should be scrapped?"
- **Survivorship bias:** studying only the companies that survived, or the students who finished.
- **Selective ranges:** quoting the years that support the claim.
- **Missing base rates:** "cases doubled" from 2 to 4 is very different from 2000 to 4000.
- **Unstated sample size:** "80% preferred it" is meaningless if the sample was five people.

The habit to build: for any statistical claim, ask **who was measured, how were they chosen, what exactly was measured, and compared with what?**`,
      },
    ],
    formulas: ['Grouped mean ≈ Σ(f·midpoint)/Σf (an estimate — raw values are lost)',
      'Frequency density = frequency ÷ class width; histogram area = frequency',
      'IQR = Q₃ − Q₁;  outlier fences at Q₁ − 1.5·IQR and Q₃ + 1.5·IQR',
      'σ = √(Σ(x − x̄)²/n);  variance = σ²',
      'Median pairs with IQR; mean pairs with standard deviation',
      'Mean > median ⇒ positive skew;  mean < median ⇒ negative skew'],
    summary: [
      'Grouped data gives estimates: use class midpoints, and remember the raw values are gone.',
      'Histograms show frequency by AREA, so unequal widths require frequency density.',
      'Range uses two values; IQR resists outliers; standard deviation uses all values and does not.',
      'Squaring in the standard deviation stops deviations cancelling; the root restores the units.',
      'Pair median with IQR and mean with standard deviation — never mix the two philosophies.',
      'Compare distributions on centre, spread and skew; comparing mean with median detects skew.',
      'Bias, confounders and missing base rates defeat any amount of correct arithmetic.',
    ],
    mistakes: [
      '**Treating a grouped mean as exact.** **Fix:** it is an estimate built on the midpoint assumption; say so when reporting it.',
      '**Drawing a histogram with raw frequency when class widths differ.** This exaggerates the wide classes. **Fix:** plot frequency density, so that area represents frequency.',
      '**Confusing a histogram with a bar chart.** **Fix:** histogram bars touch because the scale is continuous; bar-chart bars are separated because categories are discrete.',
      '**Quoting the median with the standard deviation** (or the mean with the IQR). **Fix:** match resistant with resistant — median with IQR, mean with σ.',
      '**Deleting outliers automatically.** **Fix:** an outlier may be an error or may be the key finding. Investigate, and state what you did and why.',
      '**Comparing distributions on centre alone.** "B is better because its median is higher" ignores consistency. **Fix:** always comment on centre AND spread, and on skew where relevant.',
      '**Reading correlation as causation.** **Fix:** look for a confounder; only a controlled, randomised experiment supports a causal claim.',
      '**Generalising from a biased sample.** **Fix:** ask how participants were selected. A large biased sample is still biased.',
      '**Forgetting that σ is in the original units and variance is not.** **Fix:** report σ for interpretation; variance is an intermediate quantity.',
    ],
    tricks: [
      '**Compare mean and median as an instant skew test** — no plotting required.',
      '**Compute the outlier fences whenever you have quartiles.** Q₁ − 1.5·IQR and Q₃ + 1.5·IQR take one line and often reveal the point of the question.',
      '**Structure every comparison answer as centre, then spread, then shape.** It is what mark schemes reward and what makes the comparison genuinely informative.',
      '**Find the median class from a cumulative-frequency curve** at half the total frequency — quicker and less error-prone than interpolating by hand.',
      '**Check the mean of grouped data for plausibility** — it must lie inside the range of the data, and usually near the modal class.',
      '**For any claim in the news, ask the four questions:** who was measured, how were they chosen, what was measured, compared with what?',
      '**Sanity-check σ against the range:** for most data sets σ is roughly a quarter of the range. A wildly different value signals an arithmetic error.',
    ],
    memory: [
      '"Grouping trades detail for shape" — grouped statistics are estimates.',
      '"Histograms show frequency by area."',
      '"Median with IQR, mean with sigma."',
      '"Square so they do not cancel; root to get the units back."',
      '"Centre, spread, shape" — the three-part comparison.',
      '"Mean above median means a tail to the right."',
      '"Correlation is not causation — look for the confounder."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'What is the midpoint of the class interval 10–20?', answer: 15, tolerance: 0, explanation: '(10 + 20)/2 = 15, the value assumed for every observation in that class.' },
      { lvl: 1, type: 'numeric', prompt: 'A data set has Q₁ = 20 and Q₃ = 32. What is the IQR?', answer: 12, tolerance: 0, explanation: 'IQR = Q₃ − Q₁ = 32 − 20 = 12.' },
      { lvl: 1, type: 'mcq', prompt: 'Which measure of spread is most resistant to outliers?', choices: ['interquartile range', 'range', 'standard deviation', 'variance'], answer: 0, explanation: 'The IQR describes the middle 50% and ignores the tails entirely.' },
      { lvl: 1, type: 'mcq', prompt: 'In a histogram with unequal class widths, the vertical axis should show:', choices: ['frequency density', 'raw frequency', 'cumulative frequency', 'percentage'], answer: 0, explanation: 'Area represents frequency, so the height must be frequency ÷ class width.' },
      { lvl: 2, type: 'mcq', prompt: 'Two machines fill bottles to a mean of 500 ml; A has σ = 2 ml, B has σ = 20 ml. Which is better for quality control?', choices: ['A, because its output is far more consistent', 'B, because larger σ means more capacity', 'they are equivalent — the means are equal', 'cannot be judged without the medians'], answer: 0, explanation: 'Equal means, but A varies by a couple of ml and B by tens. Consistency is what quality control measures.' },
      { lvl: 2, type: 'mcq', prompt: 'A data set has min 12, Q₁ 20, median 24, Q₃ 32, max 70. Is 70 an outlier?', choices: ['yes — it exceeds Q₃ + 1.5×IQR = 50', 'no', 'only if the mean exceeds 32', 'there is not enough information'], answer: 0, explanation: 'IQR = 12, so the upper fence is 32 + 18 = 50. Since 70 > 50, it is an outlier.' },
      { lvl: 2, type: 'mcq', prompt: 'A distribution has mean 30 and median 24. What does this suggest?', choices: ['positive skew — a tail of high values pulling the mean up', 'negative skew', 'a symmetric distribution', 'an arithmetic error'], answer: 0, explanation: 'The mean is dragged toward the long tail, so mean > median indicates positive skew.' },
      { lvl: 2, type: 'mcq', prompt: 'Why are deviations squared when computing standard deviation?', choices: ['so positive and negative deviations do not cancel — their plain sum is always zero', 'to make the numbers larger', 'because variance must be negative', 'to convert to the original units'], answer: 0, explanation: 'Σ(x − x̄) = 0 by definition of the mean, so squaring is what makes the measure meaningful. The final square root restores the units.' },
      { lvl: 3, type: 'mcq', prompt: 'Ice-cream sales correlate strongly with drowning deaths. What is the best explanation?', choices: ['a confounding variable — hot weather increases both', 'ice cream causes drowning', 'drowning causes ice-cream sales', 'the correlation must be a calculation error'], answer: 0, explanation: 'A third variable drives both. Correlation alone never establishes causation; only a controlled randomised experiment can.' },
      { lvl: 3, type: 'mcq', prompt: 'A survey about school food questions only students queuing at the canteen, with 2000 responses. Is the large sample sufficient?', choices: ['no — the sample is biased, and size does not fix bias', 'yes, 2000 is more than enough', 'yes, provided the mean is reported with the IQR', 'only if the students were chosen alphabetically'], answer: 0, explanation: 'Students who avoid the canteen are systematically excluded. Increasing a biased sample only makes the wrong answer more precise.' },
      { lvl: 3, type: 'mcq', prompt: 'Class A: median 61, IQR 9. Class B: median 68, IQR 24. What is the complete comparison?', choices: ['B scored higher on average but was much less consistent', 'B is better in every respect', 'A is better in every respect', 'they performed identically'], answer: 0, explanation: 'A full comparison addresses centre and spread: B has the higher median, A the much smaller IQR and therefore greater consistency.' },
      { lvl: 3, type: 'mcq', prompt: 'A report says "cases doubled this year". What is most important to ask?', choices: ['the base rate — 2 to 4 is very different from 2000 to 4000', 'whether the mean or median was used', 'the standard deviation of the cases', 'whether a histogram was drawn'], answer: 0, explanation: 'A relative change without the absolute numbers cannot be interpreted. Missing base rates are one of the commonest ways statistics mislead.' },
    ],
  },

  // ==========================================================================
  'math.I1.geometry-circles-proof': {
    estMinutes: 240,
    hook: String.raw`**This is the topic where mathematics stops being calculation and becomes argument.** A proof is a chain of statements, each justified by something already established, ending in a conclusion that cannot be doubted. Circle theorems are the training ground — rich enough to be interesting, structured enough that every step has a name. The habit you build here is the same one that makes a correct program, a valid experiment, or a sound argument of any kind.`,
    sections: [
      { h: 'What a proof is, and what it is not',
        body: String.raw`A **proof** establishes that a statement is true for **every** case, by deduction from agreed facts. It is not:

- **Measurement.** Measuring five triangles and finding $180°$ each time is *evidence*, not proof. The next one might differ, and diagrams are not to scale.
- **A worked example.** Showing it holds for one circle proves nothing about the others.
- **Assertion.** "It is obvious from the diagram" is where wrong answers live.

The structure is always the same: **statement → reason**, repeated, where each reason is a definition, a previously proved theorem, or a given fact.

A single **counterexample** disproves a general claim outright. "All primes are odd" dies on the number 2 — one case is enough to destroy a universal statement, though no number of cases can establish one.

Two related ideas you must keep separate:

- **Converse** — swap the hypothesis and conclusion. "If a triangle is equilateral then its angles are equal" has converse "if the angles are equal then it is equilateral". Here both happen to be true, but **a converse is not automatically true**: "if it is a square, it is a rectangle" is true; its converse is false.
- **Contradiction** — assume the opposite, derive an impossibility, and conclude the original must hold.`,
      },
      { h: 'The circle vocabulary',
        body: String.raw`Precision of language is precision of thought, so fix the terms first.

| Term | Meaning |
|---|---|
| **Radius** | centre to any point on the circle |
| **Chord** | a segment joining two points on the circle |
| **Diameter** | a chord through the centre (the longest chord) |
| **Arc** | part of the circumference (major = longer, minor = shorter) |
| **Sector** | region between two radii and an arc (a "pizza slice") |
| **Segment** | region between a chord and an arc |
| **Tangent** | a line touching the circle at exactly one point |
| **Cyclic quadrilateral** | a quadrilateral with all four vertices on the circle |

Two distinctions cause most confusion: **sector vs segment** (a sector is bounded by two radii; a segment by a chord), and **subtended at the centre vs at the circumference** — an arc "subtends" an angle wherever the two lines from its endpoints meet, and *which* of those you are looking at determines the theorem that applies.`,
      },
      { h: 'The circle theorems',
        body: String.raw`Seven results do the work. Learn the standard name of each — the name *is* the reason you quote in a proof.

1. **Angle at the centre is twice the angle at the circumference** (subtended by the same arc). The parent theorem — the next two are corollaries.
2. **Angles in the same segment are equal.** All angles subtended by the same arc at the circumference are equal (each is half the same central angle).
3. **Angle in a semicircle is $90°$.** A diameter subtends a straight angle ($180°$) at the centre, so half of it is $90°$.
4. **Opposite angles of a cyclic quadrilateral sum to $180°$.**
5. **Tangent is perpendicular to the radius** at the point of contact.
6. **Two tangents from an external point are equal in length** (and the line to the centre bisects the angle between them).
7. **Alternate segment theorem:** the angle between a tangent and a chord equals the angle in the alternate segment.

Notice how 3 follows from 1 in one line. **Deriving rather than memorising** is the point of this topic: theorem 2 also follows from 1, since two angles at the circumference on the same arc are each half of the same central angle, hence equal.

Several have useful **converses**: if opposite angles of a quadrilateral sum to $180°$, it *is* cyclic — which is how you prove four points lie on a circle.`,
        svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Circle showing angle at centre twice angle at circumference" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="105" r="80" fill="none" stroke="#6b7a99" stroke-width="2"/>
  <circle cx="200" cy="105" r="3" fill="#e6ecff"/>
  <text x="206" y="102" font-size="11" fill="#9aa8c4">O</text>
  <line x1="200" y1="105" x2="137" y2="154" stroke="#6366f1" stroke-width="2"/>
  <line x1="200" y1="105" x2="263" y2="154" stroke="#6366f1" stroke-width="2"/>
  <line x1="200" y1="25" x2="137" y2="154" stroke="#6ee7a8" stroke-width="2"/>
  <line x1="200" y1="25" x2="263" y2="154" stroke="#6ee7a8" stroke-width="2"/>
  <text x="192" y="132" font-size="12" fill="#6366f1">2θ</text>
  <text x="193" y="48" font-size="12" fill="#6ee7a8">θ</text>
  <text x="200" y="192" font-size="11" fill="#9aa8c4" text-anchor="middle">same arc: the centre angle is twice the circumference angle</text>
</svg>`,
        formulas: ['Angle at centre = 2 × angle at circumference (same arc)',
          'Angles in the same segment are equal',
          'Angle in a semicircle = 90°',
          'Cyclic quadrilateral: opposite angles sum to 180°',
          'Tangent ⊥ radius at the point of contact',
          'Tangents from an external point are equal',
          'Alternate segment: tangent–chord angle = angle in the alternate segment'],
      },
      { h: 'Writing a proof that earns full marks',
        body: String.raw`Set the work out in two columns — statement and reason — and quote the theorem by name.

*Prove that the angle in a semicircle is a right angle.*

| Statement | Reason |
|---|---|
| $AB$ is a diameter, $C$ on the circle | given |
| $\angle AOB = 180°$ | $AOB$ is a straight line through the centre |
| $\angle ACB = \tfrac12 \angle AOB$ | angle at the centre is twice the angle at the circumference |
| $\angle ACB = 90°$ | arithmetic |

Four lines, each justified, and the result holds for *every* such circle — that is what a measured example could never give you.

Three rules for writing proofs:

1. **Never assume from the diagram.** Lines that look equal, parallel or concurrent may not be. Use only what is given, marked, or already proved.
2. **Quote the theorem by its standard name.** "Angles in the same segment" is a reason; "because they look the same" is not.
3. **Mark the diagram as you go** — equal angles with matching arcs, equal sides with ticks. The figure becomes your working, and the next deduction usually becomes visible.

When stuck, work **backwards** from what you must prove: ask what would be sufficient, and which theorem produces that kind of conclusion. Angles equal → same segment, or isosceles triangle. A right angle → semicircle, or tangent–radius.`,
        example: { title: 'A two-step angle proof',
          q: 'A, B, C, D lie on a circle in that order. $\\angle ABC = 85°$. Find $\\angle ADC$, with reasons.',
          solution: '$ABCD$ is a cyclic quadrilateral, since all four vertices lie on the circle. Opposite angles of a cyclic quadrilateral sum to $180°$, so $\\angle ADC = 180° - 85° = 95°$.',
          moral: 'Name the configuration first (cyclic quadrilateral), and the applicable theorem follows immediately.' },
      },
    ],
    formulas: ['Proof = statement + reason, repeated, from agreed facts',
      'One counterexample disproves a general claim; no number of examples proves one',
      'A converse is a separate claim and needs its own proof',
      'Centre angle = 2 × circumference angle;  semicircle ⇒ 90°',
      'Cyclic quadrilateral: opposite angles sum to 180° (and the converse proves concyclicity)',
      'Tangent ⊥ radius;  tangents from a point are equal'],
    summary: [
      'A proof establishes truth for every case; measurement and examples cannot.',
      'Each line is a statement with a named reason — a definition, a given, or a proved theorem.',
      'One counterexample destroys a universal claim.',
      'A converse is a different statement and may be false even when the original is true.',
      'The central-angle theorem is the parent; the semicircle and same-segment results follow from it.',
      'Cyclic quadrilaterals, tangent–radius perpendicularity and equal tangents complete the toolkit.',
      'Never assume from the diagram; mark it as you deduce, and work backwards when stuck.',
    ],
    mistakes: [
      '**Assuming a line passes through the centre** because it looks like it. **Fix:** the centre must be marked or stated. Without it, the central-angle theorem does not apply.',
      '**Confusing the angle at the centre with the angle at the circumference** and halving the wrong one. **Fix:** identify which vertex is the centre O first; the centre angle is the larger.',
      '**Using a converse without justification.** Assuming that because opposite angles sum to 180° the quadrilateral is cyclic — true here, but the converse must be known, not guessed. **Fix:** learn which converses hold.',
      '**Offering measurement as proof.** "I measured it and it was 90°." **Fix:** diagrams are not to scale; give a deductive chain.',
      '**Giving a numerical answer with no reasons.** **Fix:** most marks are for the reasoning; write the theorem name beside every line.',
      '**Mixing up sector and segment**, or arc and chord. **Fix:** a sector is bounded by two radii, a segment by a chord.',
      '**Applying "angles in the same segment" to angles on different arcs.** **Fix:** check that both angles are subtended by the *same* arc and lie on the same side of it.',
      '**Believing that examples constitute proof.** **Fix:** examples build confidence and suggest what to prove; only deduction establishes it.',
    ],
    tricks: [
      '**Name the configuration first** — cyclic quadrilateral, semicircle, tangent — and the relevant theorem follows immediately.',
      '**Mark equal angles and lengths on the diagram as you deduce them.** The next step usually becomes visible.',
      '**Look for the radius whenever a tangent appears**; the perpendicular it creates is almost always the key to the problem.',
      '**Work backwards from the target.** To prove two angles equal, ask which theorems conclude "angles equal" — same segment, or base angles of an isosceles triangle.',
      '**Watch for isosceles triangles formed by two radii.** They appear constantly in circle proofs and give you equal base angles free.',
      '**Verify by a second route where possible** — two independent chains agreeing is strong confirmation.',
      '**To disprove a general claim, hunt for the extreme or degenerate case** — that is where counterexamples usually live.',
    ],
    memory: [
      '"Statement, reason — every single line."',
      '"Centre is double the circumference" — the parent theorem.',
      '"Semicircle makes a right angle."',
      '"Cyclic opposites make 180."',
      '"Tangent meets radius at 90°."',
      '"One counterexample kills a rule; a thousand examples do not make one."',
      '"Never trust the picture."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'The angle at the centre subtended by an arc is 80°. What is the angle at the circumference on the same arc, in degrees?', answer: 40, tolerance: 0, explanation: 'The angle at the circumference is half the angle at the centre.' },
      { lvl: 1, type: 'numeric', prompt: 'What is the angle in a semicircle, in degrees?', answer: 90, tolerance: 0, explanation: 'The diameter subtends 180° at the centre, so the circumference angle is half: 90°.' },
      { lvl: 1, type: 'mcq', prompt: 'A tangent meets the radius at the point of contact at what angle?', choices: ['90°', '45°', '180°', 'it varies'], answer: 0, explanation: 'The tangent is always perpendicular to the radius at the point of contact.' },
      { lvl: 1, type: 'mcq', prompt: 'Which region is bounded by two radii and an arc?', choices: ['a sector', 'a segment', 'a chord', 'a tangent'], answer: 0, explanation: 'A sector is the "pizza slice"; a segment is cut off by a chord.' },
      { lvl: 2, type: 'numeric', prompt: 'ABCD is a cyclic quadrilateral with angle ABC = 85°. Find angle ADC, in degrees.', answer: 95, tolerance: 0, explanation: 'Opposite angles of a cyclic quadrilateral sum to 180°, so 180 − 85 = 95°.' },
      { lvl: 2, type: 'mcq', prompt: 'Two angles at the circumference are subtended by the same arc. They are:', choices: ['equal', 'supplementary', 'complementary', 'unrelated'], answer: 0, explanation: 'Angles in the same segment are equal — each is half the same central angle.' },
      { lvl: 2, type: 'mcq', prompt: 'Why does "I measured five triangles and each gave 180°" fail as a proof?', choices: ['it is evidence about those five only; a proof must cover every case', 'measurement is always inaccurate to 1°', 'five is too small a sample', 'it is a valid proof'], answer: 0, explanation: 'A general claim needs deduction. Measurement cannot rule out an unmeasured counterexample, and diagrams are not to scale.' },
      { lvl: 2, type: 'numeric', prompt: 'Two tangents are drawn from an external point to a circle. If one has length 7 cm, how long is the other, in cm?', answer: 7, tolerance: 0, explanation: 'Tangents from an external point are equal in length.' },
      { lvl: 3, type: 'mcq', prompt: 'Which statement disproves "all prime numbers are odd"?', choices: ['2 is prime and even', '9 is odd but not prime', '4 is even and not prime', 'no single statement can disprove it'], answer: 0, explanation: 'A single counterexample destroys a universal claim. 9 being non-prime is irrelevant — it does not contradict the statement.' },
      { lvl: 3, type: 'mcq', prompt: 'The statement "if a shape is a square then it is a rectangle" is true. What about its converse?', choices: ['false — a rectangle need not be a square', 'also true, since converses always hold', 'true only for shapes with equal diagonals', 'meaningless'], answer: 0, explanation: 'A converse is a separate claim requiring its own proof. Here it fails: a 2×5 rectangle is not a square.' },
      { lvl: 3, type: 'mcq', prompt: 'How is "the angle in a semicircle is 90°" derived from the central-angle theorem?', choices: ['a diameter subtends 180° at the centre, and the circumference angle is half of that', 'by measuring many semicircles', 'from the cyclic-quadrilateral theorem', 'it is an independent axiom'], answer: 0, explanation: 'It is a one-line corollary: half of 180° is 90°. Deriving results rather than memorising them is the point of the topic.' },
      { lvl: 3, type: 'mcq', prompt: 'In a proof, a figure shows a line that appears to pass through the centre but is not marked as doing so. May you use the central-angle theorem?', choices: ['no — it must be given, marked, or previously proved', 'yes, if it clearly looks like it does', 'yes, provided you say "by inspection"', 'only if the circle is drawn to scale'], answer: 0, explanation: 'Diagrams are not to scale and appearances are not reasons. Using an unjustified assumption invalidates the whole chain.' },
    ],
  },

};
