<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let animationFrameId: number
  let activeBranches: Branch[] = []

  interface Branch {
    startX: number
    startY: number
    endX: number
    endY: number
    ctrlX: number
    ctrlY: number
    depth: number
    width: number
    progress: number
    speed: number
    angle: number
    length: number
  }

  const createBranch = (
    x: number,
    y: number,
    length: number,
    angle: number,
    depth: number,
    width: number,
  ): Branch => {
    const endX = x + length * Math.cos(angle)
    const endY = y + length * Math.sin(angle)

    // Random control point for curve
    const ctrlX = (x + endX) / 2 + (Math.random() - 0.5) * length * 0.25
    const ctrlY = (y + endY) / 2 + (Math.random() - 0.5) * length * 0.25

    return {
      startX: x,
      startY: y,
      endX,
      endY,
      ctrlX,
      ctrlY,
      depth,
      width,
      progress: 0,
      speed: 0.015 + Math.random() * 0.015, // Slower, more elegant speed
      angle,
      length,
    }
  }

  const getQuadraticXY = (
    t: number,
    sx: number,
    sy: number,
    cx: number,
    cy: number,
    ex: number,
    ey: number,
  ) => {
    return {
      x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * cx + t * t * ex,
      y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * cy + t * t * ey,
    }
  }

  const animate = () => {
    if (activeBranches.length === 0) return

    // Do NOT clear canvas to allow trails to persist
    // But we might want to fade trails? No, user wants "line art pattern".
    // So we just draw new segments.

    const nextBranches: Branch[] = []

    for (let i = activeBranches.length - 1; i >= 0; i--) {
      const branch = activeBranches[i]

      const prevProgress = branch.progress
      branch.progress += branch.speed

      if (branch.progress > 1) branch.progress = 1

      // Calculate segment to draw
      const p1 = getQuadraticXY(
        prevProgress,
        branch.startX,
        branch.startY,
        branch.ctrlX,
        branch.ctrlY,
        branch.endX,
        branch.endY,
      )
      const p2 = getQuadraticXY(
        branch.progress,
        branch.startX,
        branch.startY,
        branch.ctrlX,
        branch.ctrlY,
        branch.endX,
        branch.endY,
      )

      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)

      // Style
      const opacity = 0.2 + (branch.depth / 8) * 0.3 // Slightly increased opacity to balance lighter color
      ctx.strokeStyle = `rgba(210, 210, 220, ${opacity})` // Lighter grey
      ctx.lineWidth = branch.width
      ctx.lineCap = 'round'
      ctx.stroke()

      if (branch.progress >= 1) {
        // Branch finished, spawn children
        activeBranches.splice(i, 1) // Remove finished branch

        if (branch.depth > 0) {
          const numChildren = Math.random() > 0.3 ? 2 : 3

          for (let c = 0; c < numChildren; c++) {
            const angleVariation = (Math.random() - 0.5) * 1.0
            const lengthVariation = 0.6 + Math.random() * 0.3

            nextBranches.push(
              createBranch(
                branch.endX,
                branch.endY,
                branch.length * lengthVariation * 0.75,
                branch.angle + angleVariation,
                branch.depth - 1,
                branch.width * 0.8,
              ),
            )
          }
        }
      }
    }

    activeBranches.push(...nextBranches)

    if (activeBranches.length > 0) {
      animationFrameId = requestAnimationFrame(animate)
    }
  }

  const initFractal = () => {
    if (!canvas || !ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    activeBranches = []

    // Start big branches from edges - One Top, One Bottom
    const maxDepth = 9

    // Top Right - growing down and left
    activeBranches.push(createBranch(canvas.width, 0, 320, Math.PI * 0.75, maxDepth, 1.5))

    // Bottom Left - growing up and right
    activeBranches.push(createBranch(0, canvas.height, 320, -Math.PI / 4, maxDepth, 1.5))

    animate()
  }

  initFractal()

  const handleResize = () => {
    // Cancel current animation
    cancelAnimationFrame(animationFrameId)
    // Restart
    initFractal()
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <div class="fractal-background">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.fractal-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Behind content but visible */
  pointer-events: none;
  background: white; /* Pure white background */
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
