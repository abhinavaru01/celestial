# Ratio, Proportion & Percentage

> **Why this topic matters more than almost any other.** Ratio is not a chapter — it is a *way of comparing quantities* that reappears constantly: speed (physics), density (physics), concentration and the mole (chemistry), inheritance ratios (biology), scale drawings, currency, interest, probability, and every "per" you will ever meet. Learn it once, deeply, here, and dozens of later topics become *reuse* instead of new learning. That is compression in action.

## 1. The one idea: comparison by division

When you compare two quantities by **subtraction** you ask *"how much more?"* When you compare by **division** you ask *"how many times as much?"* — and that second question is a **ratio**.

If a recipe uses 2 cups of flour and 1 cup of sugar, the ratio of flour to sugar is
$$ 2 : 1 \quad\text{which means}\quad \frac{2}{1} = 2 \text{ — twice as much flour as sugar.}$$

A ratio $a : b$ is really the fraction $\dfrac{a}{b}$ wearing different clothes. Everything about ratios follows from that.

### Intuition first
Picture the flour and sugar as bars — the ratio is the *relationship* of their lengths:

```svg
<svg viewBox="0 0 360 120" role="img" aria-label="Bar model of the ratio 2 to 1" xmlns="http://www.w3.org/2000/svg">
  <text x="8" y="34" font-size="12" fill="#9aa8c4">flour</text>
  <rect x="60" y="20" width="80" height="24" rx="4" fill="#6366f1"/>
  <rect x="142" y="20" width="80" height="24" rx="4" fill="#6366f1"/>
  <text x="8" y="80" font-size="12" fill="#9aa8c4">sugar</text>
  <rect x="60" y="66" width="80" height="24" rx="4" fill="#6ee7a8"/>
  <text x="240" y="38" font-size="13" fill="#e6ecff">2 parts</text>
  <text x="240" y="84" font-size="13" fill="#e6ecff">1 part  →  ratio 2 : 1</text>
</svg>
```

Ratio doesn't care about the actual amounts — it cares about the **relationship** between them. Double both (4 cups flour, 2 sugar) and the ratio $4:2$ is *the same relationship* as $2:1$. This is the key move: **a ratio is preserved under scaling**, which is exactly why it's so useful — it describes the *shape* of a comparison independent of size.

### Rigour
- $a : b = ka : kb$ for any non-zero $k$ (multiply/divide both parts by the same number → same ratio). This is why we **simplify** ratios: $6:4 = 3:2$.
- Order matters: $2:1 \ne 1:2$.
- A ratio compares quantities **in the same unit**. "3 kg to 500 g" must first become "3000 g to 500 g" $= 6:1$.

## 2. Part-to-part vs part-to-whole

This distinction traps more students than any other (see Common Mistakes).

- **Part-to-part:** flour : sugar $= 2 : 1$.
- **Part-to-whole:** flour : total. Total parts $= 2 + 1 = 3$, so flour is $\dfrac{2}{3}$ of the mixture, sugar $\dfrac{1}{3}$.

**Dividing a quantity in a given ratio.** Split ₹600 between A and B in the ratio $2:3$.
1. Total parts $= 2 + 3 = 5$.
2. One part $= 600 \div 5 = 120$.
3. A gets $2 \times 120 = 240$; B gets $3 \times 120 = 360$. (Check: $240 + 360 = 600$. ✓)

The move — **total parts → one part → each share** — is the workhorse. Memorise the *process*, not any formula.

## 3. Proportion: two equal ratios

A **proportion** says two ratios are equal: $\dfrac{a}{b} = \dfrac{c}{d}$, often written $a : b :: c : d$.

The engine that solves proportions is **cross-multiplication**:
$$ \frac{a}{b} = \frac{c}{d} \iff ad = bc. $$

This is not magic — multiply both sides by $bd$ and the denominators cancel.

