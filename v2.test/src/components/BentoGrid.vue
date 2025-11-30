<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  title: string
  description: string
  link?: string
  image?: string
  tags?: string[]
  large?: boolean
}>()
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-3xl bg-white p-6 transition-all duration-300 hover:-translate-y-1 border border-gray-200"
    :class="{ 'md:col-span-2 md:row-span-2': large }"
  >
    <!-- Background Gradient -->
    <div
      class="absolute inset-0 bg-gray-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></div>

    <div class="relative z-10 flex h-full flex-col justify-between">
      <div>
        <div class="flex items-start justify-between">
          <div class="flex flex-wrap gap-2 mb-3" v-if="tags">
            <span
              v-for="tag in tags"
              :key="tag"
              class="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
            >
              {{ tag }}
            </span>
          </div>
          <a
            v-if="link"
            :href="link"
            target="_blank"
            class="rounded-full p-4 text-gray-400 transition-colors hover:bg-gray-900 hover:text-white border border-gray-200"
          >
            <ArrowUpRight class="h-5 w-5" />
          </a>
        </div>

        <h3 class="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
          {{ title }}
        </h3>
        <p class="mt-2 text-sm text-gray-600 line-clamp-3">
          {{ description }}
        </p>
      </div>

      <div v-if="image" class="mt-6 overflow-hidden rounded-2xl border border-gray-100">
        <img
          :src="image"
          :alt="title"
          class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>
