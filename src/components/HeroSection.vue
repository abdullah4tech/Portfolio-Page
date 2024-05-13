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
        With craft-minded solutions and responsive thinking, as an aspiring
        programmer, I possess the capability to bring imagination to life by
        implementing practical solutions that innovate and address real-world
        challenges effectively.
      </p>
      <button class="btn">Get Started</button>
    </div>
    <div class="image">
      <deckgo-highlight-code language="javascript">
        <code slot="code">
          const generateSweetQuote = () => {
            const sweetWords = [
              "In your smile, I find the universe's purest joy.",
              "Every moment with you feels like a beautiful melody playing in my heart.",
              "Your presence in my life is sweeter than the most exquisite honey.",
              "With you, every day is a journey filled with love, laughter, and endless possibilities.",
              "Like a gentle breeze on a warm summer day, your love soothes my soul.",
              "You're the missing piece to my puzzle, completing my life in ways I never thought possible.",
              "In a world full of chaos, your love is my peaceful sanctuary.",
              "With you by my side, every sunrise is more breathtaking and every sunset more magical.",
              "Your love is the sweetest song my heart will ever know, and I'll cherish it for eternity.",
              "Being with you is like walking through a garden of endless beauty, where every moment blooms with love."
            ];

            const randomIndex = Math.floor(Math.random() * sweetWords.length);
            return sweetWords[randomIndex];
          };

          console.log(generateSweetQuote());
        </code>
      </deckgo-highlight-code>


    </div>
    </div>
    <div class="medias">
      <SocialMedia />
    </div>
  </main>
</template>

<style scoped>
.content {
    max-width: 1200px;
    padding: 3.5rem;
    flex-shrink: 1;
    margin-top: 0;
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
  margin-top: 50px;
  width: 100em;
}

.content{
  flex-shrink: 1;
}

.container .content h4{
    margin-bottom: 1rem;
    color: #ccc;
    font-size: 1rem;
    font-weight: 600;
}

.container .content h1{
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

.container .content p{
    margin-bottom: 2rem;
    color: #ccc;
}

.image{
  width: 90em;
}

.image img{
  width: 40em;
}

.medias{
  margin-top: 10rem;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>