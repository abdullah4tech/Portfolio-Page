---
title: "Building fsh: A Modern Shell from Scratch"
slug: "building-fsh"
date: "2025-01-15"
author: "Abdullah O. Mustapha"
excerpt: "The story behind fsh — why I built a new shell, the architecture decisions, and what I learned shipping a TypeScript CLI tool to thousands of developers."
tags: ["typescript", "open-source", "cli"]
cover: ""
published: true
---

# Building fsh: A Modern Shell from Scratch

Every developer spends hours in their terminal. Yet most shells feel like they were designed in the 1980s — because they were.

That frustration led me to build **fsh**, a modern shell that rethinks what terminal interaction should feel like in 2025.

## Why Another Shell?

The existing options are great at what they do. Bash is ubiquitous. Zsh has incredible plugins. Fish has beautiful defaults. But none of them were built with modern developer workflows in mind from day one.

I wanted a shell that:

- **Starts instantly** — no 200ms plugin loading
- **Understands context** — knows you're in a git repo, a Node project, a Docker environment
- **Is hackable** — configuration in TypeScript, not arcane shell syntax
- **Looks beautiful** — without spending hours configuring themes

## The Architecture

fsh is built as a layered system. Each layer is independent and testable:

```typescript
interface ShellLayer {
  name: string
  priority: number
  init(): Promise<void>
  process(input: ParsedInput): Promise<LayerResult>
}

const layers: ShellLayer[] = [
  new SyntaxLayer(),      // Parse input
  new AliasLayer(),       // Resolve aliases
  new HistoryLayer(),     // Search history
  new CompletionLayer(),  // Tab completions
  new ExecutionLayer(),   // Run commands
]
```

This architecture means you can swap out any layer. Don't like the default completion engine? Write your own. Want to add AI-powered suggestions? It's just another layer.

## The Parser

Parsing shell input is surprisingly tricky. You need to handle:

- Pipes: `cat file.txt | grep "pattern" | wc -l`
- Redirections: `echo "hello" > output.txt 2>&1`
- Subshells: `echo $(date +%Y)`
- Quoting: `echo "it's a 'test'"`
- Escaping: `echo "line1\nline2"`

I built a recursive descent parser that handles all of these cases:

```typescript
function parseCommand(tokens: Token[]): CommandNode {
  const cmd: CommandNode = {
    type: 'command',
    name: tokens[0].value,
    args: [],
    redirections: [],
    pipe: null,
  }

  let i = 1
  while (i < tokens.length) {
    const token = tokens[i]

    switch (token.type) {
      case 'PIPE':
        cmd.pipe = parseCommand(tokens.slice(i + 1))
        return cmd
      case 'REDIRECT':
        cmd.redirections.push(parseRedirection(tokens, i))
        i += 2
        break
      default:
        cmd.args.push(token.value)
        i++
    }
  }

  return cmd
}
```

## Performance Matters

Startup time is critical for a shell. Nobody wants to wait 500ms every time they open a terminal tab.

I obsessed over this. The result: **fsh starts in under 50ms** on a cold boot. Here's how:

1. **Lazy loading** — plugins load on first use, not on startup
2. **Compiled config** — TypeScript config is compiled once and cached
3. **Native bindings** — hot paths use native addons via N-API
4. **No framework** — zero runtime dependencies for the core

## Lessons Learned

Building fsh taught me more about systems programming than any course ever could:

- **Signals are hard** — `SIGINT`, `SIGTSTP`, `SIGCHLD` — each one is a rabbit hole
- **TTY handling is arcane** — raw mode, cooked mode, canonical mode... the Unix terminal API is a time capsule
- **Cross-platform is painful** — what works on Linux breaks on macOS, and Windows is another universe entirely
- **Developer tools need developer empathy** — if setup takes more than 2 minutes, people will leave

## What's Next

fsh is still in active development. The roadmap includes:

- **Plugin marketplace** — install shell plugins like VS Code extensions
- **AI completions** — context-aware command suggestions
- **Session sharing** — pair program in the same shell session
- **Web terminal** — run fsh in the browser for demos and tutorials

If you're interested in contributing, check out the [GitHub repo](https://github.com/n8bird-oss/fsh). The codebase is well-documented, and I'm always happy to help newcomers get started.

---

*Building tools for developers is the most rewarding work I've ever done. Every feature ships with the knowledge that it'll save someone hours of frustration. That's worth every late night.*
