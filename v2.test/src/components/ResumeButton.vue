<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowDownFromLine, Sparkles, Download, Eye, Zap } from 'lucide-vue-next'

const buttonRef = ref<HTMLElement>()
const isHovered = ref(false)
const isClicked = ref(false)
const particles = ref<
  Array<{ id: number; x: number; y: number; vx: number; vy: number; life: number }>
>([])
const animationId = ref<number>()
const sparkles = ref<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>(
  [],
)

let particleId = 0
let sparkleId = 0

const createParticle = (x: number, y: number) => {
  return {
    id: particleId++,
    x,
    y,
    vx: (Math.random() - 0.5) * 8,
    vy: (Math.random() - 0.5) * 8,
    life: 1.0,
  }
}

const createSparkle = () => {
  return {
    id: sparkleId++,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2000,
    duration: 1000 + Math.random() * 1500,
  }
}

const updateParticles = () => {
  particles.value = particles.value.filter((p) => {
    p.x += p.vx
    p.y += p.vy
    p.life -= 0.02
    p.vx *= 0.98
    p.vy *= 0.98
    return p.life > 0
  })
}

const animate = () => {
  updateParticles()
  animationId.value = requestAnimationFrame(animate)
}

const handleMouseMove = (e: MouseEvent) => {
  if (!buttonRef.value || !isHovered.value) return

  const rect = buttonRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  // Create trailing particles
  if (Math.random() < 0.3) {
    particles.value.push(createParticle(x, y))
  }
}

const handleClick = () => {
  isClicked.value = true

  // Create explosion of particles
  if (buttonRef.value) {
    const rect = buttonRef.value.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    for (let i = 0; i < 20; i++) {
      particles.value.push(createParticle(centerX, centerY))
    }
  }

  // Reset click animation after delay
  setTimeout(() => {
    isClicked.value = false
  }, 600)

  // Create download link or preview
  // For now, just a placeholder action
  console.log('🚀 Initiating resume download with style!')

  // Add screen shake effect
  document.body.style.animation = 'shake 0.5s ease-in-out'
  setTimeout(() => {
    document.body.style.animation = ''
  }, 500)
}

onMounted(() => {
  // Create initial sparkles
  for (let i = 0; i < 8; i++) {
    sparkles.value.push(createSparkle())
  }

  animate()
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
})
</script>

<template>
  <div class="resume-button-container">
    <button
      ref="buttonRef"
      class="resume-button"
      :class="{ hovered: isHovered, clicked: isClicked }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @mousemove="handleMouseMove"
      @click="handleClick"
      aria-label="Download Resume"
    >
      <!-- Background layers -->
      <div class="bg-layer bg-layer-1"></div>
      <div class="bg-layer bg-layer-2"></div>
      <div class="bg-layer bg-layer-3"></div>
      <div class="bg-layer bg-layer-4"></div>

      <!-- Animated border -->
      <div class="animated-border"></div>
      <div class="animated-border-2"></div>

      <!-- Matrix rain effect -->
      <div class="matrix-rain">
        <div class="matrix-column" v-for="n in 6" :key="n" :style="{ '--delay': n * 0.2 + 's' }">
          <span v-for="char in 8" :key="char">{{ Math.random() > 0.5 ? '1' : '0' }}</span>
        </div>
      </div>

      <!-- Sparkle effects -->
      <div class="sparkles-container">
        <div
          v-for="sparkle in sparkles"
          :key="sparkle.id"
          class="sparkle"
          :style="{
            left: sparkle.x + '%',
            top: sparkle.y + '%',
            animationDelay: sparkle.delay + 'ms',
            animationDuration: sparkle.duration + 'ms',
          }"
        >
          <Sparkles class="sparkle-icon" />
        </div>
      </div>

      <!-- Lightning bolts -->
      <div class="lightning-container">
        <div class="lightning lightning-1"></div>
        <div class="lightning lightning-2"></div>
        <div class="lightning lightning-3"></div>
      </div>

      <!-- Particle system -->
      <div class="particles-container">
        <div
          v-for="particle in particles"
          :key="particle.id"
          class="particle"
          :style="{
            left: particle.x + 'px',
            top: particle.y + 'px',
            opacity: particle.life,
            transform: `scale(${particle.life})`,
          }"
        ></div>
      </div>

      <!-- Button content -->
      <div class="button-content">
        <div class="icon-container">
          <ArrowDownFromLine class="icon icon-download" />
          <Download class="icon icon-alt" />
          <Eye class="icon icon-preview" />
          <Zap class="icon icon-electric" />
        </div>

        <span class="button-text">
          <span class="text-main">Resume</span>
          <span class="text-alt">Download</span>
          <span class="text-preview">Preview</span>
          <span class="text-crazy">BOOM!</span>
        </span>

        <!-- Holographic effect -->
        <div class="holographic-overlay"></div>

        <!-- Energy waves -->
        <div class="energy-wave wave-1"></div>
        <div class="energy-wave wave-2"></div>
        <div class="energy-wave wave-3"></div>

        <!-- Laser beams -->
        <div class="laser-beam laser-1"></div>
        <div class="laser-beam laser-2"></div>
      </div>

      <!-- Glow effects -->
      <div class="glow-effect glow-1"></div>
      <div class="glow-effect glow-2"></div>
      <div class="glow-effect glow-3"></div>
    </button>
  </div>
