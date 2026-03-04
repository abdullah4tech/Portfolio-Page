<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let animationFrameId: number;

  // Dot grid configuration
  interface Dot {
    x: number;
    y: number;
    baseRadius: number;
    radius: number;
    baseOpacity: number;
    opacity: number;
    phase: number;
  }

  let dots: Dot[] = [];
  let mouse = { x: -1000, y: -1000 };
  let time = 0;
  let w = 0;
  let h = 0;

  const GRID_SPACING = 28;
  const DOT_RADIUS = 1;
  const DOT_OPACITY = 0.08;
  const MOUSE_RADIUS = 120;
  const BREATHE_SPEED = 0.008;

  // Detect dark mode
  const isDark = () => document.documentElement.classList.contains("dark");

  const initDots = () => {
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    dots = [];

    const cols = Math.ceil(w / GRID_SPACING) + 1;
    const rows = Math.ceil(h / GRID_SPACING) + 1;
    const offsetX = (w - (cols - 1) * GRID_SPACING) / 2;
    const offsetY = (h - (rows - 1) * GRID_SPACING) / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          x: offsetX + c * GRID_SPACING,
          y: offsetY + r * GRID_SPACING,
          baseRadius: DOT_RADIUS,
          radius: DOT_RADIUS,
          baseOpacity: DOT_OPACITY,
          opacity: DOT_OPACITY,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
  };

  const animate = () => {
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, w, h);
    time += BREATHE_SPEED;

    const dark = isDark();
    const dotColor = dark ? "255, 255, 255" : "0, 0, 0";

    for (const dot of dots) {
      // Distance from mouse
      const dx = dot.x - mouse.x;
      const dy = dot.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Subtle breathing
      const breathe = Math.sin(time + dot.phase) * 0.3;

      if (dist < MOUSE_RADIUS) {
        const t = 1 - dist / MOUSE_RADIUS;
        const ease = t * t; // quadratic ease
        dot.radius = dot.baseRadius + ease * 2.5;
        dot.opacity = dot.baseOpacity + ease * 0.22;
      } else {
        dot.radius = dot.baseRadius + breathe * 0.15;
        dot.opacity = dot.baseOpacity + breathe * 0.015;
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, ${dot.opacity})`;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  const onMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const onMouseLeave = () => {
    mouse.x = -1000;
    mouse.y = -1000;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  };

  const onTouchEnd = () => {
    mouse.x = -1000;
    mouse.y = -1000;
  };

  initDots();
  animate();

  const handleResize = () => {
    cancelAnimationFrame(animationFrameId);
    initDots();
    animate();
  };

  // Watch for dark mode class changes
  const observer = new MutationObserver(() => {
    // The color changes are picked up in the animate loop via isDark()
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  window.addEventListener("resize", handleResize);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("touchend", onTouchEnd);

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseleave", onMouseLeave);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    cancelAnimationFrame(animationFrameId);
    observer.disconnect();
  });
});
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
  z-index: 0;
  pointer-events: none;
  background: var(--bg);
  transition: background 0.4s ease;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
