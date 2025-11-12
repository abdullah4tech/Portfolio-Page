<template>
    <div class="container">        
        <h1 class="heading1">404</h1>
        <div class="vl"></div>
        <h1 class="text">Sorry, Page Not Found</h1>
    </div>
    <p>The page you requested could not be found</p>
</template>

<style scoped>
.container{
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.heading1{
    font-size: 10em;
    margin-bottom: 0;
}

.vl {
  border-left: 5px solid #5151CA;
  height: 200px;
  border-radius: 5px;
}

p{
    color: white;
}

</style>