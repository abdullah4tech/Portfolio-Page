<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'

const route = useRoute()
const signatureRef = ref<SVGTextElement | null>(null)

onMounted(() => {
  document.fonts.ready.then(() => {
    const el = signatureRef.value
    if (!el) return
    const length = el.getComputedTextLength() * 3
    el.style.strokeDasharray = `${length}`
    el.style.strokeDashoffset = `${length}`
    el.getBoundingClientRect()
    el.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.65, 0, 0.35, 1), fill-opacity 0.8s ease 1.4s'
    el.style.strokeDashoffset = '0'
    el.style.fillOpacity = '1'
  })
})

const navLinks = [
  { label: 'Projects', to: '/projects', idx: '01', icon: 'ph:rocket-duotone' },
  { label: 'Blog', to: '/blog', idx: '02', icon: 'ph:article-duotone' },
  { label: 'Talks', to: '/talks', idx: '03', icon: 'ph:microphone-stage-duotone' },
  { label: 'Photos', to: '/photos', idx: '04', icon: 'ph:camera-duotone' },
]

const socials = [
  { icon: 'ph:github-logo-duotone', href: 'https://github.com/abdullah4tech', label: 'GitHub' },
  { icon: 'ph:x-logo-duotone', href: 'https://twitter.com/abdullah4tech_', label: 'Twitter' },
]

const isActive = (to: string) => route.path === to || (to !== '/' && route.path.startsWith(to))
</script>

<template>
  <header class="hidden sm:block w-full">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex items-center justify-between">
        <!-- Signature logo / Home link -->
        <RouterLink
          to="/"
          class="signature-logo hover:opacity-70 transition-opacity duration-300"
          aria-label="Home — Abdullah O. Mustapha"
        >
          <svg viewBox="0 0 160 45" class="h-9 w-auto overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <text
              ref="signatureRef"
              x="4"
              y="34"
              class="signature-stroke"
            >abdullah</text>
          </svg>
        </RouterLink>

        <!-- Nav links -->
        <nav class="flex items-center gap-7" aria-label="Primary">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link group flex items-center gap-1.5 text-[13px] tracking-wide transition-colors duration-200"
            :class="isActive(link.to)
              ? 'text-gray-900 font-medium'
              : 'text-gray-400 hover:text-gray-700'"
          >
            <Icon :icon="link.icon" width="14" height="14" class="opacity-50 group-hover:opacity-80 transition-opacity" />
            <span class="uppercase">{{ link.label }}</span>
          </RouterLink>

          <!-- Separator -->
          <span class="w-px h-4 bg-gray-200" aria-hidden="true"></span>

          <!-- Social icons -->
          <div class="flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.href"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="text-gray-300 hover:text-gray-700 transition-colors duration-200"
            >
              <Icon :icon="social.icon" width="18" height="18" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.signature-logo {
  display: inline-block;
}

.signature-stroke {
  font-family: 'Sacramento', cursive;
  font-size: 28px;
  fill: #111827;
  fill-opacity: 0;
  stroke: #111827;
  stroke-width: 0.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
