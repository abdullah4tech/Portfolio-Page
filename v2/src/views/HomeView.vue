<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { Code, Database, Globe, Terminal, Github } from 'lucide-vue-next'

useHead({
  title: 'Abdullah O. Mustapha',
  meta: [{ name: 'description', content: 'Software Engineer & Open Sourcerer' }],
})

// Animation variants
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 600,
      ease: 'easeOut',
    },
  },
}

const staggerContainer = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 100,
    },
  },
}

const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 500,
      ease: 'easeOut',
    },
  },
}
</script>

<template>
  <div class="space-y-10">
    <!-- Header / Intro -->
    <section v-motion="fadeInUp" class="space-y-6">
      <h1 class="text-3xl font-bold text-gray-900 mt-18 pb-5">Abdullah O. Mustapha</h1>
      <p class="text-gray-600 leading-relaxed">
        Hey! I'm Abdullah, a open sourcerer and backend engineer.
      </p>

      <!-- Badges -->
      <div v-motion="staggerContainer" class="space-y-2 text-sm text-gray-600">
        <div v-motion="scaleIn" class="flex flex-wrap items-center gap-2">
          <span>Working at</span>
          <a
            href="#"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            <img src="../assets/DropX.jpg" class="w-5" alt=""> DropX
          </a> /
          <a
            href="https://geneline-x.net" target="_blank"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            <img src="https://geneline-x.net/favicon.ico" class="w-3 h-3" alt=""> Geneline
          </a> /
          <a
            href="https://codesl.org" target="_blank"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-gray-700 font-medium hover:bg-gray-200 transition-colors"
          >
            <img src="http://codesl.org/assets/web/images/tem_img/header_logo_2.png" class="w-8" alt=""> CODE(NIIT)
          </a>
        </div>

        <div v-motion="scaleIn" class="flex flex-wrap items-center gap-2">
          <span>Creator of</span>
          <a
            href="https://github.com/n8bird-oss/fsh"
            target="_blank"
            class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
          >
            <Code class="w-3 h-3" /> fsh
          </a>
          <a
            href="https://doks-ai.vercel.app"
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

        <div v-motion="scaleIn" class="flex flex-wrap items-center gap-2">
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
    <section
      v-motion="{
        initial: { opacity: 0, y: 40 },
        enter: { opacity: 1, y: 0, transition: { duration: 700, delay: 200 } },
      }"
      class="space-y-6 text-gray-600 leading-relaxed"
    >
      <p>
        I’m passionate about building robust, scalable, and maintainable systems that solve
        real-world problems. My work focuses on building infrastructure and applications that
        perform at scale and endure over time. I believe great software is more than code — it’s a
        balance of clarity, performance, and purpose. I enjoy turning complex challenges into
        elegant, sustainable solutions. Currently, I’m exploring the intersection of developer
        experience, open-source innovation, and AI-driven development workflows.
      </p>
      <p>
        Currently, I am balancing my time between multiple exciting roles. At
        <span class="text-gray-900 font-medium">DropX</span>, I'm helping build logistics solutions
        for the future. With <span class="text-gray-900 font-medium">Geneline</span>, an AI company,
        I work on backend development and infrastructure integration. And at
        <span class="text-gray-900 font-medium">CODE(NIIT)</span>, I have the privilege of mentoring
        the next generation of developers.
      </p>
      <p>
        My personal focus remains on building
        <a
          href="https://doks-ai.vercel.app"
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

    <div
      v-motion="{
        initial: { scaleX: 0 },
        enter: { scaleX: 1, transition: { duration: 800, delay: 300 } },
      }"
      class="w-10 h-px bg-gray-200 my-8 origin-left"
    ></div>

    <!-- Find me on -->
    <section
      v-motion="{
        initial: { opacity: 0, y: 30 },
        enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 400 } },
      }"
      class="space-y-4"
    >
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
          <svg
            class="w-4 h-4"
            aria-label="Threads"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
            ></path>
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

    </section>

    <div
      v-motion="{
        initial: { scaleX: 0 },
        enter: { scaleX: 1, transition: { duration: 800, delay: 500 } },
      }"
      class="w-10 h-px bg-gray-200 my-8 origin-left"
    ></div>

    <!-- Sponsor Section -->
    <section
      v-motion="{
        initial: { opacity: 0, y: 30 },
        enter: { opacity: 1, y: 0, transition: { duration: 600, delay: 600 } },
      }"
      class="space-y-6"
    >
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
          class="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all duration-200 font-mono"
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
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer
      v-motion="{
        initial: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 1000, delay: 700 } },
      }"
      class="pt-10 text-sm text-gray-400"
    >
      <p>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gray-600 transition-colors underline decoration-gray-300 underline-offset-4"
        >
          CC BY-NC-SA 4.0
        </a>
        2025-PRESENT © Abdullah O. Mustapha
      </p>
    </footer>
  </div>
</template>
