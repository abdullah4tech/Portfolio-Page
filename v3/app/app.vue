<script setup lang="ts">
import { watch, nextTick } from "vue";

const route = useRoute();

watch(
  () => route.path,
  () => {
    nextTick(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }
);
</script>

<template>
  <FractalBackground />
  <div
    class="relative z-10 min-h-screen bg-transparent text-gray-700 dark:text-gray-300 font-sans pt-14"
  >
    <SiteNav />

    <main
      class="max-w-4xl lg:max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pb-16"
    >
      <NuxtRouteAnnouncer />
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
  </div>
</template>
