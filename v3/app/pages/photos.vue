<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { photos } from "~/data/photos";

useHead({
  title: "Photos | Abdullah O. Mustapha",
  meta: [
    {
      name: "description",
      content:
        "A curated collection of photography — landscapes, cities, and quiet moments.",
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
  <template v-if="false">
    <div class="space-y-14 sm:space-y-16 py-10 sm:py-14">
      <!-- Header -->
      <header class="space-y-5">
        <h1
          data-animate
          class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100"
        >
          Photos
        </h1>
        <p
          data-animate
          data-animate-delay="1"
          class="text-sm sm:text-base text-gray-400 dark:text-zinc-500 max-w-lg leading-relaxed"
        >
          A collection of moments captured through my lens — landscapes, cities,
          and the quiet in-between.
        </p>
      </header>

      <!-- Gallery -->
      <section data-animate data-animate-delay="2">
        <PhotoGallery :photos="photos" />
      </section>

      <!-- Footer -->
      <footer class="pt-6 border-t border-gray-100 dark:border-zinc-800">
        <p
          class="text-xs sm:text-sm text-gray-300 dark:text-zinc-500 tracking-wide"
        >
          All photos © Abdullah O. Mustapha unless stated otherwise.
        </p>
      </footer>
    </div>
  </template>
</template>
