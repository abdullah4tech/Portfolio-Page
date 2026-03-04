<script setup lang="ts">
import { Icon } from "@iconify/vue";

useHead({
  title: "Page Not Found | Abdullah O. Mustapha",
  meta: [
    {
      name: "description",
      content:
        "The page you are looking for could not be found. Explore other sections of Abdullah Mustapha's portfolio.",
    },
    { name: "robots", content: "noindex, nofollow" },
  ],
});

const handleError = () => clearError({ redirect: "/" });

// Fun 404 messages
const errorMessages = [
  "Oops! This page went on a coffee break ☕",
  "404: Page not found, but your curiosity is appreciated! 🔍",
  "Lost in cyberspace? Let's get you back on track! 🚀",
  "This page is playing hide and seek... and winning! 🙈",
];

const randomMessage =
  errorMessages[Math.floor(Math.random() * errorMessages.length)];
</script>

<template>
  <!-- CSS-based particles background -->
  <div class="particles-container fixed inset-0 -z-10 overflow-hidden">
    <div class="particle" v-for="n in 30" :key="n"></div>
  </div>

  <main
    class="relative z-10 min-h-screen flex items-center justify-center p-3 md:p-5"
  >
    <div class="max-w-4xl mx-auto text-center">
      <!-- Large 404 Display -->
      <div class="relative mb-8 md:mb-12">
        <h1
          class="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-gray-200 dark:text-zinc-800 leading-none select-none"
        >
          404
        </h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg dark:shadow-black/30 mx-4"
          >
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium text-gray-900 dark:text-zinc-100 mb-2 md:mb-4"
            >
              Page Not Found
            </h2>
            <div
              class="w-16 md:w-24 h-1 bg-gray-800 dark:bg-zinc-300 mx-auto rounded-full"
            ></div>
          </div>
        </div>
      </div>

      <!-- Fun Error Message -->
      <div class="mb-8 md:mb-12 px-4">
        <p
          class="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-zinc-300 font-light italic mb-4 md:mb-6"
        >
          {{ randomMessage }}
        </p>
        <p
          class="text-base md:text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          The page you're looking for seems to have wandered off into the
          digital void. Don't worry though, even the best explorers sometimes
          take a wrong turn!
        </p>
      </div>

      <!-- Action Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4"
      >
        <button
          @click="handleError"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-gray-800 dark:hover:bg-zinc-200 transition-colors font-medium"
          aria-label="Go to homepage"
        >
          <Icon icon="ph:house-bold" width="20" height="20" />
          Go Home
        </button>
      </div>

      <!-- Fun Easter Egg -->
      <div class="mt-8 md:mt-12 px-4">
        <p class="text-xs md:text-sm text-gray-500 dark:text-zinc-500 italic">
          Fun fact: 404 errors got their name from room 404 at CERN, where the
          original web servers were located! 🤓
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Ensure consistent particle animation */
.particle {
  position: absolute;
  background: #d1d5db;
  border-radius: 50%;
  pointer-events: none;
  animation: float 8s infinite linear;
  opacity: 0.4;
}

/* Custom floating animation for error page */
@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-10vh) rotate(360deg);
    opacity: 0;
  }
}

@media (max-width: 640px) {
  .particles-container .particle {
    width: 3px;
    height: 3px;
  }
}
</style>
