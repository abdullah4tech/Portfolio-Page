<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { gsap } from "gsap";

const route = useRoute();
const colorMode = useColorMode();
const railRef = ref<HTMLElement | null>(null);
const itemRefs = ref<(HTMLElement | null)[]>([]);
const pillRef = ref<HTMLElement | null>(null);
const tooltipRefs = ref<(HTMLElement | null)[]>([]);

const navLinks = [
  { label: "Home", to: "/", icon: "ph:house-duotone" },
  { label: "Projects", to: "/projects", icon: "ph:rocket-duotone" },
  { label: "Blog", to: "/blog", icon: "ph:article-duotone" },
  { label: "Talks", to: "/talks", icon: "ph:microphone-stage-duotone" },
  { label: "Photos", to: "/photos", icon: "ph:camera-duotone" },
];

const socials = [
  {
    icon: "ph:github-logo-duotone",
    href: "https://github.com/abdullah4tech",
    label: "GitHub",
  },
  {
    icon: "ph:x-logo-duotone",
    href: "https://twitter.com/abdullah4tech_",
    label: "Twitter",
  },
];

const isActive = (to: string) => {
  if (to === "/") return route.path === "/";
  return route.path.startsWith(to);
};

const activeIndex = computed(() => {
  const idx = navLinks.findIndex((l) => isActive(l.to));
  return idx >= 0 ? idx : 0;
});

const isDark = computed(() => colorMode.value === "dark");

/* ── Theme toggle ── */
function toggleTheme() {
  const next = isDark.value ? "light" : "dark";
  colorMode.preference = next;

  // Animate the toggle icons
  const sunEl = document.querySelector(".theme-sun");
  const moonEl = document.querySelector(".theme-moon");
  if (sunEl) {
    gsap.fromTo(
      sunEl,
      { scale: 0.5, rotate: -90 },
      { scale: 1, rotate: 0, duration: 0.4, ease: "back.out(2)" }
    );
  }
  if (moonEl) {
    gsap.fromTo(
      moonEl,
      { scale: 0.5, rotate: 90 },
      { scale: 1, rotate: 0, duration: 0.4, ease: "back.out(2)" }
    );
  }
}

/* ── Magnetic hover effect ── */
const onIconMouseMove = (e: MouseEvent, index: number) => {
  const el = itemRefs.value[index];
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = (e.clientX - centerX) * 0.25;
  const dy = (e.clientY - centerY) * 0.25;

  gsap.to(el.querySelector(".rail-icon"), {
    x: dx,
    y: dy,
    duration: 0.3,
    ease: "power2.out",
  });
};

const onIconMouseLeave = (index: number) => {
  const el = itemRefs.value[index];
  if (!el) return;
  gsap.to(el.querySelector(".rail-icon"), {
    x: 0,
    y: 0,
    scale: 1,
    duration: 0.4,
    ease: "elastic.out(1, 0.4)",
  });
};

/* ── Tooltip show/hide ── */
const onIconEnter = (index: number) => {
  const tooltip = tooltipRefs.value[index];
  if (!tooltip) return;
  gsap.killTweensOf(tooltip);
  gsap.to(tooltip, {
    opacity: 1,
    x: 0,
    duration: 0.25,
    ease: "power3.out",
  });
};

const onIconLeave = (index: number) => {
  const tooltip = tooltipRefs.value[index];
  if (!tooltip) return;
  gsap.killTweensOf(tooltip);
  gsap.to(tooltip, {
    opacity: 0,
    x: -6,
    duration: 0.2,
    ease: "power2.in",
  });
};

/* ── Sliding pill indicator ── */
const updatePill = (animate = true) => {
  if (!pillRef.value) return;
  const idx = activeIndex.value;
  const targetEl = itemRefs.value[idx];
  if (!targetEl || !railRef.value) return;

  const railRect = railRef.value
    .querySelector(".rail-nav-group")
    ?.getBoundingClientRect();
  const itemRect = targetEl.getBoundingClientRect();
  if (!railRect) return;

  const offsetY = itemRect.top - railRect.top;

  if (animate) {
    gsap.to(pillRef.value, {
      y: offsetY,
      height: itemRect.height,
      duration: 0.4,
      ease: "power3.out",
    });
  } else {
    gsap.set(pillRef.value, {
      y: offsetY,
      height: itemRect.height,
    });
  }
};

watch(activeIndex, () => nextTick(() => updatePill(true)), { flush: "post" });

/* ── Scroll-aware rail ── */
const isScrolled = ref(false);
let ticking = false;

const handleScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 80;
    ticking = false;
  });
};

