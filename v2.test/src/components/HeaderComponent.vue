<script setup lang="ts">
import CameraIcon from '@/assets/camera.svg?component'
import GithubIcon from '@/assets/github.svg?component'
import SunIcon from '@/assets/sun.svg?component'
import MoonIcon from '@/assets/moon.svg?component'
import { ref, onUnmounted } from 'vue'
import { Menu, X, User, Briefcase, Mail, Github } from 'lucide-vue-next'

const isDark = ref(false)
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const navigationItems = [
  { name: 'Blogs', href: '#blogs', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
]

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-3 px-4 sm:py-4 sm:px-6 md:px-8 lg:px-12 xl:px-15"
  >
    <!-- Logo -->
    <div>
      <span class="text-base sm:text-lg md:text-xl font-medium">Abdullah.</span>
    </div>

    <!-- Desktop Navigation (Original Design) -->
    <nav class="hidden md:flex py-2 px-4 lg:px-5 justify-center rounded-full backdrop-blur-md">
      <ul class="flex items-center gap-3 lg:gap-5 text-sm lg:text-[15px] text-gray-500">
        <li>
          <a href="#" class="hover:text-gray-800 transition-colors duration-200">Blogs</a>
        </li>
        <li>
          <a href="#" class="hover:text-gray-800 transition-colors duration-200">Projects</a>
        </li>
        <li>
          <a href="#" class="hover:text-gray-800 transition-colors duration-200">Contact</a>
        </li>
        <li>
          <a href="#" class="text-gray-400 hover:text-gray-800 transition-colors duration-200">
            <CameraIcon class="w-4 h-4" />
          </a>
        </li>
        <li>
          <a href="#" class="text-gray-400 hover:text-gray-800 transition-colors duration-200">
            <GithubIcon class="w-4 h-4" />
          </a>
        </li>
        <li>
          <a
            href="#"
            v-on:click="toggleTheme"
            class="text-gray-400 hover:text-gray-800 transition-colors duration-200"
          >
            <SunIcon v-if="isDark" class="w-4 h-4" />
            <MoonIcon v-else class="w-4 h-4" />
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Button -->
    <button
      @click="toggleMobileMenu"
      class="md:hidden relative z-50 p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
      :class="{ 'text-white': isMobileMenuOpen }"
      aria-label="Toggle mobile menu"
    >
      <div class="w-6 h-6 relative">
        <Menu
          class="w-6 h-6 absolute transition-all duration-300 transform"
          :class="
            isMobileMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
          "
        />
        <X
          class="w-6 h-6 absolute transition-all duration-300 transform"
          :class="
            isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
          "
        />
      </div>
    </button>
  </header>

  <!-- Mobile Menu Overlay -->
  <div
    class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-50"
    :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    @click="closeMobileMenu"
  ></div>

  <!-- Mobile Menu Sidebar -->
  <div
    class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden overflow-hidden z-[100]"
    :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- Menu Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 -right-4 w-80 h-80 bg-gray-900 rounded-full transform rotate-45"
      ></div>
      <div class="absolute bottom-0 -right-8 w-60 h-60 bg-gray-700 rounded-full"></div>
    </div>

    <!-- Menu Content -->
    <div class="relative z-10 h-full flex flex-col">
      <!-- Menu Header -->
      <div class="px-6 py-8 border-b border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900">Navigation</h3>
            <p class="text-sm text-gray-500 mt-1">Explore my portfolio</p>
          </div>
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <span class="text-lg font-bold text-gray-700">A</span>
          </div>
        </div>
      </div>

      <!-- Navigation Items -->
      <div class="flex-1 px-6 py-8">
        <nav class="space-y-2">
          <a
            v-for="(item, index) in navigationItems"
            :key="item.name"
            :href="item.href"
            @click="closeMobileMenu"
            class="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
            :style="{ animationDelay: `${index * 100}ms` }"
            :class="isMobileMenuOpen ? 'animate-slide-in-right' : ''"
          >
            <div
              class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-200"
            >
              <component :is="item.icon" class="w-5 h-5" />
            </div>
            <div>
              <span class="text-gray-900 font-medium">{{ item.name }}</span>
              <div class="text-xs text-gray-500 mt-0.5">
                {{
                  item.name === 'Blogs'
                    ? 'Read my thoughts'
                    : item.name === 'Projects'
                      ? 'View my work'
                      : 'Get in touch'
                }}
              </div>
            </div>
            <div class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div class="w-2 h-2 bg-gray-900 rounded-full"></div>
            </div>
          </a>
        </nav>
      </div>

      <!-- Menu Footer -->
      <div class="px-6 py-6 border-t border-gray-100">
        <!-- Social Links -->
        <div class="flex items-center justify-between mb-6">
          <span class="text-sm font-medium text-gray-700">Connect</span>
          <div class="flex items-center gap-2">
            <a
              href="#"
              class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              <CameraIcon class="w-4 h-4" />
            </a>
            <a
              href="https://github.com/abdullah4tech"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              <Github class="w-4 h-4" />
            </a>
            <button
              @click="toggleTheme"
              class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              <SunIcon v-if="isDark" class="w-4 h-4" />
              <MoonIcon v-else class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="text-center">
          <p class="text-xs text-gray-500">Ready to work together?</p>
          <a
            href="mailto:abdullahmu4life@gmail.com"
            class="text-sm text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
          >
            abdullahmu4life@gmail.com
          </a>
        </div>
      </div>
    </div>

    <!-- Menu Decorative Elements -->
    <div
      class="absolute top-20 right-6 w-2 h-16 bg-gradient-to-b from-gray-200 to-transparent rounded-full"
    ></div>
    <div
      class="absolute top-40 right-4 w-1 h-8 bg-gradient-to-b from-gray-300 to-transparent rounded-full"
    ></div>
  </div>
</template>

<style scoped>
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.3s ease-out forwards;
  opacity: 0;
}

/* Smooth scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
}
</style>
