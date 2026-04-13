<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import { siteConfig } from "~/data/site";
import { useProjects } from "~/composables/useProjects";

const colorMode = useColorMode();

const tools = [
  { name: "C",           icon: "c" },
  { name: "C++",         icon: "cpp" },
  { name: "Go",          icon: "golang" },
  { name: "TypeScript",  icon: "typescript" },
  { name: "Node.js",     icon: "nodejs",      themed: true },
  { name: "Bun",         icon: "bun",          themed: true },
  { name: "FastAPI",     icon: "fastapi" },
  { name: "PostgreSQL",  icon: "postgresql",   themed: true },
  { name: "MySQL",       icon: "mysql",        themed: true },
  { name: "MongoDB",     icon: "mongodb" },
  { name: "Redis",       icon: "redis",        themed: true },
  { name: "Docker",      icon: "docker" },
  { name: "Cloudflare",  icon: "cloudflare",   themed: true },
  { name: "Vue.js",      icon: "vuejs",        themed: true },
  { name: "Arch Linux",  icon: "arch",         themed: true },
];

function toolIcon(tool: { icon: string; themed?: boolean }) {
  const suffix = tool.themed
    ? colorMode.value === "dark" ? "-light" : "-dark"
    : "";
  return `skill-icons:${tool.icon}${suffix}`;
}

useHead({
  title: "Abdullah O. Mustapha",
  meta: [
    { name: "description", content: "Backend Engineer — production-grade systems, 95% delivery rate." },
  ],
});

const { allProjects } = useProjects();

const featuredProjects = computed(() =>
  allProjects.value
    .filter((p) => p.featured)
    .sort((a, b) => b.year - a.year)
    .slice(0, 3)
);

const { socials, email, location, focusProjects, bio, experience } = siteConfig;


</script>

