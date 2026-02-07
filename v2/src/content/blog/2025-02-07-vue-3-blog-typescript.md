---
title: "How I Built This Blog with Vue 3 and Markdown"
slug: "vue-3-blog-typescript"
date: "2025-02-07"
author: "Abdullah O. Mustapha"
excerpt: "A deep dive into building a zero-backend blog using Vue 3, TypeScript, and Markdown — where every post is a git commit and comments live in GitHub Discussions."
tags: ["vue", "typescript", "markdown"]
cover: ""
published: true
---

# How I Built This Blog with Vue 3 and Markdown

I wanted a blog where writing feels like writing README files. No admin panel. No CMS. No database. Just Markdown files in a git repository.

Here's how I built it.

## The Philosophy

Every engineering decision started with one question: **"Does this make writing easier?"**

If the answer was no, I cut it. That's how I ended up with:

- **Markdown files** as the content source
- **Frontmatter** for metadata (title, date, tags)
- **Git** as the publishing workflow
- **GitHub Discussions** for comments via Giscus

No database means no database problems. No CMS means no CMS updates. The entire blog is a folder of `.md` files.

## The Stack

```text
Vue 3 + TypeScript    → Framework
markdown-it + shiki   → Markdown rendering + syntax highlighting
gray-matter            → Frontmatter parsing
Giscus                 → GitHub-powered comments
Vite                   → Build tool
```

## Loading Posts at Build Time

The key insight is using Vite's `import.meta.glob` to load all Markdown files:

```typescript
const modules = import.meta.glob('/src/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})
```

This gives us every `.md` file as a raw string. We then parse it with `gray-matter` to extract frontmatter and content:

```typescript
import matter from 'gray-matter'

Object.entries(modules).forEach(([path, raw]) => {
  const { data, content } = matter(raw as string)

  posts.push({
    ...data,
    content,
    readingTime: Math.ceil(content.split(/\s+/).length / 200),
    slug: data.slug || extractSlugFromPath(path),
  })
})
```

## Syntax Highlighting with Shiki

I chose Shiki over Prism.js because it uses the same highlighter as VS Code. Your code blocks look *exactly* like they do in your editor:

```typescript
import { createHighlighter } from 'shiki'

const highlighter = await createHighlighter({
  themes: ['github-dark'],
  langs: ['typescript', 'vue', 'bash', 'json', 'css'],
})
```

The result is beautiful, accurate syntax highlighting with zero CSS to maintain.

## The Comments System

Traditional comment systems require a database, authentication, spam filtering — it's a whole infrastructure problem.

**Giscus** eliminates all of that by using GitHub Discussions as the backend:

- Users sign in with their GitHub account
- Comments are stored as Discussion replies
- You moderate through GitHub's native tools
- It's completely free

The setup is a single Vue component:

```vue
<Giscus
  repo="your-username/your-repo"
  repo-id="R_kgDO..."
  category="Blog Comments"
  category-id="DIC_kwDO..."
  mapping="pathname"
  reactions-enabled="1"
  theme="light"
  loading="lazy"
/>
```

## Performance

The entire blog loads in under 1 second. Here's why:

1. **Static content** — Markdown is parsed at build time, not runtime
2. **Lazy loading** — Shiki highlighter loads only on post pages
3. **No framework overhead** — comments load via iframe, not a full SDK
4. **Image optimization** — covers are lazy-loaded with native `loading="lazy"`

## The Writing Workflow

Writing a new post takes 5 minutes:

```bash
# 1. Create a new markdown file
touch src/content/blog/2025-02-07-my-post.md

# 2. Write your post (with frontmatter)
vim src/content/blog/2025-02-07-my-post.md

# 3. Preview locally
bun dev

# 4. Publish
git add . && git commit -m "New post: My Post" && git push
```

That's it. No deploy button. No publish workflow. Git push = live.

## What I'd Do Differently

If I were starting over, I'd consider:

- **MDX** — for embedding Vue components inside Markdown
- **Content collections** — schema validation for frontmatter
- **RSS feed** — I should add this (it's on the todo list)
- **Search** — full-text search across all posts

But honestly? This setup handles 95% of what I need. The remaining 5% isn't worth the complexity.

---

*The best blog engine is the one that gets out of your way. Write in Markdown, commit to git, and let the machines handle the rest.*
