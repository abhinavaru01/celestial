// Deep content: math F1. See ../index.mjs for the entry schema.
//
// Bodies use String.raw so that LaTeX backslashes survive: in an ordinary template
// literal "\frac" is parsed as a form-feed character followed by "rac".

export default {

  // ==========================================================================
  'math.F1.number-sense-estimation': {
    estMinutes: 240,
    hook: String.raw`**Before you can compute well, you have to *feel* numbers.** Place value is a machine that compresses endless counting into ten symbols; the number line turns "less than nothing" from a paradox into a direction; and estimation is the habit that catches the wrong answer before it costs you marks. Every later topic — ratio, algebra, scientific notation, chemistry's moles, physics' orders of magnitude — is built on the number sense you install here.`,
    sections: [
      { h: 'Place value: ten symbols, infinite numbers',
        body: String.raw`Counting with tally marks needs as many symbols as things counted. Place value fixes that with one rule: **a digit's value depends on where it sits.** In $3407$ the $3$ does not mean three — it means three *thousands*.

$$3407 = 3\times10^3 + 4\times10^2 + 0\times10^1 + 7\times10^0$$

Two consequences do most of the work later:

- **Each place is ten times the one to its right.** Moving a digit one place left multiplies it by 10; one place right divides by 10. That is *all* multiplying by powers of ten does — it shifts digits, it does not "add zeros" (a phrase that will betray you the moment decimals appear: $2.5\times10 = 25$, not $2.50$).
- **Zero is a placeholder, and it is essential.** The $0$ in $3407$ is doing real work: it holds the tens place empty so the $4$ stays in the hundreds.

Decimals are the same machine continued rightward: places worth $\tfrac{1}{10}, \tfrac{1}{100}, \tfrac{1}{1000}$. There is no "decimal system" separate from the whole-number system — it is one ruler extended past 1.`,
        formulas: ['Place value: each place = 10 × the place to its right',
          'Digit value = digit × (place value)',
          '×10 shifts digits one place left; ÷10 shifts one place right'],
      },
      { h: 'The number line and what a negative number is',
        body: String.raw`A negative number is not "a number less than nothing" — nothing is not a quantity you can be less than. A negative number is a **position on the opposite side of a chosen zero**, or equivalently a **change in the opposite direction**.

That second reading is the useful one. Temperature falling 5 degrees, a debt of 200 rupees, 30 m below sea level: in each case zero is a *convention* and the minus sign records direction.

Once you accept "minus = opposite direction", the rules stop being arbitrary:

- **Adding a negative moves left:** $7 + (-3) = 4$.
- **Subtracting a negative moves right:** $7 - (-3) = 10$. Subtracting is "remove this change"; removing a leftward move leaves you further right. Removing a debt makes you richer.
- **Ordering flips from intuition:** $-8 < -3$, because $-8$ sits further left. The *size* of $8$ is larger, but its position is lower. That gap between size and position is exactly what absolute value names: $|-8| = 8$ is the distance from zero, direction discarded.

Signs in multiplication follow from patterns rather than decree. Watch $3\times(-2) = -6$, $2\times(-2) = -4$, $1\times(-2) = -2$, $0\times(-2) = 0$ — each step up adds 2. Continue: $(-1)\times(-2) = 2$. A negative times a negative must be positive for arithmetic to stay consistent.`,
        svg: `<svg viewBox="0 0 420 90" role="img" aria-label="Number line from minus 5 to 5 showing 7 minus 3" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="55" x2="400" y2="55" stroke="#6b7a99" stroke-width="2"/>
  <g font-size="11" fill="#9aa8c4" text-anchor="middle">
    <line x1="20" y1="50" x2="20" y2="60" stroke="#6b7a99"/><text x="20" y="75">-5</text>
    <line x1="96" y1="50" x2="96" y2="60" stroke="#6b7a99"/><text x="96" y="75">-3</text>
    <line x1="210" y1="46" x2="210" y2="64" stroke="#e6ecff" stroke-width="2"/><text x="210" y="80" fill="#e6ecff">0</text>
    <line x1="324" y1="50" x2="324" y2="60" stroke="#6b7a99"/><text x="324" y="75">3</text>
    <line x1="400" y1="50" x2="400" y2="60" stroke="#6b7a99"/><text x="400" y="75">5</text>
  </g>
  <path d="M96 40 Q 153 10 210 40" fill="none" stroke="#6ee7a8" stroke-width="2"/>
  <text x="153" y="12" font-size="11" fill="#6ee7a8" text-anchor="middle">+3 (opposite of -3)</text>
</svg>`,
      },
      { h: 'Orders of magnitude: how big is big?',
        body: String.raw`Ask which is larger, $8\,700\,000$ or $920\,000$, and most students count digits — correctly. That instinct, made explicit, is the idea of an **order of magnitude**: the power of ten nearest a number.

Comparing orders of magnitude beats comparing digits because it survives messy data. A bacterium is about $10^{-6}$ m; a person about $10^0$ m; the Earth about $10^7$ m. You do not need exact figures to know a person is roughly a million times a bacterium and ten-millionth of the planet.

This is the number sense that makes a wrong answer *feel* wrong. If a question asks for the mass of a water drop and your answer is 50 kg, no algebra check is needed — the order of magnitude is absurd. In chemistry you will meet $6.022\times10^{23}$ and in physics $3\times10^8$ m/s; a student without order-of-magnitude sense treats those as strings of digits, and loses the ability to sanity-check anything.`,
        example: { title: 'Order-of-magnitude check',
          q: 'A student computes the area of a football pitch as 6 800 000 m². Is that plausible?',
          solution: 'A pitch is roughly 100 m by 70 m, so about $10^2\\times10^2 = 10^4$ m² — around 7 000 m². The student is off by a factor of about 1000, which is exactly the signature of a misplaced decimal or a km/m mix-up.',
          moral: 'Estimate first, and an error of 1000× announces itself instantly.' },
      },
      { h: 'Mental arithmetic: reshape, then compute',
        body: String.raw`Fast mental arithmetic is not faster calculation — it is **choosing a friendlier form first**. Every technique below is one of the three laws (commutative, associative, distributive) used deliberately.

- **Compensate to a round number.** $47 + 38$: push 47 to 50 by borrowing 3, so $50 + 35 = 85$.
- **Distribute over a split.** $6\times23 = 6\times20 + 6\times3 = 120 + 18 = 138$.
- **Halve and double.** $25\times36 = 50\times18 = 100\times9 = 900$. The product is unchanged because you multiply by 2 and divide by 2.
- **Use difference of squares for near-neighbours.** $19\times21 = (20-1)(20+1) = 400 - 1 = 399$.
- **Reorder to pair friendly numbers.** $2\times17\times5 = (2\times5)\times17 = 170$.

None of these are tricks in the sense of magic; they are the field laws of arithmetic applied on purpose. Recognising them here is what makes algebra feel like a continuation rather than a new subject — in F1 Algebra you will do the identical moves with letters.`,
      },
      { h: 'Estimation as a discipline (and Fermi problems)',
        body: String.raw`Estimation deserves its own habit because it answers a different question from calculation. Calculation asks *what exactly*; estimation asks *roughly what, and is my exact answer sane*.

The professional version is the **Fermi problem**: get within an order of magnitude using only decomposition and rough figures. How many litres of water does your school use in a day? Break it down — number of people, uses per person, litres per use — estimate each factor loosely, multiply. Errors in the factors are as likely to be high as low, so they partly cancel, and the estimate lands surprisingly close.

Three rules keep estimates honest:

1. **Round to one significant figure before multiplying**, not after.
2. **Round in opposite directions** when you can (one factor up, one down) so errors offset.
3. **State the estimate before computing exactly**, then compare. If they disagree by a factor of 10, one of them is wrong — and you now know to look.`,
        example: { title: 'Fermi estimate',
          q: 'Roughly how many heartbeats does a 12-year-old have behind them?',
          solution: 'About 80 beats per minute; $60\\times24 \\approx 1400$ minutes a day, so roughly $80\\times1400 \\approx 10^5$ beats a day. Over 12 years, $10^5 \\times 365 \\times 12 \\approx 4\\times10^8$.',
          moral: 'A few hundred million — the point is the power of ten, not the digits.' },
      },
    ],
    formulas: ['Expanded form: 3407 = 3×10³ + 4×10² + 0×10¹ + 7×10⁰',
      'Absolute value: |x| = distance from 0 (direction discarded)',
      'a − (−b) = a + b;  (−a)×(−b) = +ab;  (−a)×b = −ab',
      'Order of magnitude of x ≈ the power of 10 nearest x',
      'Estimate: round each factor to 1 significant figure, then multiply'],
    summary: [
      'Place value gives every digit a value from its position; each place is 10× the next right.',
      'Negative means opposite direction from a chosen zero — that reading makes every sign rule follow.',
      '|x| is distance from zero; −8 < −3 even though 8 > 3.',
      'Order of magnitude (the nearest power of 10) is how you judge whether an answer is sane.',
      'Mental arithmetic = reshaping with the commutative, associative and distributive laws.',
      'Always estimate before computing; a 10× disagreement is a bug report.',
    ],
    mistakes: [
      '**"Multiplying by 10 adds a zero."** True only for whole numbers, and it fails the moment decimals appear: 2.5 × 10 = 25, not 2.50. **Fix:** think "shift one place left", which is right in every case.',
      '**Ordering negatives by size instead of position.** Writing −3 < −8 because 3 < 8. **Fix:** picture the line — further left is always smaller. Ask "which is further left?", never "which looks bigger?".',
      '**Losing a minus sign in subtraction chains.** 7 − (−3) computed as 4. **Fix:** rewrite every subtraction as adding the opposite (7 + 3) before you evaluate; the double negative then cannot hide.',
      '**Rounding after the calculation instead of before.** Multiplying 4-digit numbers exactly, then rounding, defeats the purpose of estimating and gives you no independent check. **Fix:** estimate first on a separate line, then compute, then compare the two.',
      '**Treating a big number as a string of digits.** Reading 6.022 × 10²³ without registering that it is astronomically large. **Fix:** always convert to a power of ten and compare against a known anchor (a million is 10⁶, a billion 10⁹).',
      '**Compensating in the wrong direction.** For 47 + 38, adding 3 to 47 *and* to 38. **Fix:** what you give one number you must take from the other — the total is what must stay fixed.',
    ],
    tricks: [
      '**Round to 1 significant figure, multiply, then count the zeros separately.** 380 × 21 ≈ 4 × 2 = 8, with 10² × 10¹ = 10³ → about 8000 (true value 7980).',
      '**Halve-and-double turns hard products into easy ones.** 25 × 36 → 50 × 18 → 100 × 9 = 900. Use whenever one factor is even and the other is near 25, 50 or 250.',
      '**Near-neighbour products via difference of squares.** 19 × 21 = 20² − 1² = 399; 48 × 52 = 50² − 2² = 2496.',
      '**Subtract by adding up.** For 1000 − 387, count up: 387 → 400 is 13, 400 → 1000 is 600, total 613. No borrowing, no errors.',
      '**Anchor every large number to a power of ten you know.** Population of India ≈ 10⁹; a school ≈ 10³ people; a lifetime ≈ 10⁹ seconds. Comparisons become one-step.',
      '**Sanity-check a division by multiplying back** — roughly, in your head. If 4823 ÷ 7 gave you 68, note 7 × 68 ≈ 480, not 4800, so a factor of 10 went missing.',
    ],
    memory: [
      '"Place tells value" — the digit is only half the information; where it sits is the other half.',
      '"Minus means opposite direction, not less than nothing." Debt, below sea level, cooling — all the same idea.',
      '"Further left is smaller" settles every negative-number comparison in one glance at the line.',
      '"Estimate, then calculate, then compare" — say it as a three-beat rhythm before any messy computation.',
      'Anchors worth memorising: 10³ = thousand, 10⁶ = million, 10⁹ = billion, 10⁻³ = milli, 10⁻⁶ = micro.',
      'Two negatives make a positive because "removing a debt" and "reversing a reversal" are the same move.',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'What is the value of the digit 4 in 3407?', answer: 400, tolerance: 0, explanation: 'The 4 sits in the hundreds place, so its value is 4 × 100 = 400.' },
      { lvl: 1, type: 'mcq', prompt: 'Which is smaller: −8 or −3?', choices: ['−8', '−3', 'they are equal', 'cannot be compared'], answer: 0, explanation: '−8 lies further left on the number line, so it is smaller — even though 8 > 3 in size.' },
      { lvl: 1, type: 'numeric', prompt: 'Compute 7 − (−3).', answer: 10, tolerance: 0, explanation: 'Subtracting a negative is adding the opposite: 7 + 3 = 10.' },
      { lvl: 1, type: 'numeric', prompt: 'What is 2.5 × 10?', answer: 25, tolerance: 0, explanation: 'Shift one place left. "Adding a zero" would wrongly give 2.50.' },
      { lvl: 2, type: 'numeric', prompt: 'Use halve-and-double to compute 25 × 36.', answer: 900, tolerance: 0, explanation: '25 × 36 = 50 × 18 = 100 × 9 = 900.' },
      { lvl: 2, type: 'numeric', prompt: 'Compute 19 × 21 using the difference of squares.', answer: 399, tolerance: 0, explanation: '(20 − 1)(20 + 1) = 20² − 1² = 400 − 1 = 399.' },
      { lvl: 2, type: 'mcq', prompt: 'Estimate 380 × 21 to one significant figure in each factor.', choices: ['about 8000', 'about 800', 'about 80 000', 'about 600'], answer: 0, explanation: '4 × 2 = 8 and 10² × 10¹ = 10³, so about 8000 (exact value 7980).' },
      { lvl: 2, type: 'numeric', prompt: 'What is |−12| + |5|?', answer: 17, tolerance: 0, explanation: 'Absolute value is distance from zero: 12 + 5 = 17.' },
      { lvl: 3, type: 'mcq', prompt: 'A pitch is about 100 m by 70 m. A student reports its area as 6 800 000 m². What is the most likely error?', choices: ['a factor of about 1000 — probably a km/m or decimal slip', 'a rounding error of a few percent', 'no error; the value is reasonable', 'the pitch was measured in feet'], answer: 0, explanation: 'The true area is about 10⁴ m² ≈ 7000 m². Being 1000× too large is the classic signature of a unit or decimal-place mistake.' },
      { lvl: 3, type: 'mcq', prompt: 'Roughly how many seconds are in a human lifetime of about 75 years?', choices: ['about 10⁹', 'about 10⁶', 'about 10¹²', 'about 10⁴'], answer: 0, explanation: 'A year is about 3 × 10⁷ s, so 75 years ≈ 2 × 10⁹ s — of the order of a billion seconds.' },
      { lvl: 3, type: 'numeric', prompt: 'A student computes 4823 ÷ 7 = 68. Multiplying back gives roughly 480, not 4800. What should the answer be, to the nearest whole number?', answer: 689, tolerance: 1, explanation: '7 × 689 = 4823. The check "multiply back, roughly" caught a missing factor of 10.' },
      { lvl: 3, type: 'mcq', prompt: 'Why must (−1) × (−2) equal +2?', choices: ['to keep the pattern 3×(−2)=−6, 2×(−2)=−4, 1×(−2)=−2, 0×(−2)=0 consistent', 'because two minus signs cancel visually', 'it is a convention with no justification', 'because −1 and −2 are both negative'], answer: 0, explanation: 'Each step down in the first factor adds 2 to the product. Continuing the pattern past zero forces (−1)×(−2) = +2 — the rule is required by consistency, not decreed.' },
    ],
  },

  // ==========================================================================
  'math.F1.fractions-decimals': {
    estMinutes: 240,
    hook: String.raw`**Fractions, decimals and division are not three topics — they are three notations for one idea.** $\tfrac{3}{4}$, $0.75$ and $3 \div 4$ are the same number wearing different clothes. Students who never fuse these three views spend years translating between them; students who do get percentages, ratio, probability and algebraic fractions almost free.`,
    sections: [
      { h: 'One idea, three notations',
        body: String.raw`A fraction $\dfrac{a}{b}$ answers a division question: *split $a$ into $b$ equal parts, how big is one part?* That is why the fraction bar and the division sign mean the same thing.

$$\frac{3}{4} = 3 \div 4 = 0.75$$

Each notation is best at something:

| Notation | Best for | Weak at |
|---|---|---|
| Fraction $\tfrac34$ | exactness, algebra, ratios | comparing at a glance |
| Decimal $0.75$ | comparing, measuring, calculators | exact thirds ($0.333\ldots$) |
| Division $3\div4$ | seeing where it came from | further computation |

Crucially, a fraction is a **single number with a position on the number line**, not a pair of numbers. $\tfrac34$ sits three-quarters of the way from 0 to 1. Students who read $\tfrac34$ as "3 and 4" produce the classic error $\tfrac12 + \tfrac13 = \tfrac25$; students who see one point on a line know instantly that the answer must be a bit more than $\tfrac12$, so $\tfrac25$ is impossible.`,
        svg: `<svg viewBox="0 0 420 96" role="img" aria-label="Number line from 0 to 1 marking three quarters" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="52" x2="390" y2="52" stroke="#6b7a99" stroke-width="2"/>
  <g font-size="11" fill="#9aa8c4" text-anchor="middle">
    <line x1="30" y1="46" x2="30" y2="58" stroke="#e6ecff" stroke-width="2"/><text x="30" y="74" fill="#e6ecff">0</text>
    <line x1="120" y1="47" x2="120" y2="57" stroke="#6b7a99"/><text x="120" y="74">1/4</text>
    <line x1="210" y1="47" x2="210" y2="57" stroke="#6b7a99"/><text x="210" y="74">1/2</text>
    <line x1="300" y1="47" x2="300" y2="57" stroke="#6b7a99"/><text x="300" y="74">3/4</text>
    <line x1="390" y1="46" x2="390" y2="58" stroke="#e6ecff" stroke-width="2"/><text x="390" y="74" fill="#e6ecff">1</text>
  </g>
  <circle cx="300" cy="52" r="5" fill="#6ee7a8"/>
  <text x="300" y="30" font-size="12" fill="#6ee7a8" text-anchor="middle">3/4 = 0.75</text>
</svg>`,
      },
      { h: 'Equivalent fractions: the same point, renamed',
        body: String.raw`Multiplying numerator and denominator by the same non-zero number does not change the value, because you are multiplying by $\tfrac{k}{k} = 1$:

$$\frac{3}{4} = \frac{3\times2}{4\times2} = \frac{6}{8} = \frac{75}{100} = 0.75$$

This single fact powers almost everything that follows:

- **Simplifying** is the same move run backwards — divide top and bottom by their HCF. $\tfrac{18}{24} = \tfrac{3}{4}$.
- **Comparing** fractions means renaming them to a common denominator so the parts are the same size: $\tfrac{5}{8}$ vs $\tfrac{2}{3}$ becomes $\tfrac{15}{24}$ vs $\tfrac{16}{24}$, so $\tfrac23$ is larger.
- **Percentages** are just the special case with denominator 100 — which is why percentages are so easy to compare.

Note what you may *not* do: adding the same number to top and bottom changes the value. $\tfrac{1}{2} \ne \tfrac{1+1}{2+1}$. Only multiplying and dividing preserve a ratio; that is a property of ratios you will meet again in the very next topic.`,
      },
      { h: 'Adding and subtracting: parts must be the same size',
        body: String.raw`You cannot add three quarters to two thirds any more than you can add three metres to two seconds — the units differ. The denominator *is* the unit. So the rule is not arbitrary: **rename to a common denominator, then add the counts.**

$$\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6}$$

Use the **LCM** of the denominators to keep numbers small (any common multiple works, but the product can get ugly: adding sixths and eighths via 48 rather than 24 doubles your arithmetic).

Before computing, **estimate**: $\tfrac12 + \tfrac13$ must lie between $\tfrac12$ and 1. That single sentence kills the $\tfrac25$ error permanently.`,
        formulas: ['a/b + c/d = (ad + bc)/(bd), then simplify',
          'Prefer the LCM of b and d to keep numbers small',
          'a/b = (a×k)/(b×k) for any k ≠ 0 — multiply/divide only, never add'],
      },
      { h: 'Multiplying and dividing: why "flip and multiply" is not magic',
        body: String.raw`**Multiplication** is straightforward — multiply across:

$$\frac{2}{3}\times\frac{4}{5} = \frac{8}{15}$$

The meaning is "of": $\tfrac23$ of $\tfrac45$. Notice that multiplying by a number below 1 makes things *smaller*, which contradicts the primary-school slogan "multiplication makes bigger". That slogan was only ever true for whole numbers above 1.

**Division** looks stranger until you ask the right question. $6 \div \tfrac12$ asks *how many halves fit into 6?* — twelve. Dividing by a half doubles. In general, dividing by $\tfrac{c}{d}$ asks how many $\tfrac{c}{d}$-sized pieces fit, and that is the same as multiplying by $\tfrac{d}{c}$:

$$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b}\times\frac{d}{c}$$

The formal reason: $\tfrac{d}{c}$ is the **reciprocal** of $\tfrac{c}{d}$ (their product is 1), and dividing by a number is multiplying by its reciprocal. Recognising this now means algebraic fractions later need no new rule.`,
        example: { title: 'Division by a fraction, read as a question',
          q: 'A 6 m ribbon is cut into pieces of length 3/4 m. How many pieces?',
          solution: '$6 \\div \\tfrac34 = 6 \\times \\tfrac43 = 8$ pieces. Reading it as "how many 3/4-metre pieces fit into 6 m?" makes the answer 8 obviously sensible — the pieces are shorter than a metre, so there must be more than 6 of them.',
          moral: 'Dividing by a number below 1 always increases the count.' },
      },
      { h: 'Decimals, place value and terminating vs recurring',
        body: String.raw`A decimal is place value continued past the ones: tenths, hundredths, thousandths. So $0.75 = \tfrac{7}{10} + \tfrac{5}{100} = \tfrac{75}{100} = \tfrac34$.

Which fractions give a **terminating** decimal? Only those whose denominator, in lowest terms, has no prime factors except 2 and 5 — because our base is $10 = 2\times5$. Hence $\tfrac{1}{8} = 0.125$ terminates ($8 = 2^3$) but $\tfrac{1}{3} = 0.333\ldots$ recurs, and $\tfrac{1}{6} = 0.1666\ldots$ recurs because of that stubborn factor 3.

Two practical consequences:

- **Rounding introduces error.** Writing $\tfrac13 \approx 0.33$ and using it repeatedly compounds the error. Keep exact fractions through the working; round once, at the end.
- **Comparing decimals is by place, not by length.** $0.7 > 0.65$ even though 65 looks bigger than 7 — align the decimal points and compare tenths first ($0.70$ vs $0.65$).`,
      },
    ],
    formulas: ['a/b = a ÷ b = the point a/b of the way from 0 to 1',
      'Equivalence: a/b = (ak)/(bk), k ≠ 0',
      'Add/subtract: rename to a common denominator, then add numerators',
      'Multiply: (a/b)×(c/d) = ac/bd',
      'Divide: (a/b) ÷ (c/d) = (a/b)×(d/c)  [multiply by the reciprocal]',
      'Terminates in decimal ⇔ denominator (lowest terms) has only factors 2 and 5'],
    examples: [
      { q: 'Compute 5/8 + 2/3 and check the answer is plausible.',
        solution: 'LCM(8, 3) = 24, so $\\tfrac{15}{24} + \\tfrac{16}{24} = \\tfrac{31}{24} = 1\\tfrac{7}{24}$. Plausibility: both fractions are near or above $\\tfrac12$, and $\\tfrac23 > \\tfrac58$, so a total just above 1 is exactly what we expect.' },
      { q: 'Which is larger, 5/8 or 2/3?',
        solution: 'Rename to 24ths: $\\tfrac{15}{24}$ vs $\\tfrac{16}{24}$, so $\\tfrac23$ is larger — by exactly $\\tfrac{1}{24}$. Cross-multiplication gives the same verdict faster: $5\\times3 = 15$ against $2\\times8 = 16$.' },
    ],
    summary: [
      'A fraction, a decimal and a division are one number in three notations — and one point on the number line.',
      'Equivalence comes from multiplying by k/k = 1; you may multiply or divide top and bottom, never add.',
      'Add and subtract only after renaming to a common denominator: the denominator is the unit.',
      'Multiplying by a number below 1 makes things smaller; "multiplication makes bigger" is false.',
      'Dividing by c/d means asking how many c/d fit — which is multiplying by the reciprocal d/c.',
      'A fraction terminates as a decimal exactly when its reduced denominator has only 2s and 5s.',
      'Estimate before you compute, and keep fractions exact until the final rounding.',
    ],
    mistakes: [
      '**Adding numerators and denominators:** writing 1/2 + 1/3 = 2/5. **Why it happens:** reading a fraction as two separate numbers. **Fix:** the denominator names the *size of the part* — you must make parts equal first. Estimate too: the answer must exceed 1/2, and 2/5 does not.',
      '**"Multiplication always makes bigger."** 2/3 × 4/5 = 8/15 is smaller than both. **Fix:** read × as "of". Two-thirds *of* something is less than that something whenever the multiplier is below 1.',
      '**Flipping the wrong fraction when dividing.** (a/b) ÷ (c/d) = (b/a)×(c/d) is wrong. **Fix:** only the *divisor* flips. Sanity-check with numbers you know: 6 ÷ 1/2 must be 12, not 3.',
      '**Comparing decimals by digit count.** Claiming 0.65 > 0.7 because 65 > 7. **Fix:** pad to the same number of places — 0.70 vs 0.65 — then compare place by place from the left.',
      '**Rounding early and reusing the rounded value.** Using 0.33 for 1/3 through a long calculation drifts noticeably. **Fix:** carry the exact fraction; round once at the very end.',
      '**Cancelling across a sum.** Writing (3 + 4)/3 = 4 by "cancelling the 3s". **Fix:** you may only cancel a factor of the *whole* numerator and denominator, never one term of a sum.',
    ],
    tricks: [
      '**Cross-multiply to compare two fractions instantly.** For a/b vs c/d, compare ad with bc. 5/8 vs 2/3 → 15 vs 16, so 2/3 wins. No common denominator needed.',
      '**Convert to a common denominator using the LCM, not the product**, to keep numbers small: sixths and eighths meet at 24, not 48.',
      '**Memorise the decimal equivalents of the small fractions** (1/2, 1/3, 1/4, 1/5, 1/8, 3/8, 5/8, 7/8, 1/20). Nearly every percentage question becomes mental arithmetic.',
      '**Simplify before multiplying, not after.** For (4/9)×(3/8), cancel 4 with 8 and 3 with 9 first to get (1/3)×(1/2) = 1/6 — far easier than reducing 12/72.',
      '**Read every division by a fraction as a "how many fit?" question.** It converts an abstract rule into a picture and tells you at once whether the answer should grow or shrink.',
      '**Check terminating vs recurring by factorising the denominator.** Only 2s and 5s terminate — so 1/40 terminates, 1/30 does not.',
    ],
    memory: [
      '"The denominator is the unit" — you can only add things measured in the same-size parts.',
      '"Multiply by the reciprocal" is remembered best as "how many of these fit into that?"',
      '"Only 2s and 5s terminate", because 10 = 2 × 5 is the base we write in.',
      '"Times and divide keep a fraction the same; plus and minus destroy it."',
      'Anchor decimals: 1/8 = 0.125, 1/4 = 0.25, 1/3 ≈ 0.333, 1/2 = 0.5, 5/8 = 0.625, 3/4 = 0.75.',
      'Before adding fractions, say the estimate out loud — "a bit more than a half" — then compute.',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'Which decimal equals 3/4?', choices: ['0.75', '0.34', '0.43', '1.33'], answer: 0, explanation: '3 ÷ 4 = 0.75.' },
      { lvl: 1, type: 'mcq', prompt: 'Simplify 18/24 to lowest terms.', choices: ['3/4', '9/12', '6/8', '2/3'], answer: 0, explanation: 'Divide top and bottom by the HCF, 6: 18/24 = 3/4.' },
      { lvl: 1, type: 'mcq', prompt: 'Which is larger, 0.7 or 0.65?', choices: ['0.7', '0.65', 'equal', 'cannot tell'], answer: 0, explanation: 'Pad to equal places: 0.70 vs 0.65. Compare tenths first — 7 > 6.' },
      { lvl: 1, type: 'numeric', prompt: 'Compute 6 ÷ 1/2.', answer: 12, tolerance: 0, explanation: 'How many halves fit into 6? Twelve. Equivalently 6 × 2 = 12.' },
      { lvl: 2, type: 'mcq', prompt: 'Compute 1/2 + 1/3.', choices: ['5/6', '2/5', '1/6', '3/5'], answer: 0, explanation: 'Common denominator 6: 3/6 + 2/6 = 5/6. Note 2/5 is impossible — the answer must exceed 1/2.' },
      { lvl: 2, type: 'mcq', prompt: 'Which is larger, 5/8 or 2/3?', choices: ['2/3', '5/8', 'equal', 'depends on the whole'], answer: 0, explanation: 'Cross-multiply: 5×3 = 15 vs 2×8 = 16. Since 16 > 15, 2/3 is larger.' },
      { lvl: 2, type: 'mcq', prompt: 'Compute (4/9) × (3/8), simplifying first.', choices: ['1/6', '12/72', '7/17', '3/2'], answer: 0, explanation: 'Cancel 4 with 8 and 3 with 9: (1/3)×(1/2) = 1/6.' },
      { lvl: 2, type: 'numeric', prompt: 'A 6 m ribbon is cut into 3/4 m pieces. How many pieces?', answer: 8, tolerance: 0, explanation: '6 ÷ 3/4 = 6 × 4/3 = 8.' },
      { lvl: 3, type: 'mcq', prompt: 'Which fraction has a terminating decimal expansion?', choices: ['1/40', '1/30', '1/7', '1/6'], answer: 0, explanation: '40 = 2³ × 5 has only the factors 2 and 5, so 1/40 = 0.025 terminates. The others carry a factor of 3 or 7.' },
      { lvl: 3, type: 'mcq', prompt: 'A student writes (3 + 4)/3 = 4 by "cancelling the 3s". What is the error?', choices: ['you may only cancel a factor of the whole numerator, not one term of a sum', 'the addition should have been done last', '3 + 4 is not 7', 'nothing is wrong'], answer: 0, explanation: 'Cancelling requires a common factor of the entire numerator and denominator. Here (3+4)/3 = 7/3, not 4.' },
      { lvl: 3, type: 'mcq', prompt: 'Compute 5/8 + 2/3.', choices: ['31/24', '7/11', '10/24', '16/24'], answer: 0, explanation: 'LCM(8,3) = 24: 15/24 + 16/24 = 31/24, i.e. 1 and 7/24 — just above 1, as expected.' },
      { lvl: 3, type: 'mcq', prompt: 'Why does multiplying numerator and denominator by the same k leave a fraction unchanged, while adding k does not?', choices: ['multiplying by k/k is multiplying by 1; adding k changes the ratio of the parts', 'because k cancels in addition too', 'it is a convention chosen for convenience', 'adding k is allowed if k is small'], answer: 0, explanation: 'k/k = 1 and multiplying by 1 changes nothing. Addition alters the relationship between numerator and denominator: 1/2 ≠ 2/3.' },
    ],
  },

  // ==========================================================================
  'math.F1.algebra-generalized-arithmetic': {
    estMinutes: 240,
    hook: String.raw`**Algebra is not a new subject — it is arithmetic with the numbers left unnamed.** Every law you already use ($a+b = b+a$, the distributive law, "do the same to both sides") stays exactly the same; the only change is that some numbers now wear letters because we do not yet know, or do not want to fix, their value. Seeing algebra this way removes most of the fear and nearly all of the sign errors.`,
    sections: [
      { h: 'What a letter actually means',
        body: String.raw`A letter in algebra plays one of three roles, and confusing them causes real trouble:

- **Unknown** — a specific number we have not found yet. In $2x + 3 = 11$, $x$ *is* 4; we simply have not solved it yet.
- **Variable** — a quantity that genuinely varies. In $C = 5n$ (cost of $n$ pens), $n$ ranges over many values.
- **Generalised number** — a stand-in for *any* number, used to state a law. In $a(b+c) = ab + ac$, the letters mean "this is true whatever you put in".

The third role is the reason algebra exists. Arithmetic can only say $3\times(4+5) = 3\times4 + 3\times5$. Algebra says it once, for every number at once.

One more piece of grammar: $3x$ means $3\times x$ (the multiplication sign is dropped because $\times$ looks like $x$), $x^2$ means $x\times x$, and $\tfrac{x}{2}$ means $x \div 2$. A **term** is a product of numbers and letters ($5xy$); an **expression** is terms joined by $+$ or $-$; an **equation** claims two expressions are equal.`,
      },
      { h: 'Substitution: the reality check',
        body: String.raw`Substitution — replacing a letter with a number — is the single most useful habit in algebra, because it turns any claim into something checkable.

Evaluate $3x^2 - 2x + 1$ at $x = 4$: $3(16) - 8 + 1 = 48 - 8 + 1 = 41$. Note the order: powers before multiplication before addition, and brackets around the substituted value so that $x = -2$ gives $3(-2)^2 = 12$, not $-12$.

Use substitution to **test any simplification you are unsure of.** Is $(x+3)^2$ equal to $x^2 + 9$? Put $x = 1$: the left is $16$, the right is $10$. Not equal — settled in five seconds, no theory required. This is how you catch nearly every algebra slip before it becomes a wrong answer.`,
        example: { title: 'Testing a suspicious identity',
          q: 'A student claims 2(x + 5) = 2x + 5. Check it.',
          solution: 'Substitute $x = 1$. Left: $2(6) = 12$. Right: $2 + 5 = 7$. They differ, so the claim is false. The distributive law requires multiplying *both* terms: $2(x+5) = 2x + 10$.',
          moral: 'One substitution decides any identity dispute.' },
      },
      { h: 'Collecting like terms',
        body: String.raw`**Like terms** have identical letter parts — same letters, same powers. Only like terms combine, and the reason is just the distributive law read backwards:

$$5x + 3x = (5+3)x = 8x$$

You are counting: five $x$s plus three $x$s is eight $x$s. But $5x + 3y$ cannot be collected, exactly as "five apples plus three oranges" is not eight of anything. Likewise $x$ and $x^2$ are unlike: $x + x^2$ stays as it is, because a length and an area are different kinds of thing.

Watch the sign attached to each term — the sign *belongs to* the term that follows it. In $7x - 3y - 2x + 5y$, group as $(7x - 2x) + (-3y + 5y) = 5x + 2y$.`,
        formulas: ['Like terms: same letters raised to the same powers',
          '5x + 3x = 8x;  5x + 3y stays as it is;  x + x² stays as it is',
          'The sign in front of a term belongs to that term'],
      },
      { h: 'The distributive law, forwards and backwards',
        body: String.raw`One law does most of the work in all of algebra:

$$a(b + c) = ab + ac$$

Read **forwards** it is *expanding*: $3(2x + 5) = 6x + 15$. Read **backwards** it is *factorising*: $6x + 15 = 3(2x + 5)$. Same law, two directions, and knowing which direction a problem needs is half of algebraic skill.

The dangerous case is a minus outside the bracket, because the sign distributes too:

$$5 - 2(x - 3) = 5 - 2x + 6 = 11 - 2x$$

The $-2$ multiplies *both* the $x$ and the $-3$, and $(-2)\times(-3) = +6$. Rushing this line is the single most common source of lost marks in F1 algebra. Substituting $x = 0$ checks it instantly: the original is $5 - 2(-3) = 11$, and so is the answer.`,
        example: { title: 'Expand and simplify',
          q: 'Simplify 4(2x − 1) − 3(x − 5).',
          solution: 'Expand each bracket, keeping the signs: $8x - 4$ and $-3x + 15$. Collect: $(8x - 3x) + (-4 + 15) = 5x + 11$. Check with $x = 1$: original is $4(1) - 3(-4) = 4 + 12 = 16$; answer is $5 + 11 = 16$. ✓' },
      },
      { h: 'Writing expressions from words — the real skill',
        body: String.raw`Most algebra marks are lost before any manipulation happens, in the translation from English to symbols. Work in three steps: **name the unknown, write the relationship, then simplify.**

| English | Algebra |
|---|---|
| 5 more than $n$ | $n + 5$ |
| 5 less than $n$ | $n - 5$ (not $5 - n$) |
| $n$ less than 5 | $5 - n$ |
| twice $n$, then add 3 | $2n + 3$ |
| add 3 to $n$, then double | $2(n + 3)$ |
| $n$ divided by 4 | $n/4$ |

The last two rows matter enormously: brackets record the *order* of operations, and the two expressions are genuinely different ($n=1$ gives 5 and 8).

Always define the letter in words first — "let $n$ = the number of pens" — because an undefined letter is where word problems go wrong. If a shirt costs $x$ and trousers cost 200 more, then trousers are $x + 200$ and the pair costs $2x + 200$.`,
      },
    ],
    formulas: ['a(b + c) = ab + ac  — expanding forwards, factorising backwards',
      'a + b = b + a;  ab = ba  (commutative)',
      '(a + b) + c = a + (b + c);  (ab)c = a(bc)  (associative)',
      'Collect like terms only: 5x + 3x = 8x, but 5x + 3y does not combine',
      '−a(b − c) = −ab + ac  — the sign distributes to every term'],
    summary: [
      'A letter is an unknown, a variable, or a generalised number — know which role it is playing.',
      'Substitution turns any algebraic claim into a checkable arithmetic one; use it constantly.',
      'Only like terms (same letters, same powers) collect, because collecting is counting.',
      'The distributive law forwards is expanding; backwards is factorising.',
      'A minus outside a bracket multiplies every term inside, sign included.',
      'Translate word problems by naming the unknown first, then writing the relationship.',
      'Brackets encode order: 2n + 3 and 2(n + 3) are different expressions.',
    ],
    mistakes: [
      '**Not distributing to every term:** 2(x + 5) = 2x + 5. **Why:** the eye stops after the first term. **Fix:** draw arrows from the multiplier to each term inside, and check with x = 1.',
      '**Sign errors after a minus sign:** 5 − 2(x − 3) = 5 − 2x − 6. **Fix:** (−2)×(−3) = +6, so the answer is 11 − 2x. Substitute x = 0 — the original gives 11, so any answer that does not is wrong.',
      '**Collecting unlike terms:** writing 5x + 3y = 8xy, or x + x² = x³. **Fix:** say it aloud with units — five apples and three oranges is not eight apple-oranges. Powers must match exactly.',
      '**Confusing 5 less than n with 5 − n.** **Fix:** "less than" reverses the order: 5 less than n is n − 5. Test with n = 10: five less than ten is 5, and 10 − 5 = 5. ✓',
      '**Squaring a sum term by term:** (x + 3)² = x² + 9. **Fix:** (x+3)² means (x+3)(x+3) = x² + 6x + 9. Substitute x = 1: 16 versus 10 exposes it at once.',
      '**Dropping the letter when the coefficient is 1:** simplifying x + 2x to 2x. **Fix:** x means 1x, so x + 2x = 3x. Write the invisible 1 when you are tired.',
    ],
    tricks: [
      '**Test every doubtful step by substituting a small number** (x = 1 or x = 2, avoiding 0 and 1 together since they hide errors). Faster and more reliable than re-reading the rule.',
      '**Box each term with its sign before collecting.** Treating "−3y" as one object rather than "3y with a minus floating nearby" eliminates most sign slips.',
      '**Expand brackets with arrows.** Physically drawing the two arrows from the multiplier prevents the "forgot the second term" error entirely.',
      '**Factor out the largest common factor first** — it usually makes the rest of the problem smaller: 12x + 18 = 6(2x + 3).',
      '**Define the letter in words before writing any equation.** "Let n = number of pens" costs five seconds and prevents the commonest word-problem failure.',
      '**Substitute 0 to check constant terms and 1 to check coefficients.** Two quick tests pin down most expansion errors.',
    ],
    memory: [
      '"Algebra is arithmetic with the numbers hidden" — every law you trust still holds.',
      '"The sign belongs to the term after it." Say it whenever you rearrange.',
      '"Multiply everything inside the bracket" — picture two arrows leaving the multiplier.',
      '"Like terms = same letters, same powers." Apples with apples.',
      '"Doubt it? Substitute." One number settles any identity argument.',
      '"2n + 3 doubles then adds; 2(n + 3) adds then doubles" — brackets record the order of the story.',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'Evaluate 3x + 2 when x = 5.', answer: 17, tolerance: 0, explanation: '3(5) + 2 = 15 + 2 = 17.' },
      { lvl: 1, type: 'mcq', prompt: 'Simplify 5x + 3x.', choices: ['8x', '8x²', '15x', '5x + 3x cannot be simplified'], answer: 0, explanation: 'Like terms count together: (5 + 3)x = 8x.' },
      { lvl: 1, type: 'mcq', prompt: 'Which expression means "5 less than n"?', choices: ['n − 5', '5 − n', '5n', 'n/5'], answer: 0, explanation: '"Less than" reverses the order. Test with n = 10: five less than ten is 5, and 10 − 5 = 5.' },
      { lvl: 1, type: 'mcq', prompt: 'Expand 3(2x + 5).', choices: ['6x + 15', '6x + 5', '5x + 15', '6x + 8'], answer: 0, explanation: 'Multiply both terms: 3×2x = 6x and 3×5 = 15.' },
      { lvl: 2, type: 'mcq', prompt: 'Simplify 5 − 2(x − 3).', choices: ['11 − 2x', '−2x − 1', '2x − 1', '11 + 2x'], answer: 0, explanation: '−2 times −3 is +6, so 5 − 2x + 6 = 11 − 2x.' },
      { lvl: 2, type: 'mcq', prompt: 'Simplify 7x − 3y − 2x + 5y.', choices: ['5x + 2y', '5x − 2y', '9x + 2y', '5xy'], answer: 0, explanation: 'Group like terms: (7x − 2x) + (−3y + 5y) = 5x + 2y.' },
      { lvl: 2, type: 'numeric', prompt: 'Evaluate 3x² − 2x + 1 when x = 4.', answer: 41, tolerance: 0, explanation: '3(16) − 8 + 1 = 48 − 8 + 1 = 41.' },
      { lvl: 2, type: 'mcq', prompt: 'Factorise 12x + 18 completely.', choices: ['6(2x + 3)', '3(4x + 6)', '2(6x + 9)', '6(2x + 18)'], answer: 0, explanation: 'The highest common factor is 6, leaving 2x + 3 which has no further common factor.' },
      { lvl: 3, type: 'mcq', prompt: 'Simplify 4(2x − 1) − 3(x − 5).', choices: ['5x + 11', '5x − 19', '11x + 11', '5x + 1'], answer: 0, explanation: '8x − 4 − 3x + 15 = 5x + 11. Check at x = 1: original 4 + 12 = 16; answer 5 + 11 = 16. ✓' },
      { lvl: 3, type: 'mcq', prompt: 'A student writes (x + 3)² = x² + 9. Which substitution most quickly disproves it?', choices: ['x = 1, giving 16 versus 10', 'x = 0, giving 9 versus 9', 'x = −3, giving 0 versus 18', 'no substitution can disprove it'], answer: 0, explanation: 'x = 0 accidentally agrees, so it is a poor test. x = 1 gives 16 on the left and 10 on the right, exposing the missing 6x.' },
      { lvl: 3, type: 'mcq', prompt: 'A shirt costs ₹x and trousers cost ₹200 more. What is the total cost of one of each?', choices: ['2x + 200', 'x + 200', '2x', '2(x + 200)'], answer: 0, explanation: 'Trousers cost x + 200, so the pair costs x + (x + 200) = 2x + 200.' },
      { lvl: 3, type: 'mcq', prompt: 'Why are "twice n then add 3" and "add 3 to n then double" different?', choices: ['brackets record order: 2n + 3 versus 2(n + 3), which differ by 3', 'they are actually the same expression', 'because n could be negative', 'because doubling is not commutative'], answer: 0, explanation: '2(n + 3) = 2n + 6, which exceeds 2n + 3 by 3 for every n. At n = 1 they give 5 and 8.' },
    ],
  },

  // ==========================================================================
  'math.F1.linear-equations-one-variable': {
    estMinutes: 240,
    hook: String.raw`**An equation is a balance, and solving one is a sequence of moves that keeps it balanced.** That single image explains every step you will ever take: whatever you do to one side you must do to the other. Master it here on linear equations and the same logic carries you through simultaneous equations, rearranging physics formulas, and chemistry's concentration calculations.`,
    sections: [
      { h: 'What an equation claims — and what solving means',
        body: String.raw`An **expression** ($2x + 3$) is a recipe. An **equation** ($2x + 3 = 11$) is a *claim*: these two recipes produce the same number. **Solving** means finding every value of the letter that makes the claim true.

That definition gives you a free check: substitute your answer back. If $x = 4$, then $2(4) + 3 = 11$. ✓ A solved equation is one you have verified, not merely one you have finished writing.

Three outcomes are possible, and students who only ever meet the first are baffled by the others:

- **Exactly one solution:** $2x + 3 = 11 \Rightarrow x = 4$.
- **No solution:** $x + 1 = x + 2$ simplifies to $1 = 2$, false for every $x$.
- **Infinitely many:** $2(x + 1) = 2x + 2$ simplifies to $0 = 0$, true for every $x$ — an *identity*, not really an equation to solve.`,
      },
      { h: 'The balance model',
        body: String.raw`Picture a pair of scales holding $2x + 3$ on the left and $11$ on the right, level. Any operation applied to **both** pans keeps it level:

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

Work outside-in, the reverse of the order of operations: in $2x + 3$ the last thing done to $x$ was "add 3", so that is the first thing you undo.`,
        svg: `<svg viewBox="0 0 400 140" role="img" aria-label="Balance scale showing 2x plus 3 equals 11" xmlns="http://www.w3.org/2000/svg">
  <line x1="60" y1="42" x2="340" y2="42" stroke="#6b7a99" stroke-width="3"/>
  <polygon points="200,42 186,104 214,104" fill="#6b7a99"/>
  <rect x="82" y="52" width="110" height="34" rx="6" fill="#6366f1"/>
  <text x="137" y="74" font-size="14" fill="#fff" text-anchor="middle">2x + 3</text>
  <rect x="220" y="52" width="110" height="34" rx="6" fill="#6ee7a8"/>
  <text x="275" y="74" font-size="14" fill="#0b1020" text-anchor="middle">11</text>
  <text x="200" y="128" font-size="11" fill="#9aa8c4" text-anchor="middle">do the same to both pans and it stays level</text>
</svg>`,
      },
      { h: 'The standard procedure',
        body: String.raw`For any linear equation, in order:

1. **Clear fractions** by multiplying every term by the LCM of the denominators.
2. **Expand brackets.**
3. **Collect the letter terms on one side, numbers on the other.** Move whichever keeps the coefficient positive — it prevents sign errors.
4. **Divide by the coefficient.**
5. **Check by substituting back.**

Watch step 1 carefully, because "every term" means *every* term:

$$\frac{x}{3} + \frac{x-1}{2} = 4 \;\;\xrightarrow{\times 6}\;\; 2x + 3(x-1) = 24$$

The 4 on the right becomes 24. Forgetting that is the classic fraction-clearing error. Note also the bracket around $x - 1$: multiplying $\tfrac{x-1}{2}$ by 6 gives $3(x-1)$, not $3x - 1$.`,
        example: { title: 'Letters on both sides',
          q: 'Solve 5x − 3 = 2x + 9.',
          solution: 'Subtract $2x$ from both sides: $3x - 3 = 9$. Add 3: $3x = 12$. Divide by 3: $x = 4$. Check: left $= 5(4) - 3 = 17$; right $= 2(4) + 9 = 17$. ✓',
          moral: 'Moving the smaller letter term keeps the coefficient positive.' },
      },
      { h: 'Equations with fractions and brackets',
        body: String.raw`Solve $\dfrac{x}{3} + \dfrac{x-1}{2} = 4$.

Multiply every term by $\mathrm{LCM}(3,2) = 6$:

$$2x + 3(x-1) = 24$$

Expand: $2x + 3x - 3 = 24$, so $5x = 27$ and $x = \tfrac{27}{5} = 5.4$.

Check: $\tfrac{5.4}{3} = 1.8$ and $\tfrac{4.4}{2} = 2.2$; $1.8 + 2.2 = 4$. ✓

**A non-integer answer is not a mistake.** Real problems rarely produce whole numbers, and the check is what tells you whether $\tfrac{27}{5}$ is right — not whether it looks tidy.`,
      },
      { h: 'Modelling word problems',
        body: String.raw`Linear equations earn their keep on word problems. The reliable procedure:

1. **Name the unknown in words**, then assign a letter: "let $n$ = the number of ₹5 coins".
2. **Express every other quantity in terms of that letter.**
3. **Find the sentence that states an equality** — usually a total, a "same as", or a "how long until".
4. Solve, then **answer the question actually asked** (often not the letter itself).

*Example.* A father is 30 years older than his son. In 5 years he will be three times as old. How old is the son now?

Let $s$ = son's age now, so father is $s + 30$. In 5 years: son $s + 5$, father $s + 35$. The condition:

$$s + 35 = 3(s + 5) \Rightarrow s + 35 = 3s + 15 \Rightarrow 20 = 2s \Rightarrow s = 10.$$

Son is 10, father is 40. Check: in 5 years they are 15 and 45, and $45 = 3\times15$. ✓ Notice how the check uses the *original words*, not the algebra — that is what catches a mis-translated sentence.`,
        example: { title: 'Consecutive-number problem',
          q: 'The sum of three consecutive integers is 72. Find them.',
          solution: 'Let the middle number be $n$; the three are $n-1$, $n$, $n+1$. Their sum is $3n = 72$, so $n = 24$ and the integers are 23, 24, 25.',
          moral: 'Naming the *middle* term rather than the first makes the algebra collapse — choosing the unknown well is part of the skill.' },
      },
    ],
    formulas: ['Balance rule: any operation applied to both sides preserves equality',
      'Undo outside-in: reverse the order of operations',
      'Clear fractions by multiplying EVERY term by the LCM of denominators',
      'ax + b = c  ⇒  x = (c − b)/a',
      'No solution ⇒ a false statement like 1 = 2; infinitely many ⇒ 0 = 0'],
    summary: [
      'An equation claims two expressions are equal; solving finds the values making it true.',
      'The balance model — do the same to both sides — justifies every legitimate step.',
      'Undo operations outside-in, the reverse of the order of operations.',
      'Clear fractions by multiplying every term (including the constant) by the LCM.',
      'Collect letters on the side that keeps the coefficient positive.',
      'Always substitute back — and for word problems, check against the original sentence.',
      'Contradictions mean no solution; identities mean infinitely many.',
    ],
    mistakes: [
      '**Operating on one side only.** Subtracting 3 from the left but not the right. **Fix:** write the operation in the margin of the line ("−3 both sides") so it is visibly applied twice.',
      '**Forgetting a term when clearing fractions.** Multiplying x/3 + (x−1)/2 = 4 by 6 and leaving the 4 unchanged. **Fix:** number every term first, then multiply each in turn — including the constant.',
      '**Dropping the bracket when multiplying a fractional numerator.** Turning 6 × (x−1)/2 into 3x − 1 instead of 3(x−1) = 3x − 3. **Fix:** always write the bracket, then expand as a separate step.',
      '**Sign errors when moving terms across.** From 5x − 3 = 2x + 9 writing 5x + 2x = 9 − 3. **Fix:** state it as subtracting 2x from both sides rather than "taking it across"; the shorthand is what hides the sign.',
      '**Dividing by the coefficient too early**, before collecting like terms, which produces fractions unnecessarily. **Fix:** division is the last step, after the letter appears only once.',
      '**Answering the letter instead of the question.** Solving for n = number of coins and reporting n when the question asked for the total value. **Fix:** underline the question, and re-read it after solving.',
      '**Assuming a non-integer answer means an error.** x = 27/5 is a perfectly good solution. **Fix:** let the substitution check decide, not the tidiness of the number.',
    ],
    tricks: [
      '**Move the smaller letter term** so the coefficient stays positive: from 3 − 2x = 5x + 10, add 2x to both sides rather than subtracting 5x.',
      '**Clear fractions immediately** — an equation without denominators is far less error-prone than one you carry fractions through.',
      '**Substitute your answer back before writing the final line.** It costs ten seconds and converts a guess into a certainty.',
      '**For consecutive-number problems, let the middle value be n.** The outer terms cancel and the algebra becomes trivial.',
      '**For age problems, build a small table** of "now" and "in k years" for each person. The equation then reads straight off the table.',
      '**If the letter vanishes, read the leftover statement.** 0 = 0 means every value works; 1 = 2 means none does. Neither is a mistake in your working.',
    ],
    memory: [
      '"Whatever you do to one side, do to the other" — the balance never lies.',
      '"Undo in reverse order" — last operation applied is the first one removed.',
      '"Multiply EVERY term" when clearing fractions; the constant is a term too.',
      '"Keep the coefficient positive" by moving the smaller letter term.',
      '"Check by substitution" — an unchecked solution is only a proposal.',
      '"Letter vanishes? Read what is left." 0 = 0 all, 1 = 2 none.',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'Solve 2x + 3 = 11.', answer: 4, tolerance: 0, explanation: 'Subtract 3 from both sides: 2x = 8. Divide by 2: x = 4.' },
      { lvl: 1, type: 'numeric', prompt: 'Solve x − 7 = 2.', answer: 9, tolerance: 0, explanation: 'Add 7 to both sides: x = 9.' },
      { lvl: 1, type: 'numeric', prompt: 'Solve x/4 = 5.', answer: 20, tolerance: 0, explanation: 'Multiply both sides by 4: x = 20.' },
      { lvl: 1, type: 'mcq', prompt: 'Which operation undoes "multiply by 3"?', choices: ['divide by 3', 'subtract 3', 'add 3', 'multiply by −3'], answer: 0, explanation: 'Division is the inverse of multiplication.' },
      { lvl: 2, type: 'numeric', prompt: 'Solve 5x − 3 = 2x + 9.', answer: 4, tolerance: 0, explanation: 'Subtract 2x: 3x − 3 = 9. Add 3: 3x = 12. So x = 4.' },
      { lvl: 2, type: 'numeric', prompt: 'Solve 3(x − 2) = 12.', answer: 6, tolerance: 0, explanation: 'Expand: 3x − 6 = 12, so 3x = 18 and x = 6. (Or divide by 3 first: x − 2 = 4.)' },
      { lvl: 2, type: 'numeric', prompt: 'The sum of three consecutive integers is 72. What is the smallest?', answer: 23, tolerance: 0, explanation: 'Let the middle be n: 3n = 72, n = 24, so the integers are 23, 24, 25.' },
      { lvl: 2, type: 'numeric', prompt: 'Solve 4 − 2x = 10.', answer: -3, tolerance: 0, explanation: 'Subtract 4: −2x = 6. Divide by −2: x = −3.' },
      { lvl: 3, type: 'numeric', prompt: 'Solve x/3 + (x − 1)/2 = 4. Give your answer as a decimal.', answer: 5.4, tolerance: 0.01, explanation: 'Multiply every term by 6: 2x + 3(x − 1) = 24, so 5x − 3 = 24, 5x = 27, x = 5.4.' },
      { lvl: 3, type: 'numeric', prompt: 'A father is 30 years older than his son. In 5 years he will be three times as old. How old is the son now?', answer: 10, tolerance: 0, explanation: 'Let s be the son now: s + 35 = 3(s + 5) gives 20 = 2s, so s = 10 (father 40; in 5 years 15 and 45).' },
      { lvl: 3, type: 'mcq', prompt: 'Solving an equation leads to the statement 1 = 2. What does this mean?', choices: ['the equation has no solution', 'the solution is x = 1', 'every value of x works', 'an arithmetic error must have occurred'], answer: 0, explanation: 'A false numeric statement with the letter eliminated means no value of x can satisfy the original equation.' },
      { lvl: 3, type: 'mcq', prompt: 'Multiplying x/3 + (x − 1)/2 = 4 by 6, which line is correct?', choices: ['2x + 3(x − 1) = 24', '2x + 3x − 1 = 24', '2x + 3(x − 1) = 4', '2x + 3x − 1 = 4'], answer: 0, explanation: 'Every term is multiplied — including the 4, which becomes 24 — and the numerator x − 1 keeps its bracket.' },
    ],
  },

  // ==========================================================================
  'math.F1.geometry-angles-triangles': {
    estMinutes: 240,
    hook: String.raw`**Geometry is where mathematics learns to argue.** Up to now you have computed; here you begin to *justify* — every angle you find comes with a reason, and every reason is a named fact. That habit ("claim, then reason") is the same habit that later powers formal proof, physics derivations and debugging code. Angles and triangles are the training ground.`,
    sections: [
      { h: 'Angles: turning, not size on the page',
        body: String.raw`An angle measures **turn between two directions**, not the length of the arms drawn. Two angles with short arms and long arms can be identical. A full turn is $360°$, a straight line $180°$, a right angle $90°$.

The names carry information: **acute** ($<90°$), **right** ($=90°$), **obtuse** (between $90°$ and $180°$), **straight** ($180°$), **reflex** ($>180°$).

Four facts do most of the work, and each has a one-line reason:

- **Angles on a straight line sum to $180°$** — half a full turn.
- **Angles around a point sum to $360°$** — one full turn.
- **Vertically opposite angles are equal** — each is $180°$ minus the same adjacent angle.
- **Complementary** angles sum to $90°$; **supplementary** angles sum to $180°$.

The third one is worth deriving once yourself: if two lines cross making angles $a$ and $b$ adjacent, then $a + b = 180°$ on the line, and $b + c = 180°$ on the other line, so $a = c$. That is a proof — two facts and one deduction.`,
      },
      { h: 'Parallel lines and the transversal',
        body: String.raw`When a **transversal** cuts two parallel lines, eight angles appear but only two distinct values. Learn the three relationships by their shapes:

- **Corresponding** angles (F-shape) are **equal**.
- **Alternate** angles (Z-shape) are **equal**.
- **Co-interior / allied** angles (C- or U-shape) are **supplementary** — they sum to $180°$.

The essential caution: these hold **only if the lines are genuinely parallel.** In an exam figure, parallelism is given by arrow marks or stated in words — never assumed because it looks that way.

Used in reverse, the same facts *prove* lines are parallel: if a pair of alternate angles is equal, the lines must be parallel. That reversibility (a fact and its converse) is your first taste of the logical structure that dominates I1 geometry.`,
        svg: `<svg viewBox="0 0 380 170" role="img" aria-label="Two parallel lines cut by a transversal showing corresponding angles" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="55" x2="350" y2="55" stroke="#6b7a99" stroke-width="2"/>
  <line x1="30" y1="120" x2="350" y2="120" stroke="#6b7a99" stroke-width="2"/>
  <line x1="90" y1="20" x2="290" y2="155" stroke="#6366f1" stroke-width="2"/>
  <polygon points="180,50 190,55 180,60" fill="#9aa8c4"/>
  <polygon points="180,115 190,120 180,125" fill="#9aa8c4"/>
  <text x="152" y="46" font-size="13" fill="#6ee7a8">a</text>
  <text x="196" y="112" font-size="13" fill="#6ee7a8">a</text>
  <text x="200" y="165" font-size="11" fill="#9aa8c4" text-anchor="middle">corresponding angles (F-shape) are equal</text>
</svg>`,
      },
      { h: 'The angle sum of a triangle — and why it is 180°',
        body: String.raw`**Every triangle's angles sum to $180°$.** Do not merely accept it; the proof takes one line and uses the parallel facts above.

Draw a line through one vertex parallel to the opposite side. The two outer angles at that vertex equal the two base angles (alternate angles, Z-shape), and together with the vertex angle they form a straight line. Hence the three triangle angles sum to $180°$.

Two immediate consequences:

- **Exterior angle theorem:** an exterior angle equals the sum of the two opposite interior angles. (Because both equal $180°$ minus the adjacent interior angle.) This shortcut saves a step in countless problems.
- A triangle can have **at most one** angle of $90°$ or more — two would already reach $180°$ with nothing left.

Triangles classify two ways, and the classifications interact. By sides: **equilateral** (all equal, so all angles $60°$), **isosceles** (two equal sides, and the angles opposite them are equal), **scalene** (all different). By angles: **acute**, **right**, **obtuse**. The isosceles fact — *equal sides face equal angles* — is the one that appears most often in problems.`,
        formulas: ['Angles on a straight line: 180°;  around a point: 360°',
          'Vertically opposite angles are equal',
          'Parallel lines: corresponding equal, alternate equal, co-interior sum to 180°',
          'Triangle angle sum = 180°',
          'Exterior angle = sum of the two opposite interior angles',
          'Isosceles: equal sides ⇔ equal opposite angles'],
      },
      { h: 'Congruence: when are two triangles the same?',
        body: String.raw`Two figures are **congruent** if one can be moved onto the other exactly — same shape, same size. For triangles you never need to check all six measurements (3 sides, 3 angles); four minimal sets suffice:

| Rule | Means | Why it works |
|---|---|---|
| **SSS** | three sides equal | three side lengths lock the shape rigidly |
| **SAS** | two sides and the angle *between* them | the included angle fixes the third side |
| **ASA** (or AAS) | two angles and a corresponding side | third angle follows from the 180° sum |
| **RHS** | right angle, hypotenuse, one side | Pythagoras fixes the remaining side |

Two near-misses matter as much as the rules:

- **AAA is not congruence.** Equal angles give the same *shape* but any size — that is **similarity**, the subject of F2 Geometry II, and it is what makes scale drawings work.
- **SSA is not reliable.** Two sides and a *non-included* angle can produce two genuinely different triangles (the "ambiguous case"). The angle must sit between the two sides.

Congruence matters because it is how you prove things *equal without measuring them* — the first genuinely deductive tool in your kit.`,
        example: { title: 'Reasoned angle chase',
          q: 'In triangle ABC, angle A = 50° and angle B = 60°. The side BC is extended to D. Find angle ACD.',
          solution: 'Angle C $= 180° - 50° - 60° = 70°$ (angle sum of a triangle). Angle ACD is exterior at C, so it equals $180° - 70° = 110°$ (angles on a straight line). Check with the exterior-angle theorem: $50° + 60° = 110°$. ✓',
          moral: 'Two routes agreeing is the geometric version of substituting back.' },
      },
      { h: 'Writing a reason for every step',
        body: String.raw`In geometry, an answer without a reason is worth very little — and, more importantly, a reason is what stops you from guessing wrong. Adopt the two-column habit:

| Statement | Reason |
|---|---|
| $\angle ABD = 65°$ | alternate angles, $AB \parallel CD$ |
| $\angle BDC = 65°$ | vertically opposite angles |
| $\angle DBC = 50°$ | angle sum of triangle $BDC$ |

Three rules for the reasoning itself:

1. **Never assume from the picture.** Diagrams are not to scale; lines that look equal or parallel may not be. Use only what is marked or stated.
2. **Mark the diagram as you go** — tick marks for equal sides, arcs for equal angles. Half of geometry is bookkeeping.
3. **Name the fact you used**, in the standard words. "Because it looks right" is not a reason; "co-interior angles, $AB \parallel CD$" is.`,
      },
    ],
    formulas: ['Straight line 180°;  point 360°;  triangle 180°;  quadrilateral 360°',
      'Vertically opposite angles equal',
      'Parallel: corresponding =, alternate =, co-interior sum 180°',
      'Exterior angle = sum of opposite interior angles',
      'Congruence: SSS, SAS, ASA/AAS, RHS  (NOT AAA, NOT SSA)',
      'Equilateral ⇒ every angle 60°;  isosceles ⇒ base angles equal'],
    summary: [
      'An angle measures turn; arm length on the page is irrelevant.',
      'Line 180°, point 360°, vertically opposite equal — with a reason for each.',
      'Parallel lines give corresponding and alternate angles equal, co-interior supplementary — but only when parallelism is given.',
      'Triangle angles sum to 180°, provable in one line from the parallel facts.',
      'Exterior angle = sum of the two opposite interior angles.',
      'Congruence: SSS, SAS, ASA/AAS, RHS. AAA gives similarity, not congruence; SSA is ambiguous.',
      'Every step needs a named reason, and nothing may be assumed from the picture.',
    ],
    mistakes: [
      '**Assuming lines are parallel because they look it.** Parallel-line rules then produce confidently wrong answers. **Fix:** use the rules only when arrows mark the lines or the text states it.',
      '**Using AAA as a congruence rule.** Equal angles fix shape, not size — a photo enlargement has identical angles. **Fix:** AAA proves *similarity*; for congruence you need at least one side.',
      '**Applying SAS with a non-included angle.** SSA can describe two different triangles. **Fix:** check the angle lies *between* the two known sides before quoting SAS.',
      '**Confusing complementary (90°) with supplementary (180°).** **Fix:** C comes before S in the alphabet, and 90 before 180 — Complementary is the smaller pair.',
      '**Assuming a triangle is isosceles from the diagram.** **Fix:** equal sides must be marked with tick marks or stated; otherwise you may not use equal base angles.',
      '**Giving an answer with no reason.** Even when the number is right, the method is unverifiable and marks are lost. **Fix:** write the named fact beside every line.',
      '**Forgetting that an exterior angle needs the two *opposite* interior angles**, not any two. **Fix:** the two that are not adjacent to it — check against the 180° route.',
    ],
    tricks: [
      '**Chase angles by marking the diagram as you deduce.** Each new value unlocks neighbours; the figure becomes your working.',
      '**Use the exterior-angle theorem to skip a step:** rather than finding the third angle and subtracting from 180°, add the two opposite interior angles directly.',
      '**Recognise the letter shapes** for parallel lines: F = corresponding (equal), Z = alternate (equal), C/U = co-interior (sum 180°).',
      '**In an isosceles triangle, find the apex angle first**, then the base angles are (180° − apex)/2 — one subtraction and one halving.',
      '**Verify by a second route.** If two independent chains give the same angle, you are almost certainly right; if not, you have found your error for free.',
      '**Look for the triangle whenever you are stuck.** Most angle problems reduce to spotting a triangle or a straight line you had not noticed.',
    ],
    memory: [
      '"Line 180, point 360, triangle 180" — the three sums that start almost every problem.',
      '"F equal, Z equal, C supplementary" for the parallel-line trio.',
      '"Equal sides face equal angles" — the isosceles fact, in five words.',
      '"AAA is a photocopy" — same shape, any size, so similarity not congruence.',
      '"The angle must sit between the sides" for SAS to be valid.',
      '"Claim, then reason" — never write an angle without the fact that produced it.',
    ],
    quiz: [
      { lvl: 1, type: 'numeric', prompt: 'Two angles on a straight line: one is 115°. What is the other, in degrees?', answer: 65, tolerance: 0, explanation: 'Angles on a straight line sum to 180°, so 180 − 115 = 65.' },
      { lvl: 1, type: 'numeric', prompt: 'A triangle has angles 50° and 60°. What is the third angle, in degrees?', answer: 70, tolerance: 0, explanation: 'The angle sum is 180°: 180 − 50 − 60 = 70.' },
      { lvl: 1, type: 'numeric', prompt: 'Each angle of an equilateral triangle is how many degrees?', answer: 60, tolerance: 0, explanation: 'All three angles are equal and sum to 180°, so each is 60°.' },
      { lvl: 1, type: 'mcq', prompt: 'Vertically opposite angles are:', choices: ['equal', 'supplementary', 'complementary', 'unrelated'], answer: 0, explanation: 'Each is 180° minus the same adjacent angle, so they are equal.' },
      { lvl: 2, type: 'numeric', prompt: 'A transversal cuts two parallel lines. A co-interior angle is 108°. What is the other co-interior angle, in degrees?', answer: 72, tolerance: 0, explanation: 'Co-interior (allied) angles are supplementary: 180 − 108 = 72.' },
      { lvl: 2, type: 'numeric', prompt: 'In triangle ABC, angle A = 50° and angle B = 60°. BC is extended to D. Find angle ACD, in degrees.', answer: 110, tolerance: 0, explanation: 'Exterior angle = sum of the two opposite interior angles = 50 + 60 = 110°.' },
      { lvl: 2, type: 'numeric', prompt: 'An isosceles triangle has an apex angle of 40°. What is each base angle, in degrees?', answer: 70, tolerance: 0, explanation: '(180 − 40)/2 = 70° each, since equal sides face equal angles.' },
      { lvl: 2, type: 'mcq', prompt: 'Which set of information does NOT prove two triangles congruent?', choices: ['AAA', 'SSS', 'SAS', 'RHS'], answer: 0, explanation: 'AAA fixes shape but not size — that is similarity. Congruence needs at least one side.' },
      { lvl: 3, type: 'mcq', prompt: 'Why is SSA unreliable as a congruence rule?', choices: ['two different triangles can satisfy the same two sides and non-included angle', 'it uses too few measurements', 'it only works for right-angled triangles', 'it is actually reliable'], answer: 0, explanation: 'This is the ambiguous case: the unknown side can swing to two positions. The angle must be included between the two sides.' },
      { lvl: 3, type: 'mcq', prompt: 'A diagram shows two lines that appear parallel but carry no arrow marks. May you use alternate angles?', choices: ['no — parallelism must be given or proved first', 'yes, if they look parallel', 'yes, all lines in a figure are parallel unless stated', 'only for acute angles'], answer: 0, explanation: 'Diagrams are not to scale. Parallel-line rules require parallelism to be marked, stated, or previously proved.' },
      { lvl: 3, type: 'numeric', prompt: 'A triangle has angles in the ratio 2 : 3 : 4. What is the largest angle, in degrees?', answer: 80, tolerance: 0, explanation: 'Total parts 2+3+4 = 9; one part = 180/9 = 20°. The largest is 4 × 20 = 80°.' },
      { lvl: 3, type: 'mcq', prompt: 'How is "the angles of a triangle sum to 180°" proved from the parallel-line facts?', choices: ['draw a line through one vertex parallel to the opposite side; the two outer angles equal the base angles (alternate), and the three form a straight line', 'by measuring many triangles with a protractor', 'it is an axiom and cannot be proved', 'by the exterior angle theorem alone'], answer: 0, explanation: 'The parallel construction turns the three interior angles into three angles on a straight line, which sum to 180°.' },
    ],
  },

  // ==========================================================================
  'math.F1.data-graphs-i': {
    estMinutes: 210,
    hook: String.raw`**Every graph is an argument, and some arguments are dishonest.** Learning to draw charts is the easy half; learning to *read* them sceptically — checking whether the axis starts at zero, whether the categories are complete, whether the picture matches the numbers — is the half that protects you for life. This is also your first statistics topic: the vocabulary here returns in F2 Probability & Statistics and in every science practical you will do.`,
    sections: [
      { h: 'Data has types, and the type picks the chart',
        body: String.raw`Before choosing a chart, classify the data:

- **Categorical** — labels with no numeric order: favourite subject, blood group, country.
- **Discrete numerical** — countable values: number of siblings, goals scored. You can have 2 or 3, never 2.4.
- **Continuous numerical** — any value in a range: height, mass, time. Limited only by measuring precision.

The type determines the chart, and mismatching them is the commonest presentational error:

| Data | Right chart | Why |
|---|---|---|
| Categorical | bar chart, pictograph | separate bars = separate categories |
| Discrete | bar chart (gaps) | values are isolated points |
| Continuous over time | line graph | the line asserts values *between* the points |
| Parts of one whole | pie chart | angles sum to a full turn |

A line graph between categories is meaningless — there is no "halfway between Physics and Hindi". Conversely, using bars for a continuous time series hides the trend the reader needs.`,
      },
      { h: 'Bar charts and pictographs, done properly',
        body: String.raw`A **bar chart** compares category sizes by bar *length*. Non-negotiable rules:

- **The frequency axis must start at zero.** Length is the visual variable; truncating the axis destroys the comparison (see the next section).
- **Bars are equal width, with equal gaps.** Varying width smuggles in area as a second, misleading signal.
- **Label both axes and title the chart.** An unlabelled axis makes the chart unreadable and unciteable.

A **pictograph** uses a symbol to stand for a fixed number of items, declared in a **key** ("🙂 = 10 students"). Its charm is also its danger: partial symbols must be *proportional*, and a missing key makes the chart worthless. If one symbol is drawn twice as tall AND twice as wide to mean "double", the reader sees four times the area — a classic distortion.`,
        example: { title: 'Reading a pictograph',
          q: 'A pictograph uses ★ = 20 books. A row shows 3 full stars and a half star. How many books?',
          solution: '$3 \\times 20 + \\tfrac12 \\times 20 = 60 + 10 = 70$ books.',
          moral: 'Always read the key first — the same row of stars means anything at all without it.' },
      },
      { h: 'Line graphs: the line is a claim',
        body: String.raw`A line graph plots points and joins them. Joining is not decoration — **the line claims the quantity actually passed through those intermediate values.** That claim is fair for temperature through a day, and false for monthly exam scores (you did not hold a score of 62.5 midway through March).

Reading a line graph well means reading its *shape*, not just its points:

- **Steepness = rate of change.** A steeper section means faster change. This is the same "slope = rate" idea that becomes $y = mx + c$ in F2, velocity in Physics F1, and the derivative in I2 — one idea, four appearances.
- **Flat = no change** (not "nothing happening" — a constant value is information).
- **Downward = decrease.** A common misreading is treating a falling line as "negative values"; the *value* can stay positive while the *change* is negative.

**Interpolation** (reading between plotted points) is usually safe; **extrapolation** (continuing beyond the data) is a guess and should be labelled as one.`,
        svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Line graph with a steep segment and a flat segment" xmlns="http://www.w3.org/2000/svg">
  <line x1="45" y1="20" x2="45" y2="130" stroke="#6b7a99" stroke-width="2"/>
  <line x1="45" y1="130" x2="375" y2="130" stroke="#6b7a99" stroke-width="2"/>
  <polyline points="60,120 130,105 200,45 270,45 340,80" fill="none" stroke="#6ee7a8" stroke-width="3"/>
  <g fill="#6ee7a8"><circle cx="60" cy="120" r="4"/><circle cx="130" cy="105" r="4"/><circle cx="200" cy="45" r="4"/><circle cx="270" cy="45" r="4"/><circle cx="340" cy="80" r="4"/></g>
  <text x="165" y="70" font-size="11" fill="#e6ecff">steep = fast change</text>
  <text x="235" y="36" font-size="11" fill="#9aa8c4">flat = no change</text>
  <text x="30" y="18" font-size="11" fill="#9aa8c4">value</text>
  <text x="370" y="148" font-size="11" fill="#9aa8c4" text-anchor="end">time</text>
</svg>`,
      },
      { h: 'How graphs mislead — a checklist',
        body: String.raw`Most misleading graphs are not fabricated data; they are honest numbers drawn dishonestly. Learn the five standard tricks so you can spot them.

1. **Truncated axis.** Starting the frequency axis at 90 instead of 0 turns a 2% difference into a visual doubling. *Check: does the vertical axis start at zero? If not, why not?*
2. **Inconsistent scale.** Unequal gaps between axis values (0, 10, 20, 50, 100) bend the shape of the data arbitrarily.
3. **Area distortion.** Scaling a symbol or 3-D shape in both dimensions to show a doubling shows a quadrupling to the eye.
4. **Cherry-picked range.** Showing only the months that support the claim. *Check: what happens just outside this window?*
5. **Missing or unlabelled units.** "Sales up 40" — forty what, over what period, from what base?

Add two questions of substance: **who collected this, and from whom?** A survey of a school canteen queue tells you about people who queue at the canteen, not about the school. That is **sampling bias**, and no amount of careful drawing fixes it.`,
        example: { title: 'Spotting the truncated axis',
          q: 'A chart shows Brand A at 96% satisfaction and Brand B at 92%, with the axis running from 90% to 100%. Brand A\'s bar looks about three times taller. Is the chart honest?',
          solution: 'The numbers are honest; the picture is not. With the axis starting at 90, the drawn lengths are 6 units against 2 — a 3:1 visual ratio for a difference of just 4 percentage points. Redrawn from zero, the bars are 96 and 92, visually near-identical.',
          moral: 'Always read the axis before you read the bars.' },
      },
      { h: 'Summarising a data set: mode, median, mean, range',
        body: String.raw`A chart shows the shape; a summary statistic compresses it to one number. Four to know, with the judgement of when each is right:

- **Mode** — the most frequent value. The only average that works for categorical data (there is no "mean favourite subject").
- **Median** — the middle value once ordered. With an even count, the mean of the middle two. **Resistant to outliers.**
- **Mean** — total ÷ count. Uses every value, so it is the most informative *and* the most easily distorted by one extreme.
- **Range** — largest minus smallest. A crude measure of spread, entirely determined by the two most extreme values.

Choosing between them is the actual skill. For salaries where one director earns a hundred times the rest, the **median** describes a typical worker and the **mean** does not. For symmetric data with no outliers, the mean is best. Reporting an average without saying *which* average is a standard way to mislead.

*Example.* For $3, 4, 4, 5, 24$: mode 4, median 4, mean $\tfrac{40}{5} = 8$, range 21. The mean is larger than every value but one — the outlier 24 has dragged it away from anything typical.`,
        formulas: ['Mean = sum of values ÷ number of values',
          'Median = middle value when ordered (mean of the middle two if the count is even)',
          'Mode = most frequent value (the only average valid for categories)',
          'Range = largest − smallest',
          'Outliers move the mean a lot and the median hardly at all'],
      },
    ],
    formulas: ['Categorical → bar/pie;  discrete → bar;  continuous over time → line',
      'Bar charts: frequency axis MUST start at zero; equal widths and gaps',
      'Pictograph: always state the key (one symbol = n items)',
      'Line graph: steepness = rate of change; the line claims intermediate values',
      'Mean = total ÷ count;  median = middle;  mode = most frequent;  range = max − min'],
    summary: [
      'Classify the data first — categorical, discrete, continuous — and let that choose the chart.',
      'Bar charts compare lengths, so the frequency axis must start at zero.',
      'A pictograph is meaningless without its key, and symbols must scale in one dimension only.',
      'A line graph asserts the intermediate values; only join points when that claim is true.',
      'Steepness is rate of change — the same idea as slope, speed and the derivative later.',
      'Check every chart for: truncated axis, uneven scale, area distortion, cherry-picked range, missing units.',
      'Mode, median, mean and range summarise differently; outliers move the mean but not the median.',
    ],
    mistakes: [
      '**Reading bar heights without checking the axis origin.** A truncated axis exaggerates small differences dramatically. **Fix:** read the axis labels before the bars, every single time.',
      '**Joining points on a categorical axis.** A line between "Maths" and "Science" implies values in between, which do not exist. **Fix:** use separate bars for categories; reserve lines for continuous scales.',
      '**Ignoring the key on a pictograph.** Counting 5 symbols as 5 items when one symbol means 20. **Fix:** write the key value beside the row before counting.',
      '**Scaling a symbol in two dimensions to show a doubling.** Doubling height and width quadruples the area the eye perceives. **Fix:** change one dimension, or use more symbols rather than bigger ones.',
      '**Quoting the mean for skewed data.** With one huge value, the mean describes nobody. **Fix:** compare mean and median; if they differ a lot, report the median and say why.',
      '**Confusing frequency with value.** In "5 students scored 8 marks", the 5 is the frequency and 8 the value; averaging the wrong column is a routine error. **Fix:** label the columns explicitly before computing.',
      '**Extrapolating a trend beyond the data** and stating it as fact. **Fix:** mark any continuation as a prediction, with the assumption stated.',
    ],
    tricks: [
      '**Read any chart in a fixed order: title → axes and units → scale origin → data → the claim being made.** The order stops you being led by the picture.',
      '**Sanity-check a pie chart by eye**: any slice past halfway must be over 50%, and the slices must total one whole turn.',
      '**To find the median quickly, order the data and cross off from both ends** in pairs until one or two values remain.',
      '**Compare mean and median as an outlier detector.** A large gap between them is a reliable signal of skew or an extreme value.',
      '**When asked to criticise a graph, work through the five distortions in order** — truncated axis, uneven scale, area, cherry-picked range, missing units. You will rarely miss the intended answer.',
      '**Convert a pie-chart percentage to an angle by multiplying by 3.6** (since 360 ÷ 100 = 3.6): 25% → 90°.',
    ],
    memory: [
      '"The chart follows the data type" — categories get bars, continuous time gets lines.',
      '"Bars measure length, so start at zero." Truncation is the number-one distortion.',
      '"No key, no meaning" for pictographs.',
      '"Steep means fast" — the same idea as slope, speed, and rate everywhere else.',
      '"Mode for names, median for outliers, mean for everything else."',
      '"Mean pulled, median stands" — one extreme value drags the mean and leaves the median almost untouched.',
    ],
    quiz: [
      { lvl: 1, type: 'mcq', prompt: 'Which chart best shows temperature measured every hour through a day?', choices: ['line graph', 'pie chart', 'bar chart of categories', 'pictograph'], answer: 0, explanation: 'Time is continuous, so a line graph is right — and the line legitimately claims values between readings.' },
      { lvl: 1, type: 'numeric', prompt: 'A pictograph uses ★ = 20 books. A row shows 3 full stars and a half star. How many books?', answer: 70, tolerance: 0, explanation: '3 × 20 + 10 = 70.' },
      { lvl: 1, type: 'numeric', prompt: 'Find the mean of 3, 4, 4, 5, 24.', answer: 8, tolerance: 0, explanation: 'Total 40 ÷ 5 values = 8.' },
      { lvl: 1, type: 'numeric', prompt: 'Find the range of 3, 4, 4, 5, 24.', answer: 21, tolerance: 0, explanation: 'Largest − smallest = 24 − 3 = 21.' },
      { lvl: 2, type: 'numeric', prompt: 'Find the median of 3, 4, 4, 5, 24.', answer: 4, tolerance: 0, explanation: 'Ordered, the middle of five values is the third: 4.' },
      { lvl: 2, type: 'mcq', prompt: 'Why is the median a better summary than the mean for that data set?', choices: ['the outlier 24 drags the mean above every value but one', 'the median is always larger', 'the mean cannot be computed here', 'they are equally good'], answer: 0, explanation: 'The mean of 8 exceeds four of the five values. The median, 4, describes a typical value and resists the outlier.' },
      { lvl: 2, type: 'numeric', prompt: 'In a pie chart, what angle in degrees represents 25% of the total?', answer: 90, tolerance: 0, explanation: '25% of 360° = 90°. (Multiply any percentage by 3.6.)' },
      { lvl: 2, type: 'mcq', prompt: 'A bar chart\'s vertical axis starts at 90 rather than 0. What is the effect?', choices: ['small differences look far larger than they are', 'the chart becomes more accurate', 'the bars become harder to draw', 'no effect if the values are labelled'], answer: 0, explanation: 'Bars are read by length. Truncating the axis inflates the visual ratio between similar values.' },
      { lvl: 3, type: 'mcq', prompt: 'A chart shows Brand A at 96% and Brand B at 92%, axis from 90% to 100%, and A\'s bar looks three times taller. What is the honest description?', choices: ['the numbers are accurate but the picture exaggerates a 4-point gap', 'the data must be fabricated', 'the chart is fine because the values are printed', 'B is actually higher than A'], answer: 0, explanation: 'Drawn lengths of 6 and 2 units create a 3:1 visual ratio from a 4-percentage-point difference. From a zero origin the bars would look nearly equal.' },
      { lvl: 3, type: 'mcq', prompt: 'A survey about school food is conducted only among students queuing at the canteen. What is the flaw?', choices: ['sampling bias — it excludes students who avoid the canteen', 'the sample is too small to compute a mean', 'the data is continuous, not categorical', 'there is no flaw'], answer: 0, explanation: 'Those who dislike the food are least likely to be in the queue, so the sample systematically over-represents satisfied students. Careful drawing cannot repair a biased sample.' },
      { lvl: 3, type: 'mcq', prompt: 'A symbol is drawn twice as tall AND twice as wide to represent double the quantity. Why does this mislead?', choices: ['the eye reads area, which has quadrupled', 'the symbol becomes blurry', 'height alone should have been halved', 'it does not mislead'], answer: 0, explanation: 'Doubling both dimensions multiplies area by 4, so the reader perceives four times the quantity rather than two.' },
      { lvl: 3, type: 'mcq', prompt: 'Five students scored 8 marks each. To find the mean score of the class, which column do you average?', choices: ['the values, each weighted by its frequency', 'the frequencies', 'the frequencies divided by the values', 'either column gives the same result'], answer: 0, explanation: 'Mean = Σ(value × frequency) ÷ Σfrequency. Averaging the frequency column answers a different question entirely.' },
    ],
  },

};
