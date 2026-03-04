---
title: "Why I Switched My Portfolio from Vue + Vite to Nuxt"
date: "2025-02-25"
excerpt: "The journey of migrating a hand-crafted Vue SPA to Nuxt — and why the trade-offs were worth it."
tags: ["vue", "nuxt", "web-dev"]
published: true
cover: ""
---

My portfolio v2 was a pure Vue 3 + Vite SPA. Custom routing, manual SEO meta tags, hand-rolled markdown rendering — the whole thing. It worked great, but maintaining it felt like maintaining infrastructure instead of a website.

So I rebuilt it with **Nuxt**.

## What was wrong with the SPA?

Nothing, really. It was fast, it looked good, and it did everything I needed. But over time, a few pain points emerged:

### SEO was a constant battle

With a client-side SPA, search engines see an empty `<div id="app">` until JavaScript loads. I had to manually manage every `<meta>` tag, every Open Graph property, every structured data block in the HTML file.

```html
<!-- This was my index.html — 180 lines of meta tags -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta name="twitter:card" content="summary_large_image" />
<!-- ...and on and on -->
```

### File-based routing is just better

I had a `router/index.ts` with manual route definitions, lazy imports, and meta objects. With Nuxt, I just create a file in `pages/` and it works.

```
# Before (Vue Router)
src/router/index.ts  →  Manual route config
src/views/BlogView.vue

# After (Nuxt)
app/pages/blog/index.vue  →  Auto-routed to /blog
```

### Auto-imports save real time

In Vue, every component needs an explicit import. In Nuxt, components in `app/components/` are auto-imported. Same for composables, utilities, and Vue APIs.

## What I kept the same

The design didn't change at all. Same GSAP animations, same Lenis smooth scroll, same FractalBackground canvas, same typography. The migration was purely structural:

- `RouterLink` → `NuxtLink`
- `useHead` from `@vueuse/head` → Nuxt's built-in `useHead`
- `src/views/` → `app/pages/`
- `src/components/` → `app/components/` (auto-imported)
- `main.ts` setup code → `app/plugins/gsap.client.ts`

## The result

The site looks identical but is now:

- **SSR-ready** — search engines get fully rendered HTML
- **Easier to maintain** — less boilerplate, more conventions
- **Future-proof** — Nuxt's ecosystem handles the boring stuff

Sometimes the best migration is the one where nothing visually changes.
