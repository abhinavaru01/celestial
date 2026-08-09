# Exponentials & Logarithms

> [!intro] **An exponential describes anything whose growth is proportional to its current size** — money at compound interest, bacteria, a virus in its early phase, a radioactive sample decaying. A logarithm is the question that exponential growth forces you to ask: *how long until it reaches this?* Logs are simply exponents in disguise, and every "log law" is an index law you already know, wearing different clothes.

## 1. Exponential growth is proportional growth

In $y = ab^x$: $a$ is the starting value, $b$ the **growth factor** per unit of $x$.

- $b > 1$ — growth. $b = 1.08$ is 8% growth per period.
- $0 < b < 1$ — decay. $b = 0.85$ is 15% loss per period.

The defining property is that **the multiplier is constant, not the increase**. A linear model adds the same amount each step; an exponential multiplies by the same factor. That difference is why exponentials always overtake linear growth eventually, no matter how steep the line.

The practical signature is **constant doubling time** (or half-life): whatever the starting point, it takes the same time to double. A population doubling every 20 years goes 100 → 200 → 400 → 800 in successive 20-year blocks, and the *increases* grow (100, 200, 400) while the *factor* stays 2.

The special base $e \approx 2.718$ arises from continuous compounding and is the natural choice in calculus, where $\tfrac{d}{dx}e^x = e^x$ — the function equal to its own rate of change. That property is exactly the statement "growth proportional to current size", written in calculus.

```formula Key formulas
y = ab^x: a is the initial value, b the growth factor
b > 1 growth;  0 < b < 1 decay
Percentage r% growth ⇒ b = 1 + r/100;  r% decay ⇒ b = 1 − r/100
Constant doubling time / half-life is the signature of exponential change
```

## 2. A logarithm is an exponent

$\log_b x$ answers: **to what power must I raise $b$ to get $x$?**

$$\log_b x = y \iff b^y = x$$

So $\log_2 8 = 3$ because $2^3 = 8$. Reading it aloud as the question — "two to the what gives eight?" — removes almost all confusion.

Two consequences follow directly from the definition and are worth stating:

- $\log_b 1 = 0$ for every base, since $b^0 = 1$.
- **You cannot take the log of a negative number or zero** (for a positive base), because no power of a positive number is ever negative or zero. A "log of a negative" in your working means an earlier error, or a genuinely impossible situation in the model.

Two bases dominate: $\log_{10}$ (written $\log$, used for pH, decibels, the Richter scale) and $\log_e$ (written $\ln$, the natural log, used throughout calculus).

Logs exist because they turn an unknown *exponent* into something solvable. To answer "how many years until my investment doubles at 8%?", you must solve $1.08^t = 2$ — and $t$ is stuck in the exponent until a logarithm brings it down.

## 3. The log laws are the index laws

Each law below is an index law re-read. Since a log *is* an exponent, and multiplying powers adds exponents, multiplying numbers must add logs.

$$\log(xy) = \log x + \log y$$
$$\log\!\left(\frac{x}{y}\right) = \log x - \log y$$
$$\log(x^n) = n\log x$$

The third is the workhorse — **it is what unsticks an unknown exponent**:

$$1.08^t = 2 \;\Rightarrow\; t\log 1.08 = \log 2 \;\Rightarrow\; t = \frac{\log 2}{\log 1.08} \approx 9.0 \text{ years}$$

Note that $\dfrac{\log 2}{\log 1.08}$ is a **division of two logs**, which is *not* $\log\!\left(\tfrac{2}{1.08}\right)$. Confusing those two is the commonest error in this topic.

Equally, **there is no law for $\log(x + y)$.** Logs convert multiplication into addition, and nothing converts addition into anything simpler. $\log(x+y) \ne \log x + \log y$ — test it with $x = y = 1$: the left is $\log 2 \approx 0.30$, the right is 0.

The **change of base** formula lets you compute any log with a calculator that only has $\log$ and $\ln$:

$$\log_b x = \frac{\log x}{\log b}$$

```formula Key formulas
log(xy) = log x + log y
log(x/y) = log x − log y
log(xⁿ) = n log x   ← brings an unknown exponent down
log_b x = log x / log b  (change of base)
log_b 1 = 0;  log_b b = 1;  log of a negative or zero is undefined
NO law exists for log(x + y)
```

> [!example] **Solving for an exponent**
>
> **Problem.** How long does it take for money to double at 8% compound interest?
>
> **Solution.** Solve $1.08^t = 2$. Take logs of both sides: $t\log 1.08 = \log 2$, so $t = \dfrac{\log 2}{\log 1.08} = \dfrac{0.3010}{0.0334} \approx 9.0$ years.
>
> *Whenever the unknown is an exponent, take logs — that is what logs are for.*

## 4. Why logarithmic scales are everywhere

When quantities span many orders of magnitude, a linear axis is useless — plot earthquake energies linearly and every event but the largest is invisible. A **log scale** plots the *exponent*, so equal distances represent equal *ratios* rather than equal differences.

| Scale | Measures | Meaning of +1 |
|---|---|---|
| **Richter** | earthquake amplitude | ×10 amplitude (≈32× energy) |
| **pH** | $-\log_{10}[\mathrm{H}^+]$ | 10× more acidic |
| **Decibel** | sound intensity | 10 dB is ×10 intensity |

So pH 3 is not "a bit more acidic" than pH 5 — it is **100 times** more acidic. The minus sign in the pH definition means *lower pH is more acidic*, which is a standing source of confusion in chemistry until you see the log.

Decay problems use the same machinery with $0 < b < 1$. Carbon-14 has a half-life of 5730 years, so the remaining fraction after $t$ years is $\left(\tfrac12\right)^{t/5730}$. Solving for $t$ given a measured fraction requires a log — which is precisely how radiocarbon dating works.

> [!example] **Reading a log scale**
>
> **Problem.** Solution A has pH 3, solution B has pH 5. How many times more acidic is A?
>
> **Solution.** pH is $-\log_{10}$ of the hydrogen-ion concentration, so a difference of 2 pH units is a factor of $10^2 = 100$. Solution A is **100 times** more acidic.
>
> *On a log scale, a small difference in the number is a large ratio in the quantity.*

```formula Key formulas
y = ab^x;  log_b x = y ⇔ b^y = x
log(xy) = log x + log y;  log(x/y) = log x − log y;  log(xⁿ) = n log x
Change of base: log_b x = log x / log b
Doubling time t = log 2 / log b
pH = −log₁₀[H⁺];  +1 on a log scale means ×10
```

## What you should be able to do

- Work with exponential functions
- Use logarithms and their laws
- Model growth and decay

## Summary — the mental toolkit

1. Exponential change multiplies by a constant factor; linear change adds a constant amount.
2. Constant doubling time or half-life is the signature of an exponential.
3. A logarithm is an exponent: log_b x asks "b to what power gives x?"
4. Logs of negatives and zero are undefined, because no power of a positive base produces them.
5. The log laws are the index laws re-read; log(xⁿ) = n log x is what frees an unknown exponent.
6. There is no law for log(x + y), and log a ÷ log b is not log(a/b).
7. Log scales (Richter, pH, decibels) turn ratios into equal steps — +1 means ×10.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
