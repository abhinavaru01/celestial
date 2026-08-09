# Exponents & Scientific Notation

> [!intro] **Exponents are the notation that makes very large and very small numbers usable.** Without them, chemistry could not write Avogadro's number, physics could not write the speed of light, and computer science could not talk about $2^{32}$. Every "law of indices" you are about to meet is not a rule to memorise — it is a fact about counting repeated factors, and if you ever forget one you can rebuild it in five seconds by writing the factors out.

## 1. What a power actually records

$a^n$ means $a$ multiplied by itself $n$ times. The **base** $a$ is what is repeated; the **exponent** (or index) $n$ counts how many.

$$2^5 = 2\times2\times2\times2\times2 = 32$$

Two habits prevent most errors immediately:

- **$a^n$ is not $a\times n$.** $2^5 = 32$, not 10. The exponent counts factors, it is not one of them.
- **The base is only what the exponent touches.** In $-3^2$ the exponent applies to 3 only, so it means $-(3^2) = -9$. In $(-3)^2$ the bracket makes $-3$ the base, giving $+9$. This single distinction is worth more marks than any law below.

Sign behaviour follows at once: a negative base raised to an **even** power is positive (the minus signs pair off); to an **odd** power it stays negative.

## 2. The laws of indices — and why each is obvious

Do not memorise these as five separate rules. Each is what happens when you write the factors out.

**Multiplication — add the exponents.** $a^m \times a^n = a^{m+n}$, because $(a\,a\,a)(a\,a) = a\,a\,a\,a\,a$. Three factors then two factors is five factors.

**Division — subtract.** $a^m \div a^n = a^{m-n}$, because the shared factors cancel:

$$\frac{a^5}{a^2} = \frac{a\,a\,a\,a\,a}{a\,a} = a^3$$

**Power of a power — multiply.** $(a^m)^n = a^{mn}$: $(a^2)^3 = a^2 a^2 a^2 = a^6$. Three groups of two factors.

**Power of a product — distribute.** $(ab)^n = a^n b^n$, since the factors can be reordered.

**But powers do NOT distribute over a sum.** $(a+b)^2 \ne a^2 + b^2$. Test it: $a=b=1$ gives 4 on the left and 2 on the right. This is the same error as $(x+3)^2 = x^2+9$ from F1 algebra, and it never stops being tempting.

```formula Key formulas
aᵐ × aⁿ = aᵐ⁺ⁿ
aᵐ ÷ aⁿ = aᵐ⁻ⁿ
(aᵐ)ⁿ = aᵐⁿ
(ab)ⁿ = aⁿbⁿ  and  (a/b)ⁿ = aⁿ/bⁿ
(a + b)ⁿ ≠ aⁿ + bⁿ  — powers never distribute over a sum
```

## 3. Zero and negative exponents: forced by the pattern

Why is $a^0 = 1$? Not by decree — by consistency. Divide $a^3$ by $a^3$: the answer is plainly 1, and the subtraction law says it is $a^{3-3} = a^0$. So $a^0$ must equal 1 for the laws to hold together.

The same argument continues downward. Watch the pattern in $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$: each step down **halves**. Continue and $2^{-1} = \tfrac12$, $2^{-2} = \tfrac14$.

$$a^{-n} = \frac{1}{a^n}$$

So **a negative exponent means "reciprocal", never "negative number"**. $2^{-3} = \tfrac18$, a positive number. Students who read the minus as a sign rather than as an instruction to flip lose marks constantly.

One caveat worth stating: $0^0$ is left undefined, because the two patterns that force $a^0 = 1$ and $0^n = 0$ disagree there.

> [!example] **Simplifying with negative indices**
>
> **Problem.** Simplify $(2x^{-2})^3 \times x^4$.
>
> **Solution.** Distribute the outer power: $2^3 x^{-6} = 8x^{-6}$. Multiply: $8x^{-6} \times x^4 = 8x^{-2}$. Written without negative indices, $\dfrac{8}{x^2}$.
>
> *Distribute the outer power to every factor inside — the 2 gets cubed too.*

## 4. Scientific notation: one digit, then the size

Scientific notation writes any number as

