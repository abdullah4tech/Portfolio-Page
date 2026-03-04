<script setup lang="ts">
import { Icon } from "@iconify/vue";

useHead({
  title: "Abdullah O. Mustapha",
  meta: [
    { name: "description", content: "Software Engineer & Open Sourcerer" },
  ],
});

const projects = [
  {
    name: "fsh",
    desc: "A modern, fast shell for the terminal.",
    href: "https://github.com/n8bird-oss/fsh",
    tag: "TYPESCRIPT",
  },
  {
    name: "Doks AI",
    desc: "Intelligent documentation engine powered by AI.",
    href: "https://doks-ai.vercel.app",
    tag: "TYPESCRIPT",
  },
  {
    name: "Zenon Router",
    desc: "Lightweight, fast HTTP router for Node.js.",
    href: "https://github.com/n8bird-oss/zenon-router",
    tag: "TYPESCRIPT",
  },
];

const socials = [
  {
    icon: "ph:github-logo-duotone",
    href: "https://github.com/abdullah4tech",
    label: "GitHub",
  },
  { icon: "ph:medium-logo-duotone", href: "#", label: "Medium" },
  { icon: "ph:x-logo-duotone", href: "#", label: "X" },
  { icon: "ph:discord-logo-duotone", href: "#", label: "Discord" },
  { icon: "ph:youtube-logo-duotone", href: "#", label: "YouTube" },
  { icon: "ph:linkedin-logo-duotone", href: "#", label: "LinkedIn" },
];
</script>

