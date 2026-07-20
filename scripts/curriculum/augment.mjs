// Depth augmentation: key formulas/facts + a worked example per topic, keyed by
// topic id (subject.tier.slug). Merged in by generate-content.mjs when the base
// dataset does not already provide the field. Chemistry carries its own inline
// depth; this file deepens math, physics, biology, english and cs.
export default {
  // ============================================================ MATH
  'math.F1.number-sense-estimation': {
    formulas: ['a − b on the number line: start at a, move |b| left', '−(−x) = x', 'Estimate: round each value to 1 significant figure first'],
    example: { q: 'Estimate 6120 ÷ 29 to check a calculator answer of 21.1.', solution: 'Round: 6000 ÷ 30 = 200. The exact answer should be ~200, so 21.1 is wrong by a factor of 10 — the decimal slipped. Correct answer ≈ 211.' } },
  'math.F1.fractions-decimals': {
    formulas: ['a/b = a ÷ b', 'a/b + c/d = (ad + bc)/(bd)', '(a/b) ÷ (c/d) = (a/b) × (d/c)'],
    example: { q: 'Compute 2/3 + 1/4 and 5/6 ÷ 2/3.', solution: '2/3 + 1/4 = 8/12 + 3/12 = 11/12. 5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12 = 5/4.' } },
  'math.F1.algebra-generalized-arithmetic': {
    formulas: ['a(b + c) = ab + ac (distributive law)', 'Like terms: only same variable parts combine', 'To evaluate, substitute the value for the variable'],
    example: { q: 'Simplify 3(x + 4) − 2x.', solution: 'Distribute: 3x + 12 − 2x. Combine like terms: (3x − 2x) + 12 = x + 12.' } },
  'math.F1.linear-equations-one-variable': {
    formulas: ['Do the same operation to both sides (keep balance)', 'Undo operations in reverse order to isolate x', 'Check by substituting the solution back'],
    example: { q: 'Solve 5x − 3 = 2x + 9.', solution: 'Subtract 2x: 3x − 3 = 9. Add 3: 3x = 12. Divide by 3: x = 4. Check: 5(4)−3=17, 2(4)+9=17. ✓' } },
  'math.F1.geometry-angles-triangles': {
    formulas: ['Angles on a straight line sum to 180°', 'Angles at a point sum to 360°', 'Interior angles of a triangle sum to 180°', 'Congruence: SSS, SAS, ASA, RHS'],
    example: { q: 'A triangle has angles x, 2x and 90°. Find x.', solution: 'x + 2x + 90 = 180 → 3x = 90 → x = 30°. The angles are 30°, 60°, 90°.' } },
  'math.F1.data-graphs-i': {
    formulas: ['Mean = (sum of values) ÷ (number of values)', 'Median = middle value of ordered data', 'Mode = most frequent value'],
    example: { q: 'Find the mean and median of 3, 7, 7, 2, 6.', solution: 'Mean = (3+7+7+2+6)/5 = 25/5 = 5. Ordered: 2,3,6,7,7 → median = 6.' } },
  'math.F2.linear-relationships-coordinate-plane': {
    formulas: ['y = mx + c', 'slope m = (y₂ − y₁)/(x₂ − x₁)', 'y-intercept = value of y when x = 0'],
    example: { q: 'Find the equation of the line through (0, 2) and (3, 11).', solution: 'm = (11 − 2)/(3 − 0) = 9/3 = 3. Intercept c = 2. So y = 3x + 2.' } },
  'math.F2.systems-linear-equations': {
    formulas: ['Elimination: add/subtract to cancel one variable', 'Substitution: solve one equation for a variable, sub into the other', 'Parallel lines (equal slope) → no solution'],
    example: { q: 'Solve 2x + y = 8 and x − y = 1.', solution: 'Add the equations: 3x = 9 → x = 3. Then y = 8 − 2(3) = 2. Solution (3, 2).' } },
  'math.F2.polynomials-factoring': {
    formulas: ['(a + b)² = a² + 2ab + b²', '(a − b)² = a² − 2ab + b²', 'a² − b² = (a + b)(a − b)', 'x² + bx + c = (x + p)(x + q) where p+q=b, pq=c'],
    example: { q: 'Factor x² + 7x + 12.', solution: 'Two numbers multiplying to 12 and adding to 7 are 3 and 4. So x² + 7x + 12 = (x + 3)(x + 4).' } },
  'math.F2.geometry-similarity-pythagoras': {
    formulas: ['Pythagoras: a² + b² = c² (c = hypotenuse)', 'Similar shapes: corresponding sides in a fixed ratio (scale factor k)', 'Length ×k → area ×k² → volume ×k³'],
    example: { q: 'A right triangle has legs 6 and 8. Find the hypotenuse.', solution: 'c = √(6² + 8²) = √(36 + 64) = √100 = 10.' } },
  'math.F2.probability-statistics-i': {
    formulas: ['P(event) = favourable outcomes ÷ total outcomes', 'P(not A) = 1 − P(A)', '0 ≤ P ≤ 1'],
    example: { q: 'A bag has 3 red and 5 blue balls. P(red)?', solution: 'P(red) = 3/(3+5) = 3/8 = 0.375. P(not red) = 1 − 3/8 = 5/8.' } },
  'math.F2.number-theory-basics': {
    formulas: ['HCF = product of common prime factors', 'LCM = product of all primes to highest power', 'HCF(a,b) × LCM(a,b) = a × b'],
    example: { q: 'Find HCF and LCM of 12 and 18.', solution: '12 = 2²·3, 18 = 2·3². HCF = 2·3 = 6. LCM = 2²·3² = 36. Check: 6×36 = 216 = 12×18. ✓' } },
  'math.I1.quadratics': {
    formulas: ['ax² + bx + c = 0 → x = (−b ± √(b² − 4ac))/(2a)', 'Discriminant Δ = b² − 4ac: Δ>0 two roots, Δ=0 one, Δ<0 none (real)', 'Vertex at x = −b/(2a)'],
    example: { q: 'Solve x² − 4x − 5 = 0.', solution: 'Factor: (x − 5)(x + 1) = 0 → x = 5 or x = −1. (Check Δ = 16 + 20 = 36 > 0 → two real roots.)' } },
  'math.I1.coordinate-geometry': {
    formulas: ['Distance = √((x₂ − x₁)² + (y₂ − y₁)²)', 'Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)', 'Circle: (x − h)² + (y − k)² = r²', 'Perpendicular slopes multiply to −1'],
    example: { q: 'Distance between (1, 2) and (4, 6)?', solution: '√((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5.' } },
  'math.I1.trigonometry-i': {
    formulas: ['sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj', 'On the unit circle: (cos θ, sin θ)', 'sin 30°=½, cos 60°=½, tan 45°=1'],
    example: { q: 'A right triangle has hypotenuse 10 and angle 30°. Find the opposite side.', solution: 'sin 30° = opp/hyp → opp = 10 × sin 30° = 10 × 0.5 = 5.' } },
  'math.I1.sequences-series': {
    formulas: ['AP nth term: aₙ = a + (n − 1)d', 'AP sum: Sₙ = n/2 · (a + l) = n/2 · (2a + (n−1)d)', 'GP nth term: aₙ = a·r^(n−1)', 'GP sum: Sₙ = a(rⁿ − 1)/(r − 1)'],
    example: { q: 'Sum the AP 3, 7, 11, …, to 10 terms.', solution: 'a = 3, d = 4, n = 10. l = a + 9d = 3 + 36 = 39. S = 10/2 · (3 + 39) = 5 × 42 = 210.' } },
  'math.I1.geometry-circles-proof': {
    formulas: ['Angle at centre = 2 × angle at circumference (same arc)', 'Angle in a semicircle = 90°', 'Every proof step needs a reason'],
    example: { q: 'A chord subtends 100° at the centre. What angle does it subtend at the circumference on the major arc?', solution: 'Circumference angle = ½ × central angle = ½ × 100° = 50°.' } },
  'math.I1.statistics-ii': {
    formulas: ['Grouped mean ≈ Σ(midpoint × frequency) ÷ Σfrequency', 'Variance = mean of squared deviations', 'Standard deviation = √variance'],
    example: { q: 'Data 2, 4, 4, 6 has mean 4. Find its standard deviation.', solution: 'Deviations: −2,0,0,2 → squares 4,0,0,4 → variance = 8/4 = 2. SD = √2 ≈ 1.41.' } },
  'math.I2.functions': {
    formulas: ['f: one input → exactly one output', 'Composition: (f∘g)(x) = f(g(x))', 'Inverse: swap x and y, solve for y', 'Vertical-line test checks if a graph is a function'],
    example: { q: 'If f(x) = 2x + 1 and g(x) = x², find f(g(3)).', solution: 'g(3) = 9, then f(9) = 2(9) + 1 = 19.' } },
  'math.I2.trigonometry-ii': {
    formulas: ['sin²θ + cos²θ = 1', 'Sine rule: a/sin A = b/sin B = c/sin C', 'Cosine rule: c² = a² + b² − 2ab cos C'],
    example: { q: 'A triangle has sides a=5, b=7 with included angle C=60°. Find c.', solution: 'c² = 5² + 7² − 2·5·7·cos60° = 25 + 49 − 70(0.5) = 74 − 35 = 39 → c = √39 ≈ 6.24.' } },
  'math.I2.derivatives-intuition': {
    formulas: ['d/dx (xⁿ) = n·x^(n−1)', 'd/dx (constant) = 0', "f'(x) = slope of the tangent = instantaneous rate"],
    example: { q: 'Differentiate f(x) = x³ − 4x and find the slope at x = 2.', solution: "f'(x) = 3x² − 4. At x = 2: 3(4) − 4 = 8. The tangent slope at x = 2 is 8." } },
  'math.I2.integrals-intuition': {
    formulas: ['∫ xⁿ dx = x^(n+1)/(n+1) + C  (n ≠ −1)', 'Definite integral = signed area under the curve', 'Integration undoes differentiation'],
    example: { q: 'Evaluate ∫ from 0 to 3 of 2x dx.', solution: '∫ 2x dx = x². Evaluate 0→3: 3² − 0² = 9. (This is the area of the triangle under y = 2x.)' } },
  'math.I2.exponentials-logarithms': {
    formulas: ['log_b(xy) = log_b x + log_b y', 'log_b(xⁿ) = n log_b x', 'b^x = y ⇔ log_b y = x', 'Growth: N = N₀ · e^(kt)'],
    example: { q: 'Solve 2^x = 32.', solution: 'Take logs: x = log₂ 32 = 5, since 2⁵ = 32.' } },
  'math.I2.combinatorics-probability-ii': {
    formulas: ['nPr = n!/(n−r)!  (order matters)', 'nCr = n!/(r!(n−r)!)  (order does not)', 'P(A|B) = P(A and B)/P(B)'],
    example: { q: 'How many ways to choose a committee of 3 from 6 people?', solution: '6C3 = 6!/(3!·3!) = 720/(6·6) = 20 ways.' } },
  'math.A1.calculus-limits-differentiation': {
    formulas: ['Product: (uv)′ = u′v + uv′', 'Quotient: (u/v)′ = (u′v − uv′)/v²', "Chain: (f(g(x)))′ = f′(g(x))·g′(x)", "Max/min where f′(x) = 0"],
    example: { q: 'Differentiate y = (2x + 1)⁴.', solution: "Chain rule: dy/dx = 4(2x + 1)³ · 2 = 8(2x + 1)³." } },
  'math.A1.integration-techniques': {
    formulas: ['Substitution: let u = inner function whose derivative appears', 'By parts: ∫u dv = uv − ∫v du (choose u by LIATE)', 'Definite integral gives net area between limits'],
    example: { q: 'Evaluate ∫ 2x·(x² + 1)³ dx.', solution: 'Let u = x² + 1, du = 2x dx → ∫ u³ du = u⁴/4 + C = (x² + 1)⁴/4 + C.' } },
  'math.A1.vectors-3d-geometry': {
    formulas: ['a·b = |a||b|cos θ = a₁b₁ + a₂b₂ + a₃b₃', '|a×b| = |a||b|sin θ', 'a·b = 0 ⇔ perpendicular'],
    example: { q: 'Find the angle between a = (1, 0, 0) and b = (1, 1, 0).', solution: 'a·b = 1. |a| = 1, |b| = √2. cos θ = 1/√2 → θ = 45°.' } },
  'math.A1.matrices-determinants': {
    formulas: ['2×2 determinant: |a b; c d| = ad − bc', 'Matrix product: row × column', 'det = 0 ⇒ no inverse (singular)', 'AB ≠ BA in general'],
    example: { q: 'Find the determinant of [[3, 2],[1, 4]] and say if it is invertible.', solution: 'det = 3·4 − 2·1 = 10 ≠ 0, so the matrix is invertible.' } },
  'math.A1.complex-numbers': {
    formulas: ['i² = −1', '(a + bi) + (c + di) = (a+c) + (b+d)i', '|a + bi| = √(a² + b²)', 'Multiply by conjugate to divide'],
    example: { q: 'Simplify (2 + 3i)(1 − i).', solution: '2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i (using i² = −1).' } },
  'math.A1.permutations-combinations-binomial': {
    formulas: ['(a + b)ⁿ = Σ nCr · a^(n−r) · b^r', 'General term: T_(r+1) = nCr · a^(n−r) · b^r', 'Coefficients from Pascal’s triangle'],
    example: { q: 'Find the coefficient of x² in (1 + x)⁵.', solution: 'Term is 5C2 · x² = 10x². Coefficient = 10.' } },
  'math.A2.differential-equations': {
    formulas: ['Separable: gather y with dy, x with dx, then integrate', 'dy/dx = ky → y = A·e^(kx)', 'Initial condition fixes the constant A'],
    example: { q: 'Solve dy/dx = 3y with y(0) = 2.', solution: 'y = A·e^(3x). At x=0: 2 = A. So y = 2e^(3x).' } },
  'math.A2.probability-distributions': {
    formulas: ['Binomial mean = np, variance = np(1−p)', 'Normal: ~68% within 1σ, 95% within 2σ', 'z = (x − μ)/σ'],
    example: { q: 'A fair die is rolled 60 times. Expected number of sixes?', solution: 'Binomial with n=60, p=1/6. Mean = np = 60 × 1/6 = 10 sixes.' } },
  'math.A2.conics': {
    formulas: ['Ellipse: x²/a² + y²/b² = 1', 'Hyperbola: x²/a² − y²/b² = 1', 'Parabola: y² = 4ax', 'Eccentricity e: 0 circle, <1 ellipse, 1 parabola, >1 hyperbola'],
    example: { q: 'Identify the conic x²/25 + y²/9 = 1 and its semi-axes.', solution: 'Both terms positive with a plus sign → ellipse. a = 5 (x-axis), b = 3 (y-axis).' } },
  'math.A2.advanced-problem-solving': {
    formulas: ['Pólya: understand → plan → do → check', 'Reduce to a simpler case to find a pattern', 'Look for symmetry or an invariant'],
    example: { q: 'What is the sum 1 + 2 + … + 100?', solution: 'Pair ends: (1+100), (2+99), … = 50 pairs each summing 101 → 50 × 101 = 5050. (Or use n(n+1)/2.)' } },
  'math.A2.modeling-capstone': {
    formulas: ['State assumptions explicitly', 'Simplest model that fits wins (parsimony)', 'Validate outputs against known real values'],
    example: { q: 'Model a population doubling every 3 years, starting at 1000.', solution: 'N = 1000 · 2^(t/3). At t = 6 years: 1000 · 2² = 4000. State the assumption of constant doubling time.' } },

  // ============================================================ PHYSICS
  'physics.F1.measurement-units-estimation': {
    formulas: ['1 km = 1000 m, 1 h = 3600 s', 'm/s → km/h: ×3.6', 'Estimate by rounding each factor to 1 s.f.'],
    example: { q: 'Convert 15 m/s to km/h.', solution: '15 × 3.6 = 54 km/h.' } },
  'physics.F1.force-newtons-laws': {
    formulas: ['F = ma', 'Net force = 0 ⇒ constant velocity (1st law)', 'Action = −Reaction (3rd law, on different bodies)', 'Weight W = mg'],
    example: { q: 'A 4 kg block accelerates at 2.5 m/s². Find the net force.', solution: 'F = ma = 4 × 2.5 = 10 N.' } },
  'physics.F1.energy-i': {
    formulas: ['Work W = F·d (force along motion)', 'Kinetic energy KE = ½mv²', 'Potential energy PE = mgh', 'Energy is conserved (transforms, not lost)'],
    example: { q: 'A 2 kg ball is dropped from 5 m. Find its speed just before impact (g = 10).', solution: 'PE → KE: mgh = ½mv² → v = √(2gh) = √(2·10·5) = √100 = 10 m/s.' } },
  'physics.F2.pressure-density': {
    formulas: ['Density ρ = m/V', 'Pressure P = F/A', 'Fluid pressure P = ρgh', 'Floats if ρ_object < ρ_fluid'],
    example: { q: 'Find the pressure at the base of a 2 m column of water (ρ = 1000, g = 10).', solution: 'P = ρgh = 1000 × 10 × 2 = 20000 Pa = 20 kPa.' } },
  'physics.F2.heat-temperature': {
    formulas: ['Q = mcΔT', 'Temperature ∝ average particle KE', 'Radiation needs no medium; convection needs a fluid'],
    example: { q: 'Heat needed to raise 0.5 kg of water (c = 4200) by 20°C?', solution: 'Q = mcΔT = 0.5 × 4200 × 20 = 42000 J.' } },
  'physics.F2.light-i': {
    formulas: ['Reflection: angle of incidence = angle of reflection (from normal)', 'Refraction: light bends changing medium', 'Convex lens converges; concave diverges'],
    example: { q: 'A ray hits a mirror 40° from the normal. Find the angle between the incident and reflected rays.', solution: 'Reflection angle = 40°. Angle between the two rays = 40° + 40° = 80°.' } },
  'physics.F2.sound-waves-i': {
    formulas: ['v = fλ', 'Frequency ↔ pitch; amplitude ↔ loudness', 'Sound needs a medium (no vacuum)'],
    example: { q: 'A sound wave has frequency 340 Hz and wavelength 1 m. Find its speed.', solution: 'v = fλ = 340 × 1 = 340 m/s (the speed of sound in air).' } },
  'physics.F2.electricity-i': {
    formulas: ['V = IR (Ohm’s law)', 'Series: R = R₁ + R₂ + …', 'Parallel: 1/R = 1/R₁ + 1/R₂ + …', 'Series current is uniform; parallel voltage is uniform'],
    example: { q: 'Two 4 Ω resistors in series across 8 V. Find the current.', solution: 'R = 4 + 4 = 8 Ω. I = V/R = 8/8 = 1 A.' } },
  'physics.F2.magnetism-i': {
    formulas: ['Like poles repel, unlike attract', 'Field lines run N → S outside a magnet', 'A current creates a magnetic field (right-hand grip rule)'],
    example: { q: 'How can you strengthen an electromagnet?', solution: 'Increase the current, add more coil turns, or insert a soft-iron core — each increases the magnetic field.' } },
  'physics.I1.kinematics-2d': {
    formulas: ['vₓ = v cos θ, v_y = v sin θ', 'Horizontal: constant velocity; vertical: free fall (g)', 'Range depends on both components'],
    example: { q: 'A ball is launched at 20 m/s at 30°. Find its horizontal and vertical velocity components.', solution: 'vₓ = 20 cos30° = 20(0.866) ≈ 17.3 m/s. v_y = 20 sin30° = 20(0.5) = 10 m/s.' } },
  'physics.I1.newtons-laws-deepened': {
    formulas: ['Friction f = μN', 'On an incline: along-slope mg sin θ, into-surface mg cos θ', 'Connected bodies share one acceleration'],
    example: { q: 'A 10 kg block on a 30° frictionless incline. Find its acceleration (g = 10).', solution: 'a = g sin θ = 10 × sin30° = 10 × 0.5 = 5 m/s² down the slope.' } },
  'physics.I1.momentum-collisions': {
    formulas: ['Momentum p = mv', 'Impulse = FΔt = Δp', 'Conservation: total p before = total p after', 'Elastic conserves KE; inelastic does not'],
    example: { q: 'A 2 kg trolley at 3 m/s hits and sticks to a stationary 1 kg trolley. Find their common speed.', solution: 'Conservation: 2×3 + 1×0 = (2+1)v → 6 = 3v → v = 2 m/s.' } },
  'physics.I1.circular-motion-gravitation': {
    formulas: ['Centripetal acceleration a = v²/r (toward centre)', 'Centripetal force F = mv²/r', 'Gravitation F = Gm₁m₂/r² (inverse-square)'],
    example: { q: 'If the distance between two masses triples, how does the gravitational force change?', solution: 'F ∝ 1/r². Tripling r gives F × 1/3² = 1/9 of the original force.' } },
  'physics.I1.energy-ii': {
    formulas: ['Power P = W/t = energy/time', 'Efficiency = (useful output ÷ total input) × 100%', '1 watt = 1 joule/second'],
    example: { q: 'A motor does 600 J of useful work from 800 J input in 4 s. Find its power output and efficiency.', solution: 'Power (useful) = 600/4 = 150 W. Efficiency = 600/800 × 100 = 75%.' } },
  'physics.I2.kinematics-calculus': {
    formulas: ['v = dx/dt, a = dv/dt', 'x = ∫v dt, v = ∫a dt', 'Constant a → use SUVAT; varying a → integrate'],
    example: { q: 'Position x = 3t² m. Find the velocity at t = 2 s.', solution: 'v = dx/dt = 6t. At t = 2: v = 12 m/s.' } },
  'physics.I2.oscillations-shm': {
    formulas: ['SHM: restoring force F = −kx', 'Period T = 1/f (independent of amplitude)', 'Max KE at equilibrium, max PE at extremes'],
    example: { q: 'A mass on a spring completes 20 oscillations in 10 s. Find the period and frequency.', solution: 'T = 10/20 = 0.5 s. f = 1/T = 2 Hz.' } },
  'physics.I2.waves-ii': {
    formulas: ['Superposition: displacements add', 'Constructive: path difference = nλ; destructive = (n+½)λ', 'Doppler: approaching → higher observed frequency'],
    example: { q: 'Two coherent waves meet with a path difference of one full wavelength. Constructive or destructive?', solution: 'Path difference = 1λ = a whole number of wavelengths → constructive interference (a bright/loud point).' } },
  'physics.I2.electricity-ii': {
    formulas: ['EMF ε = I(R + r), r = internal resistance', 'Kirchhoff current law: Σ currents in = Σ out', 'Kirchhoff voltage law: Σ voltages around a loop = 0', 'Capacitor: Q = CV'],
    example: { q: 'A cell of EMF 6 V and internal resistance 0.5 Ω drives 2 A. Find the terminal voltage.', solution: 'V = ε − Ir = 6 − 2(0.5) = 5 V.' } },
  'physics.I2.thermal-physics': {
    formulas: ['PV = nRT (T in kelvin)', 'Boyle: P₁V₁ = P₂V₂', 'Charles: V₁/T₁ = V₂/T₂', 'T(K) = T(°C) + 273'],
    example: { q: 'A gas at 1 atm and 300 K is heated to 600 K at constant volume. Find the new pressure.', solution: 'P/T constant: P₂ = P₁ × T₂/T₁ = 1 × 600/300 = 2 atm.' } },
  'physics.A1.mechanics-rigor': {
    formulas: ['Work–energy theorem: W_net = ΔKE', 'Torque τ = r × F = rF sin θ', 'Angular momentum conserved with no external torque'],
    example: { q: 'A 3 kg object speeds up from 2 to 5 m/s. Find the net work done.', solution: 'W = ΔKE = ½m(v² − u²) = ½·3·(25 − 4) = ½·3·21 = 31.5 J.' } },
  'physics.A1.gravitation-field': {
    formulas: ['Field g = GM/r²', 'Escape velocity v = √(2GM/r)', 'Bound orbit → negative total energy'],
    example: { q: 'At what multiple of Earth’s radius does g fall to 1/4 of its surface value?', solution: 'g ∝ 1/r². g/4 when r² = 4 → r = 2R. So at twice Earth’s radius from the centre.' } },
  'physics.A1.fluids-advanced': {
    formulas: ['Static pressure P = ρgh', 'Continuity: A₁v₁ = A₂v₂', 'Bernoulli: faster flow ↔ lower pressure'],
    example: { q: 'Water flows through a pipe that narrows from area 4 cm² to 1 cm². If inlet speed is 2 m/s, find the outlet speed.', solution: 'A₁v₁ = A₂v₂ → 4×2 = 1×v₂ → v₂ = 8 m/s.' } },
  'physics.A1.thermodynamics': {
    formulas: ['First law: ΔU = Q − W', 'Second law: entropy of isolated system never decreases', 'No engine is 100% efficient (Carnot limit)'],
    example: { q: 'A gas absorbs 500 J of heat and does 200 J of work. Find the change in internal energy.', solution: 'ΔU = Q − W = 500 − 200 = 300 J.' } },
  'physics.A1.electrostatics': {
    formulas: ["Coulomb: F = kq₁q₂/r²", 'Field E = F/q', 'Field points high → low potential', 'Capacitance C = Q/V'],
    example: { q: 'Two charges are separated, then the distance is halved. How does the force change?', solution: 'F ∝ 1/r². Halving r gives F × (1/(1/2)²) = ×4 the original force.' } },
  'physics.A2.current-electricity-advanced': {
    formulas: ['Power P = VI = I²R = V²/R', 'Ammeter in series (low R), voltmeter in parallel (high R)', 'Reduce networks in series/parallel stages'],
    example: { q: 'A 3 Ω resistor carries 2 A. Find the power dissipated.', solution: 'P = I²R = 2² × 3 = 4 × 3 = 12 W.' } },
  'physics.A2.electromagnetic-induction': {
    formulas: ['Faraday: EMF = −dΦ/dt (Φ = magnetic flux)', 'Lenz: induced current opposes the change', 'Only changing flux induces an EMF'],
    example: { q: 'Magnetic flux through a coil changes from 0.2 to 0.6 Wb in 0.1 s. Find the magnitude of the induced EMF.', solution: 'EMF = ΔΦ/Δt = (0.6 − 0.2)/0.1 = 0.4/0.1 = 4 V.' } },
  'physics.A2.optics-advanced': {
    formulas: ['Bright fringe: path difference = nλ', 'Double slit fringe spacing y = λD/d', 'Narrow slit ⇒ more diffraction'],
    example: { q: 'In a double slit, slit spacing d = 0.5 mm, screen distance D = 2 m, λ = 500 nm. Find the fringe spacing.', solution: 'y = λD/d = (500×10⁻⁹ × 2)/(0.5×10⁻³) = (10⁻⁶)/(0.5×10⁻³) = 2×10⁻³ m = 2 mm.' } },
  'physics.A2.modern-physics': {
    formulas: ['Photon energy E = hf', 'Mass–energy E = mc²', 'After n half-lives, fraction remaining = (1/2)ⁿ'],
    example: { q: 'A radioactive sample has a half-life of 5 years. What fraction remains after 15 years?', solution: '15/5 = 3 half-lives → (1/2)³ = 1/8 = 0.125 remains.' } },
  'physics.A2.experimental-physics': {
    formulas: ['Repeat and average to reduce random error', 'Precision = repeatability; accuracy = closeness to true', 'Adding quantities: add absolute uncertainties'],
    example: { q: 'Readings 4.9, 5.1, 5.0 s are precise but the true value is 6.0 s. Precise or accurate?', solution: 'They agree closely (precise) but are far from 6.0 s (not accurate) — likely a systematic error.' } },

  // ============================================================ BIOLOGY
  'biology.F1.characteristics-classification': {
    formulas: ['MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition', 'Classify from broad → specific by shared features'],
    example: { q: 'Is a growing crystal alive? Use MRS GREN.', solution: 'A crystal grows but does not respire, reproduce, respond, excrete or feed. Since it fails MRS GREN, it is not living.' } },
  'biology.F1.the-cell': {
    formulas: ['Cell theory: all life is cells; cell = basic unit; cells from cells', 'Plant extras: cell wall, chloroplasts, large vacuole', 'Nucleus controls; mitochondria release energy'],
    example: { q: 'A cell has a wall, chloroplasts and a large vacuole. Plant or animal?', solution: 'Plant cell — animal cells lack a cell wall, chloroplasts and a large permanent vacuole.' } },
  'biology.F1.nutrition-digestion': {
    formulas: ['Enzymes carry out chemical digestion', 'Absorption occurs mainly in the small intestine', 'Balanced diet: carbs, proteins, fats, vitamins, minerals, fibre, water'],
    example: { q: 'Where is most digested food absorbed, and what adaptation helps?', solution: 'The small intestine — its villi give a huge surface area with a rich blood supply for fast absorption.' } },
  'biology.F1.living-environment-i': {
    formulas: ['Food-chain arrows point in the direction of energy flow', 'Every chain begins with a producer', 'Energy is lost as heat at each level'],
    example: { q: 'In grass → grasshopper → frog, what is the producer and the primary consumer?', solution: 'Grass is the producer; the grasshopper (which eats the producer) is the primary consumer.' } },
  'biology.F2.cells-to-organisms': {
    formulas: ['Cells → tissues → organs → organ systems → organism', 'Structure fits function at every level'],
    example: { q: 'Put in order: heart, muscle cell, cardiac muscle tissue, circulatory system.', solution: 'muscle cell → cardiac muscle tissue → heart (organ) → circulatory system.' } },
  'biology.F2.human-physiology-i': {
    formulas: ['Arteries carry blood away from the heart; veins toward it', 'Breathing = gas exchange; respiration = energy release', 'Glucose + O₂ → CO₂ + H₂O + energy'],
    example: { q: 'Why do arteries have thick, muscular walls?', solution: 'To withstand the high pressure of blood pumped directly from the heart, and to help maintain that pressure.' } },
  'biology.F2.plant-biology-i': {
    formulas: ['Photosynthesis: CO₂ + H₂O —(light)→ glucose + O₂', 'Xylem carries water up; phloem carries sugars around', 'Leaves are broad and thin to capture light'],
    example: { q: 'What raw materials and energy source does photosynthesis need, and what gas is released?', solution: 'It needs carbon dioxide, water and light energy; oxygen is released as a by-product.' } },
  'biology.F2.reproduction': {
    formulas: ['Asexual: 1 parent, identical offspring', 'Sexual: 2 parents, gametes, variation', 'Gametes carry half the genetic information'],
    example: { q: 'Why do offspring from sexual reproduction show variation?', solution: 'They combine genes from two parents; the random mix of maternal and paternal alleles produces new combinations.' } },
  'biology.F2.health-disease': {
    formulas: ['Pathogens: bacteria, viruses, fungi, protists', 'Antibiotics kill bacteria, not viruses', 'Vaccines create immune memory'],
    example: { q: 'Why won’t antibiotics cure a common cold?', solution: 'A cold is caused by a virus; antibiotics only act on bacteria, so they have no effect on the virus.' } },
  'biology.I1.cell-processes': {
    formulas: ['Diffusion/osmosis: high → low concentration (passive)', 'Osmosis = water across a membrane', 'Active transport: low → high, needs energy'],
    example: { q: 'A cell is placed in pure water. Which way does water move and why?', solution: 'Water moves into the cell by osmosis — from high water potential (outside) to lower (inside), until balanced.' } },
  'biology.I1.enzymes': {
    formulas: ['Enzymes lower activation energy (biological catalysts)', 'Each has an optimum temperature and pH', 'High heat / extreme pH denatures (permanent)'],
    example: { q: 'Why does an enzyme stop working when boiled?', solution: 'Heat denatures it — the active site changes shape permanently, so the substrate no longer fits.' } },
  'biology.I1.respiration-photosynthesis': {
    formulas: ['Aerobic: glucose + O₂ → CO₂ + H₂O + energy', 'Anaerobic releases less energy', 'Photosynthesis ≈ the reverse of respiration'],
    example: { q: 'Why does aerobic respiration release more energy than anaerobic?', solution: 'With oxygen, glucose is fully broken down to CO₂ and water; without it, glucose is only partially broken down.' } },
  'biology.I1.human-physiology-ii': {
    formulas: ['Nervous control: fast, brief (electrical)', 'Hormonal control: slower, longer (chemical)', 'Negative feedback opposes the change (homeostasis)'],
    example: { q: 'Blood glucose rises after a meal. How does negative feedback restore it?', solution: 'The pancreas releases insulin, which makes cells take up glucose, lowering blood glucose back to normal.' } },
  'biology.I1.ecology-ecosystems': {
    formulas: ['~10% of energy passes to the next trophic level', 'Matter cycles; energy flows and is lost', 'Decomposers recycle nutrients'],
    example: { q: 'If producers capture 10000 kJ, roughly how much reaches a secondary consumer?', solution: '~10% per level: producer 10000 → primary 1000 → secondary ~100 kJ.' } },
  'biology.I2.genetics-i': {
    formulas: ['Dominant allele masks recessive', 'Genotype = alleles; phenotype = appearance', 'Aa × Aa → 3 : 1 phenotype ratio'],
    example: { q: 'Two heterozygous tall plants (Tt) are crossed. What fraction of offspring are short (tt)?', solution: 'Punnett square Tt × Tt → TT, Tt, Tt, tt. Short (tt) = 1/4 of offspring.' } },
  'biology.I2.dna-inheritance': {
    formulas: ['Base pairing: A–T, C–G', 'Central dogma: DNA → RNA → protein', 'Complementary pairing enables replication'],
    example: { q: 'A DNA strand reads A-T-G-C. What is the complementary strand?', solution: 'Pair A–T and C–G: the complement is T-A-C-G.' } },
  'biology.I2.evolution-natural-selection': {
    formulas: ['Variation + selection + inheritance + time → evolution', 'Selection acts on populations, not individuals', 'Evidence: fossils, anatomy, DNA'],
    example: { q: 'How does antibiotic resistance in bacteria illustrate natural selection?', solution: 'Random variation makes some bacteria resistant; the antibiotic kills the rest; survivors reproduce, so the population becomes resistant.' } },
  'biology.I2.population-biology': {
    formulas: ['Unlimited growth is exponential', 'Real populations level at the carrying capacity (logistic)', 'Limiting factors: food, space, predators, disease'],
    example: { q: 'Why does a population stop growing exponentially in the wild?', solution: 'Resources (food, space) become limiting and predation/disease rise, so the population levels off at the carrying capacity.' } },
  'biology.I2.human-systems-capstone': {
    formulas: ['Systems cooperate (no system acts alone)', 'Homeostasis links systems via feedback'],
    example: { q: 'During exercise, name two systems that respond together and how.', solution: 'The respiratory system breathes faster and the circulatory system pumps faster, together delivering more oxygen to muscles.' } },
  'biology.A1.cell-biology-depth': {
    formulas: ['Mitosis: 2 identical diploid cells (growth/repair)', 'Meiosis: 4 varied haploid gametes', 'Meiosis halves chromosome number and shuffles genes'],
    example: { q: 'Why must gametes be made by meiosis, not mitosis?', solution: 'Meiosis halves the chromosome number so that fertilisation restores the normal diploid number, and it creates genetic variation.' } },
  'biology.A1.molecular-genetics': {
    formulas: ['Codon = 3 bases = 1 amino acid', 'Transcription (nucleus) then translation (ribosome)', 'Gene regulation → cell specialisation'],
    example: { q: 'How can a nerve cell and a skin cell have identical DNA yet differ?', solution: 'Gene regulation switches different genes on in each cell, so they make different proteins and take on different roles.' } },
  'biology.A1.biochemistry': {
    formulas: ['Anabolism builds; catabolism breaks down', 'Enzymes control every metabolic step', 'Biomolecules: carbohydrates, lipids, proteins, nucleic acids'],
    example: { q: 'Is building a protein from amino acids anabolic or catabolic?', solution: 'Anabolic — small monomers (amino acids) are joined into a larger molecule, which requires energy.' } },
  'biology.A1.plant-physiology-depth': {
    formulas: ['Light reactions capture energy; Calvin cycle fixes carbon', 'Transpiration pulls water up the xylem', 'Auxins cause growth toward light (phototropism)'],
    example: { q: 'Why does a plant on a windowsill bend toward the window?', solution: 'Auxin accumulates on the shaded side, elongating those cells more, so the shoot bends toward the light (phototropism).' } },
  'biology.A1.human-physiology-iii': {
    formulas: ['Kidney: filter blood, then reabsorb needed substances', 'Neuron: dendrite in → axon out → synapse across', 'Homeostasis maintains internal conditions'],
    example: { q: 'What two main steps produce urine in the kidney?', solution: 'Filtration of the blood in the glomerulus, then selective reabsorption of water, glucose and salts back into the blood.' } },
  'biology.A2.genetics-ii': {
    formulas: ['Linked genes are inherited together', 'Hardy–Weinberg: p² + 2pq + q² = 1, p + q = 1', 'Mutations are the source of new alleles'],
    example: { q: 'In a population, the recessive phenotype frequency q² = 0.16. Find q and p.', solution: 'q = √0.16 = 0.4. p = 1 − q = 0.6.' } },
  'biology.A2.biotechnology': {
    formulas: ['PCR amplifies (copies) DNA', 'Restriction enzymes cut DNA at specific sites', 'Recombinant DNA joins genes from different sources'],
    example: { q: 'Why is PCR useful in forensic science?', solution: 'It amplifies tiny DNA samples from a crime scene into enough copies to analyse and match to a suspect.' } },
  'biology.A2.evolution-depth': {
    formulas: ['Speciation: reproductive isolation → divergence', 'More DNA similarity → more recent common ancestor', 'Phylogenetic trees show relationships'],
    example: { q: 'How does geographic isolation lead to a new species?', solution: 'Separated populations face different selection pressures and diverge until they can no longer interbreed — a new species.' } },
  'biology.A2.ecology-environment-depth': {
    formulas: ['Biodiversity = genetic + species + ecosystem diversity', 'Human impacts: habitat loss, pollution, climate change', 'Use data/statistics to quantify change'],
    example: { q: 'Why does habitat loss reduce biodiversity so strongly?', solution: 'It removes the niches many species depend on, causing local extinctions and breaking food webs, which cascades to more losses.' } },
  'biology.A2.human-health-disease': {
    formulas: ['Innate immunity: fast, general', 'Adaptive immunity: specific, with memory', 'Vaccines create memory cells'],
    example: { q: 'Why is the second exposure to a pathogen usually harmless after vaccination?', solution: 'Memory cells recognise it and mount a fast, strong specific response before symptoms develop.' } },
  'biology.A2.investigative-biology': {
    formulas: ['Control one variable; include a control group; replicate', 'Use statistics to test if a difference is real', 'Correlation ≠ causation'],
    example: { q: 'You find plant height correlates with soil nitrogen. Can you conclude nitrogen causes taller plants?', solution: 'Not from correlation alone — run a controlled experiment varying only nitrogen to test causation.' } },

  // ============================================================ ENGLISH (Key facts / techniques)
  'english.F1.reading-for-meaning': {
    keyLabel: 'Key techniques', formulas: ['Main idea = "what is this mostly about?"', 'Inference = textual evidence + reasoning', 'Fact can be checked; opinion is a viewpoint'],
    example: { q: 'Text: "She pulled her coat tighter and quickened her pace." Infer the weather.', solution: 'It is likely cold and/or windy — inferred from tightening the coat and hurrying, though the text never states it directly.' } },
  'english.F1.vocabulary-roots': {
    keyLabel: 'Key techniques', formulas: ['Root "aqua" = water, "bio" = life, "port" = carry', 'Prefixes un-/in-/dis- often negate', 'Break unknown words into known parts'],
    example: { q: 'Deduce the meaning of "biography" from its roots.', solution: '"bio" (life) + "graph" (write) → a written account of a life.' } },
  'english.F1.sentence-craft': {
    keyLabel: 'Key techniques', formulas: ['Sentence = subject + verb (complete thought)', 'Combine with because/but/so/and to show relationships', 'Vary length for rhythm'],
    example: { q: 'Combine: "It was raining. We stayed inside." to show cause.', solution: '"Because it was raining, we stayed inside." — the conjunction "because" shows cause and effect.' } },
  'english.F1.paragraph-architecture': {
    keyLabel: 'Key techniques', formulas: ['One paragraph = one main idea', 'Topic sentence → supporting detail → link', 'Use however/therefore/for example to guide the reader'],
    example: { q: 'Write a topic sentence for a paragraph about the benefits of reading.', solution: '"Reading widely builds both vocabulary and empathy." — states the single controlling idea the paragraph will support.' } },
  'english.F1.narrative-descriptive-writing': {
    keyLabel: 'Key techniques', formulas: ['Show, don’t tell (use sensory action)', 'Story shape: setup → rising action → climax → resolution', 'Choose purposeful detail'],
    example: { q: 'Rewrite "He was scared" to show it.', solution: '"His hands trembled and his breath caught as the door creaked open." — the emotion is shown through action.' } },
  'english.F2.close-reading': {
    keyLabel: 'Key techniques', formulas: ['Name the device, then explain its effect', 'Tone = writer’s attitude; mood = reader’s feeling', 'Structure carries meaning'],
    example: { q: 'Analyse: "The wind screamed through the trees."', solution: 'Personification ("screamed") gives the wind a violent, human voice, creating a threatening tone.' } },
  'english.F2.structured-exposition': {
    keyLabel: 'Key techniques', formulas: ['Introduction states the thesis', 'One point per body paragraph, tied to the thesis', 'Transitions link paragraphs'],
    example: { q: 'What belongs in the introduction of an explanatory essay?', solution: 'A clear thesis stating the essay’s central point, plus a brief signpost of the main supporting ideas.' } },
  'english.F2.summarising-paraphrasing': {
    keyLabel: 'Key techniques', formulas: ['Summary = much shorter, main ideas only', 'Paraphrase = same meaning, new words, similar length', 'No opinions in a summary'],
    example: { q: 'Paraphrase: "The experiment failed because the sample was contaminated."', solution: '"Contamination of the sample caused the experiment to fail." — same meaning, restated in new words.' } },
  'english.F2.grammar-for-style': {
    keyLabel: 'Key techniques', formulas: ['Active voice: subject does the action (direct)', 'Semicolon links two related full sentences', 'A dash adds emphasis or an aside'],
    example: { q: 'Convert to active voice: "The window was broken by the ball."', solution: '"The ball broke the window." — the subject (ball) now performs the action, making it more direct.' } },
  'english.F2.vocabulary-ii': {
    keyLabel: 'Key techniques', formulas: ['Denotation = dictionary meaning; connotation = feeling', 'Match register to audience and purpose', 'Synonyms are rarely identical'],
    example: { q: 'Which is more negative: "slim" or "scrawny"?', solution: '"Scrawny" — both mean thin, but "scrawny" carries a negative connotation while "slim" is positive.' } },
  'english.I1.argument-i': {
    keyLabel: 'Key techniques', formulas: ['Argument = claim + evidence + warrant (reasoning)', 'Evidence must be relevant and sufficient', 'Find the unstated assumption'],
    example: { q: 'Identify the parts: "We should sleep 8 hours (claim) because studies link sleep to memory (evidence)." What is the warrant?', solution: 'The warrant (unstated) is that better memory is desirable and that the studies apply to us.' } },
  'english.I1.persuasive-essay': {
    keyLabel: 'Key techniques', formulas: ['Thesis must be arguable', 'Reason + evidence + explanation per paragraph', 'Anticipate objections'],
    example: { q: 'Is "Homework should be reduced" a good persuasive thesis?', solution: 'Yes — it is arguable (a reasonable person could disagree), so it can be defended with evidence and reasoning.' } },
  'english.I1.analysing-nonfiction-media': {
    keyLabel: 'Key techniques', formulas: ['Ethos (credibility), Pathos (emotion), Logos (logic)', 'Judge a source by author and purpose', 'Check the evidence behind claims'],
    example: { q: 'An advert says "9 out of 10 dentists recommend it." Which appeal, and what to check?', solution: 'Ethos (authority of dentists). Check the sample size, who funded it, and whether the claim is verifiable.' } },
  'english.I1.literature-i': {
    keyLabel: 'Key techniques', formulas: ['Theme = the underlying idea (a full statement)', 'Support claims with quotations', 'Character change reveals theme'],
    example: { q: 'State a theme (not one word) for a story where a selfish person learns to share.', solution: '"Generosity brings belonging that selfishness denies." — a full idea, not just the word "sharing".' } },
  'english.I1.research-citation': {
    keyLabel: 'Key techniques', formulas: ['Prefer credible, current, evidence-based sources', 'Cite every idea that is not your own', 'Uncited use of others’ ideas = plagiarism'],
    example: { q: 'You paraphrase a fact from a website. Do you still cite it?', solution: 'Yes — paraphrasing does not remove the need to credit the source; only common knowledge is exempt.' } },
  'english.I2.argument-ii': {
    keyLabel: 'Key techniques', formulas: ['Acknowledge a counterargument, then rebut it', 'Ad hominem attacks the person; straw man misrepresents', 'Rebuttal strengthens your case'],
    example: { q: 'Name the fallacy: "Don’t trust his climate argument — he failed science."', solution: 'Ad hominem — it attacks the person’s background rather than addressing the argument’s evidence.' } },
  'english.I2.comparative-analysis': {
    keyLabel: 'Key techniques', formulas: ['Compare point-by-point, not text-by-text', 'Synthesise into a new understanding', 'Note both similarities and differences'],
    example: { q: 'Two poems treat war differently. How should you structure the comparison?', solution: 'Point-by-point — compare both poems on each aspect (imagery, tone, form) in turn, rather than describing each poem separately.' } },
  'english.I2.literature-ii': {
    keyLabel: 'Key techniques', formulas: ['Analyse how meaning is made (not just plot)', 'Sustain the thesis across the essay', 'Draw evidence from the whole text'],
    example: { q: 'What separates literary analysis from a book report?', solution: 'Analysis argues how the text creates meaning (technique, structure, theme); a report merely retells what happens.' } },
  'english.I2.formal-technical-writing': {
    keyLabel: 'Key techniques', formulas: ['Precision and objectivity over flair', 'Use headings and logical order', 'State exactly what was done and found'],
    example: { q: 'Improve for a report: "The stuff got really hot super fast."', solution: '"The sample’s temperature rose from 20°C to 80°C within 30 seconds." — precise, objective and measurable.' } },
  'english.I2.public-speaking': {
    keyLabel: 'Key techniques', formulas: ['Open → structured points → memorable close', 'Signpost ("first", "finally")', 'Listen to the actual point before responding'],
    example: { q: 'Why signpost a speech?', solution: 'Signposts ("first", "next", "finally") help listeners follow the structure since they cannot re-read your words.' } },
  'english.A1.rhetoric-style': {
    keyLabel: 'Key techniques', formulas: ['Vary sentence length for emphasis and rhythm', 'Precise words remove ambiguity', 'Read aloud to hear your voice'],
    example: { q: 'How can a short sentence after long ones add power?', solution: 'The contrast in rhythm makes the short sentence land hard, drawing the reader’s attention to it. Like this.' } },
  'english.A1.literary-criticism': {
    keyLabel: 'Key techniques', formulas: ['A critical lens focuses interpretation (historical, feminist, etc.)', 'Argue interpretation with textual evidence', 'Context shapes meaning'],
    example: { q: 'What does a "historical lens" add to reading a novel?', solution: 'It interprets the text through its time period, revealing how contemporary events and values shape its meaning.' } },
  'english.A1.research-paper': {
    keyLabel: 'Key techniques', formulas: ['Argue an original thesis (not just report)', 'Synthesise sources into your argument', 'Cite consistently throughout'],
    example: { q: 'What makes a thesis "arguable" rather than descriptive?', solution: 'It takes a position that could be debated and defended with evidence, rather than merely stating an agreed fact.' } },
  'english.A1.persuasion-real-world': {
    keyLabel: 'Key techniques', formulas: ['Tailor the argument to the audience’s values', 'Use evidence honestly', 'Match format (op-ed, proposal) to purpose'],
    example: { q: 'Why is honest evidence more persuasive long-term?', solution: 'Distorted evidence, once exposed, destroys credibility; honest evidence builds trust that persuades over time.' } },
  'english.A2.advanced-literary-analysis': {
    keyLabel: 'Key techniques', formulas: ['Attend to genre-specific devices (metre, staging, narration)', 'Argue a nuanced, layered reading', 'Match strong evidence to bold claims'],
    example: { q: 'What should analysing a poem attend to that prose analysis might not?', solution: 'Form and sound — metre, rhyme, line breaks and rhythm — which are central to a poem’s meaning.' } },
  'english.A2.extended-essay': {
    keyLabel: 'Key techniques', formulas: ['Narrow to a focused, answerable question', 'Sustain one argument across the whole piece', 'Cite and synthesise rigorously'],
    example: { q: 'Improve the research question "Is social media bad?"', solution: '"How does daily social-media use affect the sleep quality of 15–18 year-olds?" — focused, specific and answerable.' } },
  'english.A2.critical-reasoning-comprehension': {
    keyLabel: 'Key techniques', formulas: ['Skim for structure, then read for the question', 'Every answer must be supported by the passage', 'Identify conclusion and assumptions fast'],
    example: { q: 'Under time pressure, what is the first move on a dense passage?', solution: 'Skim for the structure and main idea, then read closely only the parts the questions target.' } },
  'english.A2.communication-portfolio': {
    keyLabel: 'Key techniques', formulas: ['Show range across genres', 'Revise deliberately using feedback', 'Reflect on what each piece demonstrates'],
    example: { q: 'What turns competent writing into excellent writing?', solution: 'Deliberate revision — drafting, acting on feedback, and refining word choice, structure and clarity.' } },

  // ============================================================ CS (Key syntax & rules)
  'cs.F1.computational-thinking': {
    formulas: ['Decomposition: break a big problem into parts', 'Pattern recognition → reuse solutions', 'Abstraction: ignore irrelevant detail', 'Algorithm: precise, unambiguous steps'],
    example: { q: 'Decompose "make tea" into an algorithm (3+ steps).', solution: '1) Boil water. 2) Put a tea bag in a cup. 3) Pour water in. 4) Wait 3 min, remove bag. Each step is precise and ordered.' } },
  'cs.F1.first-programs': {
    formulas: ['print("text") displays output', '# starts a comment (ignored)', 'Edit → run → observe → repeat'],
    example: { q: 'What does print("Hi", 3 + 4) output?', solution: 'Hi 7 — the string "Hi" and the evaluated expression 3 + 4 (= 7), separated by a space.' } },
  'cs.F1.input-output': {
    formulas: ['input() returns a string', 'int(input(...)) to read a number', 'f"Hello {name}" inserts a value'],
    example: { q: 'Why does int(input("Age? ")) + 1 work but input("Age? ") + 1 fail?', solution: 'input() returns a string; adding a string and an int errors. int(...) converts it to a number first, so +1 works.' } },
  'cs.F1.booleans-conditionals': {
    formulas: ['== compares; = assigns', 'if / elif / else chooses a branch', 'and / or / not combine conditions', 'Indentation defines the block'],
    example: { q: 'What prints? x = 7; print("big" if x > 5 else "small")', solution: 'big — since 7 > 5 is True, the expression yields "big".' } },
  'cs.F1.version-control-i': {
    formulas: ['git init → start a repo', 'git add stages; git commit saves a snapshot', 'git status shows what will be committed'],
    example: { q: 'You edited a file. What two git commands save it to history?', solution: 'git add <file> (stage the change) then git commit -m "message" (save the snapshot).' } },
  'cs.F2.loops': {
    formulas: ['range(n) → 0,1,…,n−1', 'for i in range(n): repeats n times', 'while runs until its condition is False'],
    example: { q: 'What does sum(range(5)) equal?', solution: 'range(5) is 0,1,2,3,4; their sum is 0+1+2+3+4 = 10.' } },
  'cs.F2.lists-iteration': {
    formulas: ['Index starts at 0; last is len−1', 'append() adds; pop()/remove() delete', 'for item in list: traverses'],
    example: { q: 'For a = [10, 20, 30], what is a[0] + a[-1]?', solution: 'a[0] = 10 (first), a[-1] = 30 (last) → 10 + 30 = 40.' } },
  'cs.F2.functions': {
    formulas: ['def name(params): defines a function', 'return sends a value back (print only displays)', 'Local variables stay inside the function'],
    example: { q: 'What does this return? def sq(n): return n*n — call sq(5).', solution: '25 — the function returns 5 × 5. The value can be stored or used, unlike a bare print.' } },
  'cs.F2.strings-depth': {
    formulas: ['s[a:b] includes a, excludes b', 'Strings are immutable (methods return new strings)', 'split() → list, join() → string'],
    example: { q: 'For s = "python", what is s[1:4]?', solution: 'Indices 1,2,3 (4 excluded) → "yth".' } },
  'cs.F2.dictionaries-sets': {
    formulas: ['dict: {key: value}, lookup by key', 'set: unique, unordered items', 'list(set(x)) removes duplicates'],
    example: { q: 'What is len(set([1, 2, 2, 3, 3, 3]))?', solution: 'The set keeps unique values {1, 2, 3}, so len = 3.' } },
  'cs.F2.version-control-ii': {
    formulas: ['git branch / checkout: parallel work', 'git merge combines branches', 'git push uploads commits to the remote'],
    example: { q: 'Why work on a branch instead of directly on main?', solution: 'A branch isolates your changes, so you can experiment without breaking the working main version until it is ready to merge.' } },
  'cs.F2.project-1': {
    formulas: ['Build one small feature at a time and test it', 'Reuse functions to avoid repetition', 'Commit each working step'],
    example: { q: 'What is a reliable way to build a first quiz-game project?', solution: 'Write and test one question flow, wrap it in a function, then loop it for more questions — committing at each working stage.' } },
  'cs.I1.file-io-data-formats': {
    formulas: ['with open(path) as f: auto-closes the file', 'CSV → rows/columns; JSON → nested dict/list', 'Files persist data between runs'],
    example: { q: 'Why prefer "with open(...)" over open(...) alone?', solution: 'The with block automatically closes the file when done, even if an error occurs — avoiding leaks and corruption.' } },
  'cs.I1.error-handling-debugging': {
    formulas: ['try / except handles errors gracefully', 'Read tracebacks bottom-up (last line = the error)', 'Reproduce → isolate → fix'],
    example: { q: 'A traceback ends with "ZeroDivisionError". What does that tell you?', solution: 'Code divided by zero. The last line names the error; the line above shows where — fix the divisor.' } },
  'cs.I1.modules-organization': {
    formulas: ['import module, then module.function()', 'One module = one responsibility', 'Reuse the standard library'],
    example: { q: 'How do you use sqrt from the math module?', solution: 'import math, then math.sqrt(9) returns 3.0 — reusing the standard library instead of writing your own.' } },
  'cs.I1.data-structures-basic': {
    formulas: ['Stack = LIFO (last in, first out)', 'Queue = FIFO (first in, first out)', 'Choose the structure by access pattern'],
    example: { q: 'You need to process items in the order they arrived. Stack or queue?', solution: 'Queue (FIFO) — the first item added is the first processed, like a line of people.' } },
  'cs.I1.algorithms-i': {
    formulas: ['Linear search: check each (works unsorted)', 'Binary search: halve a SORTED list each step', 'Test edge cases: empty, one item, not found'],
    example: { q: 'Why is binary search invalid on unsorted data?', solution: 'It decides which half to discard based on order; without sorting, "the item must be in the upper half" is not guaranteed.' } },
  'cs.I1.complexity-intuition': {
    formulas: ['Big-O = how work grows with input n', 'O(log n) < O(n) < O(n²)', 'Nested loops over n → O(n²)'],
    example: { q: 'An algorithm does one pass over n items, then another separate pass. Big-O?', solution: 'O(n) + O(n) = O(2n) = O(n) — constants are dropped; it is linear.' } },
  'cs.I1.project-2': {
    formulas: ['Separate concerns into modules', 'Handle missing files and bad input', 'Commit each milestone'],
    example: { q: 'How should a program react to a missing data file?', solution: 'Catch the error (try/except) and show a clear message or create a default file — rather than crashing.' } },
  'cs.I2.intro-c': {
    formulas: ['C is compiled before running', 'Every variable has a declared type', 'gcc prog.c → ./a.out'],
    example: { q: 'Name one thing C makes explicit that Python hides.', solution: 'Types — in C you must declare int/float/char etc.; Python infers them dynamically at runtime.' } },
  'cs.I2.control-arrays-c': {
    formulas: ['C arrays are fixed size', 'No bounds checking (out of bounds = undefined behaviour)', 'Braces group blocks; semicolons end statements'],
    example: { q: 'What is the risk of writing to arr[10] in a 10-element C array (indices 0–9)?', solution: 'Undefined behaviour — C does not check bounds, so it may corrupt memory or crash unpredictably.' } },
  'cs.I2.pointers-memory': {
    formulas: ['&x = address of x; *p = value at p', 'A pointer stores a memory address', 'Local variables live on the stack'],
    example: { q: 'If int x = 5; int *p = &x; what does *p give?', solution: '*p dereferences the pointer to the value at x’s address → 5.' } },
  'cs.I2.strings-memory-c': {
    formulas: ['C strings end with a null terminator \\0', 'malloc allocates; free releases', 'Every malloc needs a matching free'],
    example: { q: 'What happens if you malloc memory but never free it?', solution: 'A memory leak — the memory stays reserved and unavailable, which can exhaust memory over time.' } },
  'cs.I2.structs-data-structures-c': {
    formulas: ['struct groups related fields into one type', 'Linked-list node = data + pointer to next', 'Keep the head pointer to not lose the list'],
    example: { q: 'What two things does a linked-list node hold?', solution: 'The data value, and a pointer to the next node (NULL at the end).' } },
  'cs.I2.how-code-runs': {
    formulas: ['Preprocess → compile → assemble → link → executable', 'Stack: local variables; Heap: malloc', 'Linker combines compiled parts'],
    example: { q: 'Where does memory from malloc come from — stack or heap?', solution: 'The heap — used for dynamic allocation; the stack holds local variables and function calls.' } },
  'cs.A1.oop': {
    formulas: ['class = blueprint; object = instance', 'Methods take self as the first parameter', 'Inheritance reuses; encapsulation hides detail'],
    example: { q: 'What is the difference between a class and an object?', solution: 'A class is the blueprint (e.g., Dog); an object is a specific instance made from it (e.g., my_dog = Dog()).' } },
  'cs.A1.recursion': {
    formulas: ['Every recursion needs a base case', 'Each call moves toward the base case', 'No base case → stack overflow'],
    example: { q: 'Trace factorial(3) with factorial(n)=n·factorial(n−1), base factorial(0)=1.', solution: '3·factorial(2) = 3·2·factorial(1) = 3·2·1·factorial(0) = 3·2·1·1 = 6.' } },
  'cs.A1.trees-graphs': {
    formulas: ['BFS uses a queue (level by level)', 'DFS uses a stack/recursion (deep first)', 'Mark visited nodes to avoid cycles', 'Tree = acyclic graph'],
    example: { q: 'To find the shortest path (fewest edges) in an unweighted graph, BFS or DFS?', solution: 'BFS — it explores level by level, so it reaches a node by the fewest edges first.' } },
  'cs.A1.algorithms-ii': {
    formulas: ['Divide and conquer: split, solve, combine', 'Merge/quick sort: O(n log n)', 'Hashing → ~O(1) average lookup'],
    example: { q: 'Why is merge sort O(n log n)?', solution: 'It splits the list in half (log n levels of splitting) and does O(n) work merging at each level → n·log n.' } },
  'cs.A1.algorithmic-problem-solving': {
    formulas: ['Match the problem to a known pattern', 'Let input size guide the acceptable complexity', 'Get it correct first, then optimise'],
    example: { q: 'For n up to 10⁶, is an O(n²) solution acceptable?', solution: 'No — n² = 10¹² operations is far too slow. Aim for O(n) or O(n log n).' } },
  'cs.A1.testing': {
    formulas: ['Test normal, boundary and invalid inputs', 'A failing test pins down a bug', 'Re-run tests after every change (catch regressions)'],
    example: { q: 'What edge cases should you test for a function that averages a list?', solution: 'An empty list (avoid divide-by-zero), a single element, and negative numbers.' } },
  'cs.A2.software-design': {
    formulas: ['Understand requirements before coding', 'One clear responsibility per component', 'Define interfaces between components early'],
    example: { q: 'Why decide data models and interfaces before writing code?', solution: 'They shape everything; getting them right first avoids costly rewrites and keeps components loosely coupled.' } },
  'cs.A2.web-data-basics': {
    formulas: ['HTTP request → response (often JSON)', 'Check the response status before using data', 'Handle network failures gracefully'],
    example: { q: 'Why check an API response status before using its data?', solution: 'The request may have failed (e.g., 404/500); using missing data would crash the program, so handle errors first.' } },
  'cs.A2.working-with-codebase': {
    formulas: ['Read/understand before changing', 'Branch → pull request → review', 'Review for correctness and clarity, kindly'],
    example: { q: 'What is the safe workflow to change a shared codebase?', solution: 'Create a branch, make the change, open a pull request, get it reviewed, then merge — never commit risky changes straight to main.' } },
  'cs.A2.databases-intro': {
    formulas: ['Data in tables (rows, columns) linked by keys', 'SELECT reads, WHERE filters, JOIN combines', 'SQL is declarative (what, not how)'],
    example: { q: 'Write SQL to get names of users older than 18.', solution: 'SELECT name FROM users WHERE age > 18; — SELECT chooses the column, WHERE filters the rows.' } },
  'cs.A2.capstone-project': {
    formulas: ['Design → build → test → document → ship', 'Scope small enough to finish and polish', 'Version-control throughout; write a clear README'],
    example: { q: 'Why scope a capstone project small?', solution: 'A small, finished, tested and documented project demonstrates real ability far better than an ambitious unfinished one.' } },
};
