<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useProjects } from "~/composables/useProjects";

const { groups } = useProjects();

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
</script>

<template>
  <div class="space-y-20 sm:space-y-28 pt-20 sm:pt-16 pb-28 sm:pb-16">
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
        <NuxtLink
          v-for="(project, i) in group.projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
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
              {{ project.tagline }}
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
            icon="ph:arrow-right-duotone"
            width="16"
            height="16"
            class="mt-3 shrink-0 text-gray-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"
          />
        </NuxtLink>
      </div>

      <!-- Grid view -->
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pl-4 sm:pl-8"
      >
        <NuxtLink
          v-for="(project, i) in group.projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
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
              icon="ph:arrow-right-duotone"
              width="14"
              height="14"
              class="text-gray-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5"
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
              {{ project.tagline }}
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
        </NuxtLink>
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