### The unitary method (find one, then scale)
*If 5 pens cost ₹40, what do 8 pens cost?*
- One pen $= 40 \div 5 = ₹8$ (find the value of **one unit**).
- 8 pens $= 8 \times 8 = ₹64$.

The unitary method is proportion done in two safe steps and almost never leads you astray. Use it whenever a problem feels slippery.

### Direct vs inverse proportion
- **Direct:** more → more, at a constant *ratio*. Distance and cost of fuel. $y = kx$.
- **Inverse:** more → less, at a constant *product*. Speed and time for a fixed distance; workers and days for a fixed job. $xy = k$, i.e. $x_1 y_1 = x_2 y_2$.

*4 workers finish a wall in 6 days. How long for 3 workers?* Inverse: $4 \times 6 = 3 \times t \Rightarrow t = 8$ days. (Fewer workers → more days — the *product* stays 24 worker-days.)

## 4. Percentage: a ratio with a fixed denominator of 100

"Per cent" literally means **per hundred**. A percentage is just a ratio (a fraction) rewritten with denominator 100, which makes different fractions instantly comparable.

$$ \frac{3}{4} = \frac{75}{100} = 75\% \qquad 0.6 = \frac{60}{100} = 60\% \qquad 45\% = \frac{45}{100} = 0.45 = \frac{9}{20}. $$

### The three moves you need

**(a) Percentage *of* a quantity.** "$p\%$ of $N$" $= \dfrac{p}{100}\times N$.
> 15% of 240 $= 0.15 \times 240 = 36$.

**(b) Percentage change.**
$$ \text{% change} = \frac{\text{new} - \text{old}}{\text{old}} \times 100. $$
Always divide by the **original**, never the new value. A price rising 20 → 25 is a $\dfrac{5}{20}\times100 = 25\%$ increase.

**(c) Reverse percentage (the hard one).** *After a 20% discount an item costs ₹480. What was the original price?*
The sale price is **80%** of the original: $0.8 \times \text{orig} = 480 \Rightarrow \text{orig} = 480 \div 0.8 = ₹600.$
> The trap is dividing 480 by 1.2 or adding 20% of 480. Set it up as *"sale price is 80% of original"* and solve — that is a proportion.

### Successive percentages don't add
A 10% rise then a 10% fall is **not** back to the start. Start 100 → $110$ → $110 \times 0.9 = 99$. You end 1% *down*. Percentages compose by **multiplying factors** ($1.10 \times 0.90 = 0.99$), not by adding. This idea returns as compound growth, interest, and depreciation later — same mechanism.

## 5. The payoff: a rate is a ratio of *unlike* quantities

Everything above compared like things (rupees to rupees, cups to cups). A **rate** compares **unlike** things by division:

$$ \text{speed} = \frac{\text{distance}}{\text{time}} \;\left(\tfrac{\text{km}}{\text{h}}\right), \quad \text{density} = \frac{\text{mass}}{\text{volume}}, \quad \text{price} = \frac{\text{cost}}{\text{quantity}}. $$

A rate is a ratio you *keep the units on*. When you reach **Physics F1 — Motion**, "speed = distance ÷ time" will not be a new formula to learn: it is exactly this — a rate, a ratio of unlike quantities. The physics topic *reuses* what you build here. **This is the single clearest example in the whole program of teaching something once and never re-teaching it.** Unit conversion (km/h to m/s) is likewise just scaling a ratio.

## 6. Summary — the mental toolkit
1. Ratio = comparison by division; preserved under scaling; simplify freely; same units first.
2. Part-to-part vs part-to-whole: add the parts to get the whole.
3. Divide in a ratio: total parts → one part → each share.
4. Proportion = equal ratios; solve by cross-multiplication or the safe unitary method.
5. Direct ($y=kx$) vs inverse ($xy=k$) proportion.
6. Percentage = ratio out of 100; know *of*, *change* (÷ original), and *reverse* (set up as "X% of original").
7. Successive % multiply factors; they don't add.
8. A rate is a ratio of unlike quantities — the bridge to physics and chemistry.
