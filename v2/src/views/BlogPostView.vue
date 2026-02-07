<script setup lang="ts">
import { computed, onMounted, ref, watch, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { Icon } from '@iconify/vue'
import { useBlogPosts } from '@/composables/useBlogPosts'
import { useMarkdown } from '@/composables/useMarkdown'
import GiscusComments from '@/components/GiscusComments.vue'
import { gsap } from 'gsap'

const route = useRoute()
const router = useRouter()
const { getPostBySlug } = useBlogPosts()
const { render, init, isReady } = useMarkdown()

const post = computed(() => getPostBySlug(route.params.slug as string))

const renderedContent = computed(() => {
  if (!post.value || !isReady.value) return ''
  return render(post.value.content)
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  return new Date(post.value.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

// SEO
useHead(
  computed(() => ({
    title: post.value ? `${post.value.title} | Abdullah O. Mustapha` : 'Blog Post',
    meta: [
      { name: 'description', content: post.value?.excerpt || '' },
      { property: 'og:title', content: post.value?.title || '' },
      { property: 'og:description', content: post.value?.excerpt || '' },
      { property: 'og:type', content: 'article' },
      ...(post.value?.cover
        ? [{ property: 'og:image', content: post.value.cover }]
        : []),
      ...(post.value?.date
        ? [{ property: 'article:published_time', content: post.value.date }]
        : []),
    ],
  })),
)

// Redirect if post not found
watch(
  () => route.params.slug,
  (slug) => {
    if (slug && !getPostBySlug(slug as string)) {
      router.replace('/404')
    }
  },
  { immediate: true },
)

// Init shiki + entrance animation
const articleRef = ref<HTMLElement | null>(null)
const ctx = ref<gsap.Context | null>(null)

onMounted(async () => {
  await init()
  await nextTick()

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  ctx.value = gsap.context(() => {
    const els = articleRef.value?.querySelectorAll('[data-scroll]')
    if (els?.length) {
      gsap.from(els, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
      })
    }
  })
})

onUnmounted(() => {
  ctx.value?.revert()
})
</script>

<template>
  <article v-if="post" ref="articleRef" class="py-10 sm:py-14">
    <!-- Back link -->
    <RouterLink
      to="/blog"
      data-scroll
      class="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-10 sm:mb-14"
    >
      <Icon icon="ph:arrow-left-duotone" width="14" height="14" />
      Back to blog
    </RouterLink>

    <!-- Header -->
    <header class="space-y-4 mb-12 sm:mb-16">
      <div data-scroll class="flex items-center gap-3 text-sm text-gray-400 font-mono">
        <time :datetime="post.date">{{ formattedDate }}</time>
        <span class="opacity-40">·</span>
        <span>{{ post.readingTime }} min read</span>
      </div>

      <h1
        data-scroll
        class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]"
      >
        {{ post.title }}
      </h1>

      <div data-scroll class="flex flex-wrap gap-2 pt-1">
        <RouterLink
          v-for="tag in post.tags"
          :key="tag"
          :to="`/blog?tag=${tag}`"
          class="text-xs font-mono tracking-wider text-gray-400 hover:text-gray-600 transition-colors"
        >
          #{{ tag }}
        </RouterLink>
      </div>
    </header>

    <!-- Cover image (if provided) -->
    <img
      v-if="post.cover"
      data-scroll
      :src="post.cover"
      :alt="post.title"
      class="w-full rounded-xl mb-12 sm:mb-16"
      loading="lazy"
      decoding="async"
    />

    <!-- Rendered markdown content -->
    <div
      data-scroll
      class="prose-blog"
      v-html="renderedContent"
    />

    <!-- Giscus comments -->
    <GiscusComments />
  </article>

  <!-- Loading state -->
  <div v-else class="py-20 text-center">
    <p class="text-sm text-gray-400">Loading…</p>
  </div>
</template>

<style scoped>
/* ── Prose styling for rendered markdown ── */
.prose-blog {
  font-size: 1rem;
  line-height: 1.85;
  color: #4b5563;
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
@media (min-width: 640px) {
  .prose-blog :deep(h1) {
    font-size: 1.875rem;
  }
}

.prose-blog :deep(h2) {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
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
  color: #111827;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
}
@media (min-width: 640px) {
  .prose-blog :deep(h3) {
    font-size: 1.25rem;
  }
}

.prose-blog :deep(p) {
  margin-bottom: 1.5rem;
  color: #4b5563;
  line-height: 1.85;
}

.prose-blog :deep(a) {
  color: #111827;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: #d1d5db;
  transition: text-decoration-color 0.2s;
}
.prose-blog :deep(a:hover) {
  text-decoration-color: #6b7280;
}

.prose-blog :deep(strong) {
  font-weight: 600;
  color: #111827;
}

.prose-blog :deep(em) {
  font-style: italic;
  color: #6b7280;
}

.prose-blog :deep(ul) {
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
}
.prose-blog :deep(ul li + li) {
  margin-top: 0.5rem;
}

.prose-blog :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
  list-style-type: decimal;
}
.prose-blog :deep(ol li + li) {
  margin-top: 0.5rem;
}

.prose-blog :deep(li) {
  color: #4b5563;
  line-height: 1.625;
}

.prose-blog :deep(ul li) {
  position: relative;
  padding-left: 0.5rem;
}

.prose-blog :deep(ul li::marker) {
  color: #d1d5db;
}

.prose-blog :deep(blockquote) {
  border-left: 2px solid #e5e7eb;
  padding-left: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: #6b7280;
}

/* Code blocks — Shiki provides the <pre> with theme styles */
.prose-blog :deep(pre) {
  border-radius: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
}

.prose-blog :deep(pre code) {
  font-family: 'Fira Code', 'SF Mono', 'Menlo', monospace;
  font-size: 0.8125rem;
  line-height: 1.7;
}

/* Inline code */
.prose-blog :deep(:not(pre) > code) {
  font-size: 0.875rem;
  font-family: 'Fira Code', 'SF Mono', monospace;
  background: #f3f4f6;
  color: #1f2937;
  border-radius: 0.25rem;
  padding: 0.125rem 0.375rem;
}

.prose-blog :deep(hr) {
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: none;
  border-top: 1px solid #f3f4f6;
}

.prose-blog :deep(img) {
  border-radius: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.prose-blog :deep(table) {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
}

.prose-blog :deep(th) {
  text-align: left;
  font-weight: 600;
  color: #111827;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
}

.prose-blog :deep(td) {
  border-bottom: 1px solid #f9fafb;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-right: 1rem;
  color: #4b5563;
}
</style>
