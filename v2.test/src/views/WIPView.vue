<script setup lang="ts">
import { Construction } from 'lucide-vue-next'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Work in Progress - Abdullah O. Mustapha',
  meta: [
    {
      name: 'description',
      content: 'This page is currently under construction.',
    },
  ],
})
</script>

<template>
  <main class="max-w-3xl mx-auto px-6 py-20 text-center">
    <div class="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-6">
      <Construction class="w-8 h-8 text-gray-600" />
    </div>
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Work in Progress</h1>
    <p class="text-gray-600 mb-8">I'm currently crafting this page. Please check back soon!</p>
    <RouterLink
      to="/"
      class="inline-flex items-center justify-center px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
    >
      Go Home
    </RouterLink>
  </main>
</template>
