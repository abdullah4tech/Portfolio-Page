<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { Monitor, Code, Database, Globe, Terminal, Github } from 'lucide-vue-next'

useHead({
  title: 'Abdullah O. Mustapha',
  meta: [{ name: 'description', content: 'Software Engineer & Open Sourcerer' }],
})
</script>

<template>
  <div class="space-y-10">
    <!-- Header / Intro -->
    <section class="space-y-6">
      <h1 class="text-3xl font-bold text-gray-900">Abdullah O. Mustapha</h1>
      <p class="text-gray-600 leading-relaxed">
        Hey! I'm Abdullah, a fanatical open sourcerer and software engineer.
      </p>

      <!-- Badges -->
      <div class="space-y-2 text-sm text-gray-600">
        <div class="flex flex-wrap items-center gap-2">
          <span>Working at</span>
          <a
            href="#"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            <Monitor class="w-3 h-3" /> DropX
          </a>
          <a
            href="#"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            <Monitor class="w-3 h-3" /> Geneline
          </a>
          <a
            href="#"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            <Monitor class="w-3 h-3" /> CODE(NIIT)
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <span>Creator of</span>
          <a
            href="https://github.com/abdullah4tech/codex"
            target="_blank"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
          >
            <Code class="w-3 h-3" /> CODEX
          </a>
          <a
            href="https://github.com/abdullah4tech/doksAI"
            target="_blank"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors"
          >
            <Database class="w-3 h-3" /> doksAI
          </a>
          <a
            href="https://github.com/n8bird-oss/zenon-router"
            target="_blank"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-50 text-orange-700 rounded hover:bg-orange-100 transition-colors"
          >
            <Globe class="w-3 h-3" /> Zenon Router
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <span>Stack</span>
          <span
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-600 font-mono text-xs"
          >
            <Terminal class="w-3 h-3" /> Vue
          </span>
          <span
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-600 font-mono text-xs"
          >
            <Terminal class="w-3 h-3" /> TypeScript
          </span>
          <span
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-600 font-mono text-xs"
          >
            <Terminal class="w-3 h-3" /> Node.js
          </span>
        </div>
      </div>
    </section>

    <!-- Long form text -->
    <section class="space-y-6 text-gray-600 leading-relaxed">
      <p>
        Dreaming up cool ideas and making them come true is where my passion lies. I am enthusiastic
        about building tools that help myself and others to be more productive and enjoy the process
        of crafting.
      </p>
      <p>
        Currently, I am balancing my time between multiple exciting roles. At
        <span class="text-gray-900 font-medium">DropX</span>, I'm helping build logistics solutions
        for the future. With <span class="text-gray-900 font-medium">Geneline</span>, I'm exploring
        the intersection of technology and genomics. And at
        <span class="text-gray-900 font-medium">CODE(NIIT)</span>, I have the privilege of mentoring
        the next generation of developers.
      </p>
      <p>
        My personal focus remains on building
        <a
          href="https://github.com/abdullah4tech/doksAI"
          class="text-gray-900 font-medium underline decoration-gray-300 underline-offset-4"
          >Doks AI</a
        >
        — an intelligent documentation engine, and developing
        <a
          href="https://github.com/n8bird-oss/zenon-router"
          class="text-gray-900 font-medium underline decoration-gray-300 underline-offset-4"
          >Zenon Router</a
        >. I also contribute to open source projects like Stunkjs and experiment with scalable
        backend architectures.
      </p>
      <p>
        I give
        <span class="text-gray-900 font-medium underline decoration-gray-300 underline-offset-4"
          >talks</span
        >
        and write
        <span class="text-gray-900 font-medium underline decoration-gray-300 underline-offset-4"
          >blog posts</span
        >
        about open source, coding, and web development. Occasionally, I do live coding streams
        sharing my workflow and experiments.
      </p>
      <p>
        Outside of programming, I enjoy doing photography and traveling. I post photos on this page.
        I also love anime, movies and dramas.
      </p>
      <p>
        I moved from <span class="text-gray-900 font-medium">Lagos</span> to
        <span class="text-gray-900 font-medium">Freetown, Sierra Leone</span> to pursue my studies
        at college in the year 2022. If you are around, please reach out and let's have some coffee
        or work together.
      </p>
    </section>

    <div class="w-10 h-px bg-gray-200 my-8"></div>

    <!-- Find me on -->
    <section class="space-y-4">
      <h2 class="text-sm font-medium text-gray-900">Find me on</h2>
      <div class="flex flex-wrap gap-x-4 gap-y-2 text-gray-600">
        <a
          href="https://github.com/abdullah4tech"
          target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          <Github class="w-4 h-4" />
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768v17.095c0 .512.256 1.021.67 1.242.145.08.301.119.456.119.18 0 .363-.049.528-.146 1.636-.926 3.537-2.162 5.24-3.657 1.658-1.451 3.04-3.018 3.845-4.273.699.892 1.787 2.162 3.233 3.394 1.654 1.407 3.524 2.585 5.132 3.451.182.098.383.147.584.147.155 0 .312-.039.456-.119.414-.221.67-.73.67-1.242V3.768c0-.688-.14-1.86-.902-2.203-.659-.299-1.664-.621-4.3 1.24-2.752 1.942-5.711 5.881-6.798 7.995z"
            />
          </svg>
          Bluesky
        </a>
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12.186 3.998h.005c1.174 0 2.104 1.05 2.104 2.358v6.474h3.47c1.174 0 2.104 1.05 2.104 2.358 0 1.308-.93 2.358-2.104 2.358h-3.47v.001c0 1.174-.93 2.104-2.104 2.104h-.005c-1.174 0-2.104-.93-2.104-2.104v-.001H6.61c-1.174 0-2.104-1.05-2.104-2.358 0-1.308.93-2.358 2.104-2.358h3.47V6.356c0-1.308.93-2.358 2.104-2.358z"
            />
          </svg>
          Threads
        </a>
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
            />
          </svg>
          Discord Server
        </a>
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            />
          </svg>
          YouTube
        </a>
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-1.5 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
          Instagram
        </a>
      </div>

      <p class="text-sm text-gray-600">
        Or mail me at
        <a
          href="mailto:abdullahmu4life@gmail.com"
          class="text-gray-900 font-mono underline decoration-gray-300 underline-offset-4 hover:text-gray-600 transition-colors"
          >abdullahmu4life@gmail.com</a
        >
      </p>

      <p class="text-xs text-gray-400">
        ( Inactive on
        <span class="line-through">Mastodon</span>
        <span class="line-through">Twitter</span>
        <span class="line-through">微博</span>
        <span class="line-through">知乎</span>
        <span class="line-through">掘金</span>
        )
      </p>
    </section>

    <div class="w-10 h-px bg-gray-200 my-8"></div>

    <!-- Sponsor Section -->
    <section class="space-y-6">
      <p class="text-gray-600 leading-relaxed">
        If you enjoy my work and find them useful, consider sponsor me and the ecosystem to help
        Open Source sustainable. Thank you!
      </p>
      <div class="flex flex-wrap gap-3">
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          Sponsor the Ecosystem
        </a>
        <a
          href="#"
          class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          How does this work?
        </a>
      </div>
      <div class="flex flex-wrap gap-3">
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          Sponsor to support Abdullah
        </a>
        <a
          href="#"
          target="_blank"
          class="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors font-mono"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <path d="M12 8v8m-4-4h8" />
          </svg>
          赞助支持
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="pt-10 text-sm text-gray-400">
      <p>CC BY-NC-SA 4.0 2025 -PRESENT © Abdullah O. Mustapha</p>
    </footer>
  </div>
</template>
