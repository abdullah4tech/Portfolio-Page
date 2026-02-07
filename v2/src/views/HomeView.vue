<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { Icon } from '@iconify/vue'
import GitHubGraph from '@/components/GitHubGraph.vue'
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Ensure ScrollTrigger is registered in this module's scope
gsap.registerPlugin(ScrollTrigger)

useHead({
  title: 'Abdullah O. Mustapha',
  meta: [{ name: 'description', content: 'Software Engineer & Open Sourcerer' }],
})

/* ── Data ─────────────────────────────────────────────── */

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

/* ── Refs ─────────────────────────────────────────────── */

const heroSection = ref<HTMLElement | null>(null)
const aboutSection = ref<HTMLElement | null>(null)
const githubSection = ref<HTMLElement | null>(null)
const projectsSection = ref<HTMLElement | null>(null)
const contactSection = ref<HTMLElement | null>(null)
const sponsorSection = ref<HTMLElement | null>(null)
const footerSection = ref<HTMLElement | null>(null)

/* ── GSAP ScrollTrigger Animations ────────────────────── */

const ctx = ref<gsap.Context | null>(null)

onMounted(async () => {
  await nextTick()

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    gsap.set('[data-scroll]', { opacity: 1, y: 0, scale: 1 })
    return
  }

  ctx.value = gsap.context(() => {

    /* ─── Hero: Staggered cascade ─── */
    const heroEls = heroSection.value?.querySelectorAll('[data-scroll]')
    if (heroEls?.length) {
      gsap.from(heroEls, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      })
    }

    /* ─── About paragraphs: Slide up one by one on scroll ─── */
    const aboutEls = aboutSection.value?.querySelectorAll('[data-scroll]')
    if (aboutEls?.length) {
      aboutEls.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: 'top 60%',
            toggleActions: 'play none none none',
          },
          y: 32,
          opacity: 0,
          duration: 0.9,
          ease: 'power2.out',
        })
      })
    }

    /* ─── GitHub graph: Fade in on scroll ─── */
    const githubEls = githubSection.value?.querySelectorAll('[data-scroll]')
    if (githubEls?.length) {
      githubEls.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
      })
    }

    /* ─── Projects header ─── */
    const projHeader = projectsSection.value?.querySelector('[data-scroll-header]')
    if (projHeader) {
      gsap.from(projHeader, {
        scrollTrigger: {
          trigger: projHeader,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      })
    }

    /* ─── Project cards: Staggered reveals ─── */
    const projectCards = projectsSection.value?.querySelectorAll('[data-scroll-card]')
    if (projectCards?.length) {
      projectCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
        })
      })
    }

    /* ─── Contact, Sponsor, Footer: Simple reveals ─── */
    const lowerSections = [contactSection.value, sponsorSection.value, footerSection.value]
    lowerSections.forEach((section) => {
      if (!section) return
      const els = section.querySelectorAll('[data-scroll]')
      els.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
      })
    })

  })
})

onUnmounted(() => {
  ctx.value?.revert()
})
</script>

