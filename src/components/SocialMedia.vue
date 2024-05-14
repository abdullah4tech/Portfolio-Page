<template>
    <div class="social_media_icon">
        <a href="https://t.co/t7X93cilTF" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        <a href="https://twitter.com/abdullah4tech_" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="https://www.linkedin.com/in/abdullah-mustapha-ab529229a" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
    </div>
</template>

<style scoped>
.social_media_icon{
    display: flex;
    gap: 20px;
}

ion-icon {
  color: white;
  font-size: 30px;
  transition: color .5s ease-in-out;
}

ion-icon:hover {
  color: rgb(185, 183, 183);
  font-size: 30px;
}

.social_media_icon a{
  border-bottom: 5px solid transparent; 
  transition: border-bottom 0.3s ease; 
}

.social_media_icon a:hover{
  border-radius: 5px;
  border-bottom: 5px solid #5151CA;
}

</style>