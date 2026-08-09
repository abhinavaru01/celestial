# Fractions & Decimals as One System

> [!intro] **Fractions, decimals and division are not three topics — they are three notations for one idea.** $\tfrac{3}{4}$, $0.75$ and $3 \div 4$ are the same number wearing different clothes. Students who never fuse these three views spend years translating between them; students who do get percentages, ratio, probability and algebraic fractions almost free.

## 1. One idea, three notations

A fraction $\dfrac{a}{b}$ answers a division question: *split $a$ into $b$ equal parts, how big is one part?* That is why the fraction bar and the division sign mean the same thing.

$$\frac{3}{4} = 3 \div 4 = 0.75$$

Each notation is best at something:

| Notation | Best for | Weak at |
|---|---|---|
| Fraction $\tfrac34$ | exactness, algebra, ratios | comparing at a glance |
| Decimal $0.75$ | comparing, measuring, calculators | exact thirds ($0.333\ldots$) |
| Division $3\div4$ | seeing where it came from | further computation |

Crucially, a fraction is a **single number with a position on the number line**, not a pair of numbers. $\tfrac34$ sits three-quarters of the way from 0 to 1. Students who read $\tfrac34$ as "3 and 4" produce the classic error $\tfrac12 + \tfrac13 = \tfrac25$; students who see one point on a line know instantly that the answer must be a bit more than $\tfrac12$, so $\tfrac25$ is impossible.

```svg
<svg viewBox="0 0 420 96" role="img" aria-label="Number line from 0 to 1 marking three quarters" xmlns="http://www.w3.org/2000/svg">
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
</svg>
```

## 2. Equivalent fractions: the same point, renamed

Multiplying numerator and denominator by the same non-zero number does not change the value, because you are multiplying by $\tfrac{k}{k} = 1$:

$$\frac{3}{4} = \frac{3\times2}{4\times2} = \frac{6}{8} = \frac{75}{100} = 0.75$$

This single fact powers almost everything that follows:

- **Simplifying** is the same move run backwards — divide top and bottom by their HCF. $\tfrac{18}{24} = \tfrac{3}{4}$.
- **Comparing** fractions means renaming them to a common denominator so the parts are the same size: $\tfrac{5}{8}$ vs $\tfrac{2}{3}$ becomes $\tfrac{15}{24}$ vs $\tfrac{16}{24}$, so $\tfrac23$ is larger.
- **Percentages** are just the special case with denominator 100 — which is why percentages are so easy to compare.

Note what you may *not* do: adding the same number to top and bottom changes the value. $\tfrac{1}{2} \ne \tfrac{1+1}{2+1}$. Only multiplying and dividing preserve a ratio; that is a property of ratios you will meet again in the very next topic.

## 3. Adding and subtracting: parts must be the same size

You cannot add three quarters to two thirds any more than you can add three metres to two seconds — the units differ. The denominator *is* the unit. So the rule is not arbitrary: **rename to a common denominator, then add the counts.**

$$\frac{1}{2} + \frac{1}{3} = \frac{3}{6} + \frac{2}{6} = \frac{5}{6}$$

Use the **LCM** of the denominators to keep numbers small (any common multiple works, but the product can get ugly: adding sixths and eighths via 48 rather than 24 doubles your arithmetic).

Before computing, **estimate**: $\tfrac12 + \tfrac13$ must lie between $\tfrac12$ and 1. That single sentence kills the $\tfrac25$ error permanently.

```formula Key formulas
a/b + c/d = (ad + bc)/(bd), then simplify
Prefer the LCM of b and d to keep numbers small
a/b = (a×k)/(b×k) for any k ≠ 0 — multiply/divide only, never add
```

## 4. Multiplying and dividing: why "flip and multiply" is not magic

**Multiplication** is straightforward — multiply across:

$$\frac{2}{3}\times\frac{4}{5} = \frac{8}{15}$$

The meaning is "of": $\tfrac23$ of $\tfrac45$. Notice that multiplying by a number below 1 makes things *smaller*, which contradicts the primary-school slogan "multiplication makes bigger". That slogan was only ever true for whole numbers above 1.

