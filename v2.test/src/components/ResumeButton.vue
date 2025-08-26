<template>
  <div class="resume-button-container">
    <a
      ref="buttonRef"
      href="/resume.pdf"
      target="_blank"
      class="resume-button"
      :class="{ hovered: isHovered }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      <div class="button-content">
        <div class="icon-container">
          <svg
            class="icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </div>
        <span class="button-text">Resume</span>
      </div>

      <!-- Lightweight particles -->
      <div v-if="isHovered" class="particles-container" aria-hidden="true">
        <div
          v-for="particle in particles"
          :key="particle.id"
          class="particle"
          :style="{
            left: particle.x + 'px',
            top: particle.y + 'px',
            opacity: particle.life,
          }"
        />
      </div>
    </a>
  </div>
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

<style scoped>
.resume-button-container {
  position: relative;
  display: inline-block;
}

.resume-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform;
}

.resume-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.resume-button.hovered::before {
  opacity: 1;
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  transition: transform 0.3s ease;
}

.resume-button.hovered .icon {
  transform: translateY(2px);
}

.button-text {
  font-weight: 600;
}

.particles-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  pointer-events: none;
  animation: particle-float 1s ease-out forwards;
}

@keyframes particle-float {
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.resume-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.resume-button:active {
  transform: translateY(0);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .resume-button {
    padding: 0.625rem 1.25rem;
    font-size: 0.8125rem;
  }

  .icon {
    width: 18px;
    height: 18px;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .resume-button,
  .icon,
  .particle {
    transition: none !important;
    animation: none !important;
  }

  .particles-container {
    display: none;
  }
}
</style>
