<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Github, Moon, Mail, Rss, MapPin, Camera, Podcast } from 'lucide-vue-next'
import FractalBackground from './components/FractalBackground.vue'
</script>

<template>
  <FractalBackground />
  <div
    class="relative z-10 min-h-screen px-4 bg-transparent text-gray-700 font-sans selection:bg-gray-100 selection:text-gray-900"
  >
    <!-- Header like Anthony Fu's -->
    <header class="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-8 sm:py-4 flex justify-between items-center">
      <!-- Logo/Icon on the left -->
      <RouterLink to="/" class="text-gray-400 hover:text-gray-900 transition-colors">
        <svg class="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </RouterLink>

      <!-- Right side: Nav + Icons -->
      <div class="flex items-center gap-3 sm:gap-6">
        <!-- Navigation Links - Hidden on mobile, visible on desktop -->
        <nav class="hidden md:flex gap-6 text-sm">
          <RouterLink to="/blog" class="text-gray-500 hover:text-gray-900 transition-colors"
            >Blog</RouterLink
          >
          <RouterLink to="/projects" class="text-gray-500 hover:text-gray-900 transition-colors"
            >Projects</RouterLink
          >
          <RouterLink to="/talks" class="text-gray-500 hover:text-gray-900 transition-colors"
            >Talks</RouterLink
          >
          <RouterLink to="/sponsors" class="text-gray-500 hover:text-gray-900 transition-colors"
            >Sponsors</RouterLink
          >
        </nav>

        <!-- Social Icons - All visible on mobile -->
        <div class="flex items-center gap-2.5 sm:gap-3 text-gray-400">
          <a
            href="#"
            target="_blank"
            class="hover:text-gray-900 transition-colors"
            title="Podcast"
          >
            <Podcast class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            class="hover:text-gray-900 transition-colors"
            title="Photos"
          >
            <Camera class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            class="hover:text-gray-900 transition-colors"
            title="Location"
          >
            <MapPin class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:abdullahmu4life@gmail.com"
            class="hover:text-gray-900 transition-colors"
            title="Email"
          >
            <Mail class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://github.com/abdullah4tech"
            target="_blank"
            class="hover:text-gray-900 transition-colors"
            title="GitHub"
          >
            <Github class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </a>
          <a
            href="#"
            target="_blank"
            class="hover:text-gray-900 transition-colors"
            title="RSS"
          >
            <Rss class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </a>
          <button class="hover:text-gray-900 transition-colors" title="Toggle theme">
            <Moon class="w-[18px] h-[18px] sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-12 sm:pb-20">
      <RouterView />
    </main>
  </div>
</template>
