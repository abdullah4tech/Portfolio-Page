<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <!-- CSS-based particles background -->
  <div class="particles-container fixed inset-0 -z-10 overflow-hidden">
    <div class="particle" v-for="n in 50" :key="n"></div>
  </div>
  <RouterView />
</template>
