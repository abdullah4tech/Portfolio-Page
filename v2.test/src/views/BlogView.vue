<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ArrowUpRight } from 'lucide-vue-next'

useHead({
  title: 'Blog | Abdullah O. Mustapha',
  meta: [
    { name: 'description', content: 'Blog posts, notes, and thoughts on software engineering.' },
  ],
})

const posts = [
  {
    year: '2025',
    items: [
      { title: 'Hello Africa!', date: 'Apr 8', duration: '7min', link: '#' },
    ],
  }
]
</script>

<template>
  <div class="space-y-16 py-10">
    <!-- Header -->
    <header class="space-y-2">
      <div class="flex items-baseline gap-4">
        <h1 class="text-3xl font-bold text-gray-900">Blog</h1>
        <nav class="flex gap-4 text-lg text-gray-300 font-medium">
          <span class="hover:text-gray-500 transition-colors cursor-pointer">Talks</span>
          <span class="hover:text-gray-500 transition-colors cursor-pointer">Podcasts</span>
          <span class="hover:text-gray-500 transition-colors cursor-pointer">Streams</span>
          <span class="hover:text-gray-500 transition-colors cursor-pointer">Notes</span>
        </nav>
      </div>
    </header>

    <!-- Content -->
    <div class="space-y-16">
      <section v-for="group in posts" :key="group.year" class="relative">
        <!-- Year Watermark -->
        <span
          class="absolute -left-12 -top-8 text-8xl font-bold text-gray-100 text-stroke -z-10 select-none pointer-events-none opacity-50"
        >
          {{ group.year }}
        </span>

        <div class="space-y-6 relative z-10">
          <a
            v-for="(post, index) in group.items"
            :key="index"
            :href="post.link"
            class="group flex items-baseline gap-4 hover:text-gray-900 transition-colors"
          >
            <h3
              class="text-lg font-medium text-gray-700 group-hover:text-gray-900 flex items-center gap-1"
            >
              {{ post.title }}
              <ArrowUpRight v-if="post.external" class="w-3 h-3 text-gray-400" />
            </h3>
            <div
              class="flex-1 border-b border-dashed border-gray-200 mx-2 opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
            <div class="flex gap-3 text-sm text-gray-400 font-mono whitespace-nowrap">
              <span>{{ post.date }}</span>
              <span class="opacity-50">·</span>
              <span>{{ post.duration }}</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
