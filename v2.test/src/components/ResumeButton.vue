<template>
  <a
    ref="buttonRef"
    href="/resume.pdf"
    target="_blank"
    class="resume-button-component"
    :class="{ 'resume-button-hovered': isHovered }"
    :style="{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '0.5rem',
      fontWeight: '600',
      fontSize: '0.875rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden',
      transform: 'translateZ(0)',
      border: 'none',
      cursor: 'pointer',
      backdropFilter: 'none',
      boxShadow: isHovered ? '0 10px 25px rgba(102, 126, 234, 0.4)' : 'none',
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
    aria-label="Download Resume"
  >
    <div
      class="resume-button-content"
      :style="{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }"
    >
      <div
        class="resume-button-icon-container"
        :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center' }"
      >
        <svg
          class="resume-button-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          :style="{
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'translateY(2px)' : 'translateY(0)',
          }"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7,10 12,15 17,10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>
      <span class="resume-button-text" :style="{ fontWeight: '600' }">Resume</span>
    </div>

    <!-- Lightweight particles on hover -->
    <div
      v-if="isHovered"
      class="resume-button-particles"
      aria-hidden="true"
      :style="{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }"
    >
      <div
        v-for="particle in particles"
        :key="particle.id"
        class="resume-button-particle"
        :style="{
          position: 'absolute',
          left: particle.x + 'px',
          top: particle.y + 'px',
          opacity: particle.life,
          width: '3px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          pointerEvents: 'none',
          animation: 'resume-button-particle-float 1s ease-out forwards',
        }"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
}

const buttonRef = ref<HTMLAnchorElement>()
const isHovered = ref(false)
const particles = ref<Particle[]>([])
let animationId: number | null = null
let particleId = 0

const createParticle = (x: number, y: number): Particle => ({
  id: particleId++,
  x: x + (Math.random() - 0.5) * 20,
  y: y + (Math.random() - 0.5) * 20,
  vx: (Math.random() - 0.5) * 2,
  vy: (Math.random() - 0.5) * 2,
  life: 1,
})

const updateParticles = () => {
  particles.value = particles.value
    .map((p) => ({
      ...p,
      x: p.x + p.vx,
      y: p.y + p.vy,
      life: p.life - 0.02,
      vx: p.vx * 0.98,
      vy: p.vy * 0.98,
    }))
    .filter((p) => p.life > 0)
}

const animate = () => {
  updateParticles()

  if (isHovered.value && Math.random() < 0.3 && particles.value.length < 10) {
    const rect = buttonRef.value?.getBoundingClientRect()
    if (rect) {
      const x = Math.random() * rect.width
      const y = Math.random() * rect.height
      particles.value.push(createParticle(x, y))
    }
  }

  animationId = requestAnimationFrame(animate)
}

const handleMouseEnter = () => {
  isHovered.value = true
  if (!animationId) {
    animate()
  }
}

const handleMouseLeave = () => {
  isHovered.value = false
  particles.value = []
}

const handleClick = () => {
  // Add click feedback
  const rect = buttonRef.value?.getBoundingClientRect()
  if (rect) {
    for (let i = 0; i < 5; i++) {
      const x = rect.width / 2 + (Math.random() - 0.5) * 30
      const y = rect.height / 2 + (Math.random() - 0.5) * 30
      particles.value.push(createParticle(x, y))
    }
  }
}

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style>
/* Force stronger specificity to override parent styles */
a.resume-button-component.resume-button-component {
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  padding: 0.75rem 1.5rem !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  text-decoration: none !important;
  border-radius: 0.5rem !important;
  font-weight: 600 !important;
  font-size: 0.875rem !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  overflow: hidden !important;
  transform: translateZ(0) !important;
  will-change: transform !important;
  border: none !important;
  cursor: pointer !important;
  /* Override any parent styles */
  backdrop-filter: none !important;
  box-shadow: none !important;
}

a.resume-button-component.resume-button-component::before {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%) !important;
  opacity: 0 !important;
  transition: opacity 0.3s ease !important;
}

a.resume-button-component.resume-button-component.resume-button-hovered::before,
a.resume-button-component.resume-button-component:hover::before {
  opacity: 1 !important;
}

.resume-button-content {
  position: relative !important;
  z-index: 2 !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
}

.resume-button-icon-container {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.resume-button-icon {
  transition: transform 0.3s ease !important;
}

.resume-button-component.resume-button-hovered .resume-button-icon {
  transform: translateY(2px) !important;
}

.resume-button-text {
  font-weight: 600 !important;
}

.resume-button-particles {
  position: absolute !important;
  inset: 0 !important;
  pointer-events: none !important;
  z-index: 1 !important;
  overflow: hidden !important;
}

.resume-button-particle {
  position: absolute !important;
  width: 3px !important;
  height: 3px !important;
  background: rgba(255, 255, 255, 0.8) !important;
  border-radius: 50% !important;
  pointer-events: none !important;
  animation: resume-button-particle-float 1s ease-out forwards !important;
}

@keyframes resume-button-particle-float {
  to {
    transform: translateY(-20px) !important;
    opacity: 0 !important;
  }
}

a.resume-button-component.resume-button-component:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4) !important;
}

a.resume-button-component.resume-button-component:active {
  transform: translateY(0) !important;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3) !important;
}

/* Responsive design */
@media (max-width: 768px) {
  a.resume-button-component.resume-button-component {
    padding: 0.625rem 1.25rem !important;
    font-size: 0.8125rem !important;
  }

  .resume-button-icon {
    width: 18px !important;
    height: 18px !important;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  a.resume-button-component.resume-button-component,
  .resume-button-icon,
  .resume-button-particle {
    transition: none !important;
    animation: none !important;
  }

  .resume-button-particles {
    display: none !important;
  }
}
</style>
