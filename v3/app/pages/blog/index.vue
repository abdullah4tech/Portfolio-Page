<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";
import { useBlogPosts } from "~/composables/useBlogPosts";

useHead({
  title: "Blog | Abdullah O. Mustapha",
  meta: [
    {
      name: "description",
      content: "Blog posts, notes, and thoughts on software engineering.",
    },
  ],
});

const route = useRoute();
const { posts, allTags } = useBlogPosts();

const activeTag = ref<string | null>((route.query.tag as string) || null);

const filteredPosts = computed(() => {
  if (!activeTag.value) return posts.value;
  return posts.value.filter((p) => p.tags?.includes(activeTag.value!));
});

function setTag(tag: string | null) {
  activeTag.value = activeTag.value === tag ? null : tag;
}

const groupedPosts = computed(() => {
  const groups: Record<string, typeof filteredPosts.value> = {};
  filteredPosts.value.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!groups[year]) groups[year] = [];
    groups[year].push(post);
  });
  return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a));
});

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
</script>

<template>
  <div class="space-y-14 sm:space-y-16 py-10 sm:py-14">
    <!-- Header -->
    <header class="space-y-5">
      <h1
        data-animate
        class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100"
      >
        Blog
      </h1>
      <p
        data-animate
        data-animate-delay="1"
        class="text-sm sm:text-base text-gray-400 dark:text-zinc-500 max-w-lg leading-relaxed"
      >
        Posts about open source, systems design, and the craft of building
        software.
      </p>

      <div
        v-if="allTags.length"
        data-animate
        data-animate-delay="2"
        class="flex flex-wrap gap-2 pt-2"
      >
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="setTag(tag)"
          class="text-xs font-mono tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer"
          :class="
            activeTag === tag
              ? 'bg-gray-900 dark:bg-white text-white dark:text-zinc-900 border-gray-900 dark:border-white'
              : 'text-gray-400 dark:text-zinc-500 border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300'
          "
        >
          {{ tag }}
        </button>
        <button
          v-if="activeTag"
          @click="setTag(null)"
          class="text-xs font-mono tracking-wider px-3 py-1.5 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors cursor-pointer"
        >
          clear
        </button>
      </div>
    </header>

    <!-- Posts grouped by year -->
    <div class="space-y-16">
      <section
        v-for="[year, yearPosts] in groupedPosts"
        :key="year"
        class="relative"
      >
        <span
          class="absolute -left-4 sm:-left-12 -top-6 sm:-top-8 text-7xl sm:text-8xl font-bold text-gray-100 dark:text-zinc-800 -z-10 select-none pointer-events-none opacity-50"
        >
          {{ year }}
        </span>

        <div class="space-y-0 relative z-10">
          <NuxtLink
            v-for="(post, i) in yearPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            data-animate
            :data-animate-delay="i + 1"
            class="group flex items-baseline gap-4 py-5 sm:py-6 border-b border-gray-50 dark:border-zinc-800 last:border-0 hover:border-gray-100 dark:hover:border-zinc-700 transition-colors"
          >
            <div class="min-w-0 flex-1 space-y-1">
              <h3
                class="text-base sm:text-lg font-medium text-gray-700 dark:text-zinc-200 group-hover:text-gray-900 dark:group-hover:text-zinc-100 transition-colors truncate"
              >
                {{ post.title }}
              </h3>
              <p
                class="text-sm text-gray-400 dark:text-zinc-500 line-clamp-1 hidden sm:block"
              >
                {{ post.excerpt }}
              </p>
            </div>

            <div
              class="hidden sm:block shrink-0 border-b border-dashed border-gray-200 dark:border-zinc-700 w-12 lg:w-24 mx-2 opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div
              class="flex items-center gap-3 text-sm text-gray-400 dark:text-zinc-500 font-mono whitespace-nowrap shrink-0"
            >
              <span>{{ formatDate(post.date) }}</span>
              <span class="opacity-40">·</span>
              <span>{{ post.readingTime }}m</span>
              <Icon
                icon="ph:arrow-right-duotone"
                width="12"
                height="12"
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </NuxtLink>
        </div>
      </section>

      <div
        v-if="filteredPosts.length === 0"
        class="py-16 text-center space-y-3"
      >
        <Icon
          icon="ph:note-blank-duotone"
          width="32"
          height="32"
          class="text-gray-300 dark:text-zinc-600 mx-auto"
        />
        <p class="text-sm text-gray-400 dark:text-zinc-500">
          {{
            activeTag
              ? `No posts tagged "${activeTag}"`
              : "No posts yet. Stay tuned."
          }}
        </p>
      </div>
    </div>
  </div>
</template>
