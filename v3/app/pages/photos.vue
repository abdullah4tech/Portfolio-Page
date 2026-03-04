<script setup lang="ts">
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
