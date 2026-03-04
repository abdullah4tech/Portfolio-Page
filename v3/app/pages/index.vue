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
    name: "Doks AI",
    desc: "Intelligent documentation engine powered by AI. Seamlessly generate, manage, and search your developer docs.",
    href: "https://doks-ai.vercel.app",
    tag: "AI • SaaS",
  },
  {
    name: "fsh",
    desc: "A modern, fast shell for the terminal designed for speed and productivity.",
    href: "https://github.com/n8bird-oss/fsh",
    tag: "CLI Tool",
  },
  {
    name: "Zenon Router",
    desc: "Lightweight, fast HTTP router for Node.js.",
    href: "https://github.com/n8bird-oss/zenon-router",
    tag: "Web Dev Lib",
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
        I am a backend engineer specializing in scalable
        system design and robust application architecture. I build
        high-performance APIs and framework-agnostic
        tools with a focus on clean code, maintainability, and long-term
        scalability.
      </p>
      <p
        data-animate
        data-animate-delay="1"
        class="text-base sm:text-lg leading-[1.9] text-gray-500 dark:text-zinc-400"
      >
        Driven by product vision as much as technical precision, I create
        solutions that solve real-world problems — including community-focused
        platforms and developer tooling. My work blends strategic thinking with
        deep backend expertise to deliver systems that are reliable, efficient,
        and built to grow.
      </p>
      <p
        data-animate
        data-animate-delay="2"
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
        >. I write
        <NuxtLink
          to="/blog"
          class="text-gray-900 dark:text-zinc-200 font-medium hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
          >blog posts</NuxtLink
        >
        about open source, coding, and web development.
      </p>
      <p
        data-animate
        data-animate-delay="3"
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
    <section class="space-y-8">
      <div data-animate class="flex items-baseline justify-between">
        <h2
          class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase"
        >
          Selected Work
        </h2>
        <NuxtLink
          to="/projects"
          class="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
        >
          View all
          <Icon icon="ph:arrow-right-duotone" width="14" height="14" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <a
          v-for="(project, i) in projects"
          :key="project.name"
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          data-animate
          :data-animate-delay="i + 1"
          :class="[
            'group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-gray-50/50 dark:bg-zinc-800/40 border border-gray-100 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-800 hover:border-gray-200 dark:hover:border-zinc-600 hover:shadow-sm sm:hover:-translate-y-1 transition-all duration-500 overflow-hidden',
            i === 0 ? 'md:col-span-2' : '',
          ]"
        >
          <!-- Premium gradient on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent dark:from-zinc-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10 flex flex-col h-full gap-8 sm:gap-12">
            <div class="flex items-start justify-between">
              <span
                class="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-gray-200/50 dark:bg-zinc-700/50 text-gray-700 dark:text-zinc-300 backdrop-blur-md transition-colors"
              >
                {{ project.tag }}
              </span>
              <div
                class="w-10 h-10 rounded-full bg-white dark:bg-zinc-700 shadow-sm border border-gray-100 dark:border-zinc-600 flex items-center justify-center group-hover:bg-gray-900 group-hover:dark:bg-white group-hover:scale-110 transition-all duration-300"
              >
                <Icon
                  icon="ph:arrow-up-right-bold"
                  width="16"
                  height="16"
                  class="text-gray-400 dark:text-zinc-400 group-hover:text-white group-hover:dark:text-zinc-900 transition-colors duration-300"
                />
              </div>
            </div>

            <div class="space-y-3">
              <h3
                class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight"
              >
                {{ project.name }}
              </h3>
              <p
                class="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md"
              >
                {{ project.desc }}
              </p>
            </div>
          </div>
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
