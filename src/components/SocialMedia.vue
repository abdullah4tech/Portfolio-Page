<template>
    <div class="social_media_icon">
        <a href="https://t.co/t7X93cilTF" target="_blank">
          <ion-icon name="logo-github"></ion-icon>
          <p>GitHub</p>
        </a>
        <a href="https://twitter.com/abdullah4tech_" target="_blank">
          <ion-icon name="logo-twitter"></ion-icon>
          <p>Twitter</p>
        </a>
        <a href="https://www.linkedin.com/in/abdullah-mustapha-ab529229a" target="_blank">
          <ion-icon name="logo-instagram"></ion-icon>
          <p>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/abdullah-mustapha-ab529229a" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon>
          <p>Linkedin</p>
        </a>
        <a href="mailto:abdullahmu4life@gmail.com">
          <ion-icon name="mail-outline"></ion-icon>
          <p>Gmail</p>
        </a>
    </div>
</template>

<style scoped>
.social_media_icon{
    display: flex;
    gap: 20px;
}

ion-icon{
  color: white;
  
  transition: color .3s ease;
  margin-bottom: 1px;
}

p{
  margin-bottom: 1px;
}


.social_media_icon a{
  border-bottom: 5px solid transparent; 
  transition: 0.3s ease;
  border-bottom: 1px solid #5151CA;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 18px;
}



.social_media_icon{
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
}

.social_media_icon a:hover > *{
  color: rgb(185, 183, 183);
}



</style>