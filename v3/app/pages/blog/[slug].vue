<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useBlogPosts } from "~/composables/useBlogPosts";
import { useMarkdown } from "~/composables/useMarkdown";

const route = useRoute();
const { getPostBySlug } = useBlogPosts();
const { render, init, isReady } = useMarkdown();

const post = computed(() => getPostBySlug(route.params.slug as string));

const renderedContent = computed(() => {
  if (!post.value || !isReady.value) return "";
  return render(post.value.content);
});

const formattedDate = computed(() => {
  if (!post.value) return "";
  return new Date(post.value.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

useHead(
  computed(() => ({
    title: post.value
      ? `${post.value.title} | Abdullah O. Mustapha`
      : "Blog Post",
    meta: [
      { name: "description", content: post.value?.excerpt || "" },
      { property: "og:title", content: post.value?.title || "" },
      { property: "og:description", content: post.value?.excerpt || "" },
      { property: "og:type", content: "article" },
    ],
  }))
);

watch(
  () => route.params.slug,
  (slug) => {
    if (slug && !getPostBySlug(slug as string)) {
      showError({ statusCode: 404, statusMessage: "Page Not Found" });
    }
  },
  { immediate: true }
);

onMounted(() => init());
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
    <article v-if="post" class="py-10 sm:py-14">
      <!-- Back link -->
      <NuxtLink
        to="/blog"
        data-animate
        class="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors mb-10 sm:mb-14"
      >
        <Icon icon="ph:arrow-left-duotone" width="14" height="14" />
        Back to blog
      </NuxtLink>

      <!-- Header -->
      <header class="space-y-4 mb-12 sm:mb-16">
        <div
          data-animate
          data-animate-delay="1"
          class="flex items-center gap-3 text-sm text-gray-400 dark:text-zinc-500 font-mono"
        >
          <time :datetime="post?.date">{{ formattedDate }}</time>
          <span class="opacity-40">·</span>
          <span>{{ post?.readingTime }} min read</span>
        </div>

        <h1
          data-animate
          data-animate-delay="2"
          class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 leading-[1.1]"
        >
          {{ post?.title }}
        </h1>

        <div
          data-animate
          data-animate-delay="3"
          class="flex flex-wrap gap-2 pt-1"
        >
          <NuxtLink
            v-for="tag in post?.tags"
            :key="tag"
            :to="`/blog?tag=${tag}`"
            class="text-xs font-mono tracking-wider text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors"
          >
            #{{ tag }}
          </NuxtLink>
        </div>
      </header>

      <!-- Rendered markdown content -->
      <div
        data-animate
        data-animate-delay="3"
        class="prose-blog"
        v-html="renderedContent"
      />

      <!-- Giscus comments -->
      <GiscusComments />
    </article>

    <div v-else class="py-20 text-center">
      <p class="text-sm text-gray-400 dark:text-zinc-500">Loading…</p>
    </div>
  </template>
</template>

<style scoped>
.prose-blog {
  font-size: 1rem;
  line-height: 1.85;
  color: #4b5563;
}
:global(.dark) .prose-blog {
  color: #a1a1aa;
}
@media (min-width: 640px) {
  .prose-blog {
    font-size: 17px;
  }
}
.prose-blog :deep(h1) {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}
:global(.dark) .prose-blog :deep(h1) {
  color: #f0f0f2;
}
@media (min-width: 640px) {
  .prose-blog :deep(h1) {
    font-size: 1.875rem;
  }
}
.prose-blog :deep(h2) {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 3rem;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}
@media (min-width: 640px) {
  .prose-blog :deep(h2) {
    font-size: 1.5rem;
  }
}
.prose-blog :deep(h3) {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
}
.prose-blog :deep(p) {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.85;
}
.prose-blog :deep(a) {
  color: var(--text-primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: var(--text-faint);
  transition: text-decoration-color 0.2s;
}
.prose-blog :deep(a:hover) {
  text-decoration-color: var(--text-muted);
}
.prose-blog :deep(strong) {
  font-weight: 600;
  color: var(--text-primary);
}
.prose-blog :deep(ul),
.prose-blog :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
}
.prose-blog :deep(ol) {
  list-style-type: decimal;
}
.prose-blog :deep(li) {
  color: var(--text-secondary);
  line-height: 1.625;
}
.prose-blog :deep(li + li) {
  margin-top: 0.5rem;
}
.prose-blog :deep(ul li::marker) {
  color: var(--text-faint);
}
.prose-blog :deep(blockquote) {
  border-left: 2px solid var(--border);
  padding-left: 1.25rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--text-muted);
}
.prose-blog :deep(pre) {
  border-radius: 0.5rem;
  margin: 2rem 0;
  font-size: 0.875rem;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  background: #1e1e21;
}
/* Shiki — always use dark theme */
.prose-blog :deep(.shiki),
.prose-blog :deep(.shiki span) {
  color: var(--shiki-dark) !important;
  background-color: transparent !important;
}
.prose-blog :deep(pre code) {
  font-family: "Fira Code", "SF Mono", monospace;
  font-size: 0.8125rem;
  line-height: 1.7;
}
.prose-blog :deep(:not(pre) > code) {
  font-size: 0.875rem;
  font-family: "Fira Code", monospace;
  background: var(--bg-muted);
  color: var(--text-primary);
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
}
.prose-blog :deep(hr) {
  margin: 3rem 0;
  border: none;
  border-top: 1px solid var(--border-soft);
}
.prose-blog :deep(img) {
  border-radius: 0.5rem;
  margin: 2rem 0;
}
.prose-blog :deep(table) {
  width: 100%;
  margin: 2rem 0;
  font-size: 0.875rem;
}
.prose-blog :deep(th) {
  text-align: left;
  font-weight: 600;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
  padding-right: 1rem;
}
.prose-blog :deep(td) {
  border-bottom: 1px solid var(--border-soft);
  padding: 0.625rem 1rem 0.625rem 0;
  color: var(--text-secondary);
}
</style>
