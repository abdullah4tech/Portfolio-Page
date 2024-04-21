<script setup>
// import { RouterLink, RouterView } from 'vue-router';
//import HomePage from '@/components/HomePage.vue';
import NavBar from '@/components/NavBar.vue'


</script>

<template>
  <NavBar />
  <section>
    <RouterView />
  </section>
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