<template>
  <div class="space-y-24 sm:space-y-36 pt-10 sm:pt-20 pb-28 sm:pb-16">
    <!-- ═══ Hero ═══ -->
    <section class="space-y-6 sm:space-y-7">
      <p
        data-animate
        class="text-sm sm:text-base font-medium tracking-widest text-gray-400 dark:text-zinc-500 uppercase"
      >
        {Software Engineer}
      </p>
      <h1
        data-animate
        data-animate-delay="1"
        class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 leading-[1.05]"
      >
        Abdullah O.<br class="hidden sm:block" />
        Mustapha
      </h1>
      <p
        data-animate
        data-animate-delay="2"
        class="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-500 dark:text-zinc-500"
      >
        {{ "<Open Source Winch** />"}}
      </p>

      <div
        data-animate
        data-animate-delay="3"
        class="flex items-center gap-5 pt-2"
      >
        <a
          v-for="social in socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="text-gray-300 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors duration-200"
        >
          <Icon :icon="social.icon" width="20" height="20" />
        </a>
      </div>
    </section>

    <!-- ═══ About ═══ -->
    <section class="space-y-7 sm:space-y-8">
      <p
        data-animate
        class="text-base sm:text-lg leading-[1.9] text-gray-500 dark:text-zinc-400"
      >
        I'm all about building systems that actually work — no shortcuts. For
        me, it's not just about writing code; it's about creating solid
        infrastructure that solves real-life problems and stands the test of
        time. I enjoy taking heavy, complex headaches and turning them into
        clean, lasting solutions.
      </p>
      <p
        data-animate
        data-animate-delay="1"
        class="text-base sm:text-lg leading-[1.9] text-gray-500 dark:text-zinc-400"
      >
        My focus right now is on
        <a
          href="https://doks-ai.vercel.app"
          class="text-gray-900 dark:text-zinc-200 font-medium hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
          >Doks AI</a
        >
        and
        <a
          href="https://github.com/n8bird-oss/zenon-router"
          class="text-gray-900 dark:text-zinc-200 font-medium hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
          >Zenon Router</a
        >. I give
        <NuxtLink
          to="/talks"
          class="text-gray-900 dark:text-zinc-200 font-medium hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
          >talks</NuxtLink
        >
        and write
        <NuxtLink
          to="/blog"
          class="text-gray-900 dark:text-zinc-200 font-medium hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
          >blog posts</NuxtLink
        >
        about open source, coding, and web development.
      </p>
      <p
        data-animate
        data-animate-delay="2"
        class="text-base sm:text-lg leading-[1.9] text-gray-500 dark:text-zinc-400"
      >
        Outside of programming, I enjoy photography and traveling. I moved from
        <span class="text-gray-700 dark:text-zinc-300">Lagos</span> to
        <span class="text-gray-700 dark:text-zinc-300"
          >Freetown, Sierra Leone</span
        >
        to pursue my studies in 2022. If you're around, let's grab coffee.
      </p>
    </section>

    <!-- ═══ GitHub ═══ -->
    <section class="space-y-5">
      <h2
        data-animate
        class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase"
      >
        Contribution Graph
      </h2>
      <div data-animate data-animate-delay="1">
        <GitHubGraph username="abdullah4tech" :join-year="2022" />
      </div>
    </section>

    <!-- ═══ Projects ═══ -->
    <section class="space-y-10">
      <div data-animate class="flex items-baseline justify-between">
        <h2
          class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase"
        >
          Projects
        </h2>
        <NuxtLink
          to="/projects"
          class="flex items-center gap-1 text-xs sm:text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors"
        >
          View all
          <Icon icon="ph:arrow-right-duotone" width="14" height="14" />
        </NuxtLink>
      </div>

      <div class="grid gap-0">
        <a
          v-for="(project, i) in projects"
          :key="project.name"
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          data-animate
          :data-animate-delay="i + 1"
          class="group flex items-start justify-between gap-4 py-6 sm:py-7 border-b border-gray-100 dark:border-zinc-800 last:border-0 transition-colors"
        >
          <div class="space-y-2 min-w-0">
            <div class="flex items-center gap-3">
              <span
                class="font-mono text-[10px] sm:text-[11px] tracking-wider text-gray-300 dark:text-zinc-500 uppercase"
                >{{ project.tag }}</span
              >
              <h3
                class="text-base sm:text-lg font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-gray-600 dark:group-hover:text-zinc-400 transition-colors truncate"
              >
                {{ project.name }}
              </h3>
            </div>
            <p
              class="text-sm sm:text-base text-gray-400 dark:text-zinc-500 leading-relaxed"
            >
              {{ project.desc }}
            </p>
          </div>
          <Icon
            icon="ph:arrow-up-right-duotone"
            width="16"
            height="16"
            class="mt-2 shrink-0 text-gray-300 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </section>

    <!-- ═══ Contact ═══ -->
    <section class="space-y-5">
      <h2
        data-animate
        class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase"
      >
        Contact
      </h2>
      <p
        data-animate
        data-animate-delay="1"
        class="text-sm sm:text-base text-gray-500 dark:text-zinc-400"
      >
        Reach me at
        <a
          href="mailto:abdullahmu4life@gmail.com"
          class="text-gray-900 dark:text-zinc-200 font-mono text-[13px] sm:text-sm hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
          >abdullahmu4life@gmail.com</a
        >
      </p>
    </section>

    <!-- ═══ Sponsor ═══ -->
    <section class="space-y-6">
      <h2
        data-animate
        class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase"
      >
        Sponsor
      </h2>
      <p
        data-animate
        data-animate-delay="1"
        class="text-sm sm:text-base text-gray-500 dark:text-zinc-400 max-w-lg leading-relaxed"
      >
        If you enjoy my work and find it useful, consider sponsoring me to help
        keep open source sustainable.
      </p>
      <a
        data-animate
        data-animate-delay="2"
        href="#"
        target="_blank"
        class="inline-flex items-center gap-2.5 px-6 py-3 text-sm sm:text-base font-medium text-gray-700 dark:text-zinc-300 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-200"
      >
        <Icon
          icon="ph:heart-duotone"
          width="16"
          height="16"
          class="text-gray-400 dark:text-zinc-500"
        />
        Sponsor Abdullah
      </a>
    </section>

    <!-- ═══ Footer ═══ -->
    <footer class="pt-6 border-t border-gray-100 dark:border-zinc-800">
      <p
        data-animate
        class="text-xs sm:text-sm text-gray-300 dark:text-zinc-500 tracking-wide"
      >
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gray-500 transition-colors"
          >CC BY-NC-SA 4.0</a
        >
        &nbsp;·&nbsp; 2025–PRESENT © Abdullah O. Mustapha
      </p>
    </footer>
  </div>
</template>
