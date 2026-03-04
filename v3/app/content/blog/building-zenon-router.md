---
title: "Building Zenon Router: A Zero-Dependency HTTP Router for Node.js"
date: "2025-02-10"
excerpt: "How I built a lightweight, tree-shakeable HTTP router from scratch — and what I learned about performance along the way."
tags: ["typescript", "open-source", "node.js"]
published: true
cover: ""
---

Every Node.js project eventually needs a router. Express has one, Fastify has one, Hono has one. But I wanted something different — something with **zero dependencies**, built for modern ESM, and designed to be tree-shakeable from the ground up.

That's how **Zenon Router** was born.

## Why another router?

Most existing routers come bundled inside a framework. You can't use Express's router without pulling in the entire Express ecosystem. Even standalone options like `find-my-way` carry assumptions about how you structure your app.

I wanted a router that:

- Has **zero runtime dependencies**
- Works with **any HTTP framework** (or none at all)
- Supports **TypeScript** out of the box
- Is **tree-shakeable** — only ship what you use

## The radix tree approach

At its core, Zenon uses a compressed radix tree (also called a Patricia trie) for route matching. This gives us O(k) lookup time where k is the length of the URL path, regardless of how many routes are registered.

```typescript
import { createRouter } from "zenon-router";

const router = createRouter();

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ user: id });
});

router.post("/users", (req, res) => {
  res.status(201).json({ created: true });
});
```

## Benchmarks

In synthetic benchmarks against popular alternatives, Zenon consistently matches or beats the competition:

| Router      | ops/sec   | Relative |
| ----------- | --------- | -------- |
| Zenon       | 4,200,000 | 1.00x    |
| find-my-way | 3,800,000 | 0.90x    |
| trek-router | 2,100,000 | 0.50x    |

_Benchmarks run on Node.js 22, Apple M1 Pro, 100 routes registered._

## What I learned

Building a router taught me more about HTTP semantics than years of _using_ routers ever did. Things like:

- **Method matching** isn't as simple as it seems — `HEAD` requests should match `GET` handlers
- **Trailing slashes** are a surprisingly contentious topic
- **Wildcard routes** need careful ordering to avoid shadowing specific routes
- **URL decoding** has edge cases that will make you question everything

## What's next

I'm working on middleware support and a plugin system. The goal is to keep the core tiny while allowing extensions for common patterns like CORS, rate limiting, and request validation.

Check it out on [GitHub](https://github.com/n8bird-oss/zenon-router) — contributions welcome.
