<script setup lang="ts">
import { Twitter, Github, Mail, ArrowRight } from 'lucide-vue-next'
import { useHead } from '@vueuse/head'
import BentoGrid from '../components/BentoGrid.vue'
import ResumeButton from '../components/ResumeButton.vue'

// SEO and meta tags
useHead({
  title: 'Abdullah O. Mustapha | Software Engineer & Full-Stack Developer',
  meta: [
    {
      name: 'description',
      content:
        'Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.',
    },
    {
      name: 'keywords',
      content:
        'Abdullah Mustapha, Software Engineer, Full-Stack Developer, Vue.js, TypeScript, Web Development, Portfolio, Scalable Applications, UI/UX',
    },
    { name: 'author', content: 'Abdullah O. Mustapha' },
  ],
})

const projects = [
  {
    title: 'Zenon Router',
    description:
      'A modern, type-safe routing solution for web applications built with performance in mind.',
    link: 'https://github.com/n8bird-oss/zenon-router',
    tags: ['TypeScript', 'Routing', 'Web'],
    large: true,
  },
  {
    title: 'Backend Starter CLI',
    description: 'CLI tool for rapid backend development setup with best practices baked in.',
    link: 'https://www.npmjs.com/package/backend-starter-cli/',
    tags: ['Node.js', 'CLI', 'DevTools'],
  },
  {
    title: 'Linux Shell (fsh)',
    description:
      'Custom Linux shell implementation featuring command history, piping, and job control.',
    link: 'https://github.com/n8bird-oss/fsh',
    tags: ['C', 'Systems', 'Linux'],
  },
  {
    title: 'Community Extension',
    description: 'Browser extension enhancing community engagement features for social platforms.',
    link: 'https://github.com/abdullah4tech/community-extension',
    tags: ['JavaScript', 'Extension', 'Community'],
  }
]
</script>

<template>
  <main class="relative min-h-screen w-full overflow-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative z-10 mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-8">
        <!-- Left Column: Intro -->
        <div class="flex flex-col justify-center animate-slide-up">
          <div
            class="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-gray-800 border border-gray-200 w-fit mb-6"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1
            class="font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            I'm Abdullah<br />
            <span class="text-gray-500">Mustapha.</span>
          </h1>

          <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl max-w-lg">
            A dedicated Software Engineer focused on building scalable web applications and
            intuitive user interfaces, turning imaginations into practical solutions.
          </p>

          <div class="mt-10 flex items-center gap-x-6">
            <ResumeButton />
            <a
              href="mailto:abdullahmu4life@gmail.com"
              class="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              Contact me <ArrowRight class="h-4 w-4" />
            </a>
          </div>

          <div class="mt-12 flex gap-4">
            <a
              href="https://twitter.com/abdullah4tech_"
              target="_blank"
              class="rounded-full p-3 text-gray-600 transition-all hover:text-[#1DA1F2] hover:-translate-y-1 border border-gray-200"
            >
              <Twitter class="h-5 w-5" />
            </a>
            <a
              href="https://github.com/abdullah4tech"
              target="_blank"
              class="rounded-full p-3 text-gray-600 transition-all hover:text-black hover:-translate-y-1 border border-gray-200"
            >
              <Github class="h-5 w-5" />
            </a>
            <a
              href="mailto:abdullahmu4life@gmail.com"
              class="rounded-full p-3 text-gray-600 transition-all hover:text-gray-900 hover:-translate-y-1 border border-gray-200"
            >
              <Mail class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Right Column: Visual/Abstract -->
        <div class="relative hidden lg:block animate-float">
          <div
            class="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gray-50 blur-3xl"
          ></div>
          <!-- Abstract shapes or 3D element placeholder -->
          <div class="relative h-full ">
            <div class="h-full w-full p-6 flex items-center justify-center">
              <div class="text-center space-y-4">
                <div class="text-6xl font-bold text-gray-900">2+</div>
                <div class="text-gray-500 font-medium">Years of Experience</div>
                <div class="h-px w-16 bg-gray-200 mx-auto my-4"></div>
                <div class="text-4xl font-bold text-gray-400">10+</div>
                <div class="text-gray-500 font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section (Bento Grid) -->
    <section id="projects" class="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div class="mb-12 md:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
        <p class="mt-4 text-lg text-gray-600">A collection of projects that I've built.</p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-[300px]">
        <BentoGrid v-for="(project, index) in projects" :key="index" v-bind="project" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 border-t border-gray-200 bg-white">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p class="text-sm text-gray-500">
            &copy; {{ new Date().getFullYear() }} Abdullah O. Mustapha. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-sm text-gray-500 hover:text-gray-900">Privacy</a>
            <a href="#" class="text-sm text-gray-500 hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
