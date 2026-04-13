<script setup lang="ts">
import { Icon } from "@iconify/vue";

useHead({
  title: "Talks | Abdullah O. Mustapha",
  meta: [
    {
      name: "description",
      content:
        "Conference talks, community meetups, and podcasts by Abdullah O. Mustapha.",
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
        data-animate-delay="1"
        class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 leading-[1.1]"
      >
        On Stage
      </h1>
      <p
        data-animate
        data-animate-delay="2"
        class="max-w-lg text-base sm:text-lg leading-relaxed text-gray-500 dark:text-zinc-400"
      >
        Conferences, community meetups, and podcasts. Sharing ideas on open
        source, developer tooling, and engineering culture.
      </p>
    </header>

    <!-- Empty state -->
    <section
      data-animate
      data-animate-delay="3"
      class="flex flex-col items-start gap-5 py-10 sm:py-14 border-t border-gray-100 dark:border-zinc-800"
    >
      <div
        class="flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700"
      >
        <Icon
          icon="ph:microphone-stage-duotone"
          width="24"
          height="24"
          class="text-gray-300 dark:text-zinc-600"
        />
      </div>
      <div class="space-y-2">
        <p class="text-base font-medium text-gray-700 dark:text-zinc-300">
          Nothing scheduled yet
        </p>
        <p class="text-sm text-gray-400 dark:text-zinc-500 max-w-sm leading-relaxed">
          I'm working on my first public talk. If you'd like me to speak at your
          event, reach out at
          <a
            href="mailto:abdullahmu4life@gmail.com"
            class="text-gray-700 dark:text-zinc-300 hover:underline underline-offset-4 decoration-gray-300 dark:decoration-zinc-600"
            >abdullahmu4life@gmail.com</a
          >.
        </p>
      </div>
    </section>
  </div>
</template>
