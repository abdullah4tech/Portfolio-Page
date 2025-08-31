<template>
  <a
    ref="buttonRef"
    href="/resume.pdf"
    target="_blank"
    class="resume-button"
    :style="{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '12px 24px',
      background: '#f3f4f6',
      color: '#374151',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '14px',
      fontFamily: 'inherit',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      overflow: 'hidden',
      border: 'none',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    aria-label="Download Resume"
  >
    <!-- Gradient overlay -->
    <div
      :style="{
        content: '',
        position: 'absolute',
        top: 0,
        left: isHovered ? '0' : '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, #667eea, #764ba2)',
        transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1,
      }"
    ></div>

    <div
      class="button-content"
      :style="{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s ease',
        color: isHovered ? 'white' : 'inherit',
      }"
    >
      <svg
        class="button-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :style="{
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'translateY(1px)' : 'translateY(0)',
        }"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span
        class="button-text"
        :style="{
          fontWeight: '600',
          letterSpacing: '0.025em',
        }"
        >Resume</span
      >
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const buttonRef = ref<HTMLAnchorElement>()
const isHovered = ref(false)
</script>

<style scoped>
/* Global fallback styles with high specificity */
a.resume-button.resume-button {
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  padding: 12px 24px !important;
  background: #f3f4f6 !important;
  color: #374151 !important;
  text-decoration: none !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  font-family: inherit !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  overflow: hidden !important;
  border: none !important;
  cursor: pointer !important;
  backdrop-filter: blur(10px) !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}

a.resume-button.resume-button:hover {
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3) !important;
  transform: translateY(-1px) !important;
}

.button-content {
  position: relative !important;
  z-index: 2 !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  transition: all 0.3s ease !important;
}

.button-icon {
  transition: transform 0.3s ease !important;
  width: 18px !important;
  height: 18px !important;
}

.button-text {
  font-weight: 600 !important;
  letter-spacing: 0.025em !important;
}

/* Responsive design */
@media (max-width: 768px) {
  a.resume-button.resume-button {
    padding: 10px 20px !important;
    font-size: 13px !important;
  }

  .button-icon {
    width: 16px !important;
    height: 16px !important;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  a.resume-button.resume-button,
  .button-icon {
    transition: none !important;
  }
}

a.resume-button.resume-button:focus {
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.4) !important;
}

a.resume-button.resume-button:active {
  transform: translateY(0) !important;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important;
}
</style>
