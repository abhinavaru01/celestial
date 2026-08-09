# Number Sense & Estimation

> [!intro] **Before you can compute well, you have to *feel* numbers.** Place value is a machine that compresses endless counting into ten symbols; the number line turns "less than nothing" from a paradox into a direction; and estimation is the habit that catches the wrong answer before it costs you marks. Every later topic — ratio, algebra, scientific notation, chemistry's moles, physics' orders of magnitude — is built on the number sense you install here.

## 1. Place value: ten symbols, infinite numbers

Counting with tally marks needs as many symbols as things counted. Place value fixes that with one rule: **a digit's value depends on where it sits.** In $3407$ the $3$ does not mean three — it means three *thousands*.

$$3407 = 3\times10^3 + 4\times10^2 + 0\times10^1 + 7\times10^0$$

Two consequences do most of the work later:

- **Each place is ten times the one to its right.** Moving a digit one place left multiplies it by 10; one place right divides by 10. That is *all* multiplying by powers of ten does — it shifts digits, it does not "add zeros" (a phrase that will betray you the moment decimals appear: $2.5\times10 = 25$, not $2.50$).
- **Zero is a placeholder, and it is essential.** The $0$ in $3407$ is doing real work: it holds the tens place empty so the $4$ stays in the hundreds.

Decimals are the same machine continued rightward: places worth $\tfrac{1}{10}, \tfrac{1}{100}, \tfrac{1}{1000}$. There is no "decimal system" separate from the whole-number system — it is one ruler extended past 1.

```formula Key formulas
Place value: each place = 10 × the place to its right
Digit value = digit × (place value)
×10 shifts digits one place left; ÷10 shifts one place right
```

## 2. The number line and what a negative number is

A negative number is not "a number less than nothing" — nothing is not a quantity you can be less than. A negative number is a **position on the opposite side of a chosen zero**, or equivalently a **change in the opposite direction**.

That second reading is the useful one. Temperature falling 5 degrees, a debt of 200 rupees, 30 m below sea level: in each case zero is a *convention* and the minus sign records direction.

Once you accept "minus = opposite direction", the rules stop being arbitrary:

- **Adding a negative moves left:** $7 + (-3) = 4$.
- **Subtracting a negative moves right:** $7 - (-3) = 10$. Subtracting is "remove this change"; removing a leftward move leaves you further right. Removing a debt makes you richer.
- **Ordering flips from intuition:** $-8 < -3$, because $-8$ sits further left. The *size* of $8$ is larger, but its position is lower. That gap between size and position is exactly what absolute value names: $|-8| = 8$ is the distance from zero, direction discarded.

Signs in multiplication follow from patterns rather than decree. Watch $3\times(-2) = -6$, $2\times(-2) = -4$, $1\times(-2) = -2$, $0\times(-2) = 0$ — each step up adds 2. Continue: $(-1)\times(-2) = 2$. A negative times a negative must be positive for arithmetic to stay consistent.

```svg
<svg viewBox="0 0 420 90" role="img" aria-label="Number line from minus 5 to 5 showing 7 minus 3" xmlns="http://www.w3.org/2000/svg">
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
</svg>
```

## 3. Orders of magnitude: how big is big?

Ask which is larger, $8\,700\,000$ or $920\,000$, and most students count digits — correctly. That instinct, made explicit, is the idea of an **order of magnitude**: the power of ten nearest a number.

Comparing orders of magnitude beats comparing digits because it survives messy data. A bacterium is about $10^{-6}$ m; a person about $10^0$ m; the Earth about $10^7$ m. You do not need exact figures to know a person is roughly a million times a bacterium and ten-millionth of the planet.

This is the number sense that makes a wrong answer *feel* wrong. If a question asks for the mass of a water drop and your answer is 50 kg, no algebra check is needed — the order of magnitude is absurd. In chemistry you will meet $6.022\times10^{23}$ and in physics $3\times10^8$ m/s; a student without order-of-magnitude sense treats those as strings of digits, and loses the ability to sanity-check anything.

