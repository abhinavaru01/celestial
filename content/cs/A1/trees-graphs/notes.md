# Trees & Graphs

> [!intro] Representing and traversing trees and graphs (BFS/DFS).

## Nonlinear structures

Trees (hierarchies) and graphs (networks) model relationships lists cannot — file systems, maps, social networks. Nodes connect via edges.

## Traversal

BFS explores level by level (using a queue); DFS goes deep first (using a stack/recursion). The right traversal depends on the problem.

```formula Key syntax & rules
BFS uses a queue (level by level)
DFS uses a stack/recursion (deep first)
Mark visited nodes to avoid cycles
Tree = acyclic graph
```

> [!example] **Worked example**
> **Problem.** To find the shortest path (fewest edges) in an unweighted graph, BFS or DFS?
> >
> > **Solution.** BFS — it explores level by level, so it reaches a node by the fewest edges first.

## What you should be able to do

- Represent trees and graphs
- Traverse with BFS and DFS
- Choose a traversal for a task

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
