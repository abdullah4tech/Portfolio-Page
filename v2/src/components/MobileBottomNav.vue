<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { gsap } from 'gsap'

const route = useRoute()

const links = [
  { name: 'Home', to: '/', icon: 'solar:home-smile-angle-linear', activeIcon: 'solar:home-smile-angle-bold' },
  { name: 'Projects', to: '/projects', icon: 'ph:rocket-duotone', activeIcon: 'ph:rocket-fill' },
  { name: 'Blog', to: '/blog', icon: 'solar:document-linear', activeIcon: 'solar:document-bold' },
  { name: 'Photos', to: '/photos', icon: 'solar:gallery-wide-line-duotone', activeIcon: 'solar:gallery-wide-bold-duotone' },
]

const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

const activeIndex = computed(() => {
  const idx = links.findIndex(l => isActive(l.to))
  return idx >= 0 ? idx : 0
})

/* ── Hide on scroll down, show on scroll up ── */

const isVisible = ref(true)
let lastScrollY = 0
let ticking = false

const handleScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    const currentY = window.scrollY
    const delta = currentY - lastScrollY

    // Only hide after scrolling 60px+ down, always show on scroll up
    if (delta > 8 && currentY > 60) {
      isVisible.value = false
    } else if (delta < -4) {
      isVisible.value = true
    }

    lastScrollY = currentY
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

/* ── Icon bounce on tap ── */

const itemRefs = ref<(HTMLElement | null)[]>([])

const onTap = (index: number) => {
  const el = itemRefs.value[index]
  if (!el) return
  const icon = el.querySelector('.nav-icon')
  if (!icon) return
  gsap.fromTo(icon, {
    scale: 0.7,
  }, {
    scale: 1,
    duration: 0.5,
    ease: 'elastic.out(1.2, 0.4)',
  })
}

/* ── Sliding pill indicator ── */

const pillRef = ref<HTMLElement | null>(null)

watch(activeIndex, (newIdx) => {
  if (!pillRef.value) return
  gsap.to(pillRef.value, {
    x: newIdx * 100 + '%',
    duration: 0.4,
    ease: 'power3.out',
  })
}, { flush: 'post' })

onMounted(() => {
  // Set initial pill position without animation
  if (pillRef.value) {
    gsap.set(pillRef.value, { x: activeIndex.value * 100 + '%' })
  }
})
</script>

<template>
  <nav
    class="mob-nav sm:hidden"
    :class="{ 'mob-nav--hidden': !isVisible }"
    aria-label="Primary mobile"
  >
    <div class="mob-nav__bar">
      <!-- Sliding pill indicator -->
      <div class="mob-nav__pill-track" aria-hidden="true">
        <div ref="pillRef" class="mob-nav__pill"></div>
      </div>

      <!-- Nav items -->
      <RouterLink
        v-for="(link, i) in links"
        :key="link.to"
        :ref="(el) => { itemRefs[i] = el as HTMLElement }"
        :to="link.to"
        class="mob-nav__item"
        :class="{ 'mob-nav__item--active': isActive(link.to) }"
        @click="onTap(i)"
      >
        <Icon
          :icon="isActive(link.to) ? link.activeIcon : link.icon"
          class="nav-icon"
          :width="isActive(link.to) ? 22 : 20"
          :height="isActive(link.to) ? 22 : 20"
        />
        <span class="mob-nav__label">{{ link.name }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.mob-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0 12px calc(env(safe-area-inset-bottom, 8px) + 8px);
  pointer-events: none;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
}

.mob-nav--hidden {
  transform: translateY(calc(100% + 12px));
  opacity: 0;
  pointer-events: none;
}

.mob-nav__bar {
  position: relative;
  pointer-events: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 380px;
  margin: 0 auto;
  padding: 4px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow:
    0 0 0 0.5px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
}

/* ── Sliding pill ── */

.mob-nav__pill-track {
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  pointer-events: none;
}

.mob-nav__pill {
  width: 25%;
  height: 100%;
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.06);
  will-change: transform;
}

/* ── Items ── */

.mob-nav__item {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 8px 4px 7px;
  border-radius: 18px;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.25s ease;
  -webkit-tap-highlight-color: transparent;
  min-height: 48px;
}

.mob-nav__item--active {
  color: rgba(0, 0, 0, 0.88);
}

.nav-icon {
  flex-shrink: 0;
  will-change: transform;
}

.mob-nav__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1;
  transition: opacity 0.2s ease;
}

.mob-nav__item:not(.mob-nav__item--active) .mob-nav__label {
  opacity: 0.7;
}

/* ── Reduced motion ── */

@media (prefers-reduced-motion: reduce) {
  .mob-nav {
    transition: none;
  }
  .mob-nav__pill {
    transition: none;
  }
}
</style>
