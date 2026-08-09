# Sequences & Series

> [!intro] **A sequence is a pattern with a rule, and a series is what you get when you add it up.** Two patterns dominate everything: adding a constant each step (arithmetic — the discrete version of a straight line) and multiplying by a constant each step (geometric — the discrete version of exponential growth). Compound interest, population growth, loan repayments and the halving in radioactive decay are all one of these two.

## 1. Sequences, terms and the two kinds of rule

A **sequence** is an ordered list of numbers; each entry is a **term**, and $a_n$ (or $u_n$) denotes the $n$-th one.

Rules come in two flavours, and both are useful:

- **Recursive** — defines each term from the previous one: $a_1 = 3$, $a_{n+1} = a_n + 4$. Natural to write, but to reach the 100th term you must pass through 99 others.
- **Explicit (position-to-term)** — gives $a_n$ directly from $n$: $a_n = 4n - 1$. This is the one worth having, because $a_{100}$ is a single substitution.

The two dominant patterns:

- **Arithmetic:** a constant **common difference** $d$ is *added*. $3, 7, 11, 15,\ldots$ with $d = 4$.
- **Geometric:** a constant **common ratio** $r$ is *multiplied*. $2, 6, 18, 54,\ldots$ with $r = 3$.

**Diagnose before choosing a formula** — this is where most errors begin. Compute successive differences; if they are constant, it is arithmetic. Otherwise compute successive ratios; if those are constant, it is geometric. If neither, it is some other pattern (squares, Fibonacci, …) and neither formula applies.

## 2. Arithmetic sequences and their sum

With first term $a$ and common difference $d$:

$$a_n = a + (n-1)d$$

The $(n-1)$ is the detail students get wrong: reaching the $n$-th term takes $n-1$ *steps*, not $n$, because the first term is already there. Check on a small case — $a_1 = a + 0\cdot d = a$ ✓.

For the sum of the first $n$ terms (an **arithmetic series**):

$$S_n = \frac{n}{2}\big(2a + (n-1)d\big) = \frac{n}{2}(a + l)$$

where $l$ is the last term. The second form is the more memorable: **the sum is the number of terms times the average of the first and last.**

The reason is Gauss's trick. Write the sum forwards and backwards and add them in pairs:

$$1+2+\cdots+100$$
$$100+99+\cdots+1$$

Every column totals 101, and there are 100 columns, so twice the sum is $100\times101 = 10100$ and $S = 5050$. That pairing argument *is* the formula, and reconstructing it takes ten seconds if you forget the algebra.

```formula Key formulas
Arithmetic: aₙ = a + (n − 1)d
Sum: Sₙ = (n/2)(2a + (n−1)d) = (n/2)(a + l)
The sum is n × (average of first and last term)
```

> [!example] **Finding the position of a term**
>
> **Problem.** For the sequence 3, 7, 11, 15, …, which term equals 99?
>
> **Solution.** Here $a=3$, $d=4$, so $a_n = 3 + 4(n-1) = 4n - 1$. Setting $4n - 1 = 99$ gives $n = 25$. So 99 is the 25th term.
>
> *Simplify the explicit formula first — 4n − 1 is far easier to work with than 3 + 4(n−1).*

## 3. Geometric sequences and their sum

With first term $a$ and common ratio $r$:

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

That is genuinely surprising the first time: $1 + \tfrac12 + \tfrac14 + \tfrac18 + \cdots = \dfrac{1}{1-\tfrac12} = 2$. Adding infinitely many positive numbers gives exactly 2 — never more. The condition $|r|<1$ is essential; without it the sum diverges and the formula is meaningless.

```formula Key formulas
Geometric: aₙ = ar^(n−1)
Sum: Sₙ = a(1 − rⁿ)/(1 − r), r ≠ 1
Infinite sum: S∞ = a/(1 − r), valid ONLY if |r| < 1
|r| > 1 grows;  |r| < 1 decays;  r < 0 alternates
```

> [!example] **An infinite sum that is finite**
>
> **Problem.** A ball is dropped from 10 m and each bounce reaches 60% of the previous height. Find the total vertical distance travelled before it stops.
>
> **Solution.** It falls 10 m, then each bounce contributes an up *and* a down. The bounce heights form a geometric sequence with $a = 6$, $r = 0.6$, summing to $\dfrac{6}{1-0.6} = 15$ m — counted twice (up and down) gives 30 m. Total: $10 + 30 = 40$ m.
>
> *Infinitely many bounces, finite total distance — because |r| < 1.*

## 4. Where sequences model the real world

The two patterns correspond to the two most common kinds of change, and telling them apart is the real-world skill.

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
- **Growth models eventually fail.** No population grows geometrically forever; resources run out. The model is valid over a domain, exactly as with linear models.

```formula Key formulas
Arithmetic: aₙ = a + (n−1)d;  Sₙ = (n/2)(2a + (n−1)d) = (n/2)(a + l)
Geometric: aₙ = ar^(n−1);  Sₙ = a(1 − rⁿ)/(1 − r)
S∞ = a/(1 − r), only when |r| < 1
Compound interest: A = P(1 + i)ⁿ
Diagnose: constant difference → arithmetic; constant ratio → geometric
```

## What you should be able to do

- Identify AP and GP and find nth terms
- Sum arithmetic and geometric series
- Model compound growth

## Summary — the mental toolkit

1. A sequence lists terms by a rule; explicit rules beat recursive ones for reaching far-off terms.
2. Arithmetic adds a constant d; geometric multiplies by a constant r.
3. Diagnose by checking differences first, then ratios — before selecting any formula.
4. Both nth-term formulas use n − 1, because the first term has taken zero steps.
5. An arithmetic sum is the number of terms times the average of the first and last (Gauss pairing).
6. A geometric series with |r| < 1 has a finite infinite sum, a/(1 − r).
7. Fixed amounts are arithmetic; fixed percentages are geometric — which is why compound beats simple interest.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
