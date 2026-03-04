---
title: "5 Lessons from Maintaining Open Source Projects"
date: "2024-11-20"
excerpt: "What I've learned from building and maintaining open-source tools — the good, the hard, and the unexpected."
tags: ["open-source", "career"]
published: true
cover: ""
---

I've been building open-source projects for a few years now. Some got traction, most didn't, and all of them taught me something. Here are five lessons I keep coming back to.

## 1. Documentation is the product

Your code might be brilliant, but if people can't figure out how to use it, it doesn't matter. I've seen great libraries die because the README was three lines long.

The projects that got the most stars and contributions? They all had:

- A clear **"Getting Started"** section
- **Code examples** that actually work when you copy-paste them
- An **API reference** that's up to date

Write docs like you're explaining it to yourself six months from now — because you will be that person.

## 2. Say no more than you say yes

Every feature request is a maintenance commitment. Every new option is a surface area for bugs. I learned this the hard way with `fsh`, where I said yes to too many plugin APIs early on and spent months untangling the complexity.

Now I follow a simple rule: **if a feature can live in userland, it should**. Core stays small, extensions handle the rest.

## 3. Issues are gifts

It's easy to feel defensive when someone opens an issue saying your code is broken. But every bug report is someone who:

1. Found your project
2. Tried to use it
3. Cared enough to tell you what went wrong

That's three things most projects never get. Treat issues like free QA.

## 4. Consistency beats intensity

I used to do marathon coding sessions — 12 hours on a weekend, then nothing for weeks. The commit graph looked like a heartbeat monitor.

What works better: **30 minutes a day**. Small, consistent progress compounds in ways that bursts can't. Your future self will thank you for the steady stream of well-tested, well-documented commits.

```
# Bad: sporadic bursts
████░░░░░░░░░░░░████████░░░░░░░░░░

# Good: steady rhythm
██░██░██░██░██░██░██░██░██░██░██░██
```

## 5. Ship before you're ready

My first open-source project sat in a private repo for months because I wanted it to be "perfect." When I finally published it, I got feedback in the first week that completely changed my API design.

All that time "perfecting" was wasted because I was optimizing for the wrong thing.

**Ship early. Iterate in public.** The best feedback comes from real users, not from you staring at your own code.

---

Open source isn't just about code — it's about building in public, learning from strangers, and contributing to something bigger than yourself. If you're thinking about starting a project, stop thinking and push that first commit.
