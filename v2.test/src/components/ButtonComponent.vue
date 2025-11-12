<!--
Usage Examples:

Primary Button:
<ButtonComponent variant="primary" :icon="Home" @click="handleClick">
  Go Home
</ButtonComponent>

Secondary Button:
<ButtonComponent variant="secondary" size="lg" :icon="ArrowLeft" icon-position="left">
  Go Back
</ButtonComponent>

Outline Button with Link:
<ButtonComponent variant="outline" href="/contact" target="_blank" :icon="Mail">
  Contact Me
</ButtonComponent>

Loading State:
<ButtonComponent variant="primary" :loading="isLoading" @click="submit">
  Submit
</ButtonComponent>

Disabled Button:
<ButtonComponent variant="secondary" :disabled="true" :icon="Save">
  Save Changes
</ButtonComponent>
-->

<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: Component
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  loading?: boolean
  href?: string
  target?: string
  rel?: string
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  iconPosition: 'left',
  disabled: false,
  loading: false,
  target: '_self',
  rel: 'noopener noreferrer',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const baseClasses = computed(() => [
  'group flex items-center gap-3 font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
  {
    // Size variants
    'px-4 py-2 text-sm': props.size === 'sm',
    'px-6 py-3 text-base': props.size === 'md',
    'px-8 py-4 text-lg': props.size === 'lg',

    // Style variants
    'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105 shadow-lg':
      props.variant === 'primary',
    'bg-gray-800/10 backdrop-blur-md text-gray-800 hover:bg-gray-300 hover:scale-105':
      props.variant === 'secondary',
    'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-105':
      props.variant === 'outline',

    // Loading state
    'cursor-wait': props.loading,
  },
])

const iconClasses = computed(() => {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }
  return sizeMap[props.size]
})

const animationClasses = computed(() => {
  if (props.variant === 'primary') {
    return 'w-0 group-hover:w-6 transition-all duration-300 overflow-hidden'
  }
  return ''
})

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<template>
  <!-- Link variant -->
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? rel : undefined"
    :class="baseClasses"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <component v-if="icon && iconPosition === 'left'" :is="icon" :class="iconClasses" />

    <span v-if="loading" :class="iconClasses">
      <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>

    <slot />

    <component
      v-if="icon && iconPosition === 'right' && !loading"
      :is="icon"
      :class="iconClasses"
    />

    <!-- Primary button animation line -->
    <div v-if="variant === 'primary' && !loading" :class="animationClasses">
      <div class="w-6 h-0.5 bg-white/50 rounded-full"></div>
    </div>
  </a>

  <!-- Button variant -->
  <button
    v-else
    type="button"
    :class="baseClasses"
    :disabled="disabled || loading"
    :aria-label="ariaLabel"
    @click="handleClick"
  >
    <component v-if="icon && iconPosition === 'left'" :is="icon" :class="iconClasses" />

    <span v-if="loading" :class="iconClasses">
      <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>

    <slot />

    <component
      v-if="icon && iconPosition === 'right' && !loading"
      :is="icon"
      :class="iconClasses"
    />

    <!-- Primary button animation line -->
    <div v-if="variant === 'primary' && !loading" :class="animationClasses">
      <div class="w-6 h-0.5 bg-white/50 rounded-full"></div>
    </div>
  </button>
</template>
