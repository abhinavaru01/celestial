# Common Mistakes — Functions as Objects

> Every learner hits these. Read the *why* — that is what stops the mistake coming back.

- **Reading f(x) as f times x.** **Fix:** it is the output of the machine f at input x; the brackets are notation, not multiplication.

- **Assuming f(g(x)) = g(f(x)).** **Fix:** test with a number — for f(x)=2x+1, g(x)=x², at x=3 you get 19 versus 49. Socks then shoes.

- **Treating f⁻¹(x) as 1/f(x).** **Fix:** the inverse undoes the function; check by composing, since f⁻¹(f(3)) must return 3.

- **Inverting a function that is not one-to-one.** Claiming the inverse of x² is √x over all reals. **Fix:** restrict the domain to x ≥ 0 first; otherwise the inverse cannot choose between 3 and −3.

- **Shifting the wrong way for f(x + a).** **Fix:** inside the bracket everything is reversed — f(x+3) moves the graph 3 to the LEFT. Test one point to confirm.

- **Forgetting to restrict the domain of a composition.** √(x−5) requires x ≥ 5 even though x − 5 accepts anything. **Fix:** check validity for both the inner and the outer function.

- **Confusing domain with range.** **Fix:** domain is what goes in (read left to right), range is what comes out (read bottom to top).

