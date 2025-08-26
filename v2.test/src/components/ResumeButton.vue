<template>
  <a
    ref="buttonRef"
    href="/resume.pdf"
    target="_blank"
    class="resume-button"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    aria-label="Download Resume"
  >
    <div class="button-content">
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
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span class="button-text">Resume</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const buttonRef = ref<HTMLAnchorElement>()
const isHovered = ref(false)
</script>

<style scoped>
.resume-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  background: #f3f4f6;
  color: #374151;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: none;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.resume-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.resume-button:hover::before {
  left: 0;
}

.resume-button:hover {
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  transform: translateY(-1px);
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.button-icon {
  transition: transform 0.3s ease;
}

.resume-button:hover .button-icon {
  transform: translateY(1px);
}

.button-text {
  font-weight: 600;
  letter-spacing: 0.025em;
}

/* Responsive design */
@media (max-width: 768px) {
  .resume-button {
    padding: 10px 20px;
    font-size: 13px;
  }

  .button-icon {
    width: 16px;
    height: 16px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .resume-button,
  .resume-button::before,
  .button-icon {
    transition: none;
  }
}

.resume-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.4);
}

.resume-button:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}
</style>
