<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PhotoGallery from '@/components/PhotoGallery.vue'
import { photos } from '@/data/photos'

gsap.registerPlugin(ScrollTrigger)

useHead({
  title: 'Photos | Abdullah O. Mustapha',
  meta: [
    { name: 'description', content: 'A curated collection of photography — landscapes, cities, and quiet moments.' },
  ],
})

/* ── GSAP ── */
const headerRef = ref<HTMLElement | null>(null)
const galleryRef = ref<HTMLElement | null>(null)
const ctx = ref<gsap.Context | null>(null)

onMounted(async () => {
  await nextTick()

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  ctx.value = gsap.context(() => {
    /* Header cascade */
    const headerEls = headerRef.value?.querySelectorAll('[data-scroll]')
    if (headerEls?.length) {
      gsap.from(headerEls, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
      })
    }

    /* Gallery fade-in */
    if (galleryRef.value) {
      gsap.from(galleryRef.value, {
        scrollTrigger: {
          trigger: galleryRef.value,
          start: 'top 92%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
      })
    }
  })
})

onUnmounted(() => {
  ctx.value?.revert()
})
</script>

<template>
  <div class="space-y-14 sm:space-y-16 py-10 sm:py-14">
    <!-- Header -->
    <header ref="headerRef" class="space-y-5">
      <div class="flex items-center gap-3">
        <h1 data-scroll class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Photos</h1>
      </div>
      <p data-scroll class="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
        A collection of moments captured through my lens — landscapes, cities, and the quiet in-between.
      </p>
    </header>

    <!-- Gallery -->
    <section ref="galleryRef">
      <PhotoGallery :photos="photos" />
    </section>

    <!-- Footer -->
    <footer class="pt-6 border-t border-gray-100">
      <p class="text-xs sm:text-sm text-gray-300 tracking-wide">
        All photos © Abdullah O. Mustapha unless stated otherwise.
      </p>
    </footer>
  </div>
</template>
