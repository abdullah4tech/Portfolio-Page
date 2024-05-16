<script setup>
import ThemeToggle from './ThemeToggle.vue';
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
                <li class="link"><router-link to="/testimonials">Testimonials</router-link></li>
                <li class="link"><router-link to="/contact">Contact</router-link></li>
            </ul>
            <div >
                <ThemeToggle />
            </div>
        </nav>
    </div>
</template>

<style scoped>

nav{
    max-width: 1200px;
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
    box-shadow: 0 0 50px rgba(5, 5, 5, 0.5);
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    height: 4em;
    width: 30em;
    margin-right: 100px;
    border-radius: 50px;
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

</style>