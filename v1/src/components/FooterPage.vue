<template>
  <div class="footer">
    <div class="builtWith">
      <p>Built with:</p>
      <div class="tech">
        <a href="https://vuejs.org" target="_blank">
          <img src="/src/assets/vue.png">
          <p>Vue</p>
        </a>
      </div>
      <div class="tech">
        <a href="https://vitejs.dev/" target="_blank">
          <img src="/src/assets/vite.png">
          <p>Vite</p>
        </a>
      </div>
      <div class="tech">
        <a href="https://vercel.com/" target="_blank">
          <img src="/src/assets/vercel.png">
          <p>Vercel</p>
        </a>
      </div>
    </div>
    <div class="inspiration">
      <p>
        Design inspired by
        <a href="https://ayooladev.netlify.app/">Abdullah Ayoola</a>,
        <a href="https://victoreke.com/"> Victor Eke</a>
      </p>
    </div>
    <div class="copyright">
      <p>Copyright © Abdullah Mustapha 2024 All rights Reserved</p>
    </div>
  </div>
</template>

<style scoped>

.footer{
  margin-top: 60px;
  padding-top: 50px;
  padding-bottom: 100px;
  width: 100%;
  border: 1px #1F2937 solid;
  display: flex;
  align-items: center;
  gap: 9em;
  justify-content: center;
  color: white;
  font-size: 15px;
}

a{
  text-decoration: rgb(70, 70, 224);
  text-decoration: underline;
}

.builtWith{
  display: flex;
  color: white;
  align-items: center;
}

.tech a{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  color: white;
  text-decoration: none;
}

.tech a:hover{
  text-decoration: underline;
}


.tech p{
  margin-left: 3px;
}

img{
  width: 20px;
}

.copyright p{
  color: #9c9c9c;
}
</style>