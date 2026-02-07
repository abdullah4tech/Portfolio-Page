<script setup lang="ts">
import { RouterView } from 'vue-router'
import FractalBackground from './components/FractalBackground.vue'
import DesktopNav from './components/DesktopNav.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
</script>

<template>
  <FractalBackground />
  <div
    class="relative z-10 min-h-screen bg-transparent text-gray-700 font-sans selection:bg-gray-100 selection:text-gray-900"
  >
    <DesktopNav />
    <MobileBottomNav />

    <main class="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 pt-2 sm:pt-0 pb-12 sm:pb-20">
      <RouterView />
    </main>
  </div>
</template>
