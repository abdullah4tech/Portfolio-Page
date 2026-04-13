<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, onMounted, watch } from "vue";
import { useProjects } from "~/composables/useProjects";
import { useMarkdown } from "~/composables/useMarkdown";

const route = useRoute();
const router = useRouter();
const { getProjectBySlug } = useProjects();
const { render, init, isReady } = useMarkdown();

const project = computed(() => getProjectBySlug(route.params.slug as string));

const renderedBody = computed(() => {
  if (!project.value?.body || !isReady.value) return "";
  return render(project.value.body);
});

watch(
  () => route.params.slug,
  (slug) => {
    if (slug && !getProjectBySlug(slug as string)) {
      router.replace("/projects");
    }
  },
  { immediate: true }
);

onMounted(() => init());

useHead(
  computed(() => ({
    title: project.value
      ? `${project.value.name} | Abdullah O. Mustapha`
      : "Project | Abdullah O. Mustapha",
    meta: [{ name: "description", content: project.value?.tagline ?? "" }],
  }))
);

const statusConfig = {
  active: {
    label: "Active",
    class:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  },
  beta: {
    label: "Beta",
    class:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  },
  wip: {
    label: "In Progress",
    class:
      "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  },
  archived: {
    label: "Archived",
    class:
      "bg-gray-50 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 border-gray-200 dark:border-zinc-700",
  },
  live: {
    label: "Live",
    class:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  },
};
</script>

<template>
  <div v-if="project" class="space-y-14 sm:space-y-16 pt-10 sm:pt-4 pb-28 sm:pb-16">
    <!-- ═══ Hero ═══ -->
    <section class="space-y-6 sm:space-y-7">
      <!-- Icon + Status -->
      <div data-animate class="flex items-center gap-4">
        <div
          class="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shrink-0"
        >
          <Icon :icon="project.icon" width="28" height="28" class="text-gray-500 dark:text-zinc-400" />
        </div>
        <div class="space-y-1.5">
          <span
            class="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full border"
            :class="statusConfig[project.status].class"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
            {{ statusConfig[project.status].label }}
          </span>
          <p class="text-xs font-mono text-gray-300 dark:text-zinc-600">{{ project.year }}</p>
        </div>
      </div>

      <h1
        data-animate
        data-animate-delay="1"
        class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 leading-[1.1]"
      >
        {{ project.name }}
      </h1>

      <p
        data-animate
        data-animate-delay="2"
        class="max-w-xl text-base sm:text-lg leading-relaxed text-gray-500 dark:text-zinc-400"
      >
        {{ project.tagline }}
      </p>

      <!-- Tech stack -->
      <div data-animate data-animate-delay="3" class="flex flex-wrap items-center gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-3 py-1 text-xs font-mono tracking-wider text-gray-500 dark:text-zinc-400 bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-full uppercase"
        >
          {{ tag }}
        </span>
      </div>

      <!-- CTA links -->
      <div
        v-if="project.links.length"
        data-animate
        data-animate-delay="4"
        class="flex flex-wrap items-center gap-3 pt-1"
      >
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200"
          :class="
            link.label === 'GitHub'
              ? 'bg-gray-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-gray-700 dark:hover:bg-zinc-200'
              : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border border-gray-200 dark:border-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-700'
          "
        >
          <Icon :icon="link.icon" width="16" height="16" />
          {{ link.label }}
        </a>
      </div>

      <p
        v-else
        data-animate
        data-animate-delay="4"
        class="text-sm text-gray-400 dark:text-zinc-500 italic"
      >
        No public link available yet.
      </p>
    </section>

    <!-- ═══ Divider ═══ -->
    <hr class="border-gray-100 dark:border-zinc-800" />

    <!-- ═══ Markdown body ═══ -->
    <section data-animate class="prose-project">
      <div v-if="isReady" v-html="renderedBody" />
      <p v-else class="text-sm text-gray-400 dark:text-zinc-500">Loading…</p>
    </section>


  </div>
</template>

<style scoped>
.prose-project {
  font-size: 1rem;
  line-height: 1.85;
  color: #4b5563;
  max-width: 680px;
}
:global(.dark) .prose-project {
  color: #a1a1aa;
}
.prose-project :deep(h2) {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}
.prose-project :deep(p) {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.85;
}
.prose-project :deep(ul) {
  margin-bottom: 1.5rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.prose-project :deep(li) {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  color: var(--text-secondary);
  line-height: 1.65;
}
.prose-project :deep(li)::before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.35;
  margin-top: 0.6em;
  flex-shrink: 0;
}
.prose-project :deep(a) {
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: var(--text-faint);
}
.prose-project :deep(code) {
  font-size: 0.875rem;
  font-family: "Fira Code", monospace;
  background: var(--bg-muted);
  color: var(--text-primary);
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
}
.prose-project :deep(pre) {
  border-radius: 0.75rem;
  margin: 2rem 0;
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
/* Shiki sets background + token colors via inline style — don't override them */
.prose-project :deep(.shiki) {
  padding: 1.25rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.7;
  font-family: "Fira Code", "SF Mono", monospace;
}
.prose-project :deep(.shiki code) {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background: none;
  padding: 0;
}
.prose-project :deep(.shiki .line) {
  display: block;
  min-height: 1.5em;
}
</style>
