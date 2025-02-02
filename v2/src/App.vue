<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import arrowRight from '@/assets/arrow-right.svg';

</script>

<template>
  <HeaderComponent />
  <main class="px-15 my-16 flex items-start gap-52 justify-between">
    <div class="flex flex-col w-[100%] gap-10">
      <h1 class="font-medium text-8xl">I'm Abdullah<br>Mustapha.</h1>
      <p class="text-2xl italic font-light">I'm a dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.</p>
    </div>
    <div class="flex flex-col w-[70%] space-y-5">
      <span class="text-gray-500 text-sm font-medium">SELECTED PROJECTS</span>
      <ul class="flex flex-col space-y-5">
        <li class="border-b py-3 flex items-center justify-between">
          <span>Authentication System</span>
          <arrowRight />
        </li>
        <li class="border-b py-3">Product Landing Page</li>
        <li class="border-b py-3">Backend Starter CLI</li>
        <li class="border-b py-3">Community Extension</li>
      </ul>
    </div>
  </main>
</template>
