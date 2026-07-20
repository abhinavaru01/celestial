# File I/O & Data Formats

> [!intro] Reading and writing files, and working with CSV and JSON.

## Persistent data

Files let programs save and load data between runs. Opening, reading, writing and closing files (or using with) is the basis of persistence.

## Structured formats

CSV stores tables; JSON stores nested key-value data. Libraries parse them into lists and dictionaries you already know.

```formula Key syntax & rules
with open(path) as f: auto-closes the file
CSV → rows/columns; JSON → nested dict/list
Files persist data between runs
```

> [!example] **Worked example**
> **Problem.** Why prefer "with open(...)" over open(...) alone?
> >
> > **Solution.** The with block automatically closes the file when done, even if an error occurs — avoiding leaks and corruption.

## What you should be able to do

- Read and write files
- Parse CSV and JSON
- Handle data persistently

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
