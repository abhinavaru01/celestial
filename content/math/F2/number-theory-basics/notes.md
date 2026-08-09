# Integer Number Theory Basics

> [!intro] **Number theory is the study of whole numbers' hidden structure** — and it is the most directly useful "pure" topic you will meet. Primes are the atoms of arithmetic; HCF and LCM are what you are really doing when you simplify a fraction or add two of them; and divisibility, factorisation and modular thinking underpin cryptography, hashing and every "is it even?" check in code.

## 1. Divisibility and the language of factors

$a$ **divides** $b$ (written $a \mid b$) when $b = a \times k$ for some integer $k$ — there is no remainder. Then $a$ is a **factor** (or divisor) of $b$, and $b$ is a **multiple** of $a$.

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

Note the 6 test carefully: it works because 2 and 3 share no factor. The same trick fails for 8 = 2 × 4, since 2 and 4 are not coprime — passing the 2 and 4 tests does not guarantee divisibility by 8.

## 2. Primes: the atoms of arithmetic

A **prime** has exactly two distinct factors: 1 and itself. A **composite** has more.

**1 is not prime** — it has only one factor. This is not pedantry: if 1 were prime, factorisations would no longer be unique ($6 = 2\times3 = 1\times2\times3 = 1\times1\times2\times3\ldots$), destroying the theorem below. **2 is prime**, and is the only even prime, because every other even number has 2 as an extra factor.

The primes below 30, worth memorising: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

**The Fundamental Theorem of Arithmetic:** every integer greater than 1 factorises into primes in exactly one way, apart from the order.

$$360 = 2^3 \times 3^2 \times 5$$

That uniqueness is what makes prime factorisation such a powerful tool — it is a number's fingerprint, and almost every question about factors becomes easy once you have it.

**Testing primality efficiently:** to check whether $n$ is prime, trial-divide by primes up to $\sqrt{n}$ only. If $n = ab$ with both factors above $\sqrt n$, then $ab > n$ — impossible. So for 97, testing 2, 3, 5, 7 suffices ($\sqrt{97} \approx 9.8$), and 97 is prime.

> [!example] **Prime factorisation by repeated division**
>
> **Problem.** Find the prime factorisation of 360.
>
> **Solution.** Divide by the smallest prime repeatedly: $360 \div 2 = 180$, $\div 2 = 90$, $\div 2 = 45$; 45 is odd, so move to 3: $45 \div 3 = 15$, $\div 3 = 5$; 5 is prime. Collecting: $360 = 2^3 \times 3^2 \times 5$.
>
> *Always work upward through the primes — you cannot miss a factor that way.*

## 3. HCF and LCM from the factorisation

Once you have prime factorisations, both quantities read straight off:

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

Two numbers with HCF 1 are **coprime** — they share no prime factor. That is exactly the condition that makes a fraction fully simplified.

```formula Key formulas
HCF: shared primes, lowest powers
LCM: all primes, highest powers
HCF(a,b) × LCM(a,b) = a × b
Coprime ⇔ HCF = 1 ⇔ the fraction a/b is in lowest terms
```

## 4. Where this pays off

Number theory is not decorative — it is what you have quietly been using.

- **Simplifying fractions** is dividing by the HCF. $\tfrac{18}{24}$: HCF is 6, giving $\tfrac34$.
- **Adding fractions** uses the LCM as the common denominator — the smallest one keeps the arithmetic small.
- **Computer science** relies on it constantly: even/odd tests are divisibility by 2, hash tables use prime moduli to spread values evenly, and public-key cryptography rests on the fact that multiplying two large primes is easy while factorising the product is not.
- **Chemistry** balances equations by finding the LCM of the atom counts.

*A worked scheduling problem.* Two buses leave a stand together; one returns every 12 minutes, the other every 18. When do they next leave together? This is the LCM: $\mathrm{LCM}(12,18) = 36$ minutes. Ask instead "what is the largest identical group we can split 12 and 18 items into?" and it is the HCF, 6.

Same two numbers, opposite questions — which is exactly why the wording matters more than the computation.

> [!example] **Choosing HCF or LCM**
>
> **Problem.** A gardener has 12 roses and 18 tulips and wants identical bunches using all the flowers. What is the largest number of bunches, and what does each contain?
>
> **Solution.** Identical groups from both totals means the HCF: $\mathrm{HCF}(12,18) = 6$ bunches. Each holds $12\div6 = 2$ roses and $18\div6 = 3$ tulips.
>
> *Splitting into equal groups is always HCF; coinciding events are always LCM.*

```formula Key formulas
a | b means b = ak for an integer k (no remainder)
Divisibility: 2 (last digit), 3 and 9 (digit sum), 4 (last two digits), 5 (0 or 5), 6 (2 and 3)
Prime = exactly two factors; 1 is not prime; 2 is the only even prime
Fundamental Theorem: prime factorisation is unique up to order
Test primality by trial division up to √n
HCF × LCM = a × b
```

## What you should be able to do

- Test divisibility and identify primes
- Find HCF and LCM
- Use prime factorisation

## Summary — the mental toolkit

1. Factors divide a number; multiples are built from it — finite versus infinite.
2. Divisibility tests come from how 10 behaves modulo the divisor.
3. A prime has exactly two factors; 1 is excluded so that factorisation stays unique.
4. Every integer above 1 has a unique prime fingerprint (Fundamental Theorem).
5. Check primality by trial division only up to √n.
6. HCF = shared primes at lowest powers; LCM = all primes at highest powers; HCF × LCM = ab.
7. Equal groups → HCF; events coinciding → LCM. The wording decides, not the numbers.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
