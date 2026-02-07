<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { Icon } from '@iconify/vue'
import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogPosts } from '@/composables/useBlogPosts'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useHead({
  title: 'Blog | Abdullah O. Mustapha',
  meta: [
    { name: 'description', content: 'Blog posts, notes, and thoughts on software engineering.' },
  ],
})

const route = useRoute()
const { posts, allTags } = useBlogPosts()

/* ── Tag filtering ─────────────────────────────────────── */

const activeTag = ref<string | null>((route.query.tag as string) || null)

const filteredPosts = computed(() => {
  if (!activeTag.value) return posts.value
  return posts.value.filter((p) => p.tags?.includes(activeTag.value!))
})

function setTag(tag: string | null) {
  activeTag.value = activeTag.value === tag ? null : tag
}

/* ── Group posts by year ──────────────────────────────── */

const groupedPosts = computed(() => {
  const groups: Record<string, typeof filteredPosts.value> = {}
  filteredPosts.value.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString()
    if (!groups[year]) groups[year] = []
    groups[year].push(post)
  })
  // Sort years descending
  return Object.entries(groups).sort(([a], [b]) => Number(b) - Number(a))
})

/* ── Date formatting ──────────────────────────────────── */

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

/* ── GSAP animations ──────────────────────────────────── */

const headerRef = ref<HTMLElement | null>(null)
const ctx = ref<gsap.Context | null>(null)

onMounted(async () => {
  await nextTick()

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  ctx.value = gsap.context(() => {
    // Header cascade
    const headerEls = headerRef.value?.querySelectorAll('[data-scroll]')
    if (headerEls?.length) {
      gsap.from(headerEls, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
      })
    }

    // Post rows
    const rows = document.querySelectorAll('[data-scroll-row]')
    rows.forEach((row, i) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.04,
        ease: 'power2.out',
      })
    })
  })
})

onUnmounted(() => {
  ctx.value?.revert()
})
</script>

<template>
  <div class="space-y-14 sm:space-y-16 py-10 sm:py-14">
    <!-- Header -->
    <header ref="headerRef" class="space-y-5">
      <h1 data-scroll class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Blog</h1>
      <p data-scroll class="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
        Posts about open source, systems design, and the craft of building software.
      </p>

      <!-- Tag pills -->
      <div v-if="allTags.length" data-scroll class="flex flex-wrap gap-2 pt-2">
        <button
          v-for="tag in allTags"
          :key="tag"
          @click="setTag(tag)"
          class="text-xs font-mono tracking-wider px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer"
          :class="
            activeTag === tag
              ? 'bg-gray-900 text-white border-gray-900'
              : 'text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'
          "
        >
          {{ tag }}
        </button>
        <button
          v-if="activeTag"
          @click="setTag(null)"
          class="text-xs font-mono tracking-wider px-3 py-1.5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          clear
        </button>
      </div>
    </header>

    <!-- Posts grouped by year -->
    <div class="space-y-16">
      <section v-for="[year, yearPosts] in groupedPosts" :key="year" class="relative">
        <!-- Year watermark -->
        <span
          class="absolute -left-4 sm:-left-12 -top-6 sm:-top-8 text-7xl sm:text-8xl font-bold text-gray-100 -z-10 select-none pointer-events-none opacity-50"
        >
          {{ year }}
        </span>

        <div class="space-y-0 relative z-10">
          <RouterLink
            v-for="post in yearPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            data-scroll-row
            class="group flex items-baseline gap-4 py-5 sm:py-6 border-b border-gray-50 last:border-0 hover:border-gray-100 transition-colors"
          >
            <div class="min-w-0 flex-1 space-y-1">
              <h3
                class="text-base sm:text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors truncate"
              >
                {{ post.title }}
              </h3>
              <p class="text-sm text-gray-400 line-clamp-1 hidden sm:block">{{ post.excerpt }}</p>
            </div>

            <div
              class="hidden sm:block shrink-0 border-b border-dashed border-gray-200 w-12 lg:w-24 mx-2 opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div class="flex items-center gap-3 text-sm text-gray-400 font-mono whitespace-nowrap shrink-0">
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
          </RouterLink>
        </div>
      </section>

      <!-- Empty state -->
      <div v-if="filteredPosts.length === 0" class="py-16 text-center space-y-3">
        <Icon icon="ph:note-blank-duotone" width="32" height="32" class="text-gray-300 mx-auto" />
        <p class="text-sm text-gray-400">
          {{ activeTag ? `No posts tagged "${activeTag}"` : 'No posts yet. Stay tuned.' }}
        </p>
      </div>
    </div>
  </div>
</template>