**Division** looks stranger until you ask the right question. $6 \div \tfrac12$ asks *how many halves fit into 6?* — twelve. Dividing by a half doubles. In general, dividing by $\tfrac{c}{d}$ asks how many $\tfrac{c}{d}$-sized pieces fit, and that is the same as multiplying by $\tfrac{d}{c}$:

$$\frac{a}{b} \div \frac{c}{d} = \frac{a}{b}\times\frac{d}{c}$$

The formal reason: $\tfrac{d}{c}$ is the **reciprocal** of $\tfrac{c}{d}$ (their product is 1), and dividing by a number is multiplying by its reciprocal. Recognising this now means algebraic fractions later need no new rule.

> [!example] **Division by a fraction, read as a question**
>
> **Problem.** A 6 m ribbon is cut into pieces of length 3/4 m. How many pieces?
>
> **Solution.** $6 \div \tfrac34 = 6 \times \tfrac43 = 8$ pieces. Reading it as "how many 3/4-metre pieces fit into 6 m?" makes the answer 8 obviously sensible — the pieces are shorter than a metre, so there must be more than 6 of them.
>
> *Dividing by a number below 1 always increases the count.*

## 5. Decimals, place value and terminating vs recurring

A decimal is place value continued past the ones: tenths, hundredths, thousandths. So $0.75 = \tfrac{7}{10} + \tfrac{5}{100} = \tfrac{75}{100} = \tfrac34$.

Which fractions give a **terminating** decimal? Only those whose denominator, in lowest terms, has no prime factors except 2 and 5 — because our base is $10 = 2\times5$. Hence $\tfrac{1}{8} = 0.125$ terminates ($8 = 2^3$) but $\tfrac{1}{3} = 0.333\ldots$ recurs, and $\tfrac{1}{6} = 0.1666\ldots$ recurs because of that stubborn factor 3.

Two practical consequences:

- **Rounding introduces error.** Writing $\tfrac13 \approx 0.33$ and using it repeatedly compounds the error. Keep exact fractions through the working; round once, at the end.
- **Comparing decimals is by place, not by length.** $0.7 > 0.65$ even though 65 looks bigger than 7 — align the decimal points and compare tenths first ($0.70$ vs $0.65$).

```formula Key formulas
a/b = a ÷ b = the point a/b of the way from 0 to 1
Equivalence: a/b = (ak)/(bk), k ≠ 0
Add/subtract: rename to a common denominator, then add numerators
Multiply: (a/b)×(c/d) = ac/bd
Divide: (a/b) ÷ (c/d) = (a/b)×(d/c)  [multiply by the reciprocal]
Terminates in decimal ⇔ denominator (lowest terms) has only factors 2 and 5
```

## Worked examples

> [!example] **Worked example**
>
> **Problem.** Compute 5/8 + 2/3 and check the answer is plausible.
>
> **Solution.** LCM(8, 3) = 24, so $\tfrac{15}{24} + \tfrac{16}{24} = \tfrac{31}{24} = 1\tfrac{7}{24}$. Plausibility: both fractions are near or above $\tfrac12$, and $\tfrac23 > \tfrac58$, so a total just above 1 is exactly what we expect.

> [!example] **Worked example**
>
> **Problem.** Which is larger, 5/8 or 2/3?
>
> **Solution.** Rename to 24ths: $\tfrac{15}{24}$ vs $\tfrac{16}{24}$, so $\tfrac23$ is larger — by exactly $\tfrac{1}{24}$. Cross-multiplication gives the same verdict faster: $5\times3 = 15$ against $2\times8 = 16$.

## What you should be able to do

- Convert freely between fractions and decimals
- Add, subtract, multiply and divide fractions
- Place fractions and decimals correctly on the number line

## Summary — the mental toolkit

1. A fraction, a decimal and a division are one number in three notations — and one point on the number line.
2. Equivalence comes from multiplying by k/k = 1; you may multiply or divide top and bottom, never add.
3. Add and subtract only after renaming to a common denominator: the denominator is the unit.
4. Multiplying by a number below 1 makes things smaller; "multiplication makes bigger" is false.
5. Dividing by c/d means asking how many c/d fit — which is multiplying by the reciprocal d/c.
6. A fraction terminates as a decimal exactly when its reduced denominator has only 2s and 5s.
7. Estimate before you compute, and keep fractions exact until the final rounding.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