$$a \times 10^n, \qquad 1 \le a < 10, \; n \text{ an integer}.$$

The mantissa $a$ carries the **precision**; the power of ten carries the **size**. Separating those two jobs is the whole point.

- $4\,500\,000 = 4.5\times10^6$ (decimal moved 6 places left, so $n$ is positive).
- $0.00032 = 3.2\times10^{-4}$ (moved 4 places right, so $n$ is negative).

The direction rule confuses people, so anchor it: **a big number has a positive power; a small number (less than 1) has a negative power.** Check the sign against that fact before anything else.

Arithmetic is easy because the two parts are handled separately:

$$(3\times10^4)\times(2\times10^5) = 6\times10^{9}$$

Multiply the mantissas, add the exponents. If the mantissa leaves the range — $(5\times10^4)(4\times10^3) = 20\times10^7$ — renormalise to $2\times10^8$.

For **addition** the exponents must match first, exactly as denominators must match for fractions: $3\times10^5 + 4\times10^4 = 3\times10^5 + 0.4\times10^5 = 3.4\times10^5$.

```formula Key formulas
a × 10ⁿ with 1 ≤ a < 10
Multiply: multiply mantissas, ADD exponents
Divide: divide mantissas, SUBTRACT exponents
Add/subtract: make the exponents equal FIRST
Large number → positive n;  number below 1 → negative n
```

## 5. Where this is used everywhere else

This topic is a service topic — its payoff is in other subjects, which is exactly the compression idea.

| Field | Quantity | Why exponents are essential |
|---|---|---|
| Chemistry | Avogadro $6.022\times10^{23}$ | writing 24 digits is unusable |
| Physics | $c = 3\times10^8$ m/s | order of magnitude is the meaningful part |
| Biology | cell $\approx 10^{-5}$ m | negative powers for the very small |
| CS | $2^{10} = 1024$ bytes | binary powers, memory sizes |

Two practical consequences follow:

- **Prefixes are powers of ten.** kilo $10^3$, mega $10^6$, giga $10^9$, milli $10^{-3}$, micro $10^{-6}$, nano $10^{-9}$. Converting units is therefore just adding exponents.
- **Comparing sizes becomes subtraction.** How many times bigger is $6\times10^{23}$ than $3\times10^8$? Divide: $2\times10^{15}$. No long division, one subtraction of exponents.

> [!example] **A comparison in one line**
>
> **Problem.** A red blood cell is about $8\times10^{-6}$ m across; a human is about $1.7$ m tall. How many times taller is the human?
>
> **Solution.** Divide: $\dfrac{1.7}{8\times10^{-6}} = \dfrac{1.7}{8}\times10^{6} \approx 0.21\times10^6 = 2.1\times10^5$. About two hundred thousand times.
>
> *Dividing by a negative power multiplies — the exponents do the heavy lifting.*

```formula Key formulas
aᵐaⁿ = aᵐ⁺ⁿ;  aᵐ/aⁿ = aᵐ⁻ⁿ;  (aᵐ)ⁿ = aᵐⁿ;  (ab)ⁿ = aⁿbⁿ
a⁰ = 1 (a ≠ 0);  a⁻ⁿ = 1/aⁿ
(−a)^even > 0;  (−a)^odd < 0;  −a² = −(a²) but (−a)² = +a²
Scientific notation: a × 10ⁿ with 1 ≤ a < 10
Prefixes: k 10³, M 10⁶, G 10⁹, m 10⁻³, µ 10⁻⁶, n 10⁻⁹
```

## What you should be able to do

- Apply the laws of exponents
- Write numbers in scientific notation
- Handle negative and zero exponents

## Summary — the mental toolkit

1. aⁿ counts repeated factors — it is never a × n.
2. Every index law is provable in five seconds by writing the factors out.
3. a⁰ = 1 and a⁻ⁿ = 1/aⁿ are forced by consistency with the division law, not decreed.
4. A negative exponent means reciprocal, not a negative number.
5. Powers distribute over products and quotients, never over sums.
6. Scientific notation splits precision (mantissa) from size (power of ten).
7. Multiply/divide → add/subtract exponents; add/subtract → match exponents first.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
