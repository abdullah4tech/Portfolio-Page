<script setup>
import { ref } from 'vue';

const state = ref('sunny-outline')


const toggleTheme = () => {
    state.value = state.value === 'sunny-outline' ? 'moon-outline' : 'sunny-outline';
    localStorage.setItem('Theme', state.value)
}

</script>


<template>
    <div class="container">
        <nav>
            <div class="nav-logo">
                <a href="/" class="hLogo">
                    <h2 class="logo">4k<span>Tech.</span></h2>
                </a>
            </div>
            <ul class="nav-links">
                <li class="link"><router-link to="/about">About</router-link></li>
                <li class="link"><router-link to="/projects">Projects</router-link></li>
                <li class="link"><router-link to="/contact">Contact</router-link></li>
            </ul>
            <div class="btn1" @click="toggleTheme" id="btn">
                <ion-icon :name="state" :style="toggleTheme" id="icon"></ion-icon>  
            </div>
        </nav>
    </div>
</template>

<style scoped>

.btn1{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1F1F23;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn1:hover{
    cursor: pointer;
}

.btn1 ion-icon{
    font-size: 160%;
    color: white;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
}


nav{
    max-width: 1295px;
    margin: auto;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.container{
    margin-left: 0;
}

.logo {
    font-size: 2rem;
    color: white;
    margin-right: 100px;
    background: transparent;
}

.logo span{
    color: rgb(86, 86, 231);
}

.hLogo{
    text-decoration: none;
}

.nav-links{
    backdrop-filter: blur(10px) brightness(1.2);
    -webkit-backdrop-filter: blur(8px) brightness(1.2);
    box-shadow: 0 0 50px #1f1f1f;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    height: 4em;
    width: 20em;
    margin-right: 100px;
    border-radius: 20px;
    background-color: #1F1F23;
}

.link a{
    position: relative;
    padding-bottom: 0.75rem;
    color: white;
    text-decoration: none
}

.link a::after{
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(86, 86, 231);
    transition: all 0.3s ease;
}

.link a:hover{
    color: rgb(86, 86, 231);
    transition: all 0.3s ease;
}


.btn{
    display: flex;
    gap: 5px;
}

@keyframes spin{
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(500deg);
    }
}

</style>