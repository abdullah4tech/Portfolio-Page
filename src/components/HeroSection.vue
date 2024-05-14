<script setup>
import SocialMedia from './SocialMedia.vue';
</script>

<template>
  <main>
    <div class="container">
      <div class="content">
        <h4>CREATE WEBSITE LIKE A PRO</h4>
        <h1>Hi, I'm <span>Abdullah</span>, Web Developer</h1>
        <p>
          As an aspiring programmer, I'm skilled at turning imagination into practical solutions for real-world
          problems.
        </p>
        <div class="medias">
          <SocialMedia />
        </div>
      </div>
      <div class="image">
        <img src="/src/assets/creative1.png">
      </div>
    </div>
  </main>
</template>

<style scoped>
.content {
  max-width: 1200px;
  padding: 3.5rem;
  flex-shrink: 1;
  margin-top: 20;
}

.blur {
  position: absolute;
  box-shadow: 0 0 1000px 50px rgb(67, 67, 124);
  /* z-index: -100; */
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 80em;
  overflow: hidden;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.container .content h4 {
  margin-bottom: 1rem;
  color: #ccc;
  font-size: 1rem;
  font-weight: 600;
}

.container .content h1 {
  color: white;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
}

.container .content h1 span {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #fff;
}

.container .content p {
  margin-bottom: 2rem;
  color: #ccc;
}

.image {
  width:80em;
}

.image img {
  width: 33em;
}

.medias {
  margin-top: 10px;
}


main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>