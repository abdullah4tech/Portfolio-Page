<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <NavBar />
  <section>
    <RouterView />
  </section>
  <FooterPage />
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

