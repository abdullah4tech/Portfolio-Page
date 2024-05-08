<template>
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
      <img src="../assets/creative1.png" />
    </div>
  </div>
</template>

<style scoped>
.content {
    max-width: 1200px;
    margin: auto;
    padding: 5rem;
}

.blur {
    position: absolute;
    box-shadow: 0 0 1000px 50px rgb(67, 67, 124);
    z-index: -100;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  width: 80em;
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
  width: 70em;
}

.image img{
  width: 40em;
}

</style>