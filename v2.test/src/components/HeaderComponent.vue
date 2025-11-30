<script setup lang="ts">
import GithubIcon from '@/assets/github.svg?component'
import SunIcon from '@/assets/sun.svg?component'
import MoonIcon from '@/assets/moon.svg?component'
import { ref, onUnmounted } from 'vue'
import { Menu, X, Briefcase, Mail } from 'lucide-vue-next'

const isDark = ref(false)
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  // In a real app, this would toggle a class on the html element
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
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
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: 'mailto:abdullahmu4life@gmail.com', icon: Mail },
]

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-8 px-6 md:px-12 transition-all duration-300"
  >
    <!-- Logo -->
    <div>
      <!-- Logo text removed as requested -->
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-4">
      <ul class="flex items-center gap-6 text-sm font-medium text-gray-600">
        <li>
          <a href="#projects" class="hover:text-gray-900 transition-colors">Projects</a>
        </li>
        <li>
          <a href="mailto:abdullahmu4life@gmail.com" class="hover:text-gray-900 transition-colors"
            >Contact</a
          >
        </li>
      </ul>
      <div class="h-4 w-px bg-gray-300 mx-2"></div>
      <div class="flex items-center gap-3">
        <a
          href="https://github.com/abdullah4tech"
          target="_blank"
          class="text-gray-500 hover:text-gray-900 transition-colors"
        >
          <GithubIcon class="w-5 h-5" />
        </a>
        <button @click="toggleTheme" class="text-gray-500 hover:text-yellow-500 transition-colors">
          <SunIcon v-if="isDark" class="w-5 h-5" />
          <MoonIcon v-else class="w-5 h-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Button -->
    <button
      @click="toggleMobileMenu"
      class="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
      aria-label="Toggle mobile menu"
    >
      <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>
  </header>

  <!-- Mobile Menu Overlay -->
  <div
    class="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40"
    :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    @click="closeMobileMenu"
  ></div>

  <!-- Mobile Menu Sidebar -->
  <div
    class="fixed top-0 right-0 h-full w-80 bg-white/90 backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden z-50 border-l border-white/50"
    :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="p-6 pt-24 flex flex-col h-full">
      <nav class="space-y-4">
        <a
          v-for="item in navigationItems"
          :key="item.name"
          :href="item.href"
          @click="closeMobileMenu"
          class="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group"
        >
          <div class="p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
            <component :is="item.icon" class="w-5 h-5 text-gray-600" />
          </div>
          <span class="font-medium text-gray-900">{{ item.name }}</span>
        </a>
      </nav>

      <div class="mt-auto pt-8 border-t border-gray-100">
        <div class="flex justify-center gap-6">
          <a
            href="https://github.com/abdullah4tech"
            target="_blank"
            class="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
          >
            <GithubIcon class="w-5 h-5 text-gray-700" />
          </a>
          <button
            @click="toggleTheme"
            class="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
          >
            <SunIcon v-if="isDark" class="w-5 h-5 text-gray-700" />
            <MoonIcon v-else class="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