</template>

<style scoped>
.resume-button-container {
  position: relative;
  display: inline-block;
}

.resume-button {
  position: relative;
  padding: 16px 32px;
  background: transparent;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Yantramanav', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Background Layers */
.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  opacity: 0;
  transition: all 0.4s ease;
}

.bg-layer-1 {
  background: linear-gradient(45deg, #4a5568 0%, #2d3748 100%);
  animation: pulse 2s ease-in-out infinite;
}

.bg-layer-2 {
  background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
  animation: pulse 2s ease-in-out infinite 0.5s;
}

.bg-layer-3 {
  background: linear-gradient(225deg, #a0aec0 0%, #718096 100%);
  animation: pulse 2s ease-in-out infinite 1s;
}

.bg-layer-4 {
  background: linear-gradient(315deg, #e2e8f0 0%, #cbd5e0 50%, #a0aec0 100%);
  animation: subtleShift 3s ease-in-out infinite;
}

.resume-button:not(.hovered) .bg-layer-1 {
  opacity: 1;
}
.resume-button.hovered .bg-layer-2 {
  opacity: 1;
}
.resume-button.clicked .bg-layer-3 {
  opacity: 1;
}
.resume-button.clicked .bg-layer-4 {
  opacity: 0.8;
}

/* Animated Border */
.animated-border {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 52px;
  background: conic-gradient(
    from 0deg,
    transparent,
    #a0aec0,
    transparent,
    #718096,
    transparent,
    #4a5568,
    transparent,
    #2d3748,
    transparent,
    #1a202c,
    transparent
  );
  animation: rotate 3s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.resume-button.hovered .animated-border {
  opacity: 1;
}

/* Second animated border */
.animated-border-2 {
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 54px;
  background: conic-gradient(
    from 180deg,
    transparent,
    #cbd5e0,
    transparent,
    #a0aec0,
    transparent,
    #718096,
    transparent
  );
  animation: rotate 2s linear infinite reverse;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.resume-button.clicked .animated-border-2 {
  opacity: 1;
}

/* Sparkles */
.sparkles-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: 50px;
  overflow: hidden;
}

.sparkle {
  position: absolute;
  opacity: 0;
  animation: sparkle 2s ease-in-out infinite;
}

.sparkle-icon {
  width: 12px;
  height: 12px;
  color: #e2e8f0;
  filter: drop-shadow(0 0 4px #cbd5e0);
}

/* Matrix Rain Effect */
.matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: 'Courier New', monospace;
  font-size: 10px;
  color: #a0aec0;
  pointer-events: none;
}

.resume-button.hovered .matrix-rain {
  opacity: 0.6;
}

.matrix-column {
  position: absolute;
  top: -100%;
  height: 200%;
  width: 20px;
  display: flex;
  flex-direction: column;
  animation: matrix-fall 2s linear infinite;
  animation-delay: var(--delay);
}

.matrix-column:nth-child(1) {
  left: 10%;
}
.matrix-column:nth-child(2) {
  left: 25%;
}
.matrix-column:nth-child(3) {
  left: 40%;
}
.matrix-column:nth-child(4) {
  left: 55%;
}
.matrix-column:nth-child(5) {
  left: 70%;
}
.matrix-column:nth-child(6) {
  left: 85%;
}

.matrix-column span {
  display: block;
  height: 12px;
  opacity: 0.8;
  animation: matrix-fade 0.5s ease-in-out infinite alternate;
}

/* Lightning Effects */
.lightning-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
}

.resume-button.clicked .lightning-container {
  opacity: 1;
}

.lightning {
  position: absolute;
  width: 2px;
  background: linear-gradient(to bottom, #e2e8f0, #cbd5e0, #e2e8f0);
  opacity: 0;
  animation: lightning-strike 0.2s ease-in-out;
}

.lightning-1 {
  height: 60%;
  left: 20%;
  top: 0;
  transform: rotate(15deg);
  animation-delay: 0s;
}

.lightning-2 {
  height: 70%;
  right: 25%;
  top: 10%;
  transform: rotate(-20deg);
  animation-delay: 0.1s;
}

.lightning-3 {
  height: 50%;
  left: 50%;
  top: 0;
  transform: rotate(5deg);
  animation-delay: 0.15s;
}

/* Particles */
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: 50px;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #fff 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

/* Button Content */
.button-content {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-container {
  position: relative;
  width: 20px;
  height: 20px;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.icon-download {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.icon-alt {
  opacity: 0;
  transform: scale(0) rotate(180deg);
}

.icon-preview {
  opacity: 0;
  transform: scale(0) rotate(-90deg);
}

.icon-electric {
  opacity: 0;
  transform: scale(0) rotate(90deg);
  color: #ffd700;
}

.resume-button.hovered .icon-download {
  opacity: 0;
  transform: scale(0) rotate(-180deg);
}

.resume-button.hovered .icon-alt {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.resume-button.clicked .icon-alt {
  opacity: 0;
  transform: scale(0) rotate(180deg);
}

.resume-button.clicked .icon-electric {
  opacity: 1;
  transform: scale(1.2) rotate(0deg);
}

/* Button Text */
.button-text {
  position: relative;
  overflow: hidden;
}

.text-main,
.text-alt,
.text-preview,
.text-crazy {
  display: block;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.text-alt,
.text-preview,
.text-crazy {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
}

.text-crazy {
  color: #a0aec0;
  font-weight: 900;
  text-shadow: 0 0 10px #718096;
  animation: crazy-text 0.1s ease-in-out infinite;
}

.resume-button.hovered .text-main {
  opacity: 0;
  transform: translateY(-100%);
}

.resume-button.hovered .text-alt {
  opacity: 1;
  transform: translateY(0);
}

.resume-button.clicked .text-alt {
  opacity: 0;
  transform: translateY(-100%);
}

.resume-button.clicked .text-alt {
  opacity: 0;
  transform: translateY(-100%);
}

.resume-button.clicked .text-crazy {
  opacity: 1;
  transform: translateY(0);
}

/* Holographic Effect */
.holographic-overlay {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  opacity: 0;
  transition: all 0.6s ease;
}

.resume-button.hovered .holographic-overlay {
  opacity: 1;
  left: 100%;
}

/* Energy Waves */
.energy-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  animation: energyWave 2s ease-out infinite;
}

.wave-2 {
  animation-delay: 0.3s;
}
.wave-3 {
  animation-delay: 0.6s;
}

.resume-button.clicked .energy-wave {
  animation: energyWaveClick 0.6s ease-out;
}

/* Laser Beams */
.laser-beam {
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #cbd5e0, transparent);
  opacity: 0;
  animation: laser-sweep 0.3s ease-in-out;
}

.laser-1 {
  left: 30%;
  animation-delay: 0.2s;
}

.laser-2 {
  right: 30%;
  animation-delay: 0.4s;
}

.resume-button.clicked .laser-beam {
  opacity: 1;
}

/* Glow Effects */
.glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.4s ease;
}

.glow-1 {
  background: radial-gradient(ellipse at center, rgba(160, 174, 192, 0.3) 0%, transparent 70%);
  filter: blur(10px);
}

.glow-2 {
  background: radial-gradient(ellipse at center, rgba(113, 128, 150, 0.3) 0%, transparent 70%);
  filter: blur(15px);
}

.glow-3 {
  background: radial-gradient(ellipse at center, rgba(203, 213, 224, 0.3) 0%, transparent 70%);
  filter: blur(20px);
}

.resume-button.hovered .glow-1 {
  opacity: 1;
}
.resume-button.hovered .glow-2 {
  opacity: 0.7;
  animation: pulse 1s ease-in-out infinite;
}
.resume-button.clicked .glow-3 {
  opacity: 1;
  animation: explosion 0.6s ease-out;
}

/* Hover and Click Transforms */
.resume-button.hovered {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.resume-button.clicked {
  transform: translateY(0) scale(0.95);
}

/* Animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes sparkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

@keyframes energyWave {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}

@keyframes energyWaveClick {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
    border-width: 3px;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
    border-width: 0;
  }
}

@keyframes explosion {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

@keyframes rainbow {
  0%,
  100% {
    background: linear-gradient(315deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
  }
  25% {
    background: linear-gradient(315deg, #a8edea 0%, #fed6e3 50%, #d299c2 100%);
  }
  50% {
    background: linear-gradient(315deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%);
  }
  75% {
    background: linear-gradient(315deg, #89f7fe 0%, #66a6ff 50%, #a8edea 100%);
  }
}

@keyframes matrix-fall {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes matrix-fade {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

@keyframes lightning-strike {
  0%,
  90%,
  100% {
    opacity: 0;
  }
  5%,
  85% {
    opacity: 1;
  }
  10%,
  80% {
    opacity: 0;
  }
  15%,
  75% {
    opacity: 1;
  }
}

@keyframes laser-sweep {
  0% {
    opacity: 0;
    transform: scaleX(0) scaleY(0);
  }
  50% {
    opacity: 1;
    transform: scaleX(1) scaleY(0.5);
  }
  100% {
    opacity: 0;
    transform: scaleX(1) scaleY(1);
  }
}

@keyframes crazy-text {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.1) rotate(1deg);
  }
  75% {
    transform: scale(0.9) rotate(-1deg);
  }
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  75% {
    transform: translateX(2px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .resume-button {
    padding: 12px 24px;
    font-size: 14px;
  }

  .icon {
    width: 18px;
    height: 18px;
  }

  .icon-container {
    width: 18px;
    height: 18px;
  }
}
</style>
,,((),(()
