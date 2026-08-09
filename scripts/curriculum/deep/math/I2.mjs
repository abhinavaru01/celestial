// Deep content: math I2. See ../index.mjs for the entry schema.
//
// Bodies use String.raw so LaTeX backslashes survive template-literal escaping.

export default {

  // ==========================================================================
  'math.I2.functions': {
    estMinutes: 240,
    hook: String.raw`**A function is a machine with one rule: one input, one output.** That single restriction is what makes functions predictable enough to build mathematics on — and it is why $y = \pm\sqrt{x}$ is not a function while $y = x^2$ is. Once you think of a function as an object in its own right (something you can compose, invert and transform), graphs stop being curves to memorise and become a small number of shapes moved around.`,
    sections: [
      { h: 'The defining rule: one input, one output',
        body: String.raw`A **function** $f$ assigns to each input exactly one output. Write $f(x)$ for the output at $x$ — read "f of x", never "f times x".

The **domain** is the set of allowed inputs; the **range** is the set of outputs actually produced. Domain restrictions come from three places, and they are worth checking before anything else:

- **Division by zero:** $f(x) = \dfrac{1}{x-2}$ excludes $x = 2$.
- **Even roots of negatives:** $f(x) = \sqrt{x-3}$ needs $x \ge 3$.
- **Context:** a function giving the area of a square of side $s$ needs $s > 0$, whatever the algebra allows.

The **vertical line test** turns the defining rule into something you can see: if any vertical line meets a graph more than once, that input has two outputs and the graph is not a function. A circle fails it; a parabola passes.

Note carefully that the restriction is **one-directional**. A function may send two different inputs to the same output — $f(x) = x^2$ sends both $3$ and $-3$ to $9$, and that is perfectly legal. What is forbidden is one input giving two outputs. A function that never repeats an output is called **one-to-one**, and that property is exactly what decides whether it can be inverted.`,
        formulas: ['f(x): exactly one output per input',
          'Domain = allowed inputs;  range = outputs produced',
          'Exclude: division by zero, even roots of negatives, context-impossible values',
          'Vertical line test: more than one intersection ⇒ not a function'],
      },
      { h: 'Composition: functions applied in sequence',
        body: String.raw`Composing means feeding one function's output into another. $(f \circ g)(x) = f(g(x))$ means **do $g$ first**, then $f$ — read it inside-out, like brackets.

With $f(x) = 2x + 1$ and $g(x) = x^2$:

$$f(g(x)) = f(x^2) = 2x^2 + 1, \qquad g(f(x)) = g(2x+1) = (2x+1)^2$$

These are different functions — at $x = 3$ they give 19 and 49. **Composition is not commutative**, and expecting it to be is the standard error. The everyday analogy is reliable: putting on socks then shoes is not the same as shoes then socks.

The domain of a composition needs care: $x$ must be valid for $g$, *and* $g(x)$ must be valid for $f$. If $f(x) = \sqrt{x}$ and $g(x) = x - 5$, then $f(g(x)) = \sqrt{x-5}$ requires $x \ge 5$ even though $g$ alone accepts everything.`,
        example: { title: 'Order matters',
          q: 'For $f(x)=2x+1$ and $g(x)=x^2$, evaluate $f(g(3))$ and $g(f(3))$.',
          solution: '$f(g(3)) = f(9) = 19$. $g(f(3)) = g(7) = 49$. Do the inner function first in each case.',
          moral: 'Composition reads inside-out, and swapping the order changes the answer.' },
      },
      { h: 'Inverses: undoing a function',
        body: String.raw`The **inverse** $f^{-1}$ undoes $f$: $f^{-1}(f(x)) = x$. Its graph is the reflection of $f$ in the line $y = x$, because reflecting swaps the roles of input and output.

To find it, swap $x$ and $y$ and solve for $y$. For $f(x) = 2x + 1$:

$$y = 2x+1 \;\to\; x = 2y+1 \;\to\; y = \frac{x-1}{2}$$

Check by composing: $f^{-1}(f(3)) = f^{-1}(7) = 3$ ✓.

**An inverse exists only if the function is one-to-one.** $f(x) = x^2$ has no inverse over all reals, because $f(3) = f(-3) = 9$ and the inverse could not decide which to return. Restricting the domain to $x \ge 0$ makes it one-to-one, and then $f^{-1}(x) = \sqrt{x}$ — which is precisely why the square-root symbol is defined to return only the positive root. The **horizontal line test** detects this: if a horizontal line meets the graph twice, there is no inverse.

Notation trap: $f^{-1}(x)$ means the inverse function, **not** $\dfrac{1}{f(x)}$. The superscript $-1$ is behaving like the "undo" it does for operations, not like an exponent.`,
        formulas: ['f⁻¹(f(x)) = x;  graph of f⁻¹ is f reflected in y = x',
          'Find it by swapping x and y, then solving for y',
          'Exists only if f is one-to-one (horizontal line test)',
          'f⁻¹(x) is the inverse function, NOT 1/f(x)'],
      },
      { h: 'Transformations: one shape, moved around',
        body: String.raw`Rather than learning every graph separately, learn a few parent shapes and how four transformations move them.

| Change | Effect | Direction |
|---|---|---|
| $f(x) + a$ | shift **up** by $a$ | as expected |
| $f(x + a)$ | shift **left** by $a$ | **opposite** to expectation |
| $a\,f(x)$ | stretch vertically by $a$ | as expected |
| $f(ax)$ | squash horizontally by $a$ | **opposite** (factor $\tfrac1a$) |
| $-f(x)$ | reflect in the $x$-axis | — |
| $f(-x)$ | reflect in the $y$-axis | — |

**Inside the bracket, everything behaves backwards**, and this is the point students find genuinely counter-intuitive. Why does $f(x+3)$ shift *left*? Because the graph reaches a given output *sooner*: whatever $f$ did at $x = 0$, the new function does at $x = -3$.

So $y = (x-2)^2 + 3$ is the parabola $y = x^2$ moved 2 right and 3 up, with vertex $(2, 3)$ — which is exactly the vertex form from Quadratics, now recognisable as a transformation rather than a separate formula.

Parent shapes worth knowing on sight: $y = x$ (line), $y = x^2$ (parabola), $y = x^3$, $y = \tfrac1x$ (hyperbola), $y = \sqrt{x}$, $y = |x|$.`,
        example: { title: 'Reading a transformed graph',
          q: 'Describe $y = -2(x+1)^2 + 5$ as transformations of $y = x^2$.',
          solution: 'Inside the bracket, $+1$ shifts **left** 1. The factor 2 stretches vertically by 2, the minus reflects in the $x$-axis, and $+5$ shifts up 5. The vertex moves from $(0,0)$ to $(-1, 5)$, and the parabola opens downward.',
          moral: 'Inside the bracket acts horizontally and backwards; outside acts vertically and as written.' },
      },
    ],
    formulas: ['One input → exactly one output (vertical line test)',
      '(f∘g)(x) = f(g(x)) — inner function first; not commutative',
      'Inverse: swap x and y, solve; needs one-to-one (horizontal line test)',
      'f(x) + a up;  f(x + a) LEFT;  a·f(x) vertical stretch;  f(ax) horizontal squash',
      '−f(x) reflects in x-axis;  f(−x) reflects in y-axis'],
    summary: [
      'A function gives exactly one output per input; two inputs may share an output.',
      'Domain excludes division by zero, even roots of negatives, and context-impossible values.',
      'The vertical line test checks functionhood; the horizontal line test checks invertibility.',
      'Composition applies the inner function first and is not commutative.',
      'An inverse reflects the graph in y = x and exists only for one-to-one functions.',
      'f⁻¹ means inverse, never reciprocal.',
      'Transformations inside the bracket act horizontally and in reverse; outside, vertically and as written.',
    ],
    mistakes: [
      '**Reading f(x) as f times x.** **Fix:** it is the output of the machine f at input x; the brackets are notation, not multiplication.',
      '**Assuming f(g(x)) = g(f(x)).** **Fix:** test with a number — for f(x)=2x+1, g(x)=x², at x=3 you get 19 versus 49. Socks then shoes.',
      '**Treating f⁻¹(x) as 1/f(x).** **Fix:** the inverse undoes the function; check by composing, since f⁻¹(f(3)) must return 3.',
      '**Inverting a function that is not one-to-one.** Claiming the inverse of x² is √x over all reals. **Fix:** restrict the domain to x ≥ 0 first; otherwise the inverse cannot choose between 3 and −3.',
      '**Shifting the wrong way for f(x + a).** **Fix:** inside the bracket everything is reversed — f(x+3) moves the graph 3 to the LEFT. Test one point to confirm.',
      '**Forgetting to restrict the domain of a composition.** √(x−5) requires x ≥ 5 even though x − 5 accepts anything. **Fix:** check validity for both the inner and the outer function.',
      '**Confusing domain with range.** **Fix:** domain is what goes in (read left to right), range is what comes out (read bottom to top).',
    ],
    tricks: [
      '**Test any function claim with a specific number.** It settles composition order, inverse checks and transformation directions in seconds.',
      '**Find the domain by asking what breaks:** a zero denominator, a negative under an even root, or an impossible context.',
      '**Verify an inverse by composing both ways** — f⁻¹(f(x)) and f(f⁻¹(x)) must both return x.',
      '**Track a single point through a transformation.** Follow the vertex or the origin and the whole graph follows.',
      '**Read transformations outside-in for vertical effects and inside-out for horizontal ones**, remembering that horizontal effects are reversed.',
      '**Recognise vertex form as a transformation:** y = a(x−h)² + k is the parabola moved h right and k up — one idea serving two topics.',
    ],
    memory: [
      '"One input, one output" — the whole definition.',
      '"Vertical line test for functions; horizontal line test for inverses."',
      '"Inside the bracket, backwards" for horizontal transformations.',
      '"Inner function first" when composing.',
      '"f⁻¹ undoes, it does not divide."',
      '"Socks and shoes" — composition order matters.',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'If f(x) = 2x + 1, what is f(3)?', answer: 7, tolerance: 0, explanation: '2(3) + 1 = 7.' },
      { lvl: 1, type: 'mcq', prompt: 'Which graph fails the vertical line test?', choices: ['a circle', 'a parabola', 'a straight line', 'y = x³'], answer: 0, explanation: 'A vertical line cuts a circle twice, so one input would have two outputs.' },
      { lvl: 1, type: 'mcq', prompt: 'What is the domain of f(x) = 1/(x − 2)?', choices: ['all real x except 2', 'all real x', 'x > 2 only', 'x ≥ 0'], answer: 0, explanation: 'The denominator is zero at x = 2, so that input must be excluded.' },
      { lvl: 1, type: 'mcq', prompt: 'The graph of f⁻¹ is the graph of f reflected in:', choices: ['y = x', 'the x-axis', 'the y-axis', 'the origin'], answer: 0, explanation: 'Inverting swaps input and output, which reflects the graph in the line y = x.' },
      { lvl: 2, type: 'numeric', prompt: 'For f(x) = 2x + 1 and g(x) = x², what is f(g(3))?', answer: 19, tolerance: 0, explanation: 'Inner first: g(3) = 9, then f(9) = 19.' },
      { lvl: 2, type: 'numeric', prompt: 'For the same functions, what is g(f(3))?', answer: 49, tolerance: 0, explanation: 'f(3) = 7, then g(7) = 49 — different from f(g(3)), since composition is not commutative.' },
      { lvl: 2, type: 'mcq', prompt: 'What is the inverse of f(x) = 2x + 1?', choices: ['(x − 1)/2', '1/(2x + 1)', '2x − 1', '(x + 1)/2'], answer: 0, explanation: 'Swap and solve: x = 2y + 1 gives y = (x−1)/2. Check: f⁻¹(7) = 3 ✓.' },
      { lvl: 2, type: 'mcq', prompt: 'How does the graph of y = f(x + 3) relate to y = f(x)?', choices: ['shifted 3 units left', 'shifted 3 units right', 'shifted 3 units up', 'stretched by 3'], answer: 0, explanation: 'Inside the bracket the effect is horizontal and reversed — the graph reaches each output 3 units sooner.' },
      { lvl: 3, type: 'mcq', prompt: 'Why does f(x) = x² have no inverse over all real numbers?', choices: ['it is not one-to-one — f(3) = f(−3) = 9, so the inverse could not choose', 'because it is a curve', 'because its range is all reals', 'it does have an inverse, namely √x'], answer: 0, explanation: 'An inverse needs each output to come from exactly one input. Restricting to x ≥ 0 fixes this, which is why √ returns only the positive root.' },
      { lvl: 3, type: 'mcq', prompt: 'Describe y = −2(x + 1)² + 5 as transformations of y = x².', choices: ['left 1, stretch ×2, reflect in the x-axis, up 5', 'right 1, stretch ×2, reflect in the y-axis, up 5', 'left 1, squash ×2, up 5', 'right 1, reflect in the x-axis, down 5'], answer: 0, explanation: 'Inside the bracket: +1 shifts left. Outside: ×2 stretches, the minus reflects vertically, +5 shifts up. Vertex (−1, 5).' },
      { lvl: 3, type: 'mcq', prompt: 'What is the domain of f(g(x)) where f(x) = √x and g(x) = x − 5?', choices: ['x ≥ 5', 'all real x', 'x ≥ 0', 'x > 5'], answer: 0, explanation: 'The composition is √(x−5), which needs x − 5 ≥ 0. The inner function alone would accept any x.' },
      { lvl: 3, type: 'mcq', prompt: 'A function sends both 2 and 5 to the output 10. Is it still a function?', choices: ['yes — only one output per input is required, not one input per output', 'no, outputs must be unique', 'only if the domain is restricted', 'only if it is linear'], answer: 0, explanation: 'The rule is one-directional. Such a function is simply not one-to-one, which means it has no inverse unless the domain is restricted.' },
    ],
  },

  // ==========================================================================
  'math.I2.exponentials-logarithms': {
    estMinutes: 240,
    hook: String.raw`**An exponential describes anything whose growth is proportional to its current size** — money at compound interest, bacteria, a virus in its early phase, a radioactive sample decaying. A logarithm is the question that exponential growth forces you to ask: *how long until it reaches this?* Logs are simply exponents in disguise, and every "log law" is an index law you already know, wearing different clothes.`,
    sections: [
      { h: 'Exponential growth is proportional growth',
        body: String.raw`In $y = ab^x$: $a$ is the starting value, $b$ the **growth factor** per unit of $x$.

- $b > 1$ — growth. $b = 1.08$ is 8% growth per period.
- $0 < b < 1$ — decay. $b = 0.85$ is 15% loss per period.

The defining property is that **the multiplier is constant, not the increase**. A linear model adds the same amount each step; an exponential multiplies by the same factor. That difference is why exponentials always overtake linear growth eventually, no matter how steep the line.

The practical signature is **constant doubling time** (or half-life): whatever the starting point, it takes the same time to double. A population doubling every 20 years goes 100 → 200 → 400 → 800 in successive 20-year blocks, and the *increases* grow (100, 200, 400) while the *factor* stays 2.

The special base $e \approx 2.718$ arises from continuous compounding and is the natural choice in calculus, where $\tfrac{d}{dx}e^x = e^x$ — the function equal to its own rate of change. That property is exactly the statement "growth proportional to current size", written in calculus.`,
        formulas: ['y = ab^x: a is the initial value, b the growth factor',
          'b > 1 growth;  0 < b < 1 decay',
          'Percentage r% growth ⇒ b = 1 + r/100;  r% decay ⇒ b = 1 − r/100',
          'Constant doubling time / half-life is the signature of exponential change'],
      },
      { h: 'A logarithm is an exponent',
        body: String.raw`$\log_b x$ answers: **to what power must I raise $b$ to get $x$?**

$$\log_b x = y \iff b^y = x$$

So $\log_2 8 = 3$ because $2^3 = 8$. Reading it aloud as the question — "two to the what gives eight?" — removes almost all confusion.

Two consequences follow directly from the definition and are worth stating:

- $\log_b 1 = 0$ for every base, since $b^0 = 1$.
- **You cannot take the log of a negative number or zero** (for a positive base), because no power of a positive number is ever negative or zero. A "log of a negative" in your working means an earlier error, or a genuinely impossible situation in the model.

Two bases dominate: $\log_{10}$ (written $\log$, used for pH, decibels, the Richter scale) and $\log_e$ (written $\ln$, the natural log, used throughout calculus).

Logs exist because they turn an unknown *exponent* into something solvable. To answer "how many years until my investment doubles at 8%?", you must solve $1.08^t = 2$ — and $t$ is stuck in the exponent until a logarithm brings it down.`,
      },
      { h: 'The log laws are the index laws',
        body: String.raw`Each law below is an index law re-read. Since a log *is* an exponent, and multiplying powers adds exponents, multiplying numbers must add logs.

$$\log(xy) = \log x + \log y$$
$$\log\!\left(\frac{x}{y}\right) = \log x - \log y$$
$$\log(x^n) = n\log x$$

The third is the workhorse — **it is what unsticks an unknown exponent**:

$$1.08^t = 2 \;\Rightarrow\; t\log 1.08 = \log 2 \;\Rightarrow\; t = \frac{\log 2}{\log 1.08} \approx 9.0 \text{ years}$$

Note that $\dfrac{\log 2}{\log 1.08}$ is a **division of two logs**, which is *not* $\log\!\left(\tfrac{2}{1.08}\right)$. Confusing those two is the commonest error in this topic.

Equally, **there is no law for $\log(x + y)$.** Logs convert multiplication into addition, and nothing converts addition into anything simpler. $\log(x+y) \ne \log x + \log y$ — test it with $x = y = 1$: the left is $\log 2 \approx 0.30$, the right is 0.

The **change of base** formula lets you compute any log with a calculator that only has $\log$ and $\ln$:

$$\log_b x = \frac{\log x}{\log b}$$`,
        formulas: ['log(xy) = log x + log y',
          'log(x/y) = log x − log y',
          'log(xⁿ) = n log x   ← brings an unknown exponent down',
          'log_b x = log x / log b  (change of base)',
          'log_b 1 = 0;  log_b b = 1;  log of a negative or zero is undefined',
          'NO law exists for log(x + y)'],
        example: { title: 'Solving for an exponent',
          q: 'How long does it take for money to double at 8% compound interest?',
          solution: 'Solve $1.08^t = 2$. Take logs of both sides: $t\\log 1.08 = \\log 2$, so $t = \\dfrac{\\log 2}{\\log 1.08} = \\dfrac{0.3010}{0.0334} \\approx 9.0$ years.',
          moral: 'Whenever the unknown is an exponent, take logs — that is what logs are for.' },
      },
      { h: 'Why logarithmic scales are everywhere',
        body: String.raw`When quantities span many orders of magnitude, a linear axis is useless — plot earthquake energies linearly and every event but the largest is invisible. A **log scale** plots the *exponent*, so equal distances represent equal *ratios* rather than equal differences.

| Scale | Measures | Meaning of +1 |
|---|---|---|
| **Richter** | earthquake amplitude | ×10 amplitude (≈32× energy) |
| **pH** | $-\log_{10}[\mathrm{H}^+]$ | 10× more acidic |
| **Decibel** | sound intensity | 10 dB is ×10 intensity |

So pH 3 is not "a bit more acidic" than pH 5 — it is **100 times** more acidic. The minus sign in the pH definition means *lower pH is more acidic*, which is a standing source of confusion in chemistry until you see the log.

Decay problems use the same machinery with $0 < b < 1$. Carbon-14 has a half-life of 5730 years, so the remaining fraction after $t$ years is $\left(\tfrac12\right)^{t/5730}$. Solving for $t$ given a measured fraction requires a log — which is precisely how radiocarbon dating works.`,
        example: { title: 'Reading a log scale',
          q: 'Solution A has pH 3, solution B has pH 5. How many times more acidic is A?',
          solution: 'pH is $-\\log_{10}$ of the hydrogen-ion concentration, so a difference of 2 pH units is a factor of $10^2 = 100$. Solution A is **100 times** more acidic.',
          moral: 'On a log scale, a small difference in the number is a large ratio in the quantity.' },
      },
    ],
    formulas: ['y = ab^x;  log_b x = y ⇔ b^y = x',
      'log(xy) = log x + log y;  log(x/y) = log x − log y;  log(xⁿ) = n log x',
      'Change of base: log_b x = log x / log b',
      'Doubling time t = log 2 / log b',
      'pH = −log₁₀[H⁺];  +1 on a log scale means ×10'],
    summary: [
      'Exponential change multiplies by a constant factor; linear change adds a constant amount.',
      'Constant doubling time or half-life is the signature of an exponential.',
      'A logarithm is an exponent: log_b x asks "b to what power gives x?"',
      'Logs of negatives and zero are undefined, because no power of a positive base produces them.',
      'The log laws are the index laws re-read; log(xⁿ) = n log x is what frees an unknown exponent.',
      'There is no law for log(x + y), and log a ÷ log b is not log(a/b).',
      'Log scales (Richter, pH, decibels) turn ratios into equal steps — +1 means ×10.',
    ],
    mistakes: [
      '**Writing log(x + y) = log x + log y.** **Fix:** the law applies to products only. Test x = y = 1: log 2 ≈ 0.30 versus 0. Logs turn × into +, not + into +.',
      '**Confusing (log a)/(log b) with log(a/b).** **Fix:** division of logs is the change-of-base pattern; log(a/b) equals log a − log b. They are different quantities.',
      '**Taking the log of a negative number** and reporting a value. **Fix:** undefined for a positive base — treat it as a signal that the model or the algebra is wrong.',
      '**Confusing growth factor with growth rate.** For 8% growth, b = 1.08, not 0.08. **Fix:** b is the multiplier; add 1 for growth, subtract from 1 for decay.',
      '**Modelling proportional growth with a linear function.** **Fix:** check whether the *increase* or the *factor* is constant — constant doubling time means exponential.',
      '**Forgetting that a log scale is multiplicative.** Reading pH 3 to pH 5 as a small change. **Fix:** each unit is a factor of 10, so two units is ×100.',
      '**Dividing by the wrong log when solving b^t = k.** **Fix:** t = log k ÷ log b — the base\'s log goes on the bottom. Sanity-check the answer by substituting back.',
      '**Rounding log values early.** **Fix:** logs are small numbers whose ratios matter; keep full precision until the final step.',
    ],
    tricks: [
      '**Read every log aloud as a question:** "log base 2 of 8" becomes "two to the what gives eight?" The answer usually appears immediately.',
      '**When the unknown is an exponent, take logs of both sides.** That is the entire strategy, and log(xⁿ) = n log x does the rest.',
      '**Estimate doubling time with the Rule of 72:** 72 ÷ (percentage rate) ≈ years to double. At 8%, that is 9 years — matching the exact calculation.',
      '**Check any log answer by substituting back** into the exponential form.',
      '**Convert percentages to multipliers immediately**: +8% → 1.08, −15% → 0.85, halving → 0.5.',
      '**Use change of base** to compute any logarithm on a basic calculator.',
      '**Recognise a log scale by the words "per unit is ten times"** — Richter, pH, decibels all work this way.',
    ],
    memory: [
      '"A log is an exponent" — say it before every question.',
      '"Log base b of x asks: b to the what gives x?"',
      '"Logs turn times into plus" — and there is no rule for plus.',
      '"Unknown in the exponent? Take logs."',
      '"Rule of 72" for a quick doubling time.',
      '"One step on a log scale is ten times."',
      '"You cannot log a negative."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'What is log₂ 8?', answer: 3, tolerance: 0, explanation: '2³ = 8, so the answer is 3.' },
      { lvl: 1, type: 'numeric', prompt: 'What is log₁₀ 1?', answer: 0, tolerance: 0, explanation: 'Any base to the power 0 gives 1, so the log of 1 is always 0.' },
      { lvl: 1, type: 'mcq', prompt: 'For 8% annual growth, what is the growth factor b in y = ab^x?', choices: ['1.08', '0.08', '8', '0.92'], answer: 0, explanation: 'The quantity keeps 100% and gains 8%, so it is multiplied by 1.08 each year.' },
      { lvl: 1, type: 'mcq', prompt: 'Which expression is undefined?', choices: ['log(−5)', 'log(0.5)', 'log(1)', 'log(100)'], answer: 0, explanation: 'No power of a positive base gives a negative number, so the log of a negative is undefined.' },
      { lvl: 2, type: 'mcq', prompt: 'Simplify log(xy).', choices: ['log x + log y', 'log x × log y', 'log x − log y', '(log x)(log y)'], answer: 0, explanation: 'Multiplying numbers adds exponents, so it adds logs.' },
      { lvl: 2, type: 'numeric', prompt: 'Roughly how many years does money take to double at 8% compound interest? Give your answer to the nearest whole year.', answer: 9, tolerance: 0.5, explanation: 't = log 2 / log 1.08 ≈ 0.3010/0.0334 ≈ 9.0 years — matching the Rule of 72.' },
      { lvl: 2, type: 'mcq', prompt: 'Which law lets you solve 1.08^t = 2 for t?', choices: ['log(xⁿ) = n log x', 'log(xy) = log x + log y', 'log(x/y) = log x − log y', 'log(x + y) = log x + log y'], answer: 0, explanation: 'Bringing the exponent down in front is what turns the unknown exponent into a solvable linear equation.' },
      { lvl: 2, type: 'mcq', prompt: 'A quantity has a constant half-life. Its model is:', choices: ['exponential decay', 'linear decrease', 'quadratic', 'arithmetic'], answer: 0, explanation: 'A constant halving time means a constant multiplier, which is exponential.' },
      { lvl: 3, type: 'mcq', prompt: 'Solution A has pH 3 and solution B pH 5. How many times more acidic is A?', choices: ['100', '2', '20', '10'], answer: 0, explanation: 'pH is −log₁₀[H⁺], so 2 units correspond to a factor of 10² = 100.' },
      { lvl: 3, type: 'mcq', prompt: 'Why is log(x + y) = log x + log y wrong?', choices: ['logs convert multiplication to addition, not addition to addition — test x = y = 1', 'because x + y might be negative', 'it is correct for positive numbers', 'because logs need a base'], answer: 0, explanation: 'At x = y = 1 the left is log 2 ≈ 0.30 and the right is 0. No law exists for the log of a sum.' },
      { lvl: 3, type: 'mcq', prompt: 'Is (log 2)/(log 1.08) the same as log(2/1.08)?', choices: ['no — dividing logs is change of base; log(2/1.08) equals log 2 − log 1.08', 'yes, both equal log 2 − log 1.08', 'yes, division of logs is the quotient law', 'only when the base is 10'], answer: 0, explanation: 'The quotient law gives a *difference* of logs. A *ratio* of logs is a different operation entirely — this is the commonest slip in the topic.' },
      { lvl: 3, type: 'mcq', prompt: 'Why must an exponential eventually overtake any linear function?', choices: ['it multiplies by a fixed factor each step while the line only adds a fixed amount', 'because its starting value is larger', 'because exponentials are always steep', 'it need not — a steep enough line stays ahead'], answer: 0, explanation: 'Repeated multiplication outgrows repeated addition regardless of the constants; the line may lead at first, but never permanently.' },
    ],
  },

  // ==========================================================================
  'math.I2.derivatives-intuition': {
    estMinutes: 270,
    hook: String.raw`**A derivative is a rate of change made exact.** You already compute average rates — a gradient between two points, average speed over a journey. The derivative answers the harder question: *how fast is it changing right now, at this instant?* The trick that makes it possible is the limit: shrink the interval toward zero and watch what the gradient approaches. This is the same "slope = rate" idea from F2, sharpened until it works on curves.`,
    sections: [
      { h: 'From average rate to instantaneous rate',
        body: String.raw`Between two points on a curve, the **average** rate of change is the gradient of the **chord** joining them:

$$\frac{f(x+h) - f(x)}{h}$$

That is exactly rise over run, with run $= h$.

The problem: this measures the average over the interval, not the rate *at* $x$. Making $h$ smaller gives a better local approximation — but setting $h = 0$ gives $\tfrac00$, which is meaningless.

The resolution is to ask what the expression **approaches** as $h$ shrinks, without ever setting it to zero. That limit is the **derivative**:

$$f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

Geometrically, as $h \to 0$ the chord pivots until it becomes the **tangent** at the point. So the derivative is the gradient of the tangent — the slope of the curve at a single point.

Watch the machinery work on $f(x) = x^2$:

$$\frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$

Cancelling $h$ is legitimate because $h \ne 0$ — it is merely heading toward 0. As $h \to 0$ the expression approaches $2x$, so $f'(x) = 2x$. At $x = 3$ the slope is 6.`,
        svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Chord approaching a tangent on a curve" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="150" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="150" x2="370" y2="150" stroke="#6b7a99" stroke-width="2"/>
  <path d="M60 145 Q 200 145 340 35" fill="none" stroke="#6b7a99" stroke-width="2.5"/>
  <line x1="150" y1="140" x2="300" y2="66" stroke="#9aa8c4" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="120" y1="160" x2="290" y2="106" stroke="#6ee7a8" stroke-width="2.5"/>
  <circle cx="196" cy="133" r="4.5" fill="#6366f1"/>
  <text x="206" y="126" font-size="11" fill="#e6ecff">tangent: the limit of the chords</text>
  <text x="250" y="60" font-size="11" fill="#9aa8c4">chord</text>
</svg>`,
      },
      { h: 'The power rule, and the rules that follow',
        body: String.raw`Doing that limit every time would be exhausting. Fortunately the pattern generalises:

$$\frac{d}{dx}x^n = nx^{n-1}$$

**Bring the power down in front, then reduce the power by one.** Check it against what you know: $x^2 \to 2x$ ✓, and $x^1 \to 1$ — the gradient of $y = x$ is 1, as it must be.

Three companions complete the basic toolkit:

- **Constant:** $\dfrac{d}{dx}(c) = 0$. A constant function is horizontal, and a horizontal line has gradient 0.
- **Constant multiple:** $\dfrac{d}{dx}(cf) = c f'$. Doubling a function doubles its steepness.
- **Sum:** $\dfrac{d}{dx}(f+g) = f' + g'$. Differentiate term by term.

So for $f(x) = 3x^2 - 5x + 7$: the terms give $6x$, $-5$ and $0$, hence $f'(x) = 6x - 5$.

Two notations mean the same thing: $f'(x)$ (Lagrange) and $\dfrac{dy}{dx}$ (Leibniz). The second is not a fraction, though it usefully behaves like one; read it as "the rate of change of $y$ with respect to $x$" — and the phrase "with respect to" matters, because it names which variable is doing the changing.`,
        formulas: ['f′(x) = lim(h→0) [f(x+h) − f(x)]/h',
          'Power rule: d/dx(xⁿ) = nxⁿ⁻¹',
          'd/dx(c) = 0;  d/dx(cf) = cf′;  d/dx(f + g) = f′ + g′',
          'The derivative is the gradient of the tangent'],
        example: { title: 'Differentiating term by term',
          q: 'Differentiate $f(x) = 3x^2 - 5x + 7$ and find the gradient at $x = 2$.',
          solution: 'Term by term: $3x^2 \\to 6x$, $-5x \\to -5$, $7 \\to 0$. So $f\'(x) = 6x - 5$, and $f\'(2) = 12 - 5 = 7$.',
          moral: 'The constant vanishes because shifting a graph up or down never changes its steepness.' },
      },
      { h: 'What the derivative tells you about a graph',
        body: String.raw`The **sign** of $f'$ describes the behaviour of $f$, and this is where derivatives become genuinely useful:

- $f' > 0$ — the function is **increasing** (tangent slopes up).
- $f' < 0$ — **decreasing**.
- $f' = 0$ — a **stationary point**: maximum, minimum, or point of inflection.

Stationary points are where optimisation happens. To find the maximum or minimum of $f$, solve $f'(x) = 0$, then classify each solution:

- **Second derivative test:** $f'' > 0$ means the slope is increasing, so the curve is cupped upward — a **minimum**. $f'' < 0$ gives a **maximum**.
- Or check the sign of $f'$ just either side: $+ \to -$ is a maximum, $- \to +$ a minimum.

*Example.* For $f(x) = x^2 - 6x + 5$: $f'(x) = 2x - 6 = 0$ at $x = 3$, and $f'' = 2 > 0$, so it is a minimum, with value $f(3) = -4$. That matches the vertex found by completing the square in I1 Quadratics — **two methods, one answer**, which is exactly the kind of cross-check that builds confidence.

Not every stationary point is a turning point: $f(x) = x^3$ has $f'(0) = 0$ yet keeps increasing through the origin. That is a point of inflection, and it is why classification is a required step rather than an optional one.`,
      },
      { h: 'Kinematics: where this came from',
        body: String.raw`Differentiation was invented largely to describe motion, and kinematics remains the clearest illustration.

If $s(t)$ is displacement, then

$$v = \frac{ds}{dt}, \qquad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

Velocity is the derivative of displacement; acceleration is the derivative of velocity. This makes the F1 physics statements exact rather than approximate: "slope of a distance–time graph is speed" was always true for *straight* graphs; the derivative extends it to curved ones.

*Worked example.* A ball's height is $s = 20t - 5t^2$ metres.

- $v = \dfrac{ds}{dt} = 20 - 10t$. At launch ($t=0$) the velocity is 20 m/s upward.
- At the highest point the ball is momentarily stationary, so $v = 0$ gives $t = 2$ s.
- Maximum height: $s(2) = 40 - 20 = 20$ m.
- $a = \dfrac{dv}{dt} = -10$ m/s² — constant, negative, and downward: gravity.

Note what "momentarily at rest" means: velocity is zero at the peak, but acceleration is not. An object can be stationary and still accelerating — a distinction that causes endless confusion in physics and which the derivative makes precise.`,
        example: { title: 'Optimisation with calculus',
          q: 'A farmer fences three sides of a rectangular pen with 40 m of fencing. Find the maximum area using calculus.',
          solution: 'With sides $x$, $x$ and $40-2x$: $A = x(40-2x) = 40x - 2x^2$. Then $\\dfrac{dA}{dx} = 40 - 4x = 0$ gives $x = 10$, and $\\dfrac{d^2A}{dx^2} = -4 < 0$ confirms a maximum. Area $= 10 \\times 20 = 200$ m².',
          moral: 'The same answer as completing the square in I1 — calculus generalises the method to problems where no square can be completed.' },
      },
    ],
    formulas: ['f′(x) = lim(h→0)[f(x+h) − f(x)]/h — the gradient of the tangent',
      'Power rule: d/dx(xⁿ) = nxⁿ⁻¹;  constants differentiate to 0',
      'f′ > 0 increasing;  f′ < 0 decreasing;  f′ = 0 stationary',
      'f″ > 0 ⇒ minimum;  f″ < 0 ⇒ maximum',
      'Kinematics: v = ds/dt,  a = dv/dt = d²s/dt²'],
    summary: [
      'An average rate is a chord gradient; the derivative is what it approaches as the interval shrinks to zero.',
      'The limit avoids 0/0 by asking what the expression approaches, never setting h = 0.',
      'Geometrically the derivative is the gradient of the tangent at a point.',
      'Power rule: bring the power down, reduce it by one; constants differentiate to zero.',
      'The sign of f′ says increasing or decreasing; f′ = 0 locates stationary points.',
      'Classify stationary points with f″ or a sign check — not every one is a turning point.',
      'Velocity is the derivative of displacement and acceleration of velocity; zero velocity does not mean zero acceleration.',
    ],
    mistakes: [
      '**Setting h = 0 instead of taking a limit.** This gives 0/0. **Fix:** simplify the quotient *first* (cancelling h is legal because h ≠ 0), then let h approach 0.',
      '**Forgetting that a constant differentiates to 0.** Carrying the +7 through. **Fix:** shifting a graph vertically does not change its steepness anywhere.',
      '**Applying the power rule to the exponent instead of the base**, or reducing the power before bringing it down. **Fix:** coefficient × old power, then power minus one. Check against x² → 2x.',
      '**Assuming f′ = 0 always means a maximum or minimum.** x³ has f′(0) = 0 but no turning point. **Fix:** always classify with f″ or a sign check.',
      '**Confusing f′ with f.** Reporting the value of the derivative as the maximum value. **Fix:** solve f′ = 0 for the *location*, then substitute into f for the value.',
      '**Believing zero velocity means zero acceleration.** At the top of its flight a ball has v = 0 and a = −10 m/s². **Fix:** they are different derivatives of different things.',
      '**Mixing up d²s/dt² with (ds/dt)².** **Fix:** the first is the second derivative; the second is a squared rate. Entirely different quantities.',
      '**Treating dy/dx as a fraction to be split.** **Fix:** it is a single symbol meaning a rate of change — though it usefully behaves like a fraction in some later rules.',
    ],
    tricks: [
      '**Check any derivative against a case you know.** x² → 2x, and the gradient of y = x must be 1.',
      '**Differentiate term by term** — sums split, so a long polynomial is just several small problems.',
      '**Use the second derivative to classify** rather than testing points either side; it is one substitution instead of two.',
      '**Cross-check an optimisation with completing the square** where the function is quadratic. Two independent methods agreeing is strong verification.',
      '**In kinematics, translate the words first:** "momentarily at rest" means v = 0, "maximum height" means the same, "constant acceleration" means a is a number.',
      '**Sketch the function when the algebra is ambiguous.** Seeing where the curve rises and falls confirms whether a stationary point is a peak or a trough.',
      '**Sanity-check a gradient\'s sign against the graph** — a rising curve must give a positive derivative.',
    ],
    memory: [
      '"The derivative is the slope of the tangent."',
      '"Bring the power down, drop it by one."',
      '"Constants have no slope."',
      '"f′ = 0 is where the curve stops climbing" — but classify before naming it.',
      '"Positive rising, negative falling."',
      '"v is ds/dt, a is dv/dt."',
      '"Stationary is not the same as unaccelerated."',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'Differentiate f(x) = x².', choices: ['2x', 'x', '2', 'x³/3'], answer: 0, explanation: 'Power rule: bring the 2 down and reduce the power by one.' },
      { lvl: 1, type: 'numeric', prompt: 'What is the derivative of the constant function f(x) = 7?', answer: 0, tolerance: 0, explanation: 'A constant graph is horizontal, so its gradient is 0 everywhere.' },
      { lvl: 1, type: 'mcq', prompt: 'The derivative at a point equals:', choices: ['the gradient of the tangent there', 'the value of the function there', 'the area under the curve', 'the average gradient of the whole curve'], answer: 0, explanation: 'As the chord interval shrinks to zero, the chord becomes the tangent.' },
      { lvl: 1, type: 'mcq', prompt: 'If f′(x) > 0 on an interval, the function is:', choices: ['increasing', 'decreasing', 'constant', 'at a maximum'], answer: 0, explanation: 'A positive gradient means the tangent slopes upward.' },
      { lvl: 2, type: 'mcq', prompt: 'Differentiate f(x) = 3x² − 5x + 7.', choices: ['6x − 5', '6x − 5 + 7', '3x − 5', '6x² − 5'], answer: 0, explanation: 'Term by term: 6x, −5, and the constant gives 0.' },
      { lvl: 2, type: 'numeric', prompt: 'For f(x) = 3x² − 5x + 7, what is the gradient at x = 2?', answer: 7, tolerance: 0, explanation: 'f′(x) = 6x − 5, so f′(2) = 12 − 5 = 7.' },
      { lvl: 2, type: 'numeric', prompt: 'For f(x) = x² − 6x + 5, at what x is the stationary point?', answer: 3, tolerance: 0, explanation: 'f′(x) = 2x − 6 = 0 gives x = 3.' },
      { lvl: 2, type: 'mcq', prompt: 'At that stationary point, f″ = 2. What kind of point is it?', choices: ['a minimum', 'a maximum', 'a point of inflection', 'cannot be determined'], answer: 0, explanation: 'f″ > 0 means the slope is increasing, so the curve is cupped upward — a minimum.' },
      { lvl: 3, type: 'numeric', prompt: 'A ball\'s height is s = 20t − 5t². At what time in seconds does it reach maximum height?', answer: 2, tolerance: 0, explanation: 'v = ds/dt = 20 − 10t; setting v = 0 gives t = 2 s.' },
      { lvl: 3, type: 'numeric', prompt: 'For that ball, what is the maximum height in metres?', answer: 20, tolerance: 0, explanation: 's(2) = 40 − 20 = 20 m.' },
      { lvl: 3, type: 'mcq', prompt: 'At the top of its flight the ball has v = 0. What is its acceleration?', choices: ['−10 m/s² — still accelerating downward under gravity', '0, since it is momentarily at rest', '+10 m/s²', 'undefined at that instant'], answer: 0, explanation: 'a = dv/dt = −10 throughout. Zero velocity and zero acceleration are entirely different conditions.' },
      { lvl: 3, type: 'mcq', prompt: 'Why is cancelling h in [2xh + h²]/h legitimate when finding a derivative?', choices: ['h is approaching 0 but is never equal to 0, so the division is valid', 'because h² is negligible', 'because the limit is taken afterwards, so any step is allowed', 'it is not legitimate — the result is a coincidence'], answer: 0, explanation: 'The limit asks what happens as h approaches zero. Since h ≠ 0 throughout, dividing by it is valid — which is precisely how the 0/0 problem is avoided.' },
    ],
  },

  // ==========================================================================
  'math.I2.integrals-intuition': {
    estMinutes: 240,
    hook: String.raw`**If differentiation asks "how fast?", integration asks "how much in total?"** Accumulate a rate over time and you get the amount: accumulate speed and you get distance; accumulate flow and you get volume. Geometrically that accumulation is the **area under a curve**, and the astonishing discovery — the Fundamental Theorem of Calculus — is that this area problem and the tangent problem are inverses of each other.`,
    sections: [
      { h: 'Area as accumulated rate',
        body: String.raw`Travel at a constant 60 km/h for 2 hours and you cover 120 km. On a speed–time graph that is a rectangle of height 60 and width 2 — the **area** under the graph.

That is not a coincidence of the rectangular case. Whenever a rate is plotted against time, **the area under the graph is the accumulated total**, because area = height × width = rate × interval. The units confirm it: (km/h) × h = km.

When the rate varies, the region is no longer a rectangle, so approximate it with many thin ones. Divide $[a,b]$ into $n$ strips of width $\Delta x$ and sum:

$$\text{Area} \approx \sum f(x_i)\,\Delta x$$

Each strip is a small rectangle: its height is the function value, its width the interval. As the strips get thinner the approximation improves, and the **definite integral** is the limit:

$$\int_a^b f(x)\,dx = \lim_{\Delta x \to 0}\sum f(x_i)\,\Delta x$$

The notation records exactly this: $\int$ is an elongated S for "sum", $f(x)$ is the height, and $dx$ is the infinitesimal width. Reading the symbols as "sum of height × width" makes them meaningful rather than decorative.`,
        svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Rectangles approximating the area under a curve" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="20" x2="40" y2="140" stroke="#6b7a99" stroke-width="2"/>
  <line x1="40" y1="140" x2="370" y2="140" stroke="#6b7a99" stroke-width="2"/>
  <g fill="#6366f1" fill-opacity="0.45" stroke="#6366f1">
    <rect x="70" y="118" width="38" height="22"/>
    <rect x="108" y="102" width="38" height="38"/>
    <rect x="146" y="86" width="38" height="54"/>
    <rect x="184" y="72" width="38" height="68"/>
    <rect x="222" y="60" width="38" height="80"/>
    <rect x="260" y="50" width="38" height="90"/>
  </g>
  <path d="M70 126 Q 200 92 300 44" fill="none" stroke="#6ee7a8" stroke-width="2.5"/>
  <text x="200" y="163" font-size="11" fill="#9aa8c4" text-anchor="middle">thinner strips → the integral</text>
</svg>`,
      },
      { h: 'Integration undoes differentiation',
        body: String.raw`The **Fundamental Theorem of Calculus** links the two halves of the subject: differentiation and integration are inverse operations. So to integrate, reverse the power rule.

Differentiating multiplies by the power and lowers it; integrating therefore **raises the power and divides by the new one**:

$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \qquad (n \ne -1)$$

Check it by differentiating back: $\dfrac{d}{dx}\left(\dfrac{x^3}{3}\right) = x^2$ ✓. **Every integral is self-checking this way**, which means you never need to be uncertain.

The **$+C$** is not a decoration. Since every constant differentiates to zero, infinitely many functions share a derivative: $x^2$, $x^2+7$ and $x^2-3$ all differentiate to $2x$. The indefinite integral therefore describes a *family* of curves, all vertical shifts of one another. Omitting $C$ claims you know which member, and you do not — unless the problem gives an extra condition (an initial value) that pins it down.

The exclusion $n \ne -1$ exists because $n+1$ would be zero, and division by zero is undefined. That case, $\int \tfrac1x dx = \ln|x| + C$, is exactly where the natural logarithm enters calculus.`,
        formulas: ['∫xⁿ dx = xⁿ⁺¹/(n+1) + C,  n ≠ −1',
          '∫k dx = kx + C',
          'Integration is the inverse of differentiation — check by differentiating back',
          '+C because every constant differentiates to 0',
          '∫(1/x) dx = ln|x| + C'],
      },
      { h: 'Definite integrals: evaluating an area',
        body: String.raw`A **definite** integral has limits and produces a number, not a family. Find any antiderivative $F$ and subtract:

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

The constant $C$ cancels in the subtraction, which is why definite integrals need no $+C$.

$$\int_0^3 x^2\,dx = \left[\frac{x^3}{3}\right]_0^3 = 9 - 0 = 9$$

Two subtleties matter for interpretation:

- **Area below the axis counts as negative.** $\int_0^{2\pi}\sin x\,dx = 0$, because the positive and negative halves cancel exactly. If a problem asks for *total area* rather than the net integral, split at the crossing points and add the absolute values.
- **Order of limits matters:** $\int_b^a = -\int_a^b$. Swapping the limits reverses the sign.

In applied contexts the sign is meaningful rather than a nuisance: for a velocity that changes direction, the definite integral gives **displacement** (net change in position) while the total area gives **distance travelled**. That is precisely the displacement-versus-distance distinction from Physics F1, now computable for any velocity function.`,
        example: { title: 'Displacement versus distance',
          q: 'A particle has velocity $v = t - 3$ m/s for $0 \\le t \\le 5$. Find its displacement and the distance it travels.',
          solution: 'Displacement: $\\int_0^5 (t-3)dt = \\left[\\tfrac{t^2}{2}-3t\\right]_0^5 = 12.5 - 15 = -2.5$ m. The velocity changes sign at $t=3$, so for distance split there: $\\left|\\int_0^3\\right| = |4.5-9| = 4.5$ and $\\int_3^5 = (12.5-15)-(4.5-9) = 2$. Total distance $= 6.5$ m.',
          moral: 'The integral gives net displacement; total distance needs the sign changes handled separately.' },
      },
      { h: 'What integration is actually used for',
        body: String.raw`Any time you know a **rate** and want a **total**, integration is the tool.

| Rate known | Integral gives |
|---|---|
| velocity $v(t)$ | displacement |
| acceleration $a(t)$ | change in velocity |
| flow rate (L/s) | volume delivered |
| power (W) | energy used (J) |
| population growth rate | change in population |
| force over distance | work done |

The reverse chain in kinematics is worth seeing whole: integrate acceleration to get velocity, integrate again for displacement — the exact inverse of differentiating displacement twice to get acceleration.

*Example.* A tank fills at $r(t) = 4t$ litres per minute. How much enters during the first 3 minutes?

$$\int_0^3 4t\,dt = \left[2t^2\right]_0^3 = 18 \text{ litres}$$

Sanity-check it: the rate rises linearly from 0 to 12 L/min, averaging 6 L/min over 3 minutes, which gives 18 L ✓. For a linear rate the region is a triangle, so $\tfrac12 \times 3 \times 12 = 18$ confirms it geometrically as well.

Integration also recovers **areas and volumes** that no elementary formula covers — the area between two curves, or a volume of revolution — which is the subject of A1 Integration Techniques.`,
      },
    ],
    formulas: ['∫ₐᵇ f(x)dx = F(b) − F(a), where F′ = f',
      '∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1)',
      'Area below the axis is negative; ∫ᵦᵃ = −∫ₐᵇ',
      'Definite integrals need no +C — it cancels in the subtraction',
      'Integrate a rate to get the total accumulated'],
    summary: [
      'The area under a rate–time graph is the accumulated total, because height × width = rate × interval.',
      'The definite integral is the limit of a sum of thin rectangles — the notation says "sum of height × width".',
      'Integration reverses differentiation: raise the power, divide by the new one.',
      'The +C exists because every constant differentiates to zero; an initial condition pins it down.',
      'A definite integral is F(b) − F(a), and C cancels.',
      'Area below the axis is negative — net displacement versus total distance.',
      'Any "rate known, total wanted" problem is an integration problem.',
    ],
    mistakes: [
      '**Omitting the +C** in an indefinite integral. **Fix:** the answer is a family of curves; without an initial condition you cannot name one member.',
      '**Adding +C to a definite integral.** **Fix:** it cancels in F(b) − F(a), so it is simply not needed there.',
      '**Applying the power rule with n = −1.** **Fix:** it would divide by zero; ∫(1/x)dx = ln|x| + C instead.',
      '**Lowering the power instead of raising it.** **Fix:** integration is the reverse of differentiation — check by differentiating your answer back.',
      '**Subtracting the limits in the wrong order.** **Fix:** it is F(top) − F(bottom); swapping flips the sign.',
      '**Treating a negative integral as an error.** **Fix:** area below the axis genuinely counts negative; in kinematics that is motion in the reverse direction.',
      '**Reporting the net integral when total distance was asked.** **Fix:** find where the function crosses the axis, integrate each piece, and add the absolute values.',
      '**Forgetting that the +C from an initial condition changes the answer.** **Fix:** substitute the given condition and solve for C before using the function.',
    ],
    tricks: [
      '**Check every integral by differentiating it back.** This makes integration the one topic where you can always verify your own answer.',
      '**Read the notation as its meaning:** ∫ is a sum, f(x) is a height, dx is a width.',
      '**Sanity-check areas geometrically** where the shape is simple — a linear rate gives a triangle or trapezium you can compute without calculus.',
      '**For total distance, find the roots of v(t) first**, then integrate between them and take absolute values.',
      '**Check the units to confirm what an integral means:** (L/s) × s = L, (m/s) × s = m. The units tell you what you have computed.',
      '**Use an initial condition immediately** to fix C, rather than carrying an unknown constant through later work.',
      '**Remember the pairing:** differentiate to go from amount to rate, integrate to go from rate to amount.',
    ],
    memory: [
      '"Differentiation asks how fast; integration asks how much."',
      '"Area under a rate is the total."',
      '"Raise the power, divide by the new one" — the reverse of the derivative rule.',
      '"Plus C, because constants vanish when you differentiate."',
      '"Top minus bottom" for definite integrals.',
      '"Below the axis is negative."',
      '"Check by differentiating back."',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'What does the area under a speed–time graph represent?', choices: ['distance travelled', 'acceleration', 'average speed', 'time elapsed'], answer: 0, explanation: 'Height × width = speed × time = distance. The units confirm it.' },
      { lvl: 1, type: 'mcq', prompt: 'Find ∫x² dx.', choices: ['x³/3 + C', '2x + C', 'x³ + C', '3x³ + C'], answer: 0, explanation: 'Raise the power to 3 and divide by 3. Differentiating back gives x². ✓' },
      { lvl: 1, type: 'numeric', prompt: 'Evaluate ∫₀³ x² dx.', answer: 9, tolerance: 0, explanation: '[x³/3] from 0 to 3 = 9 − 0 = 9.' },
      { lvl: 1, type: 'mcq', prompt: 'Why does an indefinite integral include + C?', choices: ['every constant differentiates to 0, so infinitely many functions share the derivative', 'to make the answer look complete', 'because integration is approximate', 'to account for negative areas'], answer: 0, explanation: 'x², x²+7 and x²−3 all differentiate to 2x, so the antiderivative is a family of curves.' },
      { lvl: 2, type: 'numeric', prompt: 'A tank fills at r(t) = 4t litres per minute. How many litres enter in the first 3 minutes?', answer: 18, tolerance: 0, explanation: '∫₀³ 4t dt = [2t²]₀³ = 18 L. Check: average rate 6 L/min over 3 min = 18 L.' },
      { lvl: 2, type: 'mcq', prompt: 'Why is ∫xⁿ dx = xⁿ⁺¹/(n+1) invalid when n = −1?', choices: ['it would divide by zero; the answer is ln|x| + C', 'because x⁻¹ is not a power', 'because the integral diverges everywhere', 'it is valid for n = −1'], answer: 0, explanation: 'n + 1 = 0, so the formula breaks. That case is exactly where the natural logarithm enters calculus.' },
      { lvl: 2, type: 'mcq', prompt: 'A definite integral evaluates to a negative number. What does this mean?', choices: ['more of the region lies below the axis than above', 'a calculation error has occurred', 'the limits were equal', 'the function is undefined'], answer: 0, explanation: 'Area below the axis counts negative, so the integral gives the net signed area.' },
      { lvl: 2, type: 'mcq', prompt: 'What is ∫ₐᵇ f(x)dx in terms of an antiderivative F?', choices: ['F(b) − F(a)', 'F(a) − F(b)', 'F(b) + F(a)', 'F(b − a)'], answer: 0, explanation: 'Top limit minus bottom limit; the constant C cancels in the subtraction.' },
      { lvl: 3, type: 'numeric', prompt: 'A particle has v = t − 3 m/s for 0 ≤ t ≤ 5. What is its displacement in metres?', answer: -2.5, tolerance: 0.01, explanation: '[t²/2 − 3t]₀⁵ = 12.5 − 15 = −2.5 m — a net movement backwards.' },
      { lvl: 3, type: 'numeric', prompt: 'For that same particle, what total distance does it travel, in metres?', answer: 6.5, tolerance: 0.01, explanation: 'v changes sign at t = 3. |∫₀³| = 4.5 and ∫₃⁵ = 2, so the total distance is 6.5 m.' },
      { lvl: 3, type: 'mcq', prompt: 'What does the Fundamental Theorem of Calculus assert?', choices: ['differentiation and integration are inverse operations, linking tangents to areas', 'every function has an area under it', 'all integrals can be evaluated exactly', 'derivatives are always positive'], answer: 0, explanation: 'It connects the two apparently unrelated problems — instantaneous slope and accumulated area — as inverses, which is what makes the definite integral computable via antiderivatives.' },
      { lvl: 3, type: 'mcq', prompt: 'You know a tank\'s flow rate in L/s and integrate over seconds. What are the units of the result?', choices: ['litres', 'litres per second', 'seconds', 'litres per second squared'], answer: 0, explanation: '(L/s) × s = L. Checking units is a reliable way to confirm what an integral has actually computed.' },
    ],
  },

  // ==========================================================================
  'math.I2.trigonometry-ii': {
    estMinutes: 240,
    hook: String.raw`**Trigonometry II frees the ratios from the right triangle.** The unit circle extends sine and cosine to every angle, turning them into the wave functions that describe oscillation, sound, alternating current and light. The sine and cosine rules then handle *any* triangle, so you can finally solve the non-right-angled cases that F2 and I1 could not touch.`,
    sections: [
      { h: 'The unit circle: trigonometry beyond 90°',
        body: String.raw`On a circle of radius 1, the point at angle $\theta$ from the positive $x$-axis is exactly $(\cos\theta, \sin\theta)$. This *defines* sine and cosine for every angle, including obtuse, reflex and negative ones, where "opposite over hypotenuse" has no meaning.

The signs follow from the coordinates' signs in each quadrant:

| Quadrant | Angles | Positive |
|---|---|---|
| I | $0°$–$90°$ | **A**ll |
| II | $90°$–$180°$ | **S**ine only |
| III | $180°$–$270°$ | **T**angent only |
| IV | $270°$–$360°$ | **C**osine only |

remembered as **CAST**, read anticlockwise from the fourth quadrant.

Because the point returns to where it started every full turn, the functions are **periodic**: $\sin(\theta + 360°) = \sin\theta$. Sine and cosine oscillate between $-1$ and $1$ forever, giving the wave shape; cosine is simply sine shifted by $90°$. Tangent behaves differently — it is undefined wherever $\cos\theta = 0$ (at $90°$, $270°$, …), which produces its vertical asymptotes.

**Related angles** let you reduce any angle to an acute one: $\sin 150° = \sin 30° = \tfrac12$, and $\cos 210° = -\cos 30°$. Find the acute angle to the horizontal axis, then attach the sign from CAST.`,
        formulas: ['Unit circle: point at angle θ is (cos θ, sin θ)',
          'CAST: All / Sine / Tangent / Cosine positive by quadrant',
          'Period 360° for sin and cos;  180° for tan',
          '−1 ≤ sin θ ≤ 1 and −1 ≤ cos θ ≤ 1 for every angle',
          'tan θ undefined where cos θ = 0'],
      },
      { h: 'Identities: relationships true for every angle',
        body: String.raw`An **identity** holds for all values, unlike an equation which holds for particular ones. The two foundational identities are:

$$\sin^2\theta + \cos^2\theta = 1, \qquad \tan\theta = \frac{\sin\theta}{\cos\theta}$$

The first is Pythagoras on the unit circle: the point $(\cos\theta, \sin\theta)$ is at distance 1 from the origin.

Rearrangements are what make it useful: $\sin^2\theta = 1 - \cos^2\theta$ lets you convert an equation containing both functions into one containing only one, which is usually the key step in solving.

Two more, worth knowing for A1:

$$\sin(A \pm B) = \sin A\cos B \pm \cos A \sin B$$
$$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$$

Note the **swapped sign** in the cosine expansion — a plus inside gives a minus outside. Setting $A = B$ produces the double-angle formulas: $\sin 2A = 2\sin A\cos A$ and $\cos 2A = \cos^2 A - \sin^2 A$.

**Proving an identity** means transforming one side into the other. Work on the more complicated side, convert everything to sines and cosines, and simplify. You may **not** treat it as an equation and do the same thing to both sides — that assumes what you are trying to prove.`,
      },
      { h: 'Solving trigonometric equations',
        body: String.raw`Because the functions are periodic, a trigonometric equation has **infinitely many solutions**, and questions therefore specify a range such as $0° \le \theta \le 360°$.

Solve $\sin\theta = 0.5$ in that range:

1. **Principal value:** $\sin^{-1}(0.5) = 30°$.
2. **Find the other solutions in range using symmetry.** Sine is positive in quadrants I and II, so the second solution is $180° - 30° = 150°$.
3. **State all solutions:** $\theta = 30°$ or $150°$.

The calculator gives only the principal value — **it will never tell you about the second solution**, which is why the symmetry step must be done by hand. The rules by function:

- $\sin$: second solution is $180° - \theta$.
- $\cos$: second solution is $360° - \theta$.
- $\tan$: solutions repeat every $180°$.

A caution for equations like $\sin 2\theta = 0.5$: solve for $2\theta$ over a **doubled range** ($0°$ to $720°$), then halve every answer. Solving for $\theta$ first loses solutions.`,
        example: { title: 'All solutions in range',
          q: 'Solve $\\sin\\theta = 0.5$ for $0° \\le \\theta \\le 360°$.',
          solution: 'The principal value is $30°$. Sine is also positive in the second quadrant, giving $180° - 30° = 150°$. So $\\theta = 30°$ or $150°$. Both check: $\\sin 150° = 0.5$ ✓.',
          moral: 'The calculator returns one answer; the symmetry of the unit circle supplies the rest.' },
      },
      { h: 'The sine and cosine rules: any triangle at last',
        body: String.raw`For triangles **without** a right angle, two rules cover every case. Label each side with the lower-case letter of the angle opposite it.

**Sine rule** — use when you have a matching side–angle pair:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Suitable for: two angles and a side (AAS/ASA), or two sides and a non-included angle (SSA).

**Cosine rule** — use when the sine rule cannot start, i.e. no matching pair:

$$a^2 = b^2 + c^2 - 2bc\cos A$$

Suitable for: two sides and the included angle (SAS), or all three sides (SSS, rearranged to find an angle).

Notice that the cosine rule **is Pythagoras with a correction term**: when $A = 90°$, $\cos A = 0$ and it reduces to $a^2 = b^2+c^2$. The term $-2bc\cos A$ measures exactly how far the triangle departs from right-angled.

**The ambiguous case.** With SSA the sine rule can give two valid triangles, because $\sin\theta = \sin(180°-\theta)$ — the acute and obtuse options are both consistent with the data. This is the same SSA ambiguity met in F1 congruence, now quantified. Always check whether the obtuse alternative also fits (the angles must still total less than $180°$).

For area, when you know two sides and the included angle:

$$\text{Area} = \tfrac12 ab\sin C$$`,
        formulas: ['Sine rule: a/sin A = b/sin B = c/sin C  (needs a matching pair)',
          'Cosine rule: a² = b² + c² − 2bc·cos A  (SAS or SSS)',
          'Cosine rule reduces to Pythagoras when A = 90°',
          'Area = ½ab·sin C',
          'SSA is ambiguous: check the obtuse alternative'],
        example: { title: 'Choosing the right rule',
          q: 'A triangle has $b = 7$, $c = 9$ and the included angle $A = 60°$. Find $a$.',
          solution: 'Two sides and the angle between them, so there is no matching side–angle pair — use the cosine rule. $a^2 = 49 + 81 - 2(7)(9)\\cos 60° = 130 - 126(0.5) = 67$, so $a = \\sqrt{67} \\approx 8.19$.',
          moral: 'Sine rule needs a matching pair; if you do not have one, reach for the cosine rule.' },
      },
    ],
    formulas: ['Unit circle defines sin and cos for all angles; CAST gives the signs',
      'sin²θ + cos²θ = 1;  tan θ = sin θ / cos θ',
      'sin(A±B) = sinA cosB ± cosA sinB;  cos(A±B) = cosA cosB ∓ sinA sinB',
      'sin: second solution 180° − θ;  cos: 360° − θ;  tan: repeats every 180°',
      'Sine rule a/sinA = b/sinB = c/sinC;  cosine rule a² = b² + c² − 2bc cosA',
      'Area = ½ab sin C'],
    summary: [
      'The unit circle defines sine and cosine for every angle, producing periodic wave functions.',
      'CAST gives the sign of each function by quadrant; related angles reduce any angle to an acute one.',
      'sin²θ + cos²θ = 1 is Pythagoras on the unit circle, and rearranging it is the key solving step.',
      'Trig equations have infinitely many solutions; the calculator gives one, symmetry gives the rest.',
      'For sin θ = k the partner is 180° − θ; for cos θ = k it is 360° − θ; tan repeats every 180°.',
      'Sine rule needs a matching side–angle pair; the cosine rule handles SAS and SSS.',
      'The cosine rule is Pythagoras plus a correction, and SSA remains genuinely ambiguous.',
    ],
    mistakes: [
      '**Giving only the calculator\'s answer** when solving a trig equation. **Fix:** the calculator returns the principal value; use CAST or the symmetry rules to find every solution in the stated range.',
      '**Forgetting the range restriction**, or listing solutions outside it. **Fix:** underline the range before starting, and discard anything outside it at the end.',
      '**Solving sin 2θ = k by halving at the end without extending the range.** **Fix:** solve for 2θ over a doubled range, then halve each solution — otherwise you lose half of them.',
      '**Using the sine rule without a matching side–angle pair.** **Fix:** you need a side and its opposite angle to start; if you do not have one, use the cosine rule.',
      '**Sign error in the cosine rule.** Writing + 2bc cos A. **Fix:** the term is subtracted; check that it reduces to Pythagoras when A = 90°.',
      '**Ignoring the ambiguous case in SSA.** **Fix:** since sin θ = sin(180° − θ), test whether the obtuse angle also gives a valid triangle.',
      '**Treating an identity like an equation** and operating on both sides to "prove" it. **Fix:** transform one side into the other; operating on both assumes the result.',
      '**Reading sin²θ as sin(θ²).** **Fix:** it means (sin θ)².',
      '**Forgetting the sign swap in cos(A + B).** **Fix:** cos(A+B) = cosA cosB − sinA sinB — a plus inside gives a minus outside.',
    ],
    tricks: [
      '**Sketch the unit circle for every equation.** Seeing where the horizontal or vertical coordinate takes the required value makes the second solution obvious.',
      '**Use CAST to fix signs** rather than memorising values for obtuse and reflex angles.',
      '**Reduce any angle to its acute related angle**, then attach the sign: cos 210° = −cos 30°.',
      '**Choose the rule by what you have:** matching pair → sine rule; SAS or SSS → cosine rule.',
      '**Check the cosine rule reduces to Pythagoras at 90°** as an instant verification that you wrote it correctly.',
      '**Convert everything to sines and cosines** when proving an identity; it turns most of them into algebra.',
      '**Sanity-check triangle answers**: the largest side must face the largest angle, and the angles must total 180°.',
    ],
    memory: [
      '"CAST — All, Sine, Tangent, Cosine" anticlockwise from quadrant IV.',
      '"The unit circle defines it; the triangle only illustrated it."',
      '"sin partners with 180 − θ; cos partners with 360 − θ; tan repeats at 180."',
      '"The calculator gives one answer, never all of them."',
      '"Cosine rule is Pythagoras with a correction."',
      '"Matching pair? Sine rule. No pair? Cosine rule."',
      '"Prove an identity by transforming one side only."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'What is sin 150°? Give your answer as a decimal.', answer: 0.5, tolerance: 0.001, explanation: 'The related acute angle is 30°, and sine is positive in the second quadrant, so sin 150° = sin 30° = 0.5.' },
      { lvl: 1, type: 'mcq', prompt: 'In which quadrant are all three trigonometric functions positive?', choices: ['the first', 'the second', 'the third', 'the fourth'], answer: 0, explanation: 'CAST: "A" for All in the first quadrant, where both coordinates are positive.' },
      { lvl: 1, type: 'mcq', prompt: 'What is the period of sin θ?', choices: ['360°', '180°', '90°', '720°'], answer: 0, explanation: 'The point returns to its starting position after one full turn.' },
      { lvl: 1, type: 'mcq', prompt: 'Which identity is Pythagoras on the unit circle?', choices: ['sin²θ + cos²θ = 1', 'tan θ = sin θ/cos θ', 'sin 2θ = 2 sin θ cos θ', 'a² = b² + c² − 2bc cos A'], answer: 0, explanation: 'The point (cos θ, sin θ) lies at distance 1 from the origin.' },
      { lvl: 2, type: 'mcq', prompt: 'Solve sin θ = 0.5 for 0° ≤ θ ≤ 360°.', choices: ['30° and 150°', '30° only', '30° and 330°', '150° only'], answer: 0, explanation: 'Principal value 30°; sine is also positive in quadrant II, giving 180° − 30° = 150°.' },
      { lvl: 2, type: 'mcq', prompt: 'A triangle has b = 7, c = 9 and included angle A = 60°. Which rule finds a?', choices: ['the cosine rule', 'the sine rule', 'Pythagoras', 'the area formula'], answer: 0, explanation: 'There is no matching side–angle pair, so the sine rule cannot start. SAS calls for the cosine rule.' },
      { lvl: 2, type: 'numeric', prompt: 'For that triangle, find a to 2 decimal places.', answer: 8.19, tolerance: 0.05, explanation: 'a² = 49 + 81 − 2(7)(9)(0.5) = 67, so a = √67 ≈ 8.19.' },
      { lvl: 2, type: 'mcq', prompt: 'Why is tan θ undefined at 90°?', choices: ['tan = sin/cos and cos 90° = 0', 'because sin 90° = 1', 'because 90° is not in the first quadrant', 'it is defined and equals 1'], answer: 0, explanation: 'Division by zero is undefined, which produces tangent\'s vertical asymptotes.' },
      { lvl: 3, type: 'mcq', prompt: 'Why does the cosine rule reduce to Pythagoras when A = 90°?', choices: ['cos 90° = 0, so the correction term −2bc cos A vanishes', 'because b = c at 90°', 'because the sine rule applies instead', 'it does not reduce to Pythagoras'], answer: 0, explanation: 'The term −2bc cos A measures the departure from right-angled; at 90° it is zero and a² = b² + c².' },
      { lvl: 3, type: 'mcq', prompt: 'Solving sin 2θ = 0.5 for 0° ≤ θ ≤ 360°, what range should you use for 2θ?', choices: ['0° to 720°', '0° to 360°', '0° to 180°', '0° to 90°'], answer: 0, explanation: 'Doubling the variable doubles the range. Solving over 0°–360° and halving would discard half the solutions.' },
      { lvl: 3, type: 'mcq', prompt: 'Why can SSA data produce two different triangles?', choices: ['sin θ = sin(180° − θ), so both an acute and an obtuse angle fit the data', 'because the sine rule is only approximate', 'because two sides are always equal', 'it cannot — SSA is always unique'], answer: 0, explanation: 'The sine rule cannot distinguish the two, so both must be checked. This is the same ambiguity that makes SSA invalid for congruence.' },
      { lvl: 3, type: 'mcq', prompt: 'What is wrong with proving an identity by doing the same operation to both sides?', choices: ['it assumes the identity is true, which is what you are trying to establish', 'nothing — it is the standard method', 'it only works for acute angles', 'it changes the period of the functions'], answer: 0, explanation: 'A proof must transform one side into the other. Operating on both sides presupposes the equality being proved.' },
    ],
  },

  // ==========================================================================
  'math.I2.combinatorics-probability-ii': {
    estMinutes: 240,
    hook: String.raw`**Counting sounds trivial until the things being counted are arrangements.** How many ways can 5 people sit in a row? How many 4-digit PINs have no repeated digit? Combinatorics answers these systematically, and it matters because probability is counting: once you can count the favourable outcomes and the total, every probability question becomes arithmetic.`,
    sections: [
      { h: 'The multiplication principle',
        body: String.raw`Everything in this topic grows from one rule: **if a task has independent stages, multiply the number of choices at each stage.**

A meal with 3 starters, 4 mains and 2 desserts allows $3 \times 4 \times 2 = 24$ combinations. A 4-digit PIN with digits allowed to repeat allows $10^4 = 10\,000$.

The word **independent** is doing the work. If the choices interact, the counts change at each stage:

- 4-digit PIN, digits **may repeat**: $10\times10\times10\times10 = 10\,000$.
- 4-digit PIN, digits **may not repeat**: $10\times9\times8\times7 = 5040$ — each choice removes one option.

The complementary rule is just as useful: **if the stages are alternatives rather than sequential steps, add.** "Choose a starter *or* a dessert" gives $3 + 2 = 5$. The test is whether the word joining the stages is *and* (multiply) or *or* (add).

Factorial notation compresses the descending product: $n! = n(n-1)(n-2)\cdots1$, so $5! = 120$. By convention $0! = 1$ — there is exactly one way to arrange nothing, and the definition keeps the formulas below consistent.`,
        formulas: ['Multiplication principle: independent stages multiply',
          'Alternatives add ("or"); sequential steps multiply ("and")',
          'n! = n(n−1)…1;  0! = 1',
          'With repetition allowed: nʳ arrangements'],
      },
      { h: 'Permutations and combinations: does order matter?',
        body: String.raw`This is the single decision the whole topic turns on.

**Permutation — order matters.** Arrangements of $r$ objects chosen from $n$:

$$^nP_r = \frac{n!}{(n-r)!}$$

Choosing a president and a vice-president from 10 people: $^{10}P_2 = 90$, because (Asha, Ben) differs from (Ben, Asha).

**Combination — order does not matter.** Selections of $r$ from $n$:

$$^nC_r = \frac{n!}{r!\,(n-r)!}$$

Choosing a 2-person committee from 10: $^{10}C_2 = 45$ — exactly half of 90, because each pair was counted twice. In general $^nC_r = \dfrac{^nP_r}{r!}$: divide out the $r!$ orderings you do not want to distinguish.

**Deciding which to use.** Ask: *would swapping two of the chosen items give a genuinely different outcome?*

| Situation | Type | Why |
|---|---|---|
| Race positions | permutation | 1st and 2nd are different |
| Committee members | combination | no roles, so order is irrelevant |
| PIN or password | permutation | 1234 ≠ 4321 |
| Lottery numbers | combination | drawn order is irrelevant |
| Seating in a row | permutation | positions differ |

A useful symmetry: $^nC_r = {}^nC_{n-r}$. Choosing 8 from 10 to include is the same as choosing 2 to leave out — and computing $^{10}C_2$ is much less work.`,
        example: { title: 'The same numbers, two answers',
          q: 'From 10 people, how many ways to pick (a) a president and vice-president, (b) a committee of 2?',
          solution: '(a) Order matters, so $^{10}P_2 = 10\\times9 = 90$. (b) Order does not, so $^{10}C_2 = \\dfrac{90}{2!} = 45$.',
          moral: 'Same selection, halved by the 2! orderings that the committee does not distinguish.' },
      },
      { h: 'Conditional probability',
        body: String.raw`$P(A \mid B)$ is the probability of $A$ **given that $B$ has happened**. Knowing $B$ occurred shrinks the sample space to $B$ alone:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

Rearranged, this gives the general multiplication rule:

$$P(A \cap B) = P(B)\,P(A\mid B)$$

which reduces to the familiar $P(A)P(B)$ **only when the events are independent**, i.e. when $P(A\mid B) = P(A)$ — knowing $B$ tells you nothing about $A$.

*Example.* Two cards without replacement. $P(\text{both kings}) = \tfrac{4}{52}\times\tfrac{3}{51}$, because after one king is removed the conditional probability of a second changes.

**Tree diagrams** are the reliable tool: branches from each node carry conditional probabilities, each set summing to 1; multiply *along* a path, add *across* paths that satisfy the condition.

The classic trap is **confusing $P(A\mid B)$ with $P(B\mid A)$.** They are usually very different. $P(\text{four legs} \mid \text{dog})$ is about 1; $P(\text{dog} \mid \text{four legs})$ is small. In medical testing this is the base-rate fallacy: a test that is 99% accurate for a disease affecting 1 in 10 000 still produces mostly false positives, because the healthy group is so much larger. Reversing a conditional probability without recomputing is one of the most consequential errors in applied statistics.`,
        formulas: ['P(A|B) = P(A ∩ B)/P(B)',
          'P(A ∩ B) = P(B)·P(A|B)  — general multiplication rule',
          'Independent ⇔ P(A|B) = P(A) ⇔ P(A ∩ B) = P(A)P(B)',
          'Tree diagrams: multiply along branches, add across paths',
          'P(A|B) ≠ P(B|A)'],
        example: { title: 'Conditional, from a tree',
          q: 'A bag has 3 red and 2 blue balls. Two are drawn without replacement. Find P(both red).',
          solution: 'First draw: $P(\\text{red}) = \\tfrac35$. Given a red was taken, 2 reds remain of 4 balls, so $P(\\text{red}\\mid\\text{red}) = \\tfrac24$. Multiplying along the branch: $\\tfrac35 \\times \\tfrac24 = \\tfrac{6}{20} = \\tfrac{3}{10}$.',
          moral: 'Without replacement, the second probability is conditional — both the numerator and the denominator change.' },
      },
      { h: 'Putting counting and probability together',
        body: String.raw`With equally likely outcomes, probability is a ratio of two counts:

$$P = \frac{\text{favourable arrangements}}{\text{total arrangements}}$$

so combinatorics supplies both numbers.

*Lottery.* Choosing 6 numbers from 49, order irrelevant: $^{49}C_6 = 13\,983\,816$. One ticket therefore wins with probability $\tfrac{1}{13\,983\,816}$ — about 1 in 14 million, which is the honest way to read "you could be next".

*Committee with a constraint.* From 5 men and 4 women, how many 3-person committees contain exactly 2 women? Choose the women, then the man: $^4C_2 \times {}^5C_1 = 6 \times 5 = 30$. **Choose from each group separately, then multiply** — the multiplication principle again.

*Birthday-style problems* show the power of the complement. The probability that 3 people all have different birthdays is $\tfrac{365}{365}\times\tfrac{364}{365}\times\tfrac{363}{365}$, so the probability that at least two share is 1 minus that. This is why the answer for 23 people exceeds a half — a result that feels wrong until you notice you are counting *pairs*, of which there are 253.

The habit to build: **decide order-matters-or-not first, count the total, count the favourable, then divide** — and sanity-check that the result lies between 0 and 1.`,
      },
    ],
    formulas: ['Multiplication principle for independent stages; add for alternatives',
      'ⁿPᵣ = n!/(n−r)!  (order matters)',
      'ⁿCᵣ = n!/(r!(n−r)!)  (order does not) = ⁿPᵣ/r!',
      'ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎',
      'P(A|B) = P(A ∩ B)/P(B);  P(A ∩ B) = P(B)P(A|B)',
      'P = favourable count ÷ total count'],
    summary: [
      'Everything follows from the multiplication principle: independent stages multiply, alternatives add.',
      'Repetition allowed gives nʳ; repetition forbidden gives a descending product.',
      'Permutations count arrangements (order matters); combinations count selections (it does not).',
      'ⁿCᵣ = ⁿPᵣ/r!, because each selection was counted r! times.',
      'Decide "would swapping two chosen items change the outcome?" before choosing a formula.',
      'Conditional probability shrinks the sample space; without replacement makes events dependent.',
      'P(A|B) and P(B|A) are different — reversing them is the base-rate fallacy.',
    ],
    mistakes: [
      '**Using a permutation where order is irrelevant** (or vice versa). **Fix:** ask whether swapping two chosen items gives a different outcome. Committee no, race positions yes.',
      '**Adding when you should multiply.** **Fix:** "and" between sequential stages means multiply; "or" between alternatives means add.',
      '**Forgetting that choices shrink when repetition is forbidden.** Using 10⁴ for a PIN with distinct digits. **Fix:** 10 × 9 × 8 × 7.',
      '**Treating without-replacement draws as independent.** **Fix:** the second probability is conditional — both numerator and denominator change.',
      '**Confusing P(A|B) with P(B|A).** **Fix:** they answer different questions. P(four legs | dog) ≈ 1 but P(dog | four legs) is small.',
      '**Ignoring the base rate** in test-accuracy problems. **Fix:** with a rare condition, most positives are false positives however accurate the test.',
      '**Computing ⁿCᵣ for large r the hard way.** **Fix:** use ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎ — ¹⁰C₈ is just ¹⁰C₂ = 45.',
      '**Forgetting 0! = 1** and getting a division error. **Fix:** it is defined as 1 precisely so the formulas work at the extremes.',
    ],
    tricks: [
      '**Decide order-matters-or-not before writing anything.** That single decision picks the formula, and most errors are made before any arithmetic.',
      '**Use the complement for "at least one".** 1 − P(none) is almost always easier than summing cases.',
      '**Use the symmetry ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎** to keep the arithmetic small.',
      '**Draw a tree for any two-stage probability problem.** Multiply along branches, add across paths — and each branch set must sum to 1, which is a free check.',
      '**Handle constraints by choosing from each group separately, then multiplying** — "exactly 2 women from 4, and 1 man from 5" is ⁴C₂ × ⁵C₁.',
      '**Sanity-check every probability against 0 ≤ P ≤ 1**, and check counts against a small case you can enumerate by hand.',
      '**Test a formula on a tiny example.** With 3 people and 2 seats you can list all 6 permutations and confirm ³P₂ = 6.',
    ],
    memory: [
      '"And multiplies, or adds."',
      '"Permutation: position matters. Combination: committee."',
      '"Divide by r! to forget the order."',
      '"ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎ — choosing whom to leave out is the same problem."',
      '"Without replacement means conditional."',
      '"P(A|B) is not P(B|A)."',
      '"At least one = 1 minus none."',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'A meal offers 3 starters, 4 mains and 2 desserts. How many different meals?', answer: 24, tolerance: 0, explanation: 'Independent stages multiply: 3 × 4 × 2 = 24.' },
      { lvl: 1, type: 'numeric', prompt: 'What is 5! ?', answer: 120, tolerance: 0, explanation: '5 × 4 × 3 × 2 × 1 = 120.' },
      { lvl: 1, type: 'numeric', prompt: 'How many 4-digit PINs are there if digits may repeat?', answer: 10000, tolerance: 0, explanation: '10⁴ = 10 000.' },
      { lvl: 1, type: 'mcq', prompt: 'Choosing a committee of 3 from 10 people is a:', choices: ['combination', 'permutation', 'factorial', 'conditional probability'], answer: 0, explanation: 'The committee has no roles, so order does not matter.' },
      { lvl: 2, type: 'numeric', prompt: 'How many 4-digit PINs have no repeated digit?', answer: 5040, tolerance: 0, explanation: '10 × 9 × 8 × 7 = 5040 — each choice removes one option.' },
      { lvl: 2, type: 'numeric', prompt: 'From 10 people, how many ways to choose a president and a vice-president?', answer: 90, tolerance: 0, explanation: 'Order matters: ¹⁰P₂ = 10 × 9 = 90.' },
      { lvl: 2, type: 'numeric', prompt: 'From 10 people, how many 2-person committees?', answer: 45, tolerance: 0, explanation: '¹⁰C₂ = 90/2! = 45 — each pair was counted twice above.' },
      { lvl: 2, type: 'mcq', prompt: 'A bag has 3 red and 2 blue balls; two are drawn without replacement. P(both red) is:', choices: ['(3/5) × (2/4) = 3/10', '(3/5)²', '(3/5) × (3/5)', '(3/5) + (2/4)'], answer: 0, explanation: 'After a red is removed, 2 reds remain among 4 balls — the second probability is conditional.' },
      { lvl: 3, type: 'numeric', prompt: 'From 5 men and 4 women, how many 3-person committees contain exactly 2 women?', answer: 30, tolerance: 0, explanation: '⁴C₂ × ⁵C₁ = 6 × 5 = 30 — choose from each group, then multiply.' },
      { lvl: 3, type: 'mcq', prompt: 'A lottery draws 6 numbers from 49, order irrelevant. Roughly what is the chance of winning with one ticket?', choices: ['about 1 in 14 million', 'about 1 in 300', 'about 1 in 100 000', 'about 1 in 49'], answer: 0, explanation: '⁴⁹C₆ = 13 983 816, so the probability is about 1 in 14 million.' },
      { lvl: 3, type: 'mcq', prompt: 'A test is 99% accurate for a disease affecting 1 in 10 000. Someone tests positive. What is the most likely explanation?', choices: ['a false positive — the healthy group is so large that it generates most positives', 'they almost certainly have the disease', 'the test must be faulty', 'the probability is exactly 99%'], answer: 0, explanation: 'This is the base-rate fallacy: P(disease | positive) is far smaller than P(positive | disease). Among 10 000 people, roughly 100 false positives accompany the 1 true case.' },
      { lvl: 3, type: 'mcq', prompt: 'Why is ¹⁰C₈ easier to compute as ¹⁰C₂?', choices: ['ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎ — choosing 8 to include is choosing 2 to leave out', 'because 2 is smaller than 8', 'they are not equal; it is an approximation', 'because 8! is undefined'], answer: 0, explanation: 'Each selection of 8 corresponds to exactly one selection of the 2 excluded, so the counts are identical — and ¹⁰C₂ = 45 takes one line.' },
    ],
  },

};
