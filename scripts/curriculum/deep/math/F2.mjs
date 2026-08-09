// Deep content: math F2. See ../index.mjs for the entry schema.
//
// Bodies use String.raw so LaTeX backslashes survive template-literal escaping.

export default {

  // ==========================================================================
  'math.F2.exponents-scientific-notation': {
    estMinutes: 240,
    hook: String.raw`**Exponents are the notation that makes very large and very small numbers usable.** Without them, chemistry could not write Avogadro's number, physics could not write the speed of light, and computer science could not talk about $2^{32}$. Every "law of indices" you are about to meet is not a rule to memorise — it is a fact about counting repeated factors, and if you ever forget one you can rebuild it in five seconds by writing the factors out.`,
    sections: [
      { h: 'What a power actually records',
        body: String.raw`$a^n$ means $a$ multiplied by itself $n$ times. The **base** $a$ is what is repeated; the **exponent** (or index) $n$ counts how many.

$$2^5 = 2\times2\times2\times2\times2 = 32$$

Two habits prevent most errors immediately:

- **$a^n$ is not $a\times n$.** $2^5 = 32$, not 10. The exponent counts factors, it is not one of them.
- **The base is only what the exponent touches.** In $-3^2$ the exponent applies to 3 only, so it means $-(3^2) = -9$. In $(-3)^2$ the bracket makes $-3$ the base, giving $+9$. This single distinction is worth more marks than any law below.

Sign behaviour follows at once: a negative base raised to an **even** power is positive (the minus signs pair off); to an **odd** power it stays negative.`,
      },
      { h: 'The laws of indices — and why each is obvious',
        body: String.raw`Do not memorise these as five separate rules. Each is what happens when you write the factors out.

**Multiplication — add the exponents.** $a^m \times a^n = a^{m+n}$, because $(a\,a\,a)(a\,a) = a\,a\,a\,a\,a$. Three factors then two factors is five factors.

**Division — subtract.** $a^m \div a^n = a^{m-n}$, because the shared factors cancel:

$$\frac{a^5}{a^2} = \frac{a\,a\,a\,a\,a}{a\,a} = a^3$$

**Power of a power — multiply.** $(a^m)^n = a^{mn}$: $(a^2)^3 = a^2 a^2 a^2 = a^6$. Three groups of two factors.

**Power of a product — distribute.** $(ab)^n = a^n b^n$, since the factors can be reordered.

**But powers do NOT distribute over a sum.** $(a+b)^2 \ne a^2 + b^2$. Test it: $a=b=1$ gives 4 on the left and 2 on the right. This is the same error as $(x+3)^2 = x^2+9$ from F1 algebra, and it never stops being tempting.`,
        formulas: ['aᵐ × aⁿ = aᵐ⁺ⁿ',
          'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
          '(aᵐ)ⁿ = aᵐⁿ',
          '(ab)ⁿ = aⁿbⁿ  and  (a/b)ⁿ = aⁿ/bⁿ',
          '(a + b)ⁿ ≠ aⁿ + bⁿ  — powers never distribute over a sum'],
      },
      { h: 'Zero and negative exponents: forced by the pattern',
        body: String.raw`Why is $a^0 = 1$? Not by decree — by consistency. Divide $a^3$ by $a^3$: the answer is plainly 1, and the subtraction law says it is $a^{3-3} = a^0$. So $a^0$ must equal 1 for the laws to hold together.

The same argument continues downward. Watch the pattern in $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$: each step down **halves**. Continue and $2^{-1} = \tfrac12$, $2^{-2} = \tfrac14$.

$$a^{-n} = \frac{1}{a^n}$$

So **a negative exponent means "reciprocal", never "negative number"**. $2^{-3} = \tfrac18$, a positive number. Students who read the minus as a sign rather than as an instruction to flip lose marks constantly.

One caveat worth stating: $0^0$ is left undefined, because the two patterns that force $a^0 = 1$ and $0^n = 0$ disagree there.`,
        example: { title: 'Simplifying with negative indices',
          q: 'Simplify $(2x^{-2})^3 \\times x^4$.',
          solution: 'Distribute the outer power: $2^3 x^{-6} = 8x^{-6}$. Multiply: $8x^{-6} \\times x^4 = 8x^{-2}$. Written without negative indices, $\\dfrac{8}{x^2}$.',
          moral: 'Distribute the outer power to every factor inside — the 2 gets cubed too.' },
      },
      { h: 'Scientific notation: one digit, then the size',
        body: String.raw`Scientific notation writes any number as

$$a \times 10^n, \qquad 1 \le a < 10, \; n \text{ an integer}.$$

The mantissa $a$ carries the **precision**; the power of ten carries the **size**. Separating those two jobs is the whole point.

- $4\,500\,000 = 4.5\times10^6$ (decimal moved 6 places left, so $n$ is positive).
- $0.00032 = 3.2\times10^{-4}$ (moved 4 places right, so $n$ is negative).

The direction rule confuses people, so anchor it: **a big number has a positive power; a small number (less than 1) has a negative power.** Check the sign against that fact before anything else.

Arithmetic is easy because the two parts are handled separately:

$$(3\times10^4)\times(2\times10^5) = 6\times10^{9}$$

Multiply the mantissas, add the exponents. If the mantissa leaves the range — $(5\times10^4)(4\times10^3) = 20\times10^7$ — renormalise to $2\times10^8$.

For **addition** the exponents must match first, exactly as denominators must match for fractions: $3\times10^5 + 4\times10^4 = 3\times10^5 + 0.4\times10^5 = 3.4\times10^5$.`,
        formulas: ['a × 10ⁿ with 1 ≤ a < 10',
          'Multiply: multiply mantissas, ADD exponents',
          'Divide: divide mantissas, SUBTRACT exponents',
          'Add/subtract: make the exponents equal FIRST',
          'Large number → positive n;  number below 1 → negative n'],
      },
      { h: 'Where this is used everywhere else',
        body: String.raw`This topic is a service topic — its payoff is in other subjects, which is exactly the compression idea.

| Field | Quantity | Why exponents are essential |
|---|---|---|
| Chemistry | Avogadro $6.022\times10^{23}$ | writing 24 digits is unusable |
| Physics | $c = 3\times10^8$ m/s | order of magnitude is the meaningful part |
| Biology | cell $\approx 10^{-5}$ m | negative powers for the very small |
| CS | $2^{10} = 1024$ bytes | binary powers, memory sizes |

Two practical consequences follow:

- **Prefixes are powers of ten.** kilo $10^3$, mega $10^6$, giga $10^9$, milli $10^{-3}$, micro $10^{-6}$, nano $10^{-9}$. Converting units is therefore just adding exponents.
- **Comparing sizes becomes subtraction.** How many times bigger is $6\times10^{23}$ than $3\times10^8$? Divide: $2\times10^{15}$. No long division, one subtraction of exponents.`,
        example: { title: 'A comparison in one line',
          q: 'A red blood cell is about $8\\times10^{-6}$ m across; a human is about $1.7$ m tall. How many times taller is the human?',
          solution: 'Divide: $\\dfrac{1.7}{8\\times10^{-6}} = \\dfrac{1.7}{8}\\times10^{6} \\approx 0.21\\times10^6 = 2.1\\times10^5$. About two hundred thousand times.',
          moral: 'Dividing by a negative power multiplies — the exponents do the heavy lifting.' },
      },
    ],
    formulas: ['aᵐaⁿ = aᵐ⁺ⁿ;  aᵐ/aⁿ = aᵐ⁻ⁿ;  (aᵐ)ⁿ = aᵐⁿ;  (ab)ⁿ = aⁿbⁿ',
      'a⁰ = 1 (a ≠ 0);  a⁻ⁿ = 1/aⁿ',
      '(−a)^even > 0;  (−a)^odd < 0;  −a² = −(a²) but (−a)² = +a²',
      'Scientific notation: a × 10ⁿ with 1 ≤ a < 10',
      'Prefixes: k 10³, M 10⁶, G 10⁹, m 10⁻³, µ 10⁻⁶, n 10⁻⁹'],
    summary: [
      'aⁿ counts repeated factors — it is never a × n.',
      'Every index law is provable in five seconds by writing the factors out.',
      'a⁰ = 1 and a⁻ⁿ = 1/aⁿ are forced by consistency with the division law, not decreed.',
      'A negative exponent means reciprocal, not a negative number.',
      'Powers distribute over products and quotients, never over sums.',
      'Scientific notation splits precision (mantissa) from size (power of ten).',
      'Multiply/divide → add/subtract exponents; add/subtract → match exponents first.',
    ],
    mistakes: [
      '**Reading aⁿ as a × n.** Writing 2⁵ = 10. **Fix:** say "two multiplied by itself five times" aloud, and check 2⁵ = 32 against the doubling sequence 2, 4, 8, 16, 32.',
      '**Confusing −3² with (−3)².** **Why:** the exponent binds tighter than the minus sign. **Fix:** −3² = −9 and (−3)² = +9; if you want the minus included, you must write the bracket.',
      '**Treating a negative exponent as a negative value.** Writing 2⁻³ = −8. **Fix:** the minus means "flip": 2⁻³ = 1/8, which is positive and small.',
      '**Adding exponents when multiplying different bases.** 2³ × 3² is not 6⁵. **Fix:** the law only applies with a *common base*; here just evaluate — 8 × 9 = 72.',
      '**Distributing a power over a sum:** (a + b)² = a² + b². **Fix:** substitute a = b = 1 — you get 4 versus 2. Expand properly: a² + 2ab + b².',
      '**Forgetting to raise the coefficient.** (2x³)² written as 2x⁶ instead of 4x⁶. **Fix:** the outer power applies to every factor inside the bracket, number included.',
      '**Adding numbers in scientific notation without matching exponents.** 3×10⁵ + 4×10⁴ ≠ 7×10⁹. **Fix:** rewrite as 3×10⁵ + 0.4×10⁵ = 3.4×10⁵ — the same rule as common denominators.',
      '**Leaving the mantissa outside 1 ≤ a < 10.** Reporting 20×10⁷. **Fix:** renormalise to 2×10⁸.',
    ],
    tricks: [
      '**Rebuild any forgotten law by writing out the factors.** a⁵/a² becomes aaaaa/aa; cancel and you can see the answer is a³. Faster and safer than recalling a rule wrongly.',
      '**Count decimal moves to get the exponent, then sanity-check the sign** against "big → positive, small → negative".',
      '**For unit conversion, add exponents rather than counting zeros.** 5 km in mm: 5 × 10³ m × 10³ mm/m = 5 × 10⁶ mm.',
      '**Memorise the powers of 2 to 2¹⁰ = 1024.** They appear constantly in CS, probability and binary, and make mental estimates instant.',
      '**Convert negative indices to fractions only at the end.** Working in index form through the middle keeps the algebra one-line.',
      '**Estimate any messy product by mantissas first, exponents second** — 6.02×10²³ × 3×10⁻⁵ ≈ 18×10¹⁸ = 1.8×10¹⁹.',
    ],
    memory: [
      '"The exponent counts factors, it is not one of them."',
      '"Multiply → add, divide → subtract, power of a power → multiply." Three verbs, three laws.',
      '"Minus exponent means flip, not negative."',
      '"Anything to the zero is one" — because a³/a³ = 1 and the law says a⁰.',
      '"Big number, big (positive) power; small number, negative power."',
      '"Powers spread over × and ÷, never over + and −."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'Evaluate 2⁵.', answer: 32, tolerance: 0, explanation: '2×2×2×2×2 = 32. (Not 2 × 5 = 10.)' },
      { lvl: 1, type: 'numeric', prompt: 'Evaluate 7⁰.', answer: 1, tolerance: 0, explanation: 'Any non-zero base to the power 0 is 1, forced by a³/a³ = a⁰ = 1.' },
      { lvl: 1, type: 'mcq', prompt: 'Write 4 500 000 in scientific notation.', choices: ['4.5 × 10⁶', '45 × 10⁵', '4.5 × 10⁵', '0.45 × 10⁷'], answer: 0, explanation: 'The mantissa must satisfy 1 ≤ a < 10, and the decimal moves 6 places.' },
      { lvl: 1, type: 'mcq', prompt: 'Simplify a³ × a⁴.', choices: ['a⁷', 'a¹²', 'a¹', '2a⁷'], answer: 0, explanation: 'Common base: add the exponents, 3 + 4 = 7.' },
      { lvl: 2, type: 'mcq', prompt: 'What is 2⁻³?', choices: ['1/8', '−8', '−1/8', '8'], answer: 0, explanation: 'A negative exponent means reciprocal: 2⁻³ = 1/2³ = 1/8, a positive number.' },
      { lvl: 2, type: 'mcq', prompt: 'Which is correct: −3² or (−3)²?', choices: ['−3² = −9 and (−3)² = 9', 'both equal 9', 'both equal −9', '−3² = 9 and (−3)² = −9'], answer: 0, explanation: 'The exponent binds tighter than the minus, so −3² = −(3²) = −9. The bracket makes −3 the base, giving +9.' },
      { lvl: 2, type: 'mcq', prompt: 'Simplify (2x³)².', choices: ['4x⁶', '2x⁶', '4x⁵', '2x⁹'], answer: 0, explanation: 'The outer power applies to every factor: 2² = 4 and (x³)² = x⁶.' },
      { lvl: 2, type: 'mcq', prompt: 'Write 0.00032 in scientific notation.', choices: ['3.2 × 10⁻⁴', '3.2 × 10⁴', '32 × 10⁻⁵', '3.2 × 10⁻³'], answer: 0, explanation: 'The number is below 1, so the power is negative; the decimal moves 4 places right.' },
      { lvl: 3, type: 'mcq', prompt: 'Simplify (2x⁻²)³ × x⁴.', choices: ['8/x²', '8x²', '6x⁻²', '2x⁻²'], answer: 0, explanation: '(2x⁻²)³ = 8x⁻⁶; times x⁴ gives 8x⁻² = 8/x².' },
      { lvl: 3, type: 'mcq', prompt: 'Compute (3 × 10⁵) + (4 × 10⁴).', choices: ['3.4 × 10⁵', '7 × 10⁹', '7 × 10⁵', '3.4 × 10⁴'], answer: 0, explanation: 'Match exponents first: 3×10⁵ + 0.4×10⁵ = 3.4×10⁵. Exponents are only added when multiplying.' },
      { lvl: 3, type: 'mcq', prompt: 'A red blood cell is 8 × 10⁻⁶ m across; a person is 1.7 m tall. Roughly how many times taller is the person?', choices: ['about 2 × 10⁵', 'about 2 × 10⁻⁵', 'about 8 × 10⁶', 'about 1.4 × 10⁻⁵'], answer: 0, explanation: '1.7 ÷ (8×10⁻⁶) = 0.21 × 10⁶ ≈ 2.1 × 10⁵ — about two hundred thousand.' },
      { lvl: 3, type: 'mcq', prompt: 'Why must a⁰ equal 1 rather than 0?', choices: ['because a³ ÷ a³ = 1 and the division law gives a⁰', 'because 0 exponents are meaningless', 'it is an arbitrary convention', 'because a × 0 = 0'], answer: 0, explanation: 'Consistency with aᵐ ÷ aⁿ = aᵐ⁻ⁿ forces a⁰ = 1. The value is required, not chosen.' },
    ],
  },

  // ==========================================================================
  'math.F2.linear-relationships-coordinate-plane': {
    estMinutes: 240,
    hook: String.raw`**This is where ratio becomes a picture.** A constant rate — the idea you built in F1 — drawn on axes is a straight line, and its steepness *is* the rate. Once you see that, $y = mx + c$ stops being a formula to memorise and becomes a sentence: "start at $c$, then change by $m$ for every step across". The same line is a speed in physics, a price per unit in economics, and a gradient in calculus later.`,
    sections: [
      { h: 'The coordinate plane: naming every point',
        body: String.raw`Two perpendicular number lines — the $x$-axis (across) and $y$-axis (up) — let any point in the plane be named by an ordered pair $(x, y)$. The order is not negotiable: $(3, 5)$ and $(5, 3)$ are different points.

The axes split the plane into four **quadrants**, numbered anticlockwise from the top right:

| Quadrant | $x$ | $y$ |
|---|---|---|
| I (top right) | $+$ | $+$ |
| II (top left) | $-$ | $+$ |
| III (bottom left) | $-$ | $-$ |
| IV (bottom right) | $+$ | $-$ |

Reading a point's signs tells you its quadrant instantly, which is a useful check when plotting.

The plane's real power is that it turns **relationships between two quantities into shapes.** A table of values becomes a set of points; the pattern in the table becomes the shape of the graph. Every graph you meet afterwards — quadratics, circles, sine waves — is this same translation.`,
      },
      { h: 'Gradient: the rate, made visible',
        body: String.raw`The **gradient** (slope) $m$ measures steepness as *rise over run* — how much $y$ changes per unit change in $x$:

$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$$

That fraction is a **rate**, and rates are ratios of unlike quantities — exactly the F1 idea. If $y$ is distance and $x$ is time, the gradient is speed. If $y$ is cost and $x$ is quantity, it is price per unit.

Read the sign and size together:

- **Positive** gradient rises left to right; **negative** falls.
- **Zero** gradient is a horizontal line ($y = c$) — $y$ never changes.
- A **vertical** line has *undefined* gradient, because the run is 0 and division by zero is undefined. Its equation is $x = k$.
- **Steeper means larger $|m|$**: a gradient of 3 climbs three times as fast as 1.

The key property that makes lines special: **the gradient is the same between any two points on the line.** That constancy *is* what "linear" means, and it is why a line models constant-rate situations and nothing else.`,
        svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Line showing rise over run gradient" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="170" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="170" x2="370" y2="170" stroke="#6b7a99" stroke-width="2"/>
  <line x1="70" y1="150" x2="330" y2="40" stroke="#6ee7a8" stroke-width="3"/>
  <line x1="150" y1="116" x2="270" y2="116" stroke="#9aa8c4" stroke-width="2" stroke-dasharray="4 3"/>
  <line x1="270" y1="116" x2="270" y2="64" stroke="#9aa8c4" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="210" y="134" font-size="12" fill="#9aa8c4" text-anchor="middle">run</text>
  <text x="286" y="94" font-size="12" fill="#9aa8c4">rise</text>
  <text x="150" y="36" font-size="12" fill="#e6ecff">gradient m = rise / run</text>
  <circle cx="70" cy="150" r="4" fill="#6366f1"/>
  <text x="52" y="188" font-size="11" fill="#9aa8c4">c (y-intercept at x = 0)</text>
</svg>`,
        formulas: ['m = (y₂ − y₁)/(x₂ − x₁) = rise/run',
          'Horizontal line: m = 0, equation y = c',
          'Vertical line: m undefined, equation x = k',
          'A line has the SAME gradient between any two of its points'],
      },
      { h: 'y = mx + c: reading a line as a sentence',
        body: String.raw`Every non-vertical line can be written

$$y = mx + c$$

where $m$ is the gradient and $c$ is the **$y$-intercept** — the value of $y$ when $x = 0$, i.e. where the line crosses the vertical axis.

Read it as a sentence: *"Start at $c$; for every 1 you move right, go up by $m$."*

- $y = 2x + 3$: start at 3, climb 2 each step.
- $y = -\tfrac12 x + 4$: start at 4, drop a half each step.
- $y = 5$: start at 5 and never change — a horizontal line with $m = 0$.

**To find the equation from a graph:** read $c$ where the line crosses the $y$-axis, then count rise over run between two clean lattice points. **From two points:** compute $m$ first, then substitute one point into $y = mx + c$ to solve for $c$.

Two lines are **parallel** exactly when their gradients are equal — same rate, different starting point. (Perpendicular lines satisfy $m_1 m_2 = -1$; you will meet that properly in I1 Coordinate Geometry.)`,
        example: { title: 'Equation from two points',
          q: 'Find the equation of the line through (1, 5) and (3, 11).',
          solution: 'Gradient: $m = \\dfrac{11-5}{3-1} = \\dfrac{6}{2} = 3$. Substitute (1, 5) into $y = 3x + c$: $5 = 3 + c$, so $c = 2$. The line is $y = 3x + 2$. Check with the other point: $3(3) + 2 = 11$. ✓',
          moral: 'Always verify with the point you did not use — it catches every arithmetic slip.' },
      },
      { h: 'Modelling with straight lines',
        body: String.raw`Linear models fit any situation with a **fixed starting amount plus a constant rate**, and that pattern is everywhere:

| Situation | Equation | $c$ means | $m$ means |
|---|---|---|---|
| Taxi fare | $C = 15d + 50$ | base charge ₹50 | ₹15 per km |
| Phone plan | $C = 2t + 199$ | monthly rental | cost per minute |
| Distance at steady speed | $d = 60t$ | starts at 0 | 60 km/h |
| Water draining | $V = 500 - 20t$ | initial 500 L | losing 20 L/min |

Notice the last one: a **negative gradient means decrease**, and the model tells you when the tank empties — set $V = 0$ and solve $500 - 20t = 0$, giving $t = 25$ minutes.

Two cautions that separate a model from reality:

- **Interpolation is usually safe; extrapolation is a claim.** The draining model gives $V = -100$ at $t = 30$, which is nonsense — the model stops being valid at $t = 25$. Always ask over what domain the linear relationship actually holds.
- **A straight-looking data set is not necessarily linear.** Real data scatters; drawing a line of best fit is a judgement, and the gradient you read from it is an estimate, not a fact.`,
        example: { title: 'Reading a model',
          q: 'A taxi charges ₹50 plus ₹15 per km. Write the cost equation, and find the distance for a ₹200 fare.',
          solution: '$C = 15d + 50$. Setting $C = 200$: $15d = 150$, so $d = 10$ km. The intercept 50 is what you pay before moving at all; the gradient 15 is the rate.' },
      },
    ],
    formulas: ['Point: (x, y) — order matters',
      'Gradient m = (y₂ − y₁)/(x₂ − x₁)',
      'y = mx + c:  m = gradient, c = y-intercept (value at x = 0)',
      'Parallel lines ⇔ equal gradients',
      'Horizontal y = c (m = 0);  vertical x = k (m undefined)'],
    summary: [
      'A coordinate pair (x, y) names a point; order and sign fix the quadrant.',
      'Gradient = rise/run, and it is a rate — the F1 idea drawn as steepness.',
      'A line is exactly a relationship whose gradient is constant everywhere.',
      'y = mx + c reads as "start at c, change by m per step across".',
      'From two points: find m first, then substitute to get c, then check with the unused point.',
      'Parallel means equal gradients; horizontal has m = 0; vertical has m undefined.',
      'Linear models = fixed start + constant rate; extrapolating beyond the valid domain is a claim, not a result.',
    ],
    mistakes: [
      '**Reversing the coordinates.** Plotting (3, 5) at 5 across and 3 up. **Fix:** "along the corridor, then up the stairs" — x always first.',
      '**Computing gradient as run over rise.** **Fix:** the gradient answers "how much does y change per unit x", so y-difference goes on top. Check the sign against the picture: rising line must give positive m.',
      '**Subtracting the coordinates in inconsistent order.** Using y₂ − y₁ over x₁ − x₂ flips the sign. **Fix:** pick a first point and a second point, and use that same order in both differences.',
      '**Saying a vertical line has gradient 0.** **Fix:** horizontal has m = 0 (no rise); vertical has an undefined gradient (zero run, and you cannot divide by zero).',
      '**Reading c from where the line crosses the x-axis.** **Fix:** c is the y-intercept, found at x = 0 — the crossing of the *vertical* axis.',
      '**Extrapolating a model past its valid range** and reporting a negative volume or negative time as if meaningful. **Fix:** state the domain; solve for where the model hits zero and stop there.',
      '**Assuming any straight-ish scatter is a line.** **Fix:** a line of best fit gives an estimate; do not quote its gradient as exact.',
    ],
    tricks: [
      '**Read m and c straight off y = mx + c** — no working needed. From a graph, read c at the y-axis, then count a convenient rise and run between lattice points.',
      '**Use clean lattice points for the gradient**, not the two points nearest the ends. Whole-number differences avoid fraction errors.',
      '**Check any line equation with a third point.** Substituting a point you did not use is a complete verification.',
      '**Convert a word problem by asking two questions:** "what is the value at zero?" (that is c) and "how much per unit?" (that is m).',
      '**For "when does it reach zero?", set y = 0 and solve** — that is the x-intercept, and in models it is usually the interesting moment (tank empty, debt cleared).',
      '**Parallel check by gradient alone**: rewrite both equations in y = mx + c form and compare m. 2y = 4x + 6 is y = 2x + 3, so it is parallel to y = 2x − 1.',
    ],
    memory: [
      '"Along the corridor, then up the stairs" — x before y, always.',
      '"Rise over run" — and rise is on top because it is the *change in y per x*.',
      '"m is the rate, c is the start."',
      '"Horizontal zero, vertical undefined" — the two special gradients.',
      '"Same m, parallel lines."',
      '"Slope = rate" links this topic to speed (physics), price per unit (economics) and the derivative (calculus).',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'In which quadrant does the point (−3, 5) lie?', choices: ['II', 'I', 'III', 'IV'], answer: 0, explanation: 'Negative x with positive y is the top-left quadrant, II.' },
      { lvl: 1, type: 'numeric', prompt: 'For the line y = 2x + 3, what is the y-intercept?', answer: 3, tolerance: 0, explanation: 'c is the value of y when x = 0, so the intercept is 3.' },
      { lvl: 1, type: 'numeric', prompt: 'For the line y = 2x + 3, what is the gradient?', answer: 2, tolerance: 0, explanation: 'In y = mx + c the coefficient of x is the gradient, m = 2.' },
      { lvl: 1, type: 'mcq', prompt: 'What is the gradient of a horizontal line?', choices: ['0', '1', 'undefined', 'negative'], answer: 0, explanation: 'y never changes, so the rise is 0 and m = 0. (A vertical line is the one with undefined gradient.)' },
      { lvl: 2, type: 'numeric', prompt: 'Find the gradient of the line through (1, 5) and (3, 11).', answer: 3, tolerance: 0, explanation: '(11 − 5)/(3 − 1) = 6/2 = 3.' },
      { lvl: 2, type: 'mcq', prompt: 'Find the equation of the line through (1, 5) and (3, 11).', choices: ['y = 3x + 2', 'y = 3x − 2', 'y = 2x + 3', 'y = 6x − 1'], answer: 0, explanation: 'm = 3; substituting (1,5) gives 5 = 3 + c so c = 2. Check (3,11): 3(3)+2 = 11. ✓' },
      { lvl: 2, type: 'mcq', prompt: 'Which line is parallel to y = 2x − 1?', choices: ['2y = 4x + 6', 'y = −2x + 1', 'y = x + 2', 'x = 2'], answer: 0, explanation: '2y = 4x + 6 rearranges to y = 2x + 3 — the same gradient, so parallel.' },
      { lvl: 2, type: 'numeric', prompt: 'A taxi charges ₹50 plus ₹15 per km. What is the fare, in rupees, for 10 km?', answer: 200, tolerance: 0, explanation: 'C = 15(10) + 50 = 200.' },
      { lvl: 3, type: 'numeric', prompt: 'A tank holds 500 L and drains at 20 L per minute. After how many minutes is it empty?', answer: 25, tolerance: 0, explanation: 'V = 500 − 20t; set V = 0 to get t = 25 minutes.' },
      { lvl: 3, type: 'mcq', prompt: 'That same model gives V = −100 at t = 30. What does this tell you?', choices: ['the model is only valid until t = 25; beyond that it is meaningless', 'the tank refills in reverse', 'the gradient must be wrong', 'the volume really is negative'], answer: 0, explanation: 'Linear models hold only over a domain. Extrapolating past the point where the tank empties produces arithmetic without meaning.' },
      { lvl: 3, type: 'mcq', prompt: 'Why does a vertical line have an undefined gradient rather than a very large one?', choices: ['the run is exactly 0 and division by zero is undefined', 'because it is not a function', 'its gradient is infinity, which is a number', 'because x and y are reversed'], answer: 0, explanation: 'm = rise/run with run = 0. Near-vertical lines have huge gradients, but exactly vertical is undefined, not infinite.' },
      { lvl: 3, type: 'mcq', prompt: 'Two points on a line give m = 4. A third point on the same line is used to compute the gradient with the first point. What must the result be?', choices: ['exactly 4 — the gradient of a line is constant between any two of its points', 'it depends which points are chosen', 'half of 4, since the distance is different', 'undefined without more information'], answer: 0, explanation: 'Constant gradient between every pair of points is precisely what makes a relationship linear.' },
    ],
  },

  // ==========================================================================
  'math.F2.number-theory-basics': {
    estMinutes: 210,
    hook: String.raw`**Number theory is the study of whole numbers' hidden structure** — and it is the most directly useful "pure" topic you will meet. Primes are the atoms of arithmetic; HCF and LCM are what you are really doing when you simplify a fraction or add two of them; and divisibility, factorisation and modular thinking underpin cryptography, hashing and every "is it even?" check in code.`,
    sections: [
      { h: 'Divisibility and the language of factors',
        body: String.raw`$a$ **divides** $b$ (written $a \mid b$) when $b = a \times k$ for some integer $k$ — there is no remainder. Then $a$ is a **factor** (or divisor) of $b$, and $b$ is a **multiple** of $a$.

Keep the two words straight, because they point in opposite directions: 3 is a *factor* of 12; 12 is a *multiple* of 3. Factors of a number are finite and never exceed it; multiples are infinite and never smaller than it.

The divisibility tests are worth knowing cold — each has a reason, not just a rule:

| Divisor | Test | Why |
|---|---|---|
| 2 | last digit even | 10 is even, so only the units matter |
| 3 | digit sum divisible by 3 | 10 ≡ 1 (mod 3), so each digit contributes itself |
| 4 | last **two** digits divisible by 4 | 100 is divisible by 4 |
| 5 | ends in 0 or 5 | 10 is divisible by 5 |
| 6 | passes both the 2 and 3 tests | 6 = 2 × 3, and 2, 3 are coprime |
| 9 | digit sum divisible by 9 | 10 ≡ 1 (mod 9) |
| 10 | ends in 0 | — |

Note the 6 test carefully: it works because 2 and 3 share no factor. The same trick fails for 8 = 2 × 4, since 2 and 4 are not coprime — passing the 2 and 4 tests does not guarantee divisibility by 8.`,
      },
      { h: 'Primes: the atoms of arithmetic',
        body: String.raw`A **prime** has exactly two distinct factors: 1 and itself. A **composite** has more.

**1 is not prime** — it has only one factor. This is not pedantry: if 1 were prime, factorisations would no longer be unique ($6 = 2\times3 = 1\times2\times3 = 1\times1\times2\times3\ldots$), destroying the theorem below. **2 is prime**, and is the only even prime, because every other even number has 2 as an extra factor.

The primes below 30, worth memorising: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

**The Fundamental Theorem of Arithmetic:** every integer greater than 1 factorises into primes in exactly one way, apart from the order.

$$360 = 2^3 \times 3^2 \times 5$$

That uniqueness is what makes prime factorisation such a powerful tool — it is a number's fingerprint, and almost every question about factors becomes easy once you have it.

**Testing primality efficiently:** to check whether $n$ is prime, trial-divide by primes up to $\sqrt{n}$ only. If $n = ab$ with both factors above $\sqrt n$, then $ab > n$ — impossible. So for 97, testing 2, 3, 5, 7 suffices ($\sqrt{97} \approx 9.8$), and 97 is prime.`,
        example: { title: 'Prime factorisation by repeated division',
          q: 'Find the prime factorisation of 360.',
          solution: 'Divide by the smallest prime repeatedly: $360 \\div 2 = 180$, $\\div 2 = 90$, $\\div 2 = 45$; 45 is odd, so move to 3: $45 \\div 3 = 15$, $\\div 3 = 5$; 5 is prime. Collecting: $360 = 2^3 \\times 3^2 \\times 5$.',
          moral: 'Always work upward through the primes — you cannot miss a factor that way.' },
      },
      { h: 'HCF and LCM from the factorisation',
        body: String.raw`Once you have prime factorisations, both quantities read straight off:

- **HCF** (highest common factor): take each **shared** prime to its **lowest** power.
- **LCM** (lowest common multiple): take **every** prime that appears, to its **highest** power.

For $12 = 2^2\times3$ and $18 = 2\times3^2$:

$$\text{HCF} = 2^1\times3^1 = 6, \qquad \text{LCM} = 2^2\times3^2 = 36$$

A useful identity connects them, valid for any two positive integers:

$$\text{HCF}(a,b) \times \text{LCM}(a,b) = a \times b$$

Check: $6 \times 36 = 216 = 12\times18$. ✓ So once you have one, the other is a single division.

**Knowing which one a problem wants** is the real skill, and the wording is reliable:

- **HCF** — splitting into equal groups, cutting into identical pieces, simplifying a fraction: "the largest tile that fits both dimensions".
- **LCM** — events coinciding again, common denominators, "when will both happen together": "the first time two cycles line up".

Two numbers with HCF 1 are **coprime** — they share no prime factor. That is exactly the condition that makes a fraction fully simplified.`,
        formulas: ['HCF: shared primes, lowest powers',
          'LCM: all primes, highest powers',
          'HCF(a,b) × LCM(a,b) = a × b',
          'Coprime ⇔ HCF = 1 ⇔ the fraction a/b is in lowest terms'],
      },
      { h: 'Where this pays off',
        body: String.raw`Number theory is not decorative — it is what you have quietly been using.

- **Simplifying fractions** is dividing by the HCF. $\tfrac{18}{24}$: HCF is 6, giving $\tfrac34$.
- **Adding fractions** uses the LCM as the common denominator — the smallest one keeps the arithmetic small.
- **Computer science** relies on it constantly: even/odd tests are divisibility by 2, hash tables use prime moduli to spread values evenly, and public-key cryptography rests on the fact that multiplying two large primes is easy while factorising the product is not.
- **Chemistry** balances equations by finding the LCM of the atom counts.

*A worked scheduling problem.* Two buses leave a stand together; one returns every 12 minutes, the other every 18. When do they next leave together? This is the LCM: $\mathrm{LCM}(12,18) = 36$ minutes. Ask instead "what is the largest identical group we can split 12 and 18 items into?" and it is the HCF, 6.

Same two numbers, opposite questions — which is exactly why the wording matters more than the computation.`,
        example: { title: 'Choosing HCF or LCM',
          q: 'A gardener has 12 roses and 18 tulips and wants identical bunches using all the flowers. What is the largest number of bunches, and what does each contain?',
          solution: 'Identical groups from both totals means the HCF: $\\mathrm{HCF}(12,18) = 6$ bunches. Each holds $12\\div6 = 2$ roses and $18\\div6 = 3$ tulips.',
          moral: 'Splitting into equal groups is always HCF; coinciding events are always LCM.' },
      },
    ],
    formulas: ['a | b means b = ak for an integer k (no remainder)',
      'Divisibility: 2 (last digit), 3 and 9 (digit sum), 4 (last two digits), 5 (0 or 5), 6 (2 and 3)',
      'Prime = exactly two factors; 1 is not prime; 2 is the only even prime',
      'Fundamental Theorem: prime factorisation is unique up to order',
      'Test primality by trial division up to √n',
      'HCF × LCM = a × b'],
    summary: [
      'Factors divide a number; multiples are built from it — finite versus infinite.',
      'Divisibility tests come from how 10 behaves modulo the divisor.',
      'A prime has exactly two factors; 1 is excluded so that factorisation stays unique.',
      'Every integer above 1 has a unique prime fingerprint (Fundamental Theorem).',
      'Check primality by trial division only up to √n.',
      'HCF = shared primes at lowest powers; LCM = all primes at highest powers; HCF × LCM = ab.',
      'Equal groups → HCF; events coinciding → LCM. The wording decides, not the numbers.',
    ],
    mistakes: [
      '**Calling 1 prime.** **Why it matters:** unique factorisation would collapse, since you could insert any number of 1s. **Fix:** a prime needs exactly *two distinct* factors; 1 has one.',
      '**Assuming all primes are odd** and so skipping 2. **Fix:** 2 is prime — it is the only even one, precisely because every other even number has 2 as a spare factor.',
      '**Swapping HCF and LCM.** **Fix:** HCF is *Highest* but *smaller* than the numbers; LCM is *Lowest* but *larger*. Read the story: sharing into groups = HCF, meeting again = LCM.',
      '**Trial-dividing past √n when testing primality.** Wasted effort, and it invites arithmetic slips. **Fix:** stop at √n — a factor above it forces a partner below it.',
      '**Using the "test 2 and 4" shortcut for 8.** 12 passes both yet is not divisible by 8. **Fix:** the combined test only works for *coprime* factors, as with 6 = 2 × 3.',
      '**Taking the highest powers for HCF.** **Fix:** HCF takes the *lowest* power of only the *shared* primes; anything more would not divide both.',
      '**Listing multiples one by one to find a large LCM.** Slow and error-prone. **Fix:** factorise, or use LCM = ab ÷ HCF.',
    ],
    tricks: [
      '**Use HCF × LCM = ab** to get the second quantity in one division once you have the first.',
      '**Factorise by dividing repeatedly by the smallest prime that works** — 2s first, then 3s, then 5s. You cannot skip a factor this way.',
      '**Digit-sum test twice for 9**: if the sum is still large, sum again. 8532 → 18 → 9, so it is divisible by 9.',
      '**Stop at √n when testing primality.** For 97, primes up to 9 (2, 3, 5, 7) settle it.',
      '**Read the problem for "each/identical/split" (HCF) versus "again/together/next time" (LCM).** The keywords are far more reliable than intuition.',
      '**Simplify a fraction in one step by dividing by the HCF** rather than cancelling repeatedly: 18/24 with HCF 6 goes straight to 3/4.',
    ],
    memory: [
      '"Primes are the atoms; factorisation is the fingerprint."',
      '"1 is not prime, or fingerprints would not be unique."',
      '"HCF is High but small; LCM is Low but large." The names describe the *rank*, not the size.',
      '"Groups → HCF, meetings → LCM."',
      '"Stop at the square root" when hunting for factors.',
      '"HCF × LCM = the product" — one identity replaces a second full calculation.',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'Which of these is a prime number?', choices: ['29', '1', '21', '27'], answer: 0, explanation: '29 has only the factors 1 and 29. 1 is not prime, 21 = 3×7 and 27 = 3³.' },
      { lvl: 1, type: 'numeric', prompt: 'What is the HCF of 12 and 18?', answer: 6, tolerance: 0, explanation: '12 = 2²×3 and 18 = 2×3²; shared primes at lowest powers give 2×3 = 6.' },
      { lvl: 1, type: 'numeric', prompt: 'What is the LCM of 12 and 18?', answer: 36, tolerance: 0, explanation: 'All primes at highest powers: 2²×3² = 36.' },
      { lvl: 1, type: 'mcq', prompt: 'Is 8532 divisible by 9?', choices: ['yes — its digit sum is 18, which is divisible by 9', 'no', 'only if it is also even', 'cannot be determined without dividing'], answer: 0, explanation: '8+5+3+2 = 18, and 1+8 = 9, so it is divisible by 9.' },
      { lvl: 2, type: 'mcq', prompt: 'What is the prime factorisation of 360?', choices: ['2³ × 3² × 5', '2² × 3² × 5', '2³ × 3 × 5²', '2⁴ × 3 × 5'], answer: 0, explanation: '360 ÷ 2 = 180 ÷ 2 = 90 ÷ 2 = 45; 45 ÷ 3 = 15 ÷ 3 = 5. So 2³ × 3² × 5.' },
      { lvl: 2, type: 'numeric', prompt: 'Two buses leave together, returning every 12 and 18 minutes. After how many minutes do they next leave together?', answer: 36, tolerance: 0, explanation: 'Events coinciding means LCM(12, 18) = 36 minutes.' },
      { lvl: 2, type: 'numeric', prompt: 'A gardener has 12 roses and 18 tulips and makes identical bunches using all flowers. What is the largest number of bunches?', answer: 6, tolerance: 0, explanation: 'Identical groups from both totals means HCF(12, 18) = 6.' },
      { lvl: 2, type: 'mcq', prompt: 'To test whether 97 is prime, which primes must you trial-divide by?', choices: ['2, 3, 5, 7', 'all primes below 97', '2 and 3 only', '2, 3, 5, 7, 11, 13'], answer: 0, explanation: '√97 ≈ 9.8, so testing primes up to 9 suffices. None divide 97, so it is prime.' },
      { lvl: 3, type: 'numeric', prompt: 'Two numbers have product 216 and HCF 6. What is their LCM?', answer: 36, tolerance: 0, explanation: 'HCF × LCM = product, so LCM = 216 ÷ 6 = 36.' },
      { lvl: 3, type: 'mcq', prompt: 'Why is 1 excluded from the primes?', choices: ['including it would destroy the uniqueness of prime factorisation', 'because it is too small', 'because it is odd', 'it is actually prime'], answer: 0, explanation: 'With 1 admitted, 6 could be written 2×3, 1×2×3, 1×1×2×3 and so on — factorisation would no longer be unique.' },
      { lvl: 3, type: 'mcq', prompt: 'A number passes the divisibility tests for 2 and for 4. Must it be divisible by 8?', choices: ['no — 12 passes both and is not divisible by 8', 'yes, always', 'only if it is also divisible by 3', 'only for numbers above 100'], answer: 0, explanation: 'The combined test needs coprime factors. 2 and 4 share a factor, so the argument fails; 12 is the counterexample.' },
      { lvl: 3, type: 'mcq', prompt: 'Which operation on fractions is really an HCF calculation?', choices: ['simplifying to lowest terms', 'adding two fractions', 'comparing two fractions', 'multiplying two fractions'], answer: 0, explanation: 'Simplifying divides numerator and denominator by their HCF. Adding uses the LCM as the common denominator.' },
    ],
  },

  // ==========================================================================
  'math.F2.polynomials-factoring': {
    estMinutes: 240,
    hook: String.raw`**Factoring is multiplication run backwards, and it is the single most reused skill in algebra.** Solving quadratics, simplifying algebraic fractions, finding where a graph crosses the axis, integrating in A1 — all of them begin by turning a sum into a product. The reason a product is so valuable is one fact: **if a product is zero, one of its factors must be zero.** Nothing similar is true for sums.`,
    sections: [
      { h: 'The vocabulary, and why degree matters',
        body: String.raw`A **polynomial** is a sum of terms of the form (number) × (variable to a whole-number power): $3x^2 - 5x + 7$.

- The **degree** is the highest power present. Degree 1 is *linear*, 2 *quadratic*, 3 *cubic*.
- The **coefficient** is the number multiplying a power; the **constant term** has no variable.
- Expressions with a variable in the denominator ($\tfrac{1}{x}$) or under a root ($\sqrt{x}$) are **not** polynomials — the powers must be whole numbers.

Degree matters because it predicts behaviour before you do any work: a polynomial of degree $n$ has at most $n$ roots, and its graph has at most $n-1$ turning points. A quadratic can cross the $x$-axis twice, once, or not at all — never three times.

**Adding and subtracting** polynomials is just collecting like terms. The only trap is subtraction, where the minus applies to every term of the second bracket:

$$(3x^2 - 2x + 1) - (x^2 - 5x + 4) = 2x^2 + 3x - 3$$

Note $-(-5x) = +3x$ overall and $1 - 4 = -3$.`,
      },
      { h: 'Multiplying: every term by every term',
        body: String.raw`Multiplication is the distributive law applied repeatedly — **each term in the first bracket multiplies each term in the second.**

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

The middle term $2ab$ is the one students drop. The last identity — **difference of two squares** — is the most useful factorisation in all of algebra.`,
        formulas: ['(a + b)² = a² + 2ab + b²',
          '(a − b)² = a² − 2ab + b²',
          '(a + b)(a − b) = a² − b²  (difference of two squares)',
          'Degree n ⇒ at most n roots'],
      },
      { h: 'Factoring, step 1: always take out the common factor first',
        body: String.raw`Before any other technique, look for a factor common to **every** term — the highest common factor of the coefficients, together with the lowest power of each shared variable.

$$6x^3 + 9x^2 = 3x^2(2x + 3)$$

Two reasons this comes first: it makes everything that follows smaller, and it is often *all* the factorisation available. Students who skip it end up factorising $12x^2 + 18x$ as a quadratic and get lost.

**Check by expanding.** $3x^2(2x+3) = 6x^3 + 9x^2$. ✓ Every factorisation is instantly checkable — you should never be unsure.

For four terms with no common factor overall, try **grouping** in pairs:

$$x^3 + 2x^2 + 3x + 6 = x^2(x+2) + 3(x+2) = (x+2)(x^2+3)$$

The signal that grouping worked is that both pairs leave the *same* bracket.`,
      },
      { h: 'Factoring quadratics',
        body: String.raw`For $x^2 + bx + c$ (leading coefficient 1), find two numbers that **multiply to $c$ and add to $b$**:

$$x^2 + 8x + 15 = (x+3)(x+5) \quad\text{since } 3\times5=15,\; 3+5=8$$

Use the signs to narrow the search before listing anything:

- $c > 0$: both numbers share the sign of $b$ (both positive if $b>0$, both negative if $b<0$).
- $c < 0$: the numbers have opposite signs, and the larger magnitude carries the sign of $b$.

For $x^2 - 2x - 15$: $c<0$ so opposite signs; product 15, difference 2 → 3 and 5; $b<0$ so the larger is negative: $(x-5)(x+3)$.

**Difference of two squares** is instant once recognised: $x^2 - 49 = (x-7)(x+7)$, and $9x^2 - 25 = (3x-5)(3x+5)$. Note there is no such factorisation for a *sum* of squares over the real numbers.

When the leading coefficient is not 1, split the middle term: for $2x^2 + 7x + 3$, find two numbers multiplying to $2\times3 = 6$ and adding to 7 — namely 6 and 1:

$$2x^2 + 6x + x + 3 = 2x(x+3) + 1(x+3) = (x+3)(2x+1)$$`,
        example: { title: 'Full factorisation, in the right order',
          q: 'Factorise $2x^3 - 18x$ completely.',
          solution: 'Common factor first: $2x(x^2 - 9)$. Now recognise the difference of two squares: $x^2 - 9 = (x-3)(x+3)$. So $2x^3 - 18x = 2x(x-3)(x+3)$.',
          moral: 'Common factor first, then a special form. Stopping at $2x(x^2-9)$ is a half-finished answer.' },
      },
      { h: 'Why factoring is worth the trouble: the zero-product property',
        body: String.raw`If $AB = 0$, then $A = 0$ or $B = 0$. That is a genuinely special property of zero — from $AB = 12$ you can conclude nothing about $A$ and $B$ individually.

This is why solving an equation almost always begins with "get everything on one side, then factorise":

$$x^2 + 8x + 15 = 0 \Rightarrow (x+3)(x+5) = 0 \Rightarrow x = -3 \text{ or } x = -5$$

The same structure gives the **roots** of a polynomial, which are exactly where its graph crosses the $x$-axis — the link between algebra and geometry that I1 Quadratics develops fully.

Factoring also **simplifies algebraic fractions**, and here the rule from F1 returns: you may cancel a common *factor*, never a term of a sum.

$$\frac{x^2 - 9}{x + 3} = \frac{(x-3)(x+3)}{x+3} = x - 3 \quad (x \ne -3)$$

The restriction matters: the original expression is undefined at $x = -3$, so the simplified form is only equal to it elsewhere.`,
        example: { title: 'Solving by factorising',
          q: 'Solve $x^2 - 2x - 15 = 0$.',
          solution: 'Opposite signs are needed with product 15 and difference 2: 5 and 3, with the larger negative since $b<0$. So $(x-5)(x+3) = 0$, giving $x = 5$ or $x = -3$. Check $x=5$: $25 - 10 - 15 = 0$. ✓' },
      },
    ],
    formulas: ['(a ± b)² = a² ± 2ab + b²;  (a+b)(a−b) = a² − b²',
      'x² + bx + c = (x + p)(x + q) where pq = c and p + q = b',
      'Zero-product property: AB = 0 ⇒ A = 0 or B = 0',
      'Order of factorising: common factor → special form → quadratic pair/grouping',
      'Cancel factors, never terms of a sum'],
    summary: [
      'Degree predicts the number of roots and turning points before any work is done.',
      'Multiplication means every term times every term — use a grid beyond two-by-two.',
      'Memorise (a±b)² and a² − b²; the missing 2ab is the classic slip.',
      'Always extract the common factor first, then look for a special form.',
      'For x² + bx + c, find two numbers with product c and sum b; the signs narrow the search.',
      'Factoring matters because AB = 0 forces A = 0 or B = 0 — nothing like it holds for sums.',
      'Every factorisation is checkable by expanding, so you never need to be uncertain.',
    ],
    mistakes: [
      '**Dropping the middle term:** (a + b)² = a² + b². **Fix:** it is (a+b)(a+b), giving a² + 2ab + b². Substitute a = b = 1: 4, not 2.',
      '**Forgetting to distribute a subtraction across a whole bracket.** (3x² − 2x + 1) − (x² − 5x + 4) with only the first term negated. **Fix:** change every sign in the second bracket before collecting.',
      '**Not taking out the common factor first**, then failing to factor what remains. **Fix:** make "common factor?" the first question every time — it shrinks the problem.',
      '**Stopping half way:** leaving 2x(x² − 9) as the final answer. **Fix:** ask "can any bracket still be factorised?" — x² − 9 is a difference of squares.',
      '**Trying to factor a sum of squares.** x² + 9 does not factorise over the reals. **Fix:** only the *difference* of squares splits.',
      '**Cancelling terms instead of factors** in algebraic fractions: writing (x² − 9)/(x + 3) = x² − 3. **Fix:** factor the numerator first, then cancel the shared bracket.',
      '**Losing the excluded value** when simplifying a fraction. **Fix:** state x ≠ −3 — the simplified expression is defined where the original was not.',
      '**Getting the sign pair wrong** in x² − 2x − 15. **Fix:** c < 0 means opposite signs; b < 0 means the larger magnitude is negative → (x−5)(x+3).',
    ],
    tricks: [
      '**Check every factorisation by expanding.** It takes seconds and makes the answer certain.',
      '**Use a grid rather than FOIL** for anything beyond two binomials — you cannot miss a product.',
      '**Read the signs before hunting for the pair.** Knowing "opposite signs, larger one negative" cuts the candidate list to almost nothing.',
      '**For ax² + bx + c, split the middle term** using two numbers with product ac and sum b, then factor by grouping.',
      '**Recognise a² − b² on sight**, including disguised forms: 9x² − 25 = (3x)² − 5², and x⁴ − 16 = (x²−4)(x²+4) = (x−2)(x+2)(x²+4).',
      '**Set the expression to zero and factor when solving** — the zero-product property is the only reason the method works, so get one side to 0 first.',
    ],
    memory: [
      '"Factoring is multiplying backwards" — and expanding is the free check.',
      '"Common factor first, always."',
      '"Product c, sum b" for the simple quadratic pair.',
      '"Difference of squares splits; sum of squares does not."',
      '"Zero product means a zero factor" — the whole reason we factorise to solve.',
      '"Cancel factors, not terms."',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'What is the degree of 3x² − 5x + 7?', choices: ['2', '3', '1', '7'], answer: 0, explanation: 'The highest power of x present is 2, so it is a quadratic.' },
      { lvl: 1, type: 'mcq', prompt: 'Expand (x + 3)(x + 5).', choices: ['x² + 8x + 15', 'x² + 15x + 8', 'x² + 15', 'x² + 8x + 8'], answer: 0, explanation: 'x² + 5x + 3x + 15 = x² + 8x + 15.' },
      { lvl: 1, type: 'mcq', prompt: 'Factor out the common factor: 6x³ + 9x².', choices: ['3x²(2x + 3)', '3x(2x² + 3x)', 'x²(6x + 9)', '3(2x³ + 3x²)'], answer: 0, explanation: 'HCF of 6 and 9 is 3, and the lowest power of x is x². Check: 3x²(2x+3) = 6x³ + 9x².' },
      { lvl: 1, type: 'mcq', prompt: 'Expand (a + b)².', choices: ['a² + 2ab + b²', 'a² + b²', 'a² + ab + b²', '2a + 2b'], answer: 0, explanation: '(a+b)(a+b) gives the middle term 2ab. Test a = b = 1: 4, not 2.' },
      { lvl: 2, type: 'mcq', prompt: 'Factorise x² + 8x + 15.', choices: ['(x + 3)(x + 5)', '(x + 1)(x + 15)', '(x − 3)(x − 5)', '(x + 4)(x + 4)'], answer: 0, explanation: 'Two numbers with product 15 and sum 8: 3 and 5.' },
      { lvl: 2, type: 'mcq', prompt: 'Factorise x² − 49.', choices: ['(x − 7)(x + 7)', '(x − 7)²', '(x + 7)²', 'it does not factorise'], answer: 0, explanation: 'Difference of two squares: a² − b² = (a−b)(a+b) with a = x, b = 7.' },
      { lvl: 2, type: 'mcq', prompt: 'Factorise x² − 2x − 15.', choices: ['(x − 5)(x + 3)', '(x + 5)(x − 3)', '(x − 5)(x − 3)', '(x + 5)(x + 3)'], answer: 0, explanation: 'c < 0 means opposite signs; product 15 and difference 2 give 5 and 3, with the larger negative since b < 0.' },
      { lvl: 2, type: 'mcq', prompt: 'Simplify (3x² − 2x + 1) − (x² − 5x + 4).', choices: ['2x² + 3x − 3', '2x² − 7x + 5', '2x² + 3x + 5', '4x² − 7x + 5'], answer: 0, explanation: 'Negate every term of the second bracket: 3x² − x² = 2x², −2x + 5x = 3x, 1 − 4 = −3.' },
      { lvl: 3, type: 'mcq', prompt: 'Factorise 2x³ − 18x completely.', choices: ['2x(x − 3)(x + 3)', '2x(x² − 9)', '2(x³ − 9x)', '2x(x − 3)²'], answer: 0, explanation: 'Common factor 2x first, then x² − 9 is a difference of squares. Stopping at 2x(x²−9) is incomplete.' },
      { lvl: 3, type: 'mcq', prompt: 'Solve x² − 2x − 15 = 0.', choices: ['x = 5 or x = −3', 'x = −5 or x = 3', 'x = 5 or x = 3', 'x = 15 or x = −1'], answer: 0, explanation: '(x−5)(x+3) = 0, so a factor is zero: x = 5 or x = −3.' },
      { lvl: 3, type: 'mcq', prompt: 'Simplify (x² − 9)/(x + 3), stating any restriction.', choices: ['x − 3, provided x ≠ −3', 'x² − 3', 'x + 3', 'x − 3 with no restriction'], answer: 0, explanation: 'Factor to (x−3)(x+3)/(x+3) and cancel the common factor. The original is undefined at x = −3, so that value must be excluded.' },
      { lvl: 3, type: 'mcq', prompt: 'Why does factorising help solve equations, given that AB = 12 tells you nothing about A and B?', choices: ['zero is special: AB = 0 forces A = 0 or B = 0', 'because factors are always smaller than products', 'because 12 has many factor pairs and 0 has none', 'it does not help; it is only a tidier form'], answer: 0, explanation: 'The zero-product property is what converts one equation into simple separate ones — which is why you always move everything to one side first.' },
    ],
  },

  // ==========================================================================
  'math.F2.systems-linear-equations': {
    estMinutes: 210,
    hook: String.raw`**One equation with two unknowns has infinitely many solutions; two equations usually pin them both down.** Geometrically you are asking where two lines cross — and that question has exactly three possible answers, which is why a system can have one solution, none, or infinitely many. Every method below is just a way of removing one unknown so that the F1 skill of solving a single linear equation can finish the job.`,
    sections: [
      { h: 'What a system asks',
        body: String.raw`A **system** (or simultaneous equations) is two or more equations that must hold *at the same time*:

$$2x + y = 11, \qquad x - y = 1$$

A solution is a **pair** $(x, y)$ satisfying **both**. Here $(4, 3)$ works: $2(4)+3 = 11$ ✓ and $4 - 3 = 1$ ✓. Checking in *both* equations is not optional — a pair satisfying only one is not a solution at all.

Each linear equation is a line, so solving the system means **finding the intersection**. That geometric picture gives you all three outcomes immediately:

| Picture | Solutions | Algebraic signal |
|---|---|---|
| Lines cross once | exactly one | you get $x = $ a number |
| Lines parallel, distinct | none | a contradiction like $0 = 5$ |
| Same line twice | infinitely many | an identity like $0 = 0$ |

So if both variables vanish during your working, you have not made a mistake — you have discovered which of the three cases you are in.`,
        svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Two lines intersecting at one point" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="145" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="145" x2="370" y2="145" stroke="#6b7a99" stroke-width="2"/>
  <line x1="60" y1="35" x2="330" y2="130" stroke="#6366f1" stroke-width="3"/>
  <line x1="60" y1="135" x2="330" y2="40" stroke="#6ee7a8" stroke-width="3"/>
  <circle cx="196" cy="86" r="6" fill="#fff" stroke="#0b1020" stroke-width="2"/>
  <text x="206" y="76" font-size="12" fill="#e6ecff">the solution (x, y)</text>
  <text x="200" y="163" font-size="11" fill="#9aa8c4" text-anchor="middle">solving a system = finding where the lines meet</text>
</svg>`,
      },
      { h: 'Substitution: when one variable is already alone',
        body: String.raw`**Method:** rearrange one equation to make a variable the subject, substitute into the other, solve, then back-substitute.

Solve $y = 2x - 1$ and $3x + y = 9$.

The first equation already gives $y$, so substitute directly:

$$3x + (2x - 1) = 9 \Rightarrow 5x - 1 = 9 \Rightarrow x = 2$$

Back-substitute: $y = 2(2) - 1 = 3$. Solution $(2, 3)$. Check in the *other* equation: $3(2) + 3 = 9$. ✓

**Choose substitution when a variable has coefficient 1** (or is already isolated) — then no fractions appear. If every coefficient is 2 or more, elimination is usually cleaner.

Two habits prevent the standard errors: **bracket the substituted expression** (writing $3x + 2x - 1$ without brackets is fine here, but with $-(2x-1)$ it is fatal), and **back-substitute into the simpler equation.**`,
      },
      { h: 'Elimination: add or subtract to cancel',
        body: String.raw`**Method:** scale one or both equations so that one variable has matching coefficients, then add or subtract to eliminate it.

Solve $2x + y = 11$ and $x - y = 1$.

The $y$ coefficients are already $+1$ and $-1$, so **adding** eliminates $y$:

$$3x = 12 \Rightarrow x = 4, \qquad\text{then } 4 - y = 1 \Rightarrow y = 3$$

When coefficients do not match, scale first. For $3x + 2y = 16$ and $5x - 4y = 12$: double the first to get $6x + 4y = 32$, then add to the second — the $y$ terms cancel, giving $11x = 44$ and $x = 4$.

**Same signs → subtract; opposite signs → add.** This is where most errors happen, because subtracting an equation means subtracting *every* term, including the constant. Writing the operation beside the line ("$E_1 - E_2$") and lining the terms up in columns prevents nearly all of them.`,
        formulas: ['Substitution: isolate one variable, substitute, solve, back-substitute',
          'Elimination: match coefficients, then add (opposite signs) or subtract (same signs)',
          'Always check the pair in BOTH original equations',
          'Contradiction (0 = 5) ⇒ no solution;  identity (0 = 0) ⇒ infinitely many'],
        example: { title: 'Elimination with scaling',
          q: 'Solve $3x + 2y = 16$ and $5x - 4y = 12$.',
          solution: 'Double the first: $6x + 4y = 32$. Add to the second: $11x = 44$, so $x = 4$. Substitute into $3x + 2y = 16$: $12 + 2y = 16$, giving $y = 2$. Check in the second: $5(4) - 4(2) = 20 - 8 = 12$. ✓' },
      },
      { h: 'Modelling with two unknowns',
        body: String.raw`Systems earn their keep whenever a problem has **two unknowns and two independent pieces of information** — typically a "how many" fact and a "how much" fact.

*Example.* Tickets cost ₹40 for adults and ₹25 for children. 12 tickets were sold for ₹390. How many of each?

1. **Name both unknowns:** let $a$ = adult tickets, $c$ = child tickets.
2. **Write one equation per fact:**
   - counting: $a + c = 12$
   - money: $40a + 25c = 390$
3. **Solve.** From the first, $c = 12 - a$. Substituting: $40a + 25(12 - a) = 390$, so $15a + 300 = 390$, giving $a = 6$ and $c = 6$.
4. **Check against the words**, not just the algebra: 6 adults and 6 children is 12 tickets, costing $240 + 150 = ₹390$. ✓

The commonest failure is writing two versions of the *same* fact — for instance "$a + c = 12$" and "$c + a = 12$". Two equations only determine two unknowns if they are **independent**; a repeat gives the parallel-or-identical case and no unique answer.

**Sanity-check the answer's meaning too.** Tickets cannot be fractional or negative, so an answer of $a = 6.5$ signals a mis-set-up equation rather than an arithmetic slip.`,
        example: { title: 'The classic two-fact model',
          q: 'Five pens and three notebooks cost ₹235. Three pens and two notebooks cost ₹150. Find each price.',
          solution: 'Let $p$, $n$ be the prices. $5p + 3n = 235$ and $3p + 2n = 150$. Multiply the first by 2 and the second by 3: $10p + 6n = 470$ and $9p + 6n = 450$. Subtract: $p = 20$. Then $3(20) + 2n = 150$ gives $n = 45$. Check the first: $100 + 135 = 235$. ✓',
          moral: 'Scale both equations to make the coefficients of one variable match, then subtract.' },
      },
    ],
    formulas: ['A solution is a PAIR (x, y) satisfying every equation',
      'Substitution — best when a coefficient is 1',
      'Elimination — best when no coefficient is 1; same signs subtract, opposite signs add',
      'One solution ⇔ lines cross;  none ⇔ parallel;  infinitely many ⇔ identical lines',
      'Two facts about two unknowns must be INDEPENDENT'],
    summary: [
      'A system asks for values satisfying all equations at once — geometrically, where lines meet.',
      'Three outcomes only: one solution, none (parallel), or infinitely many (same line).',
      'Substitution suits a variable with coefficient 1; elimination suits everything else.',
      'Same signs subtract, opposite signs add — and subtraction applies to every term.',
      'Always back-substitute and check in both original equations.',
      'Word problems need two independent facts; a restated fact determines nothing.',
      'If both variables vanish, read the leftover statement: 0 = 5 means none, 0 = 0 means infinitely many.',
    ],
    mistakes: [
      '**Checking the answer in only one equation.** A pair satisfying one equation alone is not a solution. **Fix:** substitute into both, every time.',
      '**Subtracting only the first term of an equation.** From 5x + 3y = 235 minus 3x + 2y = 150, writing 2x + 3y = 85. **Fix:** subtract every term, constants included; line the equations up in columns.',
      '**Adding when the signs are the same** (or subtracting when opposite), so nothing cancels. **Fix:** check the coefficients of the target variable first — opposite signs add, same signs subtract.',
      '**Forgetting brackets when substituting.** Replacing y with 2x − 1 inside a subtraction and dropping the bracket flips a sign. **Fix:** always write the substituted expression in brackets, then expand.',
      '**Writing two versions of the same fact** in a word problem, then finding no unique answer. **Fix:** the two equations must say different things — usually one counts items and the other totals money.',
      '**Treating 0 = 0 or 0 = 5 as an error in the working.** **Fix:** these are the results — infinitely many solutions and none respectively.',
      '**Stopping after finding x.** The solution is a pair. **Fix:** back-substitute and state both values.',
      '**Ignoring whether the answer makes sense in context** — fractional or negative tickets, people, or prices. **Fix:** re-read the model; an impossible answer usually means a wrong equation.',
    ],
    tricks: [
      '**Pick the method from the coefficients:** any variable with coefficient 1 → substitution; otherwise elimination.',
      '**Line the equations up in columns before eliminating.** Most sign errors are alignment errors.',
      '**Scale to the LCM of the two coefficients** you want to cancel — for 3 and 5, scale to 15 — rather than multiplying by each other blindly.',
      '**Back-substitute into the simplest equation**, which keeps the arithmetic small.',
      '**Label each equation E₁ and E₂ and write the operation used** ("2E₁ + E₂"). It makes the working checkable and is what markers look for.',
      '**Sanity-check against the story**, not the algebra: 6 adults and 6 children costing ₹390 is a stronger check than re-reading your own manipulation.',
    ],
    memory: [
      '"Two unknowns need two independent facts."',
      '"Same signs subtract, opposite signs add."',
      '"Substitution when something is alone; elimination when nothing is."',
      '"The answer is a pair" — never stop at x.',
      '"Where the lines cross" — the picture behind every system.',
      '"0 = 0 means all, 0 = 5 means none."',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'Is (4, 3) a solution of 2x + y = 11 and x − y = 1?', choices: ['yes — it satisfies both', 'no', 'only the first equation', 'only the second equation'], answer: 0, explanation: '2(4)+3 = 11 ✓ and 4 − 3 = 1 ✓. A solution must satisfy every equation.' },
      { lvl: 1, type: 'numeric', prompt: 'Solve y = 2x − 1 and 3x + y = 9. What is x?', answer: 2, tolerance: 0, explanation: 'Substitute: 3x + 2x − 1 = 9, so 5x = 10 and x = 2.' },
      { lvl: 1, type: 'numeric', prompt: 'For that same system, what is y?', answer: 3, tolerance: 0, explanation: 'Back-substitute: y = 2(2) − 1 = 3.' },
      { lvl: 1, type: 'mcq', prompt: 'Geometrically, what does solving a system of two linear equations find?', choices: ['where the two lines intersect', 'the gradient of each line', 'the area between the lines', 'the midpoint of the lines'], answer: 0, explanation: 'Each equation is a line; a common solution is a point on both — their intersection.' },
      { lvl: 2, type: 'numeric', prompt: 'Solve 2x + y = 11 and x − y = 1 by elimination. What is x?', answer: 4, tolerance: 0, explanation: 'The y coefficients are opposite, so add: 3x = 12, giving x = 4.' },
      { lvl: 2, type: 'numeric', prompt: 'Solve 3x + 2y = 16 and 5x − 4y = 12. What is x?', answer: 4, tolerance: 0, explanation: 'Double the first: 6x + 4y = 32. Add to the second: 11x = 44, so x = 4.' },
      { lvl: 2, type: 'numeric', prompt: 'Tickets cost ₹40 (adult) and ₹25 (child). 12 tickets sold for ₹390. How many adult tickets?', answer: 6, tolerance: 0, explanation: 'a + c = 12 and 40a + 25c = 390. Substituting c = 12 − a gives 15a + 300 = 390, so a = 6.' },
      { lvl: 2, type: 'mcq', prompt: 'To eliminate a variable whose coefficients are +3 and −3, you should:', choices: ['add the equations', 'subtract the equations', 'multiply the equations', 'divide the equations'], answer: 0, explanation: 'Opposite signs cancel on addition. Same signs would require subtraction.' },
      { lvl: 3, type: 'numeric', prompt: 'Five pens and three notebooks cost ₹235; three pens and two notebooks cost ₹150. What is the price of one notebook, in rupees?', answer: 45, tolerance: 0, explanation: 'Scaling to 10p + 6n = 470 and 9p + 6n = 450 and subtracting gives p = 20; then 3(20) + 2n = 150 gives n = 45.' },
      { lvl: 3, type: 'mcq', prompt: 'Solving a system produces the statement 0 = 5. What does this mean?', choices: ['no solution — the lines are parallel and distinct', 'infinitely many solutions', 'x = 5', 'an arithmetic error has definitely occurred'], answer: 0, explanation: 'A contradiction with both variables eliminated means the lines never meet.' },
      { lvl: 3, type: 'mcq', prompt: 'A student models a problem as a + c = 12 and c + a = 12. Why can they not find a unique answer?', choices: ['the two equations state the same fact, so they are not independent', 'the equations are inconsistent', 'there are too many unknowns', 'the equations are not linear'], answer: 0, explanation: 'They describe one line written twice, giving infinitely many pairs. Two unknowns need two genuinely different facts.' },
      { lvl: 3, type: 'mcq', prompt: 'A ticket problem yields a = 6.5. What is the most likely explanation?', choices: ['the equations were set up wrongly, since ticket counts must be whole numbers', 'the answer should simply be rounded to 7', 'the system has no solution', 'fractional tickets are acceptable in algebra'], answer: 0, explanation: 'The algebra is consistent but the context is not. An impossible answer is a signal to re-check the model, not to round.' },
    ],
  },

  // ==========================================================================
  'math.F2.geometry-similarity-pythagoras': {
    estMinutes: 240,
    hook: String.raw`**Similarity is ratio applied to shapes** — the F1 idea, one dimension up. Two figures are similar when one is a scaled copy of the other, and that single notion explains maps, scale models, shadows, magnification, and why a triangle's side ratios depend only on its angles (which is exactly what makes trigonometry possible in I1). Pythagoras then gives you the one length relationship every right triangle obeys.`,
    sections: [
      { h: 'Similar versus congruent',
        body: String.raw`Two figures are:

- **Congruent** — same shape *and* same size. One can be placed exactly on the other.
- **Similar** — same shape, possibly different size. One is a scaled copy of the other.

For similar figures, two conditions hold together:

1. **Corresponding angles are equal.**
2. **Corresponding sides are in a constant ratio** — the **scale factor** $k$.

For triangles, either condition alone is enough (which is not true for other polygons): equal angles force proportional sides, and proportional sides force equal angles. Hence the tests **AA** (two angles equal — the third follows automatically), **SSS similarity** (all three side ratios equal) and **SAS similarity** (two ratios equal with the included angles equal).

This is why **AAA proved similarity but not congruence** back in F1 — it fixes shape and leaves size free. A rectangle counterexample shows why triangles are special: all rectangles have four right angles, yet a $1\times2$ and a $1\times5$ rectangle are not similar.`,
      },
      { h: 'Scale factor and what it does to length, area and volume',
        body: String.raw`If the scale factor is $k$, then:

$$\text{lengths} \times k, \qquad \text{areas} \times k^2, \qquad \text{volumes} \times k^3$$

The reason is dimensional: area is a product of two lengths, volume of three. Double every length and the area quadruples, the volume grows eightfold.

This is one of the most under-used facts in school mathematics, and one of the most heavily tested:

- A model car at $1:20$ scale has $\tfrac{1}{400}$ of the surface area and $\tfrac{1}{8000}$ of the volume — so it needs far less paint and far less material than intuition suggests.
- If two similar triangles have areas in the ratio $9:25$, the **length** ratio is $3:5$ — take the square root.

Watch the direction of the operation: going from lengths to areas you *square*; from areas back to lengths you *square-root*.`,
        svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Two similar triangles with scale factor 2" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,120 100,120 40,80" fill="none" stroke="#6ee7a8" stroke-width="2.5"/>
  <text x="60" y="138" font-size="11" fill="#9aa8c4">3</text>
  <text x="24" y="102" font-size="11" fill="#9aa8c4">2</text>
  <polygon points="180,120 300,120 180,40" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <text x="234" y="138" font-size="11" fill="#9aa8c4">6</text>
  <text x="164" y="84" font-size="11" fill="#9aa8c4">4</text>
  <text x="200" y="30" font-size="12" fill="#e6ecff">k = 2 → area × 4</text>
</svg>`,
        formulas: ['Scale factor k:  lengths × k,  areas × k²,  volumes × k³',
          'Area ratio a²:b² ⇒ length ratio a:b (take the square root)',
          'Similar triangle tests: AA, SSS (ratios), SAS (ratio–angle–ratio)'],
      },
      { h: 'Pythagoras: the right-triangle law',
        body: String.raw`In a right-angled triangle with legs $a$, $b$ and **hypotenuse** $c$ (the side opposite the right angle, always the longest):

$$a^2 + b^2 = c^2$$

Identifying the hypotenuse correctly is most of the work. It is *not* "the bottom" or "the slanted one" — it is the side facing the right angle.

Use it in two directions:

- **Finding the hypotenuse:** add the squares, then square-root. Legs 3 and 4 give $c = \sqrt{9+16} = 5$.
- **Finding a leg:** *subtract*. With $c = 13$ and $a = 5$: $b = \sqrt{169 - 25} = 12$. Adding here is the single commonest Pythagoras error, and it is caught instantly by noticing that a leg came out longer than the hypotenuse.

The **converse** is equally useful and often forgotten: if $a^2 + b^2 = c^2$ then the triangle *is* right-angled. That is how you prove a corner is square — the 3-4-5 method builders use.

Worth memorising, because they recur constantly: the triples **3-4-5**, **5-12-13**, **8-15-17**, **7-24-25**, and every multiple of them (6-8-10, 9-12-15, …).`,
        example: { title: 'Both directions, plus a sanity check',
          q: 'A ladder 13 m long leans against a wall with its foot 5 m from the base. How high does it reach?',
          solution: 'The ladder is the hypotenuse, so subtract: $h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ m.',
          moral: 'The answer must be less than 13 — the hypotenuse is always the longest side. That check catches the add/subtract error every time.' },
      },
      { h: 'Mensuration: area, surface area and volume',
        body: String.raw`Areas and volumes are worth understanding rather than memorising, because each formula comes from a simple idea.

| Shape | Formula | Where it comes from |
|---|---|---|
| Rectangle | $A = lw$ | rows × columns of unit squares |
| Triangle | $A = \tfrac12 bh$ | half a rectangle of the same base and height |
| Parallelogram | $A = bh$ | cut a triangle off one end, slide it to the other |
| Trapezium | $A = \tfrac12(a+b)h$ | average of the parallel sides × height |
| Circle | $A = \pi r^2$, $C = 2\pi r$ | $\pi$ is defined as circumference ÷ diameter |
| Prism (any) | $V = (\text{cross-section area})\times \text{length}$ | stack identical slices |
| Cylinder | $V = \pi r^2 h$ | a prism with a circular cross-section |
| Cone / pyramid | $V = \tfrac13(\text{base area})h$ | exactly one third of the enclosing prism |
| Sphere | $V = \tfrac43\pi r^3$, $A = 4\pi r^2$ | — |

Two things matter more than the formulas themselves:

**Height must be perpendicular to the base.** In a triangle or parallelogram, the slanted side is not the height. Using it is the most frequent mensuration error, and Pythagoras is often how you find the true height.

**Units follow dimensions.** Lengths in cm, areas in cm², volumes in cm³. Converting is therefore not linear: $1\text{ m}^2 = 10\,000\text{ cm}^2$ (not 100), and $1\text{ m}^3 = 1\,000\,000\text{ cm}^3$. This is the scale-factor rule again — $k = 100$, so $k^2$ and $k^3$.`,
        example: { title: 'Composite shape with a hidden height',
          q: 'A parallelogram has base 10 cm and slant side 6 cm, with the slant making the perpendicular height 5 cm. Find its area, and the area of a similar parallelogram twice as long.',
          solution: 'Area $= bh = 10 \\times 5 = 50$ cm² — the 6 cm slant side is not used. The similar figure has $k = 2$, so its area is $50 \\times k^2 = 200$ cm².',
          moral: 'Perpendicular height only; and areas scale by k², never k.' },
      },
    ],
    formulas: ['Similar: equal angles AND sides in ratio k (for triangles either implies the other)',
      'Lengths × k, areas × k², volumes × k³',
      'Pythagoras: a² + b² = c², c the hypotenuse (opposite the right angle)',
      'Converse: if a² + b² = c², the triangle is right-angled',
      'Triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 and their multiples',
      'Triangle A = ½bh;  circle A = πr², C = 2πr;  prism V = cross-section × length;  cone/pyramid V = ⅓(base)h',
      '1 m² = 10 000 cm²;  1 m³ = 1 000 000 cm³'],
    summary: [
      'Congruent = same shape and size; similar = same shape, scaled by factor k.',
      'For triangles, AA is enough for similarity — equal angles force proportional sides.',
      'Lengths scale by k, areas by k², volumes by k³ — and reverse with a square or cube root.',
      'Pythagoras: a² + b² = c², with c the side opposite the right angle.',
      'Add to find the hypotenuse, subtract to find a leg; the hypotenuse is always longest.',
      'The converse of Pythagoras is how you prove an angle is right.',
      'Area and volume formulas follow from simple constructions; height must always be perpendicular.',
    ],
    mistakes: [
      '**Adding instead of subtracting when finding a leg.** Getting a leg longer than the hypotenuse. **Fix:** the hypotenuse is the largest side — if your answer exceeds it, you added when you should have subtracted.',
      '**Misidentifying the hypotenuse** as the bottom or the longest-looking side in the drawing. **Fix:** it is always opposite the right angle. Mark the right angle first, then the side facing it.',
      '**Scaling area by k instead of k².** Doubling the lengths of a shape and doubling its area. **Fix:** area is length × length, so the factor is squared — a doubled shape has four times the area.',
      '**Converting m² to cm² by multiplying by 100.** **Fix:** 1 m² = 100 × 100 = 10 000 cm². The same k² rule, applied to units.',
      '**Using the slant side as the height** in a triangle, parallelogram or trapezium. **Fix:** height is the perpendicular distance to the base; find it with Pythagoras if it is not given.',
      '**Assuming any two figures with equal angles are similar.** True for triangles, false in general — all rectangles have four right angles but are not all similar. **Fix:** for non-triangles, check the side ratios too.',
      '**Forgetting the ⅓ for cones and pyramids.** **Fix:** a cone is exactly one third of the cylinder that encloses it.',
      '**Going from an area ratio straight to a length ratio.** Areas 9:25 does not mean lengths 9:25. **Fix:** square-root first, giving 3:5.',
    ],
    tricks: [
      '**Memorise the Pythagorean triples.** Recognising 5-12-13 saves the whole calculation, and multiples (10-24-26) are just as common.',
      '**Check every Pythagoras answer against "the hypotenuse is longest".** It catches the add/subtract confusion instantly.',
      '**For scale problems, write k first**, then decide whether the question needs k, k² or k³.',
      '**Reverse-engineer a scale factor from areas by square-rooting** and from volumes by cube-rooting.',
      '**Split composite shapes into rectangles and triangles** and add the areas — far safer than hunting for a single formula.',
      '**Use the converse of Pythagoras to test for a right angle:** compute a² + b² and c², and compare.',
      '**Redraw similar triangles separately, in the same orientation**, before writing ratios. Most similarity errors are mis-paired corresponding sides.',
    ],
    memory: [
      '"Similar = same shape, different size; congruent = same shape, same size."',
      '"Length k, area k², volume k³" — the dimension is the power.',
      '"The hypotenuse faces the right angle, and it is always the longest."',
      '"Hypotenuse? Add. Leg? Subtract."',
      '"3-4-5, 5-12-13, 8-15-17, 7-24-25" — say them until they are automatic.',
      '"Height means perpendicular height" — never the slant.',
      '"A cone is a third of its cylinder."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'A right triangle has legs 3 and 4. What is the hypotenuse?', answer: 5, tolerance: 0, explanation: '3² + 4² = 9 + 16 = 25, so c = 5.' },
      { lvl: 1, type: 'numeric', prompt: 'A triangle has base 10 cm and perpendicular height 5 cm. What is its area in cm²?', answer: 25, tolerance: 0, explanation: 'A = ½bh = ½ × 10 × 5 = 25 cm².' },
      { lvl: 1, type: 'mcq', prompt: 'Two triangles have all three angles equal. They are:', choices: ['similar', 'congruent', 'neither', 'necessarily identical'], answer: 0, explanation: 'Equal angles fix shape but not size — that is similarity. Congruence would need a side as well.' },
      { lvl: 1, type: 'mcq', prompt: 'In a right triangle, which side is the hypotenuse?', choices: ['the side opposite the right angle', 'the bottom side', 'the shortest side', 'the vertical side'], answer: 0, explanation: 'The hypotenuse always faces the right angle, and it is always the longest side.' },
      { lvl: 2, type: 'numeric', prompt: 'A ladder 13 m long has its foot 5 m from a wall. How high up the wall does it reach, in metres?', answer: 12, tolerance: 0, explanation: 'Finding a leg means subtracting: √(169 − 25) = √144 = 12 m.' },
      { lvl: 2, type: 'numeric', prompt: 'A shape is enlarged by scale factor 3. By what factor does its area increase?', answer: 9, tolerance: 0, explanation: 'Areas scale by k² = 3² = 9.' },
      { lvl: 2, type: 'numeric', prompt: 'How many cm² are in 1 m²?', answer: 10000, tolerance: 0, explanation: '1 m = 100 cm, and area scales by k²: 100² = 10 000 cm².' },
      { lvl: 2, type: 'numeric', prompt: 'Two similar triangles have areas in the ratio 9 : 25. What is the ratio of their corresponding sides, expressed as the smaller number when the larger is 5?', answer: 3, tolerance: 0, explanation: 'Take the square root of the area ratio: √9 : √25 = 3 : 5.' },
      { lvl: 3, type: 'mcq', prompt: 'A parallelogram has base 10 cm, slant side 6 cm and perpendicular height 5 cm. What is its area?', choices: ['50 cm²', '60 cm²', '30 cm²', '25 cm²'], answer: 0, explanation: 'A = bh uses the perpendicular height: 10 × 5 = 50 cm². The 6 cm slant side is a distractor.' },
      { lvl: 3, type: 'mcq', prompt: 'A model car is built at 1 : 20 scale. What fraction of the real car\'s volume does it have?', choices: ['1/8000', '1/20', '1/400', '1/60'], answer: 0, explanation: 'Volumes scale by k³, and 20³ = 8000.' },
      { lvl: 3, type: 'mcq', prompt: 'A triangle has sides 8, 15 and 17. Is it right-angled?', choices: ['yes — 64 + 225 = 289 = 17², by the converse of Pythagoras', 'no', 'only if the 17 side is vertical', 'not enough information'], answer: 0, explanation: 'The converse states that if a² + b² = c² then the angle opposite c is a right angle. 8-15-17 is a Pythagorean triple.' },
      { lvl: 3, type: 'mcq', prompt: 'All rectangles have four right angles. Why does this not make them all similar?', choices: ['their side ratios can differ, and for non-triangles equal angles are not enough', 'they are in fact all similar', 'because rectangles are not polygons', 'because area scales by k²'], answer: 0, explanation: 'A 1×2 and a 1×5 rectangle have identical angles but different proportions. Only for triangles does AA force similarity.' },
    ],
  },

  // ==========================================================================
  'math.F2.probability-statistics-i': {
    estMinutes: 210,
    hook: String.raw`**Probability is the mathematics of what we do not know — and it is a proportion, not a new kind of number.** "One chance in six" is the fraction $\tfrac16$, and every rule that follows is a fact about counting outcomes. Statistics then summarises data we *do* have. Together they are the most practically used mathematics in existence: medicine, insurance, quality control, machine learning and every claim in a newspaper rests on them.`,
    sections: [
      { h: 'Probability as a proportion of outcomes',
        body: String.raw`For outcomes that are **equally likely**,

$$P(\text{event}) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$$

Rolling a fair die, $P(\text{even}) = \tfrac36 = \tfrac12$. The whole formula is a ratio — the F1 idea again.

Three consequences follow immediately, and they are your error-detectors:

- **$0 \le P \le 1$ always.** 0 is impossible, 1 is certain. A probability above 1 or below 0 is a bug in your working, not a result.
- **The probabilities of all possible outcomes sum to 1**, because every outcome is somewhere in the list.
- **Complement rule:** $P(\text{not } A) = 1 - P(A)$. This is often far easier than counting directly — "at least one" problems in particular are usually solved as $1 - P(\text{none})$.

The phrase **"equally likely" is doing real work.** It holds for a fair die and fails for a drawing pin, weather, or a biased coin. Where outcomes are not equally likely, probability must come from **experiment**: the *relative frequency* (successes ÷ trials), which approaches the true probability as trials increase. That distinction — theoretical versus experimental probability — is the heart of the topic.`,
        formulas: ['P(event) = favourable outcomes ÷ total outcomes (equally likely only)',
          '0 ≤ P ≤ 1;  all outcomes sum to 1',
          'P(not A) = 1 − P(A)',
          'Experimental probability = successes ÷ trials'],
      },
      { h: 'Combining events: and, or, and the sample space',
        body: String.raw`For **two events at once**, list the possibilities. The **sample space** for two dice is a $6\times6$ grid of 36 equally likely pairs, and once drawn, most questions become counting.

- $P(\text{total} = 7) = \tfrac{6}{36} = \tfrac16$ — there are six pairs summing to 7.
- $P(\text{total} = 12) = \tfrac{1}{36}$ — only $(6,6)$.

That grid also kills the common intuition that all totals are equally likely: 7 is six times as likely as 12, because more pairs produce it.

**"Or" for mutually exclusive events — add.** If two events cannot happen together, $P(A \text{ or } B) = P(A) + P(B)$. Drawing a king or a queen: $\tfrac{4}{52} + \tfrac{4}{52} = \tfrac{8}{52}$.

**"And" for independent events — multiply.** If one event does not affect the other, $P(A \text{ and } B) = P(A)\times P(B)$. Two heads in a row: $\tfrac12 \times \tfrac12 = \tfrac14$.

The word **independent** must be checked, not assumed. Drawing two cards *without replacement* is not independent — after removing a king, only 3 kings remain among 51 cards, so $P = \tfrac{4}{52}\times\tfrac{3}{51}$. Replacement restores independence.

A caution worth internalising: **coins have no memory.** After five heads, the next toss is still $\tfrac12$. Believing otherwise is the gambler's fallacy, and it costs people real money.`,
        example: { title: 'Using the complement',
          q: 'Two fair dice are rolled. What is the probability of getting at least one six?',
          solution: 'Counting directly is fiddly; use the complement. $P(\\text{no six on one die}) = \\tfrac56$, so $P(\\text{no six at all}) = \\tfrac56\\times\\tfrac56 = \\tfrac{25}{36}$. Therefore $P(\\text{at least one six}) = 1 - \\tfrac{25}{36} = \\tfrac{11}{36}$.',
          moral: '"At least one" almost always means "1 minus none".' },
      },
      { h: 'Averages: which one, and why it matters',
        body: String.raw`Three averages, each answering a different question:

- **Mean** $= \dfrac{\sum x}{n}$ — the balance point. Uses every value, so it is the most informative and the most vulnerable to outliers.
- **Median** — the middle value when ordered. **Resistant** to extremes.
- **Mode** — the most frequent value. The only average available for categorical data.

For $3, 4, 4, 5, 24$: mean 8, median 4, mode 4. The single value 24 has dragged the mean above four of the five data points. That is why **"average income" reported as a mean can describe nobody**, and why the choice of average is itself a claim.

**For frequency tables**, the mean is a weighted calculation:

$$\bar{x} = \frac{\sum (x \times f)}{\sum f}$$

Multiply each value by its frequency, sum, then divide by the *total frequency* — not by the number of distinct values. Dividing by the wrong denominator is the standard error here.`,
      },
      { h: 'Spread: why the average alone is never enough',
        body: String.raw`Two data sets can share a mean and be completely different:

- $\{49, 50, 51\}$ — mean 50, range 2
- $\{0, 50, 100\}$ — mean 50, range 100

Reporting only "the mean is 50" hides everything that matters. Spread measures how far the data scatters.

- **Range** $=$ largest $-$ smallest. Simple, but determined entirely by the two most extreme values, so one outlier destroys it.
- **Interquartile range (IQR)** $= Q_3 - Q_1$, the spread of the middle 50%. It ignores the tails, so it is **resistant to outliers** — the same virtue the median has.

To find the quartiles, order the data and split it into four equal parts: $Q_1$ is the median of the lower half, $Q_2$ the median, $Q_3$ the median of the upper half.

The pairing to remember is: **median with IQR** (both resistant), **mean with standard deviation** (both use every value — you meet standard deviation properly in I1 Statistics II). Mixing a resistant centre with a non-resistant spread gives a misleading summary.`,
        example: { title: 'Same mean, different story',
          q: 'Class A scores 49, 50, 51; class B scores 0, 50, 100. Compare them.',
          solution: 'Both have mean 50, so on that measure they are identical. But class A has range 2 and class B range 100. Class A is consistent; class B has a student who scored nothing and one who scored full marks. Any report giving only the mean conceals the entire difference.',
          moral: 'Always quote a measure of spread alongside an average.' },
      },
    ],
    formulas: ['P = favourable ÷ total (equally likely outcomes)',
      '0 ≤ P ≤ 1;  P(not A) = 1 − P(A)',
      'Mutually exclusive: P(A or B) = P(A) + P(B)',
      'Independent: P(A and B) = P(A) × P(B)',
      'Mean = Σx/n;  from a table, mean = Σ(x·f)/Σf',
      'Range = max − min;  IQR = Q₃ − Q₁'],
    summary: [
      'Probability is a proportion of equally likely outcomes, always between 0 and 1.',
      'The complement rule turns hard "at least one" questions into easy "none" questions.',
      'Draw the sample space for two events — most questions then reduce to counting.',
      'Mutually exclusive events add; independent events multiply — and independence must be checked.',
      'Without replacement destroys independence; coins and dice have no memory.',
      'Mean, median and mode answer different questions; outliers move the mean and not the median.',
      'An average without a measure of spread is an incomplete — often misleading — summary.',
    ],
    mistakes: [
      '**Giving a probability above 1** (or as a raw count like "4 out of 52 = 4"). **Fix:** probability is a fraction of the total; check that your answer lies in [0, 1].',
      '**Assuming outcomes are equally likely when they are not** — a drawing pin, a biased spinner, tomorrow\'s weather. **Fix:** the counting formula needs fairness; otherwise use experimental relative frequency.',
      '**The gambler\'s fallacy:** believing a head is "due" after five tails. **Fix:** independent trials have no memory; P stays ½ every toss.',
      '**Multiplying probabilities for events that are not independent.** Drawing two kings without replacement is (4/52)×(3/51), not (4/52)². **Fix:** ask whether the first event changes the second\'s conditions.',
      '**Adding probabilities for events that can occur together.** P(king or heart) is not 4/52 + 13/52, because the king of hearts is counted twice. **Fix:** addition needs mutually exclusive events.',
      '**Dividing by the number of rows rather than the total frequency** when finding a mean from a table. **Fix:** mean = Σ(x·f) ÷ Σf.',
      '**Reporting a mean for skewed data** and calling it typical. **Fix:** compare mean and median; if they differ substantially, report the median and say why.',
      '**Quoting an average with no measure of spread.** **Fix:** pair median with IQR, or mean with range/standard deviation.',
    ],
    tricks: [
      '**For "at least one", compute 1 − P(none).** It converts a long count into a single multiplication.',
      '**Draw the 6 × 6 grid for two dice once** and keep it in mind — it answers almost every two-dice question by counting.',
      '**Check independence by asking "does the first event change the second\'s conditions?"** With replacement, no; without replacement, yes.',
      '**Sanity-check every probability against 0 ≤ P ≤ 1** and against intuition — an event that feels rare should not come out at 0.9.',
      '**Compare mean and median as a skew detector.** A large gap signals outliers and tells you which average to report.',
      '**Find quartiles by repeatedly taking medians:** median of the whole set, then of each half.',
      '**Convert probabilities to a common denominator when comparing** — the same trick as comparing fractions.',
    ],
    memory: [
      '"Probability is a proportion" — favourable over total, always between 0 and 1.',
      '"At least one = 1 minus none."',
      '"Or means add (if exclusive); and means multiply (if independent)."',
      '"Coins have no memory."',
      '"Mean pulled, median stands" for outliers.',
      '"Median with IQR, mean with standard deviation" — match resistant with resistant.',
      '"An average without a spread is half a story."',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'What is the probability of rolling an even number on a fair six-sided die?', choices: ['1/2', '1/3', '2/3', '1/6'], answer: 0, explanation: 'Three favourable outcomes (2, 4, 6) out of six: 3/6 = 1/2.' },
      { lvl: 1, type: 'mcq', prompt: 'If P(rain) = 0.3, what is P(no rain)?', choices: ['0.7', '0.3', '1.3', '0.5'], answer: 0, explanation: 'Complement rule: 1 − 0.3 = 0.7.' },
      { lvl: 1, type: 'numeric', prompt: 'Find the mean of 3, 4, 4, 5, 24.', answer: 8, tolerance: 0, explanation: 'Total 40 ÷ 5 = 8.' },
      { lvl: 1, type: 'mcq', prompt: 'Which value can a probability never take?', choices: ['1.4', '0', '1', '0.25'], answer: 0, explanation: 'Probabilities lie between 0 and 1 inclusive, so 1.4 is impossible.' },
      { lvl: 2, type: 'mcq', prompt: 'Two fair coins are tossed. What is the probability of two heads?', choices: ['1/4', '1/2', '1/3', '2/3'], answer: 0, explanation: 'Independent events multiply: ½ × ½ = ¼.' },
      { lvl: 2, type: 'mcq', prompt: 'Two fair dice are rolled. What is P(total = 7)?', choices: ['1/6', '1/12', '1/36', '7/36'], answer: 0, explanation: 'Six of the 36 pairs total 7, so 6/36 = 1/6 — six times as likely as a total of 12.' },
      { lvl: 2, type: 'numeric', prompt: 'Find the median of 3, 4, 4, 5, 24.', answer: 4, tolerance: 0, explanation: 'Ordered, the middle of five values is the third: 4.' },
      { lvl: 2, type: 'mcq', prompt: 'After five heads in a row with a fair coin, what is P(head) on the next toss?', choices: ['1/2', 'less than 1/2', 'more than 1/2', 'it cannot be determined'], answer: 0, explanation: 'Tosses are independent — the coin has no memory. Believing otherwise is the gambler\'s fallacy.' },
      { lvl: 3, type: 'mcq', prompt: 'Two fair dice are rolled. What is P(at least one six)?', choices: ['11/36', '1/6', '1/3', '25/36'], answer: 0, explanation: 'P(no six) = (5/6)² = 25/36, so P(at least one) = 1 − 25/36 = 11/36.' },
      { lvl: 3, type: 'mcq', prompt: 'Two cards are drawn from a standard deck without replacement. What is P(both kings)?', choices: ['(4/52) × (3/51)', '(4/52)²', '(4/52) + (3/51)', '(4/52) × (4/52)'], answer: 0, explanation: 'Without replacement the events are not independent: after one king is removed, 3 remain among 51 cards.' },
      { lvl: 3, type: 'mcq', prompt: 'Class A scores 49, 50, 51; class B scores 0, 50, 100. What does comparing only the means hide?', choices: ['the spread — identical means of 50 conceal ranges of 2 and 100', 'nothing; the classes are equivalent', 'that class B has a higher mean', 'that the medians differ'], answer: 0, explanation: 'Both have mean 50 and median 50, but wildly different consistency. An average without a spread is an incomplete summary.' },
      { lvl: 3, type: 'mcq', prompt: 'Why is P(king or heart) not 4/52 + 13/52?', choices: ['the king of hearts belongs to both, so it is counted twice', 'the events are independent, so you must multiply', 'hearts are more likely than kings', 'it is correct as written'], answer: 0, explanation: 'Adding requires mutually exclusive events. Here the overlap must be subtracted: 4/52 + 13/52 − 1/52 = 16/52.' },
    ],
  },

};
