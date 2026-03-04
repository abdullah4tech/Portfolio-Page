<script setup lang="ts">
import Giscus from "@giscus/vue";
import { computed } from "vue";

const colorMode = useColorMode();
const giscusTheme = computed(() =>
  colorMode.value === "dark" ? "dark" : "light"
);
</script>

<template>
  <section class="mt-20 pt-10 border-t border-gray-100 dark:border-zinc-800">
    <h2
      class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 dark:text-zinc-500 uppercase mb-8"
    >
      Comments
    </h2>

    <Giscus
      id="comments"
      repo="abdullah4tech/abdullahmustapha.xyz"
      repo-id=""
      category="Blog Comments"
      category-id=""
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="giscusTheme"
      lang="en"
      loading="lazy"
    />

    <p class="mt-6 text-xs text-gray-300 dark:text-zinc-600">
      Comments are powered by
      <a
        href="https://giscus.app"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 underline underline-offset-2"
        >Giscus</a
      >
      &amp; GitHub Discussions.
      <a
        href="https://github.com/login"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 underline underline-offset-2"
        >Sign in with GitHub</a
      >
      to comment.
    </p>
  </section>
</template>
