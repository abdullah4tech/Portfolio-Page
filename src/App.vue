<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterPage from './components/FooterPage.vue';


</script>

<template>
  <NavBar />
  <section >
    <RouterView />
  </section>
  <FooterPage />
</template>

<style scoped>
section{
  animation-name: slideAnime;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-direction: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


@keyframes slideAnime{
  from{
    transform: translateY(108px);
  }

  to{
    transform: translateY(0);
  }
}
</style>

