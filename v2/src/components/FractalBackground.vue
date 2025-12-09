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

    // More organic, flowing curves with better control points
    const curveIntensity = 0.3 + Math.random() * 0.2
    const ctrlX = (x + endX) / 2 + (Math.random() - 0.5) * length * curveIntensity
    const ctrlY = (y + endY) / 2 + (Math.random() - 0.5) * length * curveIntensity

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
      speed: 0.012 + Math.random() * 0.018, // Varied speed for more organic feel
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

      // More artistic style with gradient-like opacity
      const depthFactor = branch.depth / 9
      const opacity = 0.15 + depthFactor * 0

      // Softer, more elegant color - subtle gray with slight warmth
      ctx.strokeStyle = `rgba(180, 185, 195, ${opacity})`
      ctx.lineWidth = branch.width
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.stroke()

      // Add subtle glow effect for deeper branches (more artistic)
      if (branch.depth > 5) {
        ctx.shadowBlur = 3
        ctx.shadowColor = `rgba(180, 185, 195, ${opacity * 0.3})`
      } else {
        ctx.shadowBlur = 0
      }

      if (branch.progress >= 1) {
        // Branch finished, spawn children
        activeBranches.splice(i, 1) // Remove finished branch

        if (branch.depth > 0) {
          // More natural branching pattern
          const numChildren = branch.depth > 6 ? 2 : Math.random() > 0.4 ? 2 : 3

          for (let c = 0; c < numChildren; c++) {
            // More varied, organic angles
            const angleVariation = (Math.random() - 0.5) * 1.2
            const lengthVariation = 0.55 + Math.random() * 0.35

            nextBranches.push(
              createBranch(
                branch.endX,
                branch.endY,
                branch.length * lengthVariation * 0.72,
                branch.angle + angleVariation,
                branch.depth - 1,
                branch.width * 0.75, // Thinner taper for more delicate look
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

    // Responsive sizing for mobile - much more minimal
    const isMobile = window.innerWidth < 768
    const branchLength = isMobile ? 35 : 200 // Much shorter on mobile
    const maxDepth = isMobile ? 4 : 9  // Less branching depth
    const branchWidth = isMobile ? 0.4 : 1.5

    if (isMobile) {
      // Mobile: Single branch from left side growing right and slightly down
      activeBranches.push(
        createBranch(0, canvas.height * 0.35, branchLength, Math.PI * 0.1, maxDepth, branchWidth)
      )
    } else {
      // Desktop: Original two corners
      activeBranches.push(createBranch(canvas.width, 0, branchLength, Math.PI * 0.75, maxDepth, branchWidth))
      activeBranches.push(createBranch(0, canvas.height, branchLength, -Math.PI / 4, maxDepth, branchWidth))
    }

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
