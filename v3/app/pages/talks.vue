<script setup lang="ts">
import { Icon } from "@iconify/vue";

useHead({
  title: "Work in Progress - Abdullah O. Mustapha",
  meta: [
    {
      name: "description",
      content: "This page is currently under construction.",
    },
  ],
});
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
</template>
