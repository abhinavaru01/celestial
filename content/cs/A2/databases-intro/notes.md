# Databases Intro

> [!intro] Relational modelling and basic SQL.

## Relational model

A database stores data in tables (rows and columns) with keys linking related tables. This structures data far better than files for many applications.

## SQL

SQL queries data: SELECT to read, WHERE to filter, JOIN to combine tables. It is a declarative language — you say what you want, not how to get it.

```formula Key syntax & rules
Data in tables (rows, columns) linked by keys
SELECT reads, WHERE filters, JOIN combines
SQL is declarative (what, not how)
```

> [!example] **Worked example**
> **Problem.** Write SQL to get names of users older than 18.
> >
> > **Solution.** SELECT name FROM users WHERE age > 18; — SELECT chooses the column, WHERE filters the rows.

## What you should be able to do

- Model data in tables
- Write basic SQL queries
- Understand keys and relationships

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