<template>
  <div class="space-y-24 sm:space-y-36 pt-10 sm:pt-4 pb-28 sm:pb-16">

    <!-- ═══ Hero ═══ -->
    <section ref="heroSection" class="space-y-6 sm:space-y-7">
      <p data-scroll class="text-sm sm:text-base font-medium tracking-widest text-gray-400 uppercase">
        {Software Engineer}
      </p>
      <h1 data-scroll class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.05]">
        Abdullah O.<br class="hidden sm:block" /> Mustapha
      </h1>
      <p data-scroll class="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-500">
        I build open-source tools and infrastructure at
        <a href="#" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">DropX</a>,
        <a href="https://geneline-x.net" target="_blank" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">Geneline</a>, and
        <a href="https://codesl.org" target="_blank" class="text-gray-900 font-medium hover:underline underline-offset-4 decoration-gray-300">CODE(NIIT)</a>.
      </p>

      <div data-scroll class="flex items-center gap-5 pt-2">
        <a
          v-for="social in socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="text-gray-300 hover:text-gray-600 transition-colors duration-200"
        >
          <Icon :icon="social.icon" width="20" height="20" />
        </a>
      </div>
    </section>

    <!-- ═══ About ═══ -->
    <section ref="aboutSection" class="space-y-7 sm:space-y-8">
      <p data-scroll class="max-w-2xl text-base sm:text-lg leading-[1.9] text-gray-500">
        I'm all about building systems that actually work — no shortcuts. For me, it's not just
        about writing code; it's about creating solid infrastructure that solves real-life
        problems and stands the test of time. I enjoy taking heavy, complex headaches and
        turning them into clean, lasting solutions.
      </p>
      <p data-scroll class="max-w-2xl text-base sm:text-lg leading-[1.9] text-gray-500">
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
      <p data-scroll class="max-w-2xl text-base sm:text-lg leading-[1.9] text-gray-500">
        Outside of programming, I enjoy photography and traveling. I moved from
        <span class="text-gray-700">Lagos</span> to
        <span class="text-gray-700">Freetown, Sierra Leone</span> to pursue my studies
        in 2022. If you're around, let's grab coffee.
      </p>
    </section>

    <!-- ═══ GitHub ═══ -->
    <section ref="githubSection" class="space-y-5">
      <h2 data-scroll class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">Contribution Graph</h2>
      <div data-scroll>
        <GitHubGraph username="abdullah4tech" :join-year="2022" />
      </div>
    </section>

    <!-- ═══ Projects ═══ -->
    <section ref="projectsSection" class="space-y-10">
      <div data-scroll-header class="flex items-baseline justify-between">
        <h2 class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">Projects</h2>
        <RouterLink to="/projects" class="flex items-center gap-1 text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors">
          View all
          <Icon icon="ph:arrow-right-duotone" width="14" height="14" />
        </RouterLink>
      </div>

      <div class="grid gap-0">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          data-scroll-card
          class="group flex items-start justify-between gap-4 py-6 sm:py-7 border-b border-gray-100 last:border-0 transition-colors"
        >
          <div class="space-y-2 min-w-0">
            <div class="flex items-center gap-3">
              <span class="font-mono text-[10px] sm:text-[11px] tracking-wider text-gray-300 uppercase">{{ project.tag }}</span>
              <h3 class="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors truncate">
                {{ project.name }}
              </h3>
            </div>
            <p class="text-sm sm:text-base text-gray-400 leading-relaxed">{{ project.desc }}</p>
          </div>
          <Icon
            icon="ph:arrow-up-right-duotone"
            width="16"
            height="16"
            class="mt-2 shrink-0 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>

    <!-- ═══ Contact ═══ -->
    <section ref="contactSection" class="space-y-5">
      <h2 data-scroll class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">Contact</h2>
      <p data-scroll class="text-sm sm:text-base text-gray-500">
        Reach me at
        <a
          href="mailto:abdullahmu4life@gmail.com"
          class="text-gray-900 font-mono text-[13px] sm:text-sm hover:underline underline-offset-4 decoration-gray-300"
        >abdullahmu4life@gmail.com</a>
      </p>
    </section>

    <!-- ═══ Sponsor ═══ -->
    <section ref="sponsorSection" class="space-y-6">
      <h2 data-scroll class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">Sponsor</h2>
      <p data-scroll class="text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed">
        If you enjoy my work and find it useful, consider sponsoring me to help keep
        open source sustainable.
      </p>
      <a
        data-scroll
        href="#"
        target="_blank"
        class="inline-flex items-center gap-2.5 px-6 py-3 text-sm sm:text-base font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
      >
        <Icon icon="ph:heart-duotone" width="16" height="16" class="text-gray-400" />
        Sponsor Abdullah
      </a>
    </section>

    <!-- ═══ Footer ═══ -->
    <footer ref="footerSection" class="pt-6 border-t border-gray-100">
      <p data-scroll class="text-xs sm:text-sm text-gray-300 tracking-wide">
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
