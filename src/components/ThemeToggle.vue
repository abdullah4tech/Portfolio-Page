<script setup>
import { ref, computed } from 'vue';

const darkMode = ref(false);

function dark() {
    document.querySelector('body').classList.add('dark-mode');
    darkMode.value = true;
}

function light() {
    document.querySelector('body').classList.remove('dark-mode');
    darkMode.value = false;
}

function modeToggle() {
    if (darkMode.value || document.querySelector('body').classList.contains('dark-mode')) {
        light();
    } else {
        dark();
    }
}

const darkDark = computed(() => darkMode.value && 'darkmode-toggled');
</script>


<template>
  <div class="mode-toggle" @click="modeToggle" :class="darkDark">
    <div class="toggle">
      <div id="dark-mode" type="checkbox"></div>
    </div>
  </div>
</template>

<style scoped></style>


