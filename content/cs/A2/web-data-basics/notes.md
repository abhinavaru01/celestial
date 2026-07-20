# Web & Data Basics

> [!intro] A program that talks to the outside world (HTTP/API or a simple UI) and stores data.

## Talking to the world

Programs communicate over HTTP: requesting data from an API and receiving a response (often JSON). This connects your code to real services.

## Simple interfaces

A basic web page or UI lets users interact. Combined with storing data, this turns a script into a usable application.

```formula Key syntax & rules
HTTP request → response (often JSON)
Check the response status before using data
Handle network failures gracefully
```

> [!example] **Worked example**
> **Problem.** Why check an API response status before using its data?
> >
> > **Solution.** The request may have failed (e.g., 404/500); using missing data would crash the program, so handle errors first.

## What you should be able to do

- Make a basic web request or UI
- Send and receive data
- Store results

---

_A structured module in The Ultimate Learner — the essentials with all six learning layers. The three F1 "deep dive" topics show the target depth; modules are deepened over time._
