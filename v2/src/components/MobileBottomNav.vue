<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

const route = useRoute()

const links = [
  { name: 'Home', to: '/', icon: 'ph:house-duotone' },
  { name: 'Projects', to: '/projects', icon: 'ph:rocket-duotone' },
  { name: 'Blog', to: '/blog', icon: 'ph:article-duotone' },
  { name: 'Photos', to: '/photos', icon: 'ph:camera-duotone' },
]

const isActive = (to: string) => route.path === to
</script>

<template>
  <nav class="mob-nav sm:hidden" aria-label="Primary mobile">
    <div class="mob-nav__bar">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="mob-nav__item"
        :class="{ 'mob-nav__item--active': isActive(link.to) }"
      >
        <span class="mob-nav__dot" v-if="isActive(link.to)"></span>
        <Icon :icon="link.icon" class="mob-nav__icon" width="20" height="20" />
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
  padding: 0 16px 12px;
  pointer-events: none;
}

.mob-nav__bar {
  pointer-events: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 400px;
  margin: 0 auto;
  padding: 6px 4px 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow:
    0 0 0 0.5px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.08),
    0 16px 40px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
}

.mob-nav__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 4px 4px;
  border-radius: 14px;
  color: rgba(0, 0, 0, 0.32);
  transition: color 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}

.mob-nav__item--active {
  color: rgba(0, 0, 0, 0.85);
}

.mob-nav__dot {
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.75);
}

.mob-nav__icon {
  flex-shrink: 0;
}

.mob-nav__label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1;
}
</style>