> [!example] **Order-of-magnitude check**
>
> **Problem.** A student computes the area of a football pitch as 6 800 000 m². Is that plausible?
>
> **Solution.** A pitch is roughly 100 m by 70 m, so about $10^2\times10^2 = 10^4$ m² — around 7 000 m². The student is off by a factor of about 1000, which is exactly the signature of a misplaced decimal or a km/m mix-up.
>
> *Estimate first, and an error of 1000× announces itself instantly.*

## 4. Mental arithmetic: reshape, then compute

Fast mental arithmetic is not faster calculation — it is **choosing a friendlier form first**. Every technique below is one of the three laws (commutative, associative, distributive) used deliberately.

- **Compensate to a round number.** $47 + 38$: push 47 to 50 by borrowing 3, so $50 + 35 = 85$.
- **Distribute over a split.** $6\times23 = 6\times20 + 6\times3 = 120 + 18 = 138$.
- **Halve and double.** $25\times36 = 50\times18 = 100\times9 = 900$. The product is unchanged because you multiply by 2 and divide by 2.
- **Use difference of squares for near-neighbours.** $19\times21 = (20-1)(20+1) = 400 - 1 = 399$.
- **Reorder to pair friendly numbers.** $2\times17\times5 = (2\times5)\times17 = 170$.

None of these are tricks in the sense of magic; they are the field laws of arithmetic applied on purpose. Recognising them here is what makes algebra feel like a continuation rather than a new subject — in F1 Algebra you will do the identical moves with letters.

## 5. Estimation as a discipline (and Fermi problems)

Estimation deserves its own habit because it answers a different question from calculation. Calculation asks *what exactly*; estimation asks *roughly what, and is my exact answer sane*.

The professional version is the **Fermi problem**: get within an order of magnitude using only decomposition and rough figures. How many litres of water does your school use in a day? Break it down — number of people, uses per person, litres per use — estimate each factor loosely, multiply. Errors in the factors are as likely to be high as low, so they partly cancel, and the estimate lands surprisingly close.

Three rules keep estimates honest:

1. **Round to one significant figure before multiplying**, not after.
2. **Round in opposite directions** when you can (one factor up, one down) so errors offset.
3. **State the estimate before computing exactly**, then compare. If they disagree by a factor of 10, one of them is wrong — and you now know to look.

> [!example] **Fermi estimate**
>
> **Problem.** Roughly how many heartbeats does a 12-year-old have behind them?
>
> **Solution.** About 80 beats per minute; $60\times24 \approx 1400$ minutes a day, so roughly $80\times1400 \approx 10^5$ beats a day. Over 12 years, $10^5 \times 365 \times 12 \approx 4\times10^8$.
>
> *A few hundred million — the point is the power of ten, not the digits.*

```formula Key formulas
Expanded form: 3407 = 3×10³ + 4×10² + 0×10¹ + 7×10⁰
Absolute value: |x| = distance from 0 (direction discarded)
a − (−b) = a + b;  (−a)×(−b) = +ab;  (−a)×b = −ab
Order of magnitude of x ≈ the power of 10 nearest x
Estimate: round each factor to 1 significant figure, then multiply
```

## What you should be able to do

- Work fluently with negative numbers and place value
- Estimate answers using rounding and orders of magnitude
- Use mental-math strategies to compute quickly

## Summary — the mental toolkit

1. Place value gives every digit a value from its position; each place is 10× the next right.
2. Negative means opposite direction from a chosen zero — that reading makes every sign rule follow.
3. |x| is distance from zero; −8 < −3 even though 8 > 3.
4. Order of magnitude (the nearest power of 10) is how you judge whether an answer is sane.
5. Mental arithmetic = reshaping with the commutative, associative and distributive laws.
6. Always estimate before computing; a 10× disagreement is a bug report.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