/* ── Rail entrance animation ── */
onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });

  nextTick(() => {
    updatePill(false);

    if (
      railRef.value &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const items = railRef.value.querySelectorAll(".rail-item, .rail-social");
      const logo = railRef.value.querySelector(".rail-logo");

      gsap.from(railRef.value, {
        x: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      if (logo) {
        gsap.from(logo, {
          opacity: 0,
          y: -10,
          duration: 0.5,
          delay: 0.2,
          ease: "power2.out",
        });
      }

      gsap.from(items, {
        opacity: 0,
        x: -8,
        stagger: 0.06,
        duration: 0.4,
        delay: 0.3,
        ease: "power2.out",
      });
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <aside
    ref="railRef"
    class="rail"
    :class="{ 'rail--scrolled': isScrolled }"
    aria-label="Primary navigation"
  >
    <div class="rail-capsule">
      <!-- Theme toggle — sun/moon at top -->
      <button
        class="theme-toggle"
        :class="{ 'theme-toggle--dark': isDark }"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <Icon
          :icon="isDark ? 'ph:moon-duotone' : 'ph:sun-duotone'"
          width="20"
          height="20"
          :class="isDark ? 'theme-moon' : 'theme-sun'"
        />
      </button>

      <!-- Separator -->
      <span class="rail-sep" aria-hidden="true"></span>

      <!-- Nav icons -->
      <nav class="rail-nav-group" aria-label="Primary">
        <!-- Sliding pill -->
        <div ref="pillRef" class="rail-pill" aria-hidden="true"></div>

        <NuxtLink
          v-for="(link, i) in navLinks"
          :key="link.to"
          :ref="(el: any) => { itemRefs[i] = el?.$el || el }"
          :to="link.to"
          class="rail-item"
          :class="{ 'rail-item--active': isActive(link.to) }"
          @mouseenter="onIconEnter(i)"
          @mouseleave="
            onIconLeave(i);
            onIconMouseLeave(i);
          "
          @mousemove="(e: MouseEvent) => onIconMouseMove(e, i)"
        >
          <Icon :icon="link.icon" width="20" height="20" class="rail-icon" />
          <!-- Tooltip label -->
          <span
            :ref="(el: any) => { tooltipRefs[i] = el?.$el || el }"
            class="rail-tooltip"
          >
            {{ link.label }}
          </span>
        </NuxtLink>
      </nav>

      <!-- Separator -->
      <span class="rail-sep" aria-hidden="true"></span>

      <!-- Social links -->
      <div class="rail-socials">
        <a
          v-for="social in socials"
          :key="social.href"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="social.label"
          class="rail-social"
        >
          <Icon :icon="social.icon" width="16" height="16" />
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* ── Rail Container ── */
.rail {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 72px;
  padding: 24px 0;
  pointer-events: none;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

@media (min-width: 640px) {
  .rail {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* ── Glass Capsule ── */
.rail-capsule {
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 10px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.02), 0 8px 40px rgba(0, 0, 0, 0.06),
    0 2px 12px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease,
    background 0.4s ease, border-color 0.4s ease;
}

:global(.dark) .rail-capsule {
  background: rgba(20, 20, 22, 0.8);
  border-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 0 0.5px rgba(255, 255, 255, 0.03),
    0 8px 40px rgba(0, 0, 0, 0.3), 0 2px 12px rgba(0, 0, 0, 0.15);
}

.rail--scrolled .rail-capsule {
  transform: scale(0.95);
}

/* ── Theme Toggle ── */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.07);
  color: rgba(0, 0, 0, 0.7);
  border: none;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(0, 0, 0, 0.12);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.06);
}

:global(.dark) .theme-toggle {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.8);
}

:global(.dark) .theme-toggle:hover {
  background: rgba(255, 255, 255, 0.14);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
}

/* ── Separator ── */
.rail-sep {
  width: 20px;
  height: 1px;
  background: rgba(0, 0, 0, 0.07);
  margin: 4px 0;
  flex-shrink: 0;
  transition: background 0.4s ease;
}

:global(.dark) .rail-sep {
  background: rgba(255, 255, 255, 0.08);
}

/* ── Nav Group ── */
.rail-nav-group {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

/* ── Sliding Pill ── */
.rail-pill {
  position: absolute;
  top: 0;
  left: 2px;
  right: 2px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.07);
  pointer-events: none;
  will-change: transform;
  transition: background 0.4s ease;
}

:global(.dark) .rail-pill {
  background: rgba(255, 255, 255, 0.08);
}

/* ── Nav Item ── */
.rail-item {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.28);
  transition: color 0.25s ease;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}

.rail-item--active {
  color: rgba(0, 0, 0, 0.85);
}

.rail-item:not(.rail-item--active):hover {
  color: rgba(0, 0, 0, 0.55);
}

:global(.dark) .rail-item {
  color: rgba(255, 255, 255, 0.25);
}

:global(.dark) .rail-item--active {
  color: rgba(255, 255, 255, 0.9);
}

:global(.dark) .rail-item:not(.rail-item--active):hover {
  color: rgba(255, 255, 255, 0.55);
}

/* ── Icon ── */
.rail-icon {
  flex-shrink: 0;
  will-change: transform;
  transition: filter 0.2s ease;
}

.rail-item:hover .rail-icon {
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.08));
}

:global(.dark) .rail-item:hover .rail-icon {
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.1));
}

/* ── Tooltip ── */
.rail-tooltip {
  position: absolute;
  left: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%) translateX(-6px);
  padding: 6px 14px;
  border-radius: 12px;
  background: #1a1a1a;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  z-index: 60;
}

:global(.dark) .rail-tooltip {
  background: #f0f0f2;
  color: #1a1a1a;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.rail-tooltip::before {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-right-color: #1a1a1a;
}

:global(.dark) .rail-tooltip::before {
  border-right-color: #f0f0f2;
}

/* ── Socials ── */
.rail-socials {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.rail-social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.22);
  transition: color 0.25s ease, background 0.25s ease;
}

.rail-social:hover {
  color: rgba(0, 0, 0, 0.65);
  background: rgba(0, 0, 0, 0.04);
}

:global(.dark) .rail-social {
  color: rgba(255, 255, 255, 0.2);
}

:global(.dark) .rail-social:hover {
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .rail,
  .rail-capsule,
  .rail-pill,
  .theme-toggle {
    transition: none !important;
  }
}
</style>
