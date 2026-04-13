<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref, watch, onBeforeUnmount } from "vue";

const route = useRoute();
const colorMode = useColorMode();
const open = ref(false);

const links = [
  { name: "Home",     to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Blog",     to: "/blog" },
  { name: "Talks",    to: "/talks" },
  { name: "Photos",   to: "/photos" },
];

const isActive = (to: string) =>
  to === "/" ? route.path === "/" : route.path.startsWith(to);

watch(() => route.path, () => { open.value = false; });

watch(open, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
});

function toggleTheme() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <Teleport to="body">
    <!-- Hamburger trigger — teleported to escape parent stacking contexts -->
    <button
      class="nav-trigger"
      :class="{ 'nav-trigger--open': open, 'is-dark': colorMode.value === 'dark' }"
      @click="open = !open"
      :aria-label="open ? 'Close menu' : 'Open menu'"
      :aria-expanded="open"
    >
      <span class="nav-trigger__bar nav-trigger__bar--top" />
      <span class="nav-trigger__bar nav-trigger__bar--bottom" />
    </button>

    <!-- Full-screen overlay -->
    <Transition name="nav-overlay">
      <div
        v-if="open"
        class="nav-overlay"
        :class="{ 'is-dark': colorMode.value === 'dark' }"
        role="dialog"
        aria-modal="true"
      >

        <!-- Links -->
        <nav class="nav-overlay__nav">
          <ul>
            <li
              v-for="(link, i) in links"
              :key="link.to"
              class="nav-overlay__item"
              :style="{ '--i': i }"
            >
              <NuxtLink
                :to="link.to"
                class="nav-overlay__link"
                :class="{ 'nav-overlay__link--active': isActive(link.to) }"
              >
                <span class="nav-overlay__num">0{{ i + 1 }}</span>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Footer -->
        <div class="nav-overlay__footer">
          <button class="nav-overlay__theme" @click="toggleTheme" aria-label="Toggle theme">
            <Icon
              :icon="colorMode.value === 'dark' ? 'ph:sun-duotone' : 'ph:moon-duotone'"
              width="18"
              height="18"
            />
            <span>{{ colorMode.value === 'dark' ? 'Light mode' : 'Dark mode' }}</span>
          </button>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* ── Trigger ── */
.nav-trigger {
  position: fixed;
  top: 1.25rem;
  right: 1.5rem;
  z-index: 200;
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.nav-trigger__bar {
  display: block;
  width: 24px;
  height: 1.5px;
  background: #374151;
  border-radius: 2px;
  transform-origin: center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-trigger.is-dark .nav-trigger__bar { background: #d4d4d8; }

.nav-trigger--open .nav-trigger__bar--top {
  transform: translateY(3.75px) rotate(45deg);
}
.nav-trigger--open .nav-trigger__bar--bottom {
  transform: translateY(-3.75px) rotate(-45deg);
}

/* ── Overlay ── */
.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 2.5rem 3rem;
  background: #ffffff;
  overflow: hidden;
}

.nav-overlay.is-dark { background: #09090b; }

/* On larger screens, left-align with wider padding */
@media (min-width: 640px) {
  .nav-overlay { padding: 5rem 8vw 3rem; }
}
@media (min-width: 1024px) {
  .nav-overlay { padding: 5rem 12vw 3rem; }
}

/* ── Nav ── */
.nav-overlay__nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.nav-overlay__item {
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  animation: navSlideIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(var(--i) * 60ms + 80ms);
}

.is-dark .nav-overlay__item { border-bottom-color: rgba(255, 255, 255, 0.05); }

.nav-overlay__item:first-child { border-top: 1px solid rgba(0, 0, 0, 0.06); }
.is-dark .nav-overlay__item:first-child { border-top-color: rgba(255, 255, 255, 0.05); }

.nav-overlay__link {
  display: inline-flex;
  align-items: baseline;
  gap: 0.875rem;
  padding: 1rem 0;
  font-size: clamp(2.25rem, 7vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s ease, letter-spacing 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}

.is-dark .nav-overlay__link { color: #3f3f46; }

.nav-overlay__link--active,
.nav-overlay__link:hover {
  color: #111827;
  letter-spacing: -0.05em;
}
.is-dark .nav-overlay__link--active,
.is-dark .nav-overlay__link:hover { color: #fafafa; }

.nav-overlay__num {
  font-size: 0.75rem;
  font-weight: 400;
  font-family: monospace;
  letter-spacing: 0.08em;
  color: #9ca3af;
  align-self: center;
  transition: color 0.2s;
  flex-shrink: 0;
}

.is-dark .nav-overlay__num { color: #52525b; }

.nav-overlay__link--active .nav-overlay__num,
.nav-overlay__link:hover .nav-overlay__num { color: #6b7280; }
.is-dark .nav-overlay__link--active .nav-overlay__num,
.is-dark .nav-overlay__link:hover .nav-overlay__num { color: #a1a1aa; }

/* ── Footer ── */
.nav-overlay__footer {
  position: absolute;
  bottom: 2.5rem;
  left: 2.5rem;
  animation: navSlideIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 420ms;
}

@media (min-width: 640px) {
  .nav-overlay__footer { left: 8vw; }
}
@media (min-width: 1024px) {
  .nav-overlay__footer { left: 12vw; }
}

.nav-overlay__theme {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #9ca3af;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s;
}

.nav-overlay__theme:hover { color: #374151; }
.is-dark .nav-overlay__theme { color: #52525b; }
.is-dark .nav-overlay__theme:hover { color: #a1a1aa; }

/* ── Animations ── */
@keyframes navSlideIn {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.nav-overlay-enter-active { transition: opacity 0.3s ease; }
.nav-overlay-leave-active { transition: opacity 0.2s ease; }
.nav-overlay-enter-from,
.nav-overlay-leave-to { opacity: 0; }

@media (prefers-reduced-motion: reduce) {
  .nav-overlay__item,
  .nav-overlay__footer { animation: none !important; }
  .nav-overlay-enter-active,
  .nav-overlay-leave-active { transition: none !important; }
}
</style>
