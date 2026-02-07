<script setup lang="ts">
import Giscus from '@giscus/vue'
</script>

<template>
  <section class="mt-20 pt-10 border-t border-gray-100">
    <h2
      class="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-8"
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
      theme="light"
      lang="en"
      loading="lazy"
    />

    <p class="mt-6 text-xs text-gray-300">
      Comments are powered by
      <a
        href="https://giscus.app"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-gray-600 underline underline-offset-2"
      >Giscus</a>
      &amp; GitHub Discussions.
      <a
        href="https://github.com/login"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-gray-600 underline underline-offset-2"
      >Sign in with GitHub</a>
      to comment.
    </p>
  </section>
</template>
