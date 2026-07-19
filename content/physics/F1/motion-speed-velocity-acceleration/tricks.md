# Tricks & Problem-Solving Techniques — Motion

### 1. The ×3.6 shortcut for m/s ↔ km/h
Multiply m/s by **3.6** to get km/h; divide by 3.6 to reverse.
> 25 m/s × 3.6 = 90 km/h. (Because 3600 s/h ÷ 1000 m/km = 3.6.) Never derive the whole ratio under time pressure — just remember 3.6.

### 2. List u, v, a, s, t before touching an equation
Kinematics problems are "given three of {u, v, a, s, t}, find another." Write the five symbols, fill in what's known, and pick the equation that contains your knowns + unknown:
- no $s$? → $v = u + at$
- no $v$? → $s = ut + \tfrac12at^2$
- no $t$? → $v^2 = u^2 + 2as$

This turns every problem into pattern-matching instead of guessing.

### 3. "Slope is the rate, area is the amount" — read graphs instantly
On any motion graph: the **slope** tells you the rate (speed on d–t, acceleration on v–t); the **area** under a v–t line tells you the distance. Two phrases handle every graph question.

### 4. Use the v–t graph to derive equations you forget
Forgot $s = ut + \tfrac12 at^2$? Draw the v–t trapezium: a rectangle of height $u$ (area $ut$) plus a triangle of height $at$ (area $\tfrac12 \cdot t \cdot at = \tfrac12 at^2$). Add them — there's your equation, reconstructed from a picture.

### 5. Average velocity for constant acceleration = (u+v)/2
When acceleration is constant, the average velocity is just the midpoint of start and end: $\bar v = \frac{u+v}{2}$. So $s = \frac{u+v}{2}\,t$ — often the fastest route when you know $u$, $v$, and $t$.

### 6. Free fall: use g ≈ 10 for a quick estimate, 9.8 for accuracy
For mental checks, $g = 10\text{ m/s}^2$ makes numbers clean (drop for 3 s → v ≈ 30 m/s). Switch to 9.8 for a final answer if precision is asked.

### 7. Symmetry of vertical throws
Throw something straight up: time up = time down, and it returns to your hand at the **same speed** it left (opposite direction). Use the symmetry to halve the work — find the time to the top, double it for total flight.

### 8. Cross-check with a second equation
After solving for $v$ with $v = u + at$, verify with $v^2 = u^2 + 2as$. If they disagree, you slipped a sign or a unit. Two-equation confirmation catches most exam errors cheaply.

### 9. Sanity-bracket the answer
Before trusting a computed speed, ask "is this physically sane?" A dropped stone reaching 500 m/s after 2 s is impossible ($g\times2 ≈ 20$ m/s). Estimation guards against decimal slips — the same habit you built in the ratio topic.

### 10. Direction bookkeeping with signs
Pick + direction once, write every vector (u, v, a, s) with the correct sign, and let the algebra handle the rest. A negative answer for displacement just means "in the negative direction" — that's information, not an error.
