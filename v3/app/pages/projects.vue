<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";

useHead({
  title: "Projects | Abdullah O. Mustapha",
  meta: [
    {
      name: "description",
      content: "Open-source tools, libraries, and products I've built.",
    },
  ],
});

type ViewMode = "list" | "grid";
const viewMode = ref<ViewMode>("list");

interface Project {
  name: string;
  desc: string;
  href: string;
  tags: string[];
  icon: string;
  featured?: boolean;
}

interface ProjectGroup {
  label: string;
  projects: Project[];
}

const groups: ProjectGroup[] = [
  {
    label: "Libraries",
    projects: [
      {
        name: "Zenon Router",
        desc: "Lightweight, fast HTTP router for Node.js. Zero dependencies, tree-shakeable, and designed for maximum throughput.",
        href: "https://github.com/n8bird-oss/zenon-router",
        tags: ["TypeScript", "Node.js", "HTTP"],
        icon: "ph:path-duotone",
        featured: true,
      },
      {
        name: "Geneline",
        desc: "Next-generation developer tools and APIs. Building the foundation for better developer experiences.",
        href: "https://geneline-x.net",
        tags: ["TypeScript", "API", "DX"],
        icon: "ph:dna-duotone",
      },
    ],
  },
  {
    label: "Tools",
    projects: [
      {
        name: "fsh",
        desc: "A modern, fast shell for the terminal. Intelligent autocomplete, plugin support, and blazing-fast startup.",
        href: "https://github.com/n8bird-oss/fsh",
        tags: ["TypeScript", "CLI", "Shell"],
        icon: "ph:terminal-window-duotone",
        featured: true,
      },
      {
        name: "DropX",
        desc: "Cross-platform file sharing utility. Drag, drop, and share files instantly over local networks.",
        href: "#",
        tags: ["TypeScript", "Desktop", "Networking"],
        icon: "ph:cloud-arrow-up-duotone",
      },
    ],
  },
  {
    label: "Products",
    projects: [
      {
        name: "Doks AI",
        desc: "Intelligent documentation engine powered by AI. Generates, indexes, and searches docs with natural language.",
        href: "https://doks-ai.vercel.app",
        tags: ["TypeScript", "AI", "Docs"],
        icon: "ph:files-duotone",
        featured: true,
      },
      {
        name: "Portfolio v2",
        desc: "This very site. Vue 3, GSAP, Tailwind CSS 4, and a lot of attention to detail.",
        href: "https://github.com/abdullah4tech/portfolio-v2",
        tags: ["Vue", "GSAP", "Tailwind"],
        icon: "ph:browser-duotone",
      },
    ],
  },
];
</script>