<template>
  <div class="space-y-20 sm:space-y-28 pt-10 sm:pt-20 pb-8 sm:pb-16">

    <!-- ═══ Hero ═══ -->
    <section class="space-y-7 sm:space-y-8">
      <div class="space-y-4 sm:space-y-5">
        <h1
          data-animate
          class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 leading-[1.05]"
        >
          Abdullah O.<br class="hidden sm:block" />
          Mustapha
        </h1>
        <p
          data-animate
          data-animate-delay="1"
          class="text-base sm:text-lg text-gray-400 dark:text-zinc-500 font-light tracking-wide"
        >
          Backend Engineer &amp; Open Source Builder
        </p>
      </div>

      <!-- Socials + availability -->
      <div
        data-animate
        data-animate-delay="2"
        class="flex items-center gap-5 flex-wrap"
      >
        <a
          v-for="social in socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="text-gray-300 dark:text-zinc-600 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors duration-200"
        >
          <Icon :icon="social.icon" width="20" height="20" />
        </a>

        <span class="w-px h-4 bg-gray-200 dark:bg-zinc-700" aria-hidden="true"></span>

        <!-- Available for work badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-xs font-medium text-emerald-700 dark:text-emerald-400 tracking-wide">Open to work</span>
        </div>
      </div>

    </section>

    <!-- ═══ About ═══ -->
    <section class="space-y-6 sm:space-y-8">
      <div class="space-y-4">
        <p
          data-animate
          class="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-zinc-400"
        >
          {{ bio[0] }}
        </p>
        <p
          data-animate
          data-animate-delay="1"
          class="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-zinc-400"
        >
          Right now focused on
          <a
            :href="focusProjects[0].href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-900 dark:text-zinc-200 font-medium hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
            >{{ focusProjects[0].label }}</a
          >
          and
          <a
            :href="focusProjects[1].href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-900 dark:text-zinc-200 font-medium hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
            >{{ focusProjects[1].label }}</a
          >. Based in
          <span class="text-gray-700 dark:text-zinc-300">{{ location.current }}</span>,
          originally from
          <span class="text-gray-700 dark:text-zinc-300">{{ location.from }}</span>.
        </p>
      </div>

      <!-- Tools -->
      <div data-animate data-animate-delay="2">
        <p class="text-xs font-mono tracking-wider text-gray-300 dark:text-zinc-600 uppercase mb-3">Stack</p>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-700/50 hover:border-gray-200 dark:hover:border-zinc-600 transition-colors"
          >
            <Icon :icon="toolIcon(tool)" width="16" height="16" />
            <span class="text-xs font-medium text-gray-600 dark:text-zinc-400">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Experience ═══ -->
    <section class="space-y-6">
      <h2
        data-animate
        class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase"
      >
        Experience
      </h2>

      <div class="space-y-0">
        <div
          v-for="(job, i) in experience"
          :key="job.org"
          data-animate
          :data-animate-delay="i + 1"
          class="relative pl-0 py-6 border-b border-gray-100 dark:border-zinc-800/60 last:border-0"
        >
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
            <div class="flex items-baseline gap-2.5">
              <span class="text-base font-semibold text-gray-900 dark:text-zinc-100 tracking-tight">
                {{ job.role }}
              </span>
              <span class="text-sm text-gray-400 dark:text-zinc-500">·</span>
              <span class="text-sm text-gray-500 dark:text-zinc-400">{{ job.org }}</span>
            </div>
            <span class="text-xs font-mono text-gray-400 dark:text-zinc-500 shrink-0">
              {{ job.period }}
            </span>
          </div>

          <ul class="space-y-1.5">
            <li
              v-for="bullet in job.bullets"
              :key="bullet"
              class="flex items-start gap-2.5 text-sm text-gray-500 dark:text-zinc-400 leading-relaxed"
            >
              <span class="mt-[7px] w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-600 shrink-0" aria-hidden="true" />
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
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

    <!-- ═══ Selected Work ═══ -->
    <section class="space-y-6">
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NuxtLink
          v-for="(project, i) in featuredProjects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          data-animate
          :data-animate-delay="i + 1"
          :class="[
            'group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl overflow-hidden',
            'bg-gray-50/60 dark:bg-zinc-800/40',
            'border border-gray-100 dark:border-zinc-700/50',
            'hover:bg-white dark:hover:bg-zinc-800',
            'hover:border-gray-200 dark:hover:border-zinc-600',
            'hover:shadow-sm sm:hover:-translate-y-1 transition-all duration-300',
            i === 0 ? 'md:col-span-2' : '',
          ]"
        >
          <div class="relative z-10 flex flex-col h-full gap-8 sm:gap-10">
            <div class="flex items-start justify-between">
              <span
                class="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-gray-200/60 dark:bg-zinc-700/60 text-gray-600 dark:text-zinc-300"
              >
                {{ project.tags[0] }}
              </span>
              <div
                class="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-zinc-700 border border-gray-100 dark:border-zinc-600 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:scale-110 transition-all duration-300"
              >
                <Icon
                  icon="ph:arrow-up-right-bold"
                  width="14"
                  height="14"
                  class="text-gray-400 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors duration-300"
                />
              </div>
            </div>

            <div class="space-y-2">
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight">
                {{ project.name }}
              </h3>
              <p class="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md">
                {{ project.tagline }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ═══ Contact ═══ -->
    <section class="space-y-3">
      <h2
        data-animate
        class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase"
      >
        Get in touch
      </h2>
      <p
        data-animate
        data-animate-delay="1"
        class="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md"
      >
        Open to interesting projects, collaborations, and conversations. Hit me at
        <a
          :href="`mailto:${email}`"
          class="text-gray-900 dark:text-zinc-200 font-mono text-[13px] sm:text-sm hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
          >{{ email }}</a
        >
      </p>
    </section>

    <!-- ═══ Footer ═══ -->
    <footer class="pt-4 border-t border-gray-100 dark:border-zinc-800/60">
      <p
        data-animate
        class="text-xs sm:text-sm text-gray-300 dark:text-zinc-600 tracking-wide"
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
