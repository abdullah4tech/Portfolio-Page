
<template>
  <div class="container">
    <!-- First Section (Remains Fixed) -->
    <section class="fixed top-0 left-0 w-[100%] h-[100vh] bg-white z-[1] p-5">
      <h1 class="text-8xl font-medium">I'm Abdullah<br>Mustapha.</h1>
      <p class="text-2xl italic font-light">
        I'm a dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces.
      </p>
    </section>

    <!-- Second Section (Scrolls Over the First) -->
    <section class="absolute top-[100vh] left-0 w-[100%] h-[100vh] bg-black z-[1] p-5">
      <h2 class="text-5xl text-white">New Info</h2>
      <p class="text-2xl text-white">This content scrolls over the first section.</p>
    </section>
  </div>
</template>

<style scoped>
  /* Ensure body and html take full height */
  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  /* First Section - Stays Fixed */
  .first-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Takes full screen height */
    background: white; /* Ensure background remains visible */
    z-index: 1; /* Lower z-index so the second section can scroll over */
    padding: 20px;
  }

  /* Second Section - Scrolls Over */
  .second-section {
    position: absolute;
    top: 100vh; /* Starts right after the first section */
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9); /* Dark background to make it visible */
    color: white;
    z-index: 2; /* Higher z-index so it appears above the first section */
    min-height: 200vh; /* Increase height to allow scrolling */
    padding: 20px;
  }
</style>
