<script setup lang="ts">
import { ArrowLeft, Home, Search, GitBranch } from 'lucide-vue-next'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import ButtonComponent from '../components/ButtonComponent.vue'

const router = useRouter()

// SEO for 404 page
useHead({
  title: 'Page Not Found | Abdullah O. Mustapha',
  meta: [
    {
      name: 'description',
      content:
        "The page you are looking for could not be found. Explore other sections of Abdullah Mustapha's portfolio.",
    },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}

const goHome = () => {
  router.push('/')
}

// Fun 404 messages
const errorMessages = [
  'Oops! This page went on a coffee break ☕',
  '404: Page not found, but your curiosity is appreciated! 🔍',
  "Lost in cyberspace? Let's get you back on track! 🚀",
  'This page is playing hide and seek... and winning! 🙈',
]

const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)]
</script>

<template>
  <!-- CSS-based particles background (same as main page) -->
  <div class="particles-container fixed inset-0 -z-10 overflow-hidden">
    <div class="particle" v-for="n in 30" :key="n"></div>
  </div>

  <main class="relative z-10 min-h-screen flex items-center justify-center p-3 md:p-5">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Large 404 Display -->
      <div class="relative mb-8 md:mb-12">
        <h1
          class="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-gray-200 leading-none select-none"
        >
          404
        </h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg mx-4"
          >
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium text-gray-900 mb-2 md:mb-4"
            >
              Page Not Found
            </h2>
            <div class="w-16 md:w-24 h-1 bg-gray-800 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Fun Error Message -->
      <div class="mb-8 md:mb-12 px-4">
        <p class="text-lg sm:text-xl md:text-2xl text-gray-700 font-light italic mb-4 md:mb-6">
          {{ randomMessage }}
        </p>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The page you're looking for seems to have wandered off into the digital void. Don't worry
          though, even the best explorers sometimes take a wrong turn!
        </p>
      </div>

      <!-- Action Buttons -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4"
      >
        <ButtonComponent
          variant="primary"
          size="md"
          :icon="Home"
          icon-position="left"
          aria-label="Go to homepage"
          @click="goHome"
        >
          Go Home
        </ButtonComponent>

        <ButtonComponent
          variant="secondary"
          size="md"
          :icon="ArrowLeft"
          icon-position="left"
          aria-label="Go back to previous page"
          @click="goBack"
        >
          Go Back
        </ButtonComponent>
      </div>

      <!-- Helpful Links -->
      <div class="bg-white/50 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg mx-4">
        <h3 class="text-xl md:text-2xl font-medium text-gray-900 mb-4 md:mb-6">
          While you're here, explore these sections:
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <a
            href="/#projects"
            class="group flex flex-col items-center p-4 md:p-6 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <div
              class="w-10 h-10 md:w-12 md:h-12 bg-gray-800/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gray-800/20 transition-colors duration-300"
            >
              <GitBranch class="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </div>
            <h4 class="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
              Recent Projects
            </h4>
            <p class="text-xs md:text-sm text-gray-600 text-center">
              Check out my latest work and contributions
            </p>
          </a>

          <a
            href="/#about"
            class="group flex flex-col items-center p-4 md:p-6 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <div
              class="w-10 h-10 md:w-12 md:h-12 bg-gray-800/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gray-800/20 transition-colors duration-300"
            >
              <Search class="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
            </div>
            <h4 class="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">About Me</h4>
            <p class="text-xs md:text-sm text-gray-600 text-center">
              Learn more about my background and skills
            </p>
          </a>

          <a
            href="mailto:abdullahmu4life@gmail.com"
            class="group flex flex-col items-center p-4 md:p-6 bg-white/70 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            <div
              class="w-10 h-10 md:w-12 md:h-12 bg-gray-800/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-gray-800/20 transition-colors duration-300"
            >
              <svg
                class="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 class="font-medium text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
              Get in Touch
            </h4>
            <p class="text-xs md:text-sm text-gray-600 text-center">
              Let's connect and discuss opportunities
            </p>
          </a>
        </div>
      </div>

      <!-- Fun Easter Egg -->
      <div class="mt-8 md:mt-12 px-4">
        <p class="text-xs md:text-sm text-gray-500 italic">
          Fun fact: 404 errors got their name from room 404 at CERN, where the original web servers
          were located! 🤓
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Additional particles for 404 page - lighter density */
.particles-container .particle:nth-child(n + 31) {
  display: none;
}

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

/* Responsive text sizing */
@media (max-width: 640px) {
  .resume-button {
    transform: scale(0.9);
  }

  .particles-container .particle {
    width: 3px;
    height: 3px;
  }
}
</style>
