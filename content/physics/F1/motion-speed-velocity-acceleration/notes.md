# Motion: Speed, Velocity & Acceleration

> **You already know most of this.** In *Math F1 — Ratio, Proportion & Percentage* you learned that a **rate is a ratio of unlike quantities**. Speed is exactly that: a ratio of distance to time. We are **not** going to re-teach "divide distance by time" as if it were new — we're going to *apply* the rate idea you already own to the physical world, then push it further into velocity, acceleration, and graphs. This reuse is deliberate: it's how the program covers physics in less time without losing anything.

## 1. Speed is a rate (the reuse)

$$ \text{speed} = \frac{\text{distance travelled}}{\text{time taken}} $$

That fraction is a **rate** — a ratio of unlike quantities (metres and seconds), carrying its units, exactly as you met with price (₹/kg) and density (mass/volume). Everything you learned about rates transfers:
- **Scaling to convert units** is just simplifying a ratio: $5\text{ m/s} \times \frac{3600\text{ s}}{1\text{ h}} \times \frac{1\text{ km}}{1000\text{ m}} = 18\text{ km/h}$. (Multiply by 3.6 to go m/s → km/h; divide by 3.6 to go back.)
- **Average speed is total-over-total**, never the plain average of two speeds — the *exact* trap you met in the ratio quiz.

$$ \text{average speed} = \frac{\text{total distance}}{\text{total time}}. $$

> **Worked example.** A car does 60 km at 30 km/h, then 60 km at 60 km/h. Average speed? Time = 60/30 + 60/60 = 2 + 1 = 3 h; total distance 120 km; average = 120/3 = **40 km/h** — not 45. Same reasoning as mixing quantities in a ratio.

## 2. Distance vs displacement, speed vs velocity (scalar vs vector)

Physics adds one idea ratios didn't need: **direction**.

- **Distance** — how much ground you covered (a **scalar**, no direction). Always ≥ 0.
- **Displacement** — the straight-line change in position, *with direction* (a **vector**). Can be zero even after a long walk if you return to start.
- **Speed** = distance / time (scalar). **Velocity** = displacement / time (vector — it has direction).

> Walk 3 km east then 3 km west in 2 hours: distance = 6 km, speed = 3 km/h; displacement = 0, velocity = 0. The numbers differ because one tracks *path length*, the other tracks *net change in position*.

This scalar/vector distinction is the seed of the full vector treatment you'll meet in **Physics I1** — planted here so it's familiar, not formal yet.

## 3. Acceleration is *also* a rate — of velocity this time

The rate idea now stacks on itself. Acceleration is the **rate of change of velocity**:

$$ a = \frac{\text{change in velocity}}{\text{time taken}} = \frac{v - u}{t}, $$

where $u$ = initial velocity, $v$ = final velocity. Units: $\frac{\text{m/s}}{\text{s}} = \text{m/s}^2$.

- **Positive** acceleration → speeding up (in the chosen positive direction).
- **Negative** acceleration (deceleration/retardation) → slowing down.
- Acceleration is a vector: a car turning a corner at constant *speed* is still accelerating, because its velocity's *direction* is changing.

> **Worked example.** A bike goes from rest to 20 m/s in 5 s. $a = (20 - 0)/5 = 4\text{ m/s}^2$. Each second it gains 4 m/s.

## 4. Motion graphs — where slope and area tell the story

Graphs turn motion into pictures. This reuses **Data & graphs (Math F1.7)** — reading slopes and areas.

### Distance–time (d–t) graph
- **Slope = speed.** Steeper line → faster. Horizontal line → at rest (distance not changing).
- A straight line → constant speed; a curve → changing speed.

### Velocity–time (v–t) graph — the workhorse
- **Slope = acceleration.** (Rise in velocity over run in time — a rate again.)
- **Area under the line = distance travelled.** A horizontal line (constant velocity) gives a rectangle: area = v × t = distance. A sloped line gives a triangle/trapezium.

```svg
<svg viewBox="0 0 300 180" role="img" aria-label="Velocity-time graph: slope is acceleration, area is distance" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="150" x2="280" y2="150" stroke="#6b7a99"/>
  <line x1="40" y1="150" x2="40" y2="20" stroke="#6b7a99"/>
  <text x="150" y="172" font-size="11" fill="#9aa8c4" text-anchor="middle">time →</text>
  <text x="14" y="90" font-size="11" fill="#9aa8c4" transform="rotate(-90 14 90)" text-anchor="middle">velocity →</text>
  <polygon points="40,150 240,60 240,150" fill="rgba(99,102,241,0.25)"/>
  <line x1="40" y1="150" x2="240" y2="60" stroke="#8fa0ff" stroke-width="2.5"/>
  <text x="150" y="135" font-size="11" fill="#a8c0ff" text-anchor="middle">area = distance</text>
  <text x="205" y="95" font-size="11" fill="#6ee7a8" transform="rotate(-24 205 95)">slope = a</text>
</svg>
```

> This "slope is the rate, area is the accumulation" pattern is exactly what becomes **derivatives and integrals** in Intermediate. You are seeing calculus in picture form two years before you formalise it — another deliberate reuse.

## 5. The equations of uniformly accelerated motion

When acceleration is **constant**, three equations follow directly from the definitions above (no new physics — just algebra applied to "slope = a" and "area = distance"):

$$ v = u + at \qquad s = ut + \tfrac{1}{2}at^2 \qquad v^2 = u^2 + 2as $$

where $s$ = displacement, $u$ = initial velocity, $v$ = final velocity, $a$ = acceleration, $t$ = time.

- The **first** is just the definition of acceleration rearranged.
- The **second** is the area under a v–t graph (rectangle $ut$ + triangle $\tfrac12 at^2$).
- The **third** is the first two combined to remove $t$ — useful when you don't know the time.

> **Worked example.** A car accelerates from 10 m/s at $2\text{ m/s}^2$ for 4 s.
> $v = 10 + 2\times4 = 18\text{ m/s}$.
> $s = 10\times4 + \tfrac12\times2\times4^2 = 40 + 16 = 56\text{ m}$.
> Check with the third equation: $v^2 = 10^2 + 2\times2\times56 = 100 + 224 = 324$, so $v = 18$. ✓ (Cross-checking with a second equation is a habit worth building.)

## 6. Free fall — one important special case
Near Earth's surface, objects fall with a constant acceleration $g \approx 9.8\text{ m/s}^2$ (often approximated as 10 for quick estimates), ignoring air resistance. Every equation above applies with $a = g$. Drop a stone from rest: after 2 s, $v = gt = 9.8\times2 = 19.6\text{ m/s}$; distance $= \tfrac12 g t^2 = \tfrac12\times9.8\times4 = 19.6\text{ m}$.

## 7. Summary — what's new vs what's reused
| Reused from Math F1 | New in this topic |
|---|---|
| Rate = ratio of unlike quantities | Direction: scalar vs vector (distance/displacement, speed/velocity) |
| Average = total ÷ total | Acceleration as rate-of-change of velocity |
| Unit scaling (m/s ↔ km/h) | Motion graphs: slope = rate, area = distance |
| Reading slopes/areas of graphs | The three equations of uniform acceleration; free fall |

The compression is visible right here: about half this topic is *your ratio skills in a new costume*. Master motion and you've also rehearsed the rate thinking that chemistry (rates, concentration) and later calculus will demand.