<template>
  <main class="max-w-3xl mx-auto px-6 py-20 text-center">
    <div
      class="inline-flex items-center justify-center p-4 bg-gray-100 dark:bg-zinc-800 rounded-full mb-6"
    >
      <Icon
        icon="ph:barricade-bold"
        width="32"
        height="32"
        class="text-gray-600 dark:text-zinc-400"
      />
    </div>
    <h1 class="text-3xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
      Work in Progress
    </h1>
    <p class="text-gray-600 dark:text-zinc-400 mb-8">
      I'm currently crafting this page. Please check back soon!
    </p>
    <NuxtLink
      to="/"
      class="inline-flex items-center justify-center px-6 py-2 bg-gray-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-gray-800 dark:hover:bg-zinc-200 transition-colors"
    >
      Go Home
    </NuxtLink>
  </main>
  <template v-if="false">
    <div class="space-y-20 sm:space-y-28 pt-10 sm:pt-4 pb-28 sm:pb-16">
      <!-- ═══ Header ═══ -->
      <section class="space-y-5 sm:space-y-6">
        <div data-animate class="flex items-center gap-3">
          <NuxtLink
            to="/"
            class="text-gray-300 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="Back to home"
          >
            <Icon icon="ph:arrow-left-duotone" width="18" height="18" />
          </NuxtLink>
          <span
            class="w-px h-4 bg-gray-200 dark:bg-zinc-700"
            aria-hidden="true"
          ></span>
          <p
            class="text-xs sm:text-sm font-medium tracking-widest text-gray-400 dark:text-zinc-500 uppercase"
          >
            Projects
          </p>
        </div>

        <h1
          data-animate
          data-animate-delay="1"
          class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 leading-[1.1]"
        >
          Things I've built
        </h1>
        <p
          data-animate
          data-animate-delay="2"
          class="max-w-lg text-base sm:text-lg leading-relaxed text-gray-500 dark:text-zinc-400"
        >
          Open-source tools, libraries, and products — each one solving a
          problem I cared about.
        </p>
      </section>

      <!-- ═══ Grouped Projects ═══ -->
      <div
        v-for="group in groups"
        :key="group.label"
        class="space-y-8 sm:space-y-10"
      >
        <h2 data-animate class="category-title select-none">
          {{ group.label }}
        </h2>

        <!-- List view -->
        <div v-if="viewMode === 'list'" class="space-y-0 pl-4 sm:pl-8">
          <a
            v-for="(project, i) in group.projects"
            :key="project.name"
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            data-animate
            :data-animate-delay="i + 1"
            class="group flex items-start gap-4 sm:gap-5 py-6 sm:py-7 border-b border-gray-100 dark:border-zinc-800 first:border-t dark:first:border-t-zinc-800 transition-colors"
          >
            <div
              class="shrink-0 mt-0.5 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 group-hover:bg-gray-100 dark:group-hover:bg-zinc-700 group-hover:border-gray-200 dark:group-hover:border-zinc-600 transition-all duration-200"
            >
              <Icon
                :icon="project.icon"
                width="20"
                height="20"
                class="text-gray-400 dark:text-zinc-500 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors"
              />
            </div>
            <div class="flex-1 min-w-0 space-y-2">
              <div class="flex items-center gap-3">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-gray-600 dark:group-hover:text-zinc-400 transition-colors truncate"
                >
                  {{ project.name }}
                </h3>
                <span
                  v-if="project.featured"
                  class="shrink-0 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-gray-900 dark:bg-white text-white dark:text-zinc-900 rounded-full"
                  >Featured</span
                >
              </div>
              <p
                class="text-sm sm:text-base text-gray-400 dark:text-zinc-500 leading-relaxed line-clamp-2"
              >
                {{ project.desc }}
              </p>
              <div class="flex items-center gap-2 pt-1">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="font-mono text-[10px] sm:text-[11px] tracking-wider text-gray-300 dark:text-zinc-600 uppercase"
                  >{{ tag }}</span
                >
              </div>
            </div>
            <Icon
              icon="ph:arrow-up-right-duotone"
              width="16"
              height="16"
              class="mt-3 shrink-0 text-gray-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <!-- Grid view -->
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pl-4 sm:pl-8"
        >
          <a
            v-for="(project, i) in group.projects"
            :key="project.name"
            :href="project.href"
            target="_blank"
            rel="noopener noreferrer"
            data-animate
            :data-animate-delay="i + 1"
            class="group relative flex flex-col gap-4 p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 hover:border-gray-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-gray-50/50 dark:hover:bg-zinc-800/50 transition-all duration-200"
          >
            <div class="flex items-start justify-between">
              <div
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 group-hover:bg-gray-100 dark:group-hover:bg-zinc-700 group-hover:border-gray-200 dark:group-hover:border-zinc-600 transition-all duration-200"
              >
                <Icon
                  :icon="project.icon"
                  width="20"
                  height="20"
                  class="text-gray-400 dark:text-zinc-500 group-hover:text-gray-600 dark:group-hover:text-zinc-300 transition-colors"
                />
              </div>
              <Icon
                icon="ph:arrow-up-right-duotone"
                width="14"
                height="14"
                class="text-gray-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-2.5">
                <h3
                  class="text-base sm:text-lg font-semibold text-gray-900 dark:text-zinc-100 group-hover:text-gray-600 dark:group-hover:text-zinc-400 transition-colors truncate"
                >
                  {{ project.name }}
                </h3>
                <span
                  v-if="project.featured"
                  class="shrink-0 px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-gray-900 dark:bg-white text-white dark:text-zinc-900 rounded-full"
                  >Featured</span
                >
              </div>
              <p
                class="text-sm text-gray-400 dark:text-zinc-500 leading-relaxed line-clamp-3"
              >
                {{ project.desc }}
              </p>
            </div>
            <div class="flex items-center gap-2 pt-1">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="font-mono text-[10px] tracking-wider text-gray-300 dark:text-zinc-600 uppercase"
                >{{ tag }}</span
              >
            </div>
          </a>
        </div>
      </div>

      <!-- ═══ Floating view toggle ═══ -->
      <Teleport to="body">
        <div
          class="fixed bottom-24 sm:bottom-8 right-5 sm:right-8 z-50 flex items-center gap-1 p-1 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-gray-200 dark:border-zinc-700 shadow-lg shadow-gray-200/50 dark:shadow-black/30"
        >
          <button
            @click="viewMode = 'list'"
            class="p-2 rounded-lg transition-all duration-200 cursor-pointer"
            :class="
              viewMode === 'list'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-zinc-900 shadow-sm'
                : 'text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300'
            "
            aria-label="List view"
          >
            <Icon icon="ph:list-duotone" width="18" height="18" />
          </button>
          <button
            @click="viewMode = 'grid'"
            class="p-2 rounded-lg transition-all duration-200 cursor-pointer"
            :class="
              viewMode === 'grid'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-zinc-900 shadow-sm'
                : 'text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300'
            "
            aria-label="Grid view"
          >
            <Icon icon="ph:grid-four-duotone" width="18" height="18" />
          </button>
        </div>
      </Teleport>
    </div>
  </template>
</template>

<style scoped>
.category-title {
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1.5px #d1d5db;
}

:global(.dark) .category-title {
  -webkit-text-stroke-color: #3f3f46;
}
</style>
