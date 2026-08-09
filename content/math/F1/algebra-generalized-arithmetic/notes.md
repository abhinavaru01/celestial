# Algebra as Generalized Arithmetic

> [!intro] **Algebra is not a new subject — it is arithmetic with the numbers left unnamed.** Every law you already use ($a+b = b+a$, the distributive law, "do the same to both sides") stays exactly the same; the only change is that some numbers now wear letters because we do not yet know, or do not want to fix, their value. Seeing algebra this way removes most of the fear and nearly all of the sign errors.

## 1. What a letter actually means

A letter in algebra plays one of three roles, and confusing them causes real trouble:

- **Unknown** — a specific number we have not found yet. In $2x + 3 = 11$, $x$ *is* 4; we simply have not solved it yet.
- **Variable** — a quantity that genuinely varies. In $C = 5n$ (cost of $n$ pens), $n$ ranges over many values.
- **Generalised number** — a stand-in for *any* number, used to state a law. In $a(b+c) = ab + ac$, the letters mean "this is true whatever you put in".

The third role is the reason algebra exists. Arithmetic can only say $3\times(4+5) = 3\times4 + 3\times5$. Algebra says it once, for every number at once.

One more piece of grammar: $3x$ means $3\times x$ (the multiplication sign is dropped because $\times$ looks like $x$), $x^2$ means $x\times x$, and $\tfrac{x}{2}$ means $x \div 2$. A **term** is a product of numbers and letters ($5xy$); an **expression** is terms joined by $+$ or $-$; an **equation** claims two expressions are equal.

## 2. Substitution: the reality check

Substitution — replacing a letter with a number — is the single most useful habit in algebra, because it turns any claim into something checkable.

Evaluate $3x^2 - 2x + 1$ at $x = 4$: $3(16) - 8 + 1 = 48 - 8 + 1 = 41$. Note the order: powers before multiplication before addition, and brackets around the substituted value so that $x = -2$ gives $3(-2)^2 = 12$, not $-12$.

Use substitution to **test any simplification you are unsure of.** Is $(x+3)^2$ equal to $x^2 + 9$? Put $x = 1$: the left is $16$, the right is $10$. Not equal — settled in five seconds, no theory required. This is how you catch nearly every algebra slip before it becomes a wrong answer.

> [!example] **Testing a suspicious identity**
>
> **Problem.** A student claims 2(x + 5) = 2x + 5. Check it.
>
> **Solution.** Substitute $x = 1$. Left: $2(6) = 12$. Right: $2 + 5 = 7$. They differ, so the claim is false. The distributive law requires multiplying *both* terms: $2(x+5) = 2x + 10$.
>
> *One substitution decides any identity dispute.*

## 3. Collecting like terms

**Like terms** have identical letter parts — same letters, same powers. Only like terms combine, and the reason is just the distributive law read backwards:

$$5x + 3x = (5+3)x = 8x$$

You are counting: five $x$s plus three $x$s is eight $x$s. But $5x + 3y$ cannot be collected, exactly as "five apples plus three oranges" is not eight of anything. Likewise $x$ and $x^2$ are unlike: $x + x^2$ stays as it is, because a length and an area are different kinds of thing.

Watch the sign attached to each term — the sign *belongs to* the term that follows it. In $7x - 3y - 2x + 5y$, group as $(7x - 2x) + (-3y + 5y) = 5x + 2y$.

```formula Key formulas
Like terms: same letters raised to the same powers
5x + 3x = 8x;  5x + 3y stays as it is;  x + x² stays as it is
The sign in front of a term belongs to that term
```

## 4. The distributive law, forwards and backwards

One law does most of the work in all of algebra:

$$a(b + c) = ab + ac$$

Read **forwards** it is *expanding*: $3(2x + 5) = 6x + 15$. Read **backwards** it is *factorising*: $6x + 15 = 3(2x + 5)$. Same law, two directions, and knowing which direction a problem needs is half of algebraic skill.

The dangerous case is a minus outside the bracket, because the sign distributes too:

$$5 - 2(x - 3) = 5 - 2x + 6 = 11 - 2x$$

The $-2$ multiplies *both* the $x$ and the $-3$, and $(-2)\times(-3) = +6$. Rushing this line is the single most common source of lost marks in F1 algebra. Substituting $x = 0$ checks it instantly: the original is $5 - 2(-3) = 11$, and so is the answer.

> [!example] **Expand and simplify**
>
> **Problem.** Simplify 4(2x − 1) − 3(x − 5).
>
> **Solution.** Expand each bracket, keeping the signs: $8x - 4$ and $-3x + 15$. Collect: $(8x - 3x) + (-4 + 15) = 5x + 11$. Check with $x = 1$: original is $4(1) - 3(-4) = 4 + 12 = 16$; answer is $5 + 11 = 16$. ✓

## 5. Writing expressions from words — the real skill

Most algebra marks are lost before any manipulation happens, in the translation from English to symbols. Work in three steps: **name the unknown, write the relationship, then simplify.**

| English | Algebra |
|---|---|
| 5 more than $n$ | $n + 5$ |
| 5 less than $n$ | $n - 5$ (not $5 - n$) |
| $n$ less than 5 | $5 - n$ |
| twice $n$, then add 3 | $2n + 3$ |
| add 3 to $n$, then double | $2(n + 3)$ |
| $n$ divided by 4 | $n/4$ |

The last two rows matter enormously: brackets record the *order* of operations, and the two expressions are genuinely different ($n=1$ gives 5 and 8).

Always define the letter in words first — "let $n$ = the number of pens" — because an undefined letter is where word problems go wrong. If a shirt costs $x$ and trousers cost 200 more, then trousers are $x + 200$ and the pair costs $2x + 200$.

```formula Key formulas
a(b + c) = ab + ac  — expanding forwards, factorising backwards
a + b = b + a;  ab = ba  (commutative)
(a + b) + c = a + (b + c);  (ab)c = a(bc)  (associative)
Collect like terms only: 5x + 3x = 8x, but 5x + 3y does not combine
−a(b − c) = −ab + ac  — the sign distributes to every term
```

## What you should be able to do

- Write and evaluate algebraic expressions
- Collect like terms and use the distributive law
- Translate word statements into expressions

## Summary — the mental toolkit

1. A letter is an unknown, a variable, or a generalised number — know which role it is playing.
2. Substitution turns any algebraic claim into a checkable arithmetic one; use it constantly.
3. Only like terms (same letters, same powers) collect, because collecting is counting.
4. The distributive law forwards is expanding; backwards is factorising.
5. A minus outside a bracket multiplies every term inside, sign included.
6. Translate word problems by naming the unknown first, then writing the relationship.
7. Brackets encode order: 2n + 3 and 2(n + 3) are different expressions.

---

_A deep-dive topic in The Ultimate Learner — every one of the six learning layers, at exam depth._
