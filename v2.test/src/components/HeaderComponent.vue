<script setup lang="ts">
import CameraIcon from '@/assets/camera.svg?component'
import GithubIcon from '@/assets/github.svg?component'
import SunIcon from '@/assets/sun.svg?component'
import MoonIcon from '@/assets/moon.svg?component'
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <header class="flex text-[20px] items-center justify-between py-4 px-15">
    <!-- Logo -->
    <div>
      <span class="text-sm">Abdullah.</span>
    </div>

    <!-- Navigation -->
    <nav class="py-2 px-5 flex justify-center rounded-full backdrop-blur-md">
      <ul class="flex items-center gap-5 text-[15px] text-gray-500">
        <li>
          <a href="#" class="hover:text-gray-700 transition-colors duration-200">Blogs</a>
        </li>
        <li>
          <a href="#" class="hover:text-gray-700 transition-colors duration-200">Projects</a>
        </li>
        <li>
          <a href="#" class="hover:text-gray-700 transition-colors duration-200">Contact</a>
        </li>
        <li>
          <a href="#" class="text-gray-400 hover:text-gray-700 transition-colors duration-200">
            <CameraIcon class="size-4" />
          </a>
        </li>
        <li>
          <a href="#" class="text-gray-400 hover:text-gray-700 transition-colors duration-200">
            <GithubIcon class="size-4" />
          </a>
        </li>
        <li>
          <a
            href="#"
            v-on:click="toggleTheme"
            class="text-gray-400 hover:text-gray-700 transition-colors duration-200"
          >
            <SunIcon v-if="isDark" class="size-4" />
            <MoonIcon v-else class="size-4" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
