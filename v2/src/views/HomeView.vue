<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { Icon } from '@iconify/vue'

useHead({
  title: 'Abdullah O. Mustapha',
  meta: [{ name: 'description', content: 'Software Engineer & Open Sourcerer' }],
})

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } },
}

const fadeInDelay = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, delay, ease: 'easeOut' } },
})

const projects = [
  {
    name: 'fsh',
    desc: 'A modern, fast shell for the terminal.',
    href: 'https://github.com/n8bird-oss/fsh',
    tag: 'TYPESCRIPT',
  },
  {
    name: 'Doks AI',
    desc: 'Intelligent documentation engine powered by AI.',
    href: 'https://doks-ai.vercel.app',
    tag: 'TYPESCRIPT',
  },
  {
    name: 'Zenon Router',
    desc: 'Lightweight, fast HTTP router for Node.js.',
    href: 'https://github.com/n8bird-oss/zenon-router',
    tag: 'TYPESCRIPT',
  },
]

const socials = [
  { icon: 'ph:github-logo-duotone', href: 'https://github.com/abdullah4tech', label: 'GitHub' },
  { icon: 'ph:threads-logo-duotone', href: '#', label: 'Threads' },
  { icon: 'ph:discord-logo-duotone', href: '#', label: 'Discord' },
  { icon: 'ph:youtube-logo-duotone', href: '#', label: 'YouTube' },
  { icon: 'ph:instagram-logo-duotone', href: '#', label: 'Instagram' },
]
</script>

<template>
  <div class="space-y-20 sm:space-y-28 pt-10 sm:pt-4 pb-28 sm:pb-16">

    <!-- Hero -->
    <section v-motion="fadeIn" class="space-y-5">
      <p class="text-sm font-medium tracking-widest text-gray-400 uppercase">{Software Engineer}</p>
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
        Abdullah O.<br class="hidden sm:block" /> Mustapha
      </h1>
      <p class="max-w-xl text-base sm:text-lg leading-relaxed text-gray-500">
        I build open-source tools and infrastructure at
        <a href="#" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">DropX</a>,
        <a href="https://geneline-x.net" target="_blank" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">Geneline</a>, and
        <a href="https://codesl.org" target="_blank" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">CODE(NIIT)</a>.
      </p>

      <div class="flex items-center gap-4 pt-2">
        <a
          v-for="social in socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="text-gray-300 hover:text-gray-600 transition-colors duration-200"
        >
          <Icon :icon="social.icon" width="18" height="18" />
        </a>
      </div>
    </section>

    <!-- About -->
    <section v-motion="fadeInDelay(100)" class="space-y-6">
      <p class="max-w-2xl text-base leading-[1.85] text-gray-500">
        I'm all about building systems that actually work — no shortcuts. For me, it's not just
        about writing code; it's about creating solid infrastructure that solves real-life
        problems and stands the test of time. I enjoy taking heavy, complex headaches and
        turning them into clean, lasting solutions.
      </p>
      <p class="max-w-2xl text-base leading-[1.85] text-gray-500">
        My focus right now is on
        <a href="https://doks-ai.vercel.app" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">Doks AI</a>
        and
        <a href="https://github.com/n8bird-oss/zenon-router" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">Zenon Router</a>.
        I give
        <RouterLink to="/talks" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">talks</RouterLink>
        and write
        <RouterLink to="/blog" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">blog posts</RouterLink>
        about open source, coding, and web development.
      </p>
      <p class="max-w-2xl text-base leading-[1.85] text-gray-500">
        Outside of programming, I enjoy photography and traveling. I moved from
        <span class="text-gray-700">Lagos</span> to
        <span class="text-gray-700">Freetown, Sierra Leone</span> to pursue my studies
        in 2022. If you're around, let's grab coffee.
      </p>
    </section>

    <!-- Projects -->
    <section v-motion="fadeInDelay(200)" class="space-y-8">
      <div class="flex items-baseline justify-between">
        <h2 class="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Projects</h2>
        <RouterLink to="/projects" class="text-xs text-gray-400 hover:text-gray-600 transition-colors">
          View all →
        </RouterLink>
      </div>

      <div class="grid gap-0">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-start justify-between gap-4 py-5 border-b border-gray-100 last:border-0 transition-colors"
        >
          <div class="space-y-1.5 min-w-0">
            <div class="flex items-center gap-2.5">
              <span class="font-mono text-[10px] tracking-wider text-gray-300 uppercase">{{ project.tag }}</span>
              <h3 class="text-[15px] font-semibold text-gray-900 group-hover:text-gray-600 transition-colors truncate">
                {{ project.name }}
              </h3>
            </div>
            <p class="text-sm text-gray-400 leading-relaxed">{{ project.desc }}</p>
          </div>
          <Icon
            icon="ph:arrow-up-right-duotone"
            width="14"
            height="14"
            class="mt-1.5 shrink-0 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </section>

    <!-- Contact -->
    <section v-motion="fadeInDelay(300)" class="space-y-4">
      <h2 class="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Contact</h2>
      <p class="text-sm text-gray-500">
        Reach me at
        <a
          href="mailto:abdullahmu4life@gmail.com"
          class="text-gray-900 font-mono text-[13px] hover:underline underline-offset-4 decoration-gray-300"
        >abdullahmu4life@gmail.com</a>
      </p>
    </section>

    <!-- Sponsor -->
    <section v-motion="fadeInDelay(400)" class="space-y-5">
      <h2 class="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Sponsor</h2>
      <p class="text-sm text-gray-500 max-w-lg leading-relaxed">
        If you enjoy my work and find it useful, consider sponsoring me to help keep
        open source sustainable.
      </p>
      <a
        href="#"
        target="_blank"
        class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
      >
        <Icon icon="ph:heart-duotone" width="14" height="14" class="text-gray-400" />
        Sponsor Abdullah
      </a>
    </section>

    <!-- Footer -->
    <footer v-motion="fadeInDelay(500)" class="pt-4 border-t border-gray-100">
      <p class="text-xs text-gray-300 tracking-wide">
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gray-500 transition-colors"
        >CC BY-NC-SA 4.0</a>
        &nbsp;·&nbsp; 2025–PRESENT © Abdullah O. Mustapha
      </p>
    </footer>
  </div>
</template>
