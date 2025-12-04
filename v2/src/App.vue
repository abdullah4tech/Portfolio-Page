<script setup lang="ts">
import { RouterView } from 'vue-router'
import { MoonIcon } from '@heroicons/vue/24/outline'
import { Github, Twitter } from 'lucide-vue-next'
import FractalBackground from './components/FractalBackground.vue'
</script>

<template>
  <FractalBackground />
  <div
    class="relative z-10 min-h-screen bg-transparent text-gray-700 font-sans selection:bg-gray-100 selection:text-gray-900"
  >
    <!-- Simple Top Bar -->
    <header class="max-w-3xl mx-auto px-6 py-8 flex justify-end items-center gap-4 text-gray-500">
      <nav class="flex gap-4 text-sm font-medium">
        <RouterLink to="/blog" class="hover:bg-gray-100 rounded-full px-3 py-1 transition-all"
          >Blog</RouterLink
        >
        <RouterLink to="/projects" class="hover:bg-gray-100 rounded-full px-3 py-1 transition-all"
          >Projects</RouterLink
        >
        <RouterLink to="/talks" class="hover:bg-gray-100 rounded-full px-3 py-1 transition-all"
          >Talks</RouterLink
        >
      </nav>
      <div class="w-px h-4 bg-gray-200"></div>
      <div class="flex items-center gap-3">
        <a
          href="https://twitter.com/abdullah4tech_"
          target="_blank"
          class="hover:text-gray-900 transition-colors"
        >
          <Twitter class="w-4 h-4" />
        </a>
        <a
          href="https://github.com/abdullah4tech"
          target="_blank"
          class="hover:text-gray-900 transition-colors"
        >
          <Github class="w-4 h-4" />
        </a>
        <button class="hover:text-gray-900 transition-colors">
          <MoonIcon class="w-4 h-4" />
        </button>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-6 pb-20">
      <RouterView />
    </main>
  </div>
</template>
