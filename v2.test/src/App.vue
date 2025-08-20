<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import { ArrowRight, Twitter, Github, MailIcon, ArrowDownFromLine, ChevronLeft, ChevronRight } from "lucide-vue-next";
import { ref } from 'vue';

const projects = [
  {
    name: "Authentication System",
    link: "https://auth-system-gr5y.onrender.com/",
  },
  {
    name: "Backend Starter CLI",
    link: "https://www.npmjs.com/package/backend-starter-cli/",
  },
  {
    name: "Community Extension",
    link: "https://github.com/abdullah4tech/community-extension",
  },
  {
    name: "Product Landing Page",
    link: "https://e-commerce-product-page-three-pi.vercel.app/",
  },
];
</script>


<template>
  <HeaderComponent class="fixed top-0 left-0 w-full z-50" />
  <!-- CSS-based particles background -->
  <div class="particles-container fixed inset-0 -z-10 overflow-hidden">
    <div class="particle" v-for="n in 50" :key="n"></div>
  </div>
  <main class="relative z-10">
    <section class="px-15 my-49 flex items-start gap-40 justify-between fixed top-0 left-0 w-[100%] h-[100vh] z-[1] p-5">
      <div>
        <div class="flex flex-col w-[100%] gap-10">
          <h1 class="font-medium text-8xl">I'm Abdullah<br>Mustapha.</h1>
          <p class="text-2xl italic font-light">I'm a dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.</p>
        </div>
        <div class="flex items-center gap-5 mt-10">
          <a href="https://twitter.com/abdullah4tech_" target="_blank" class="p-3 bg-gray-800/10 backdrop-blur-md hover:bg-gray-300 hover:transition-colors hover:ease-in-out rounded-full">
            <Twitter />
          </a>
          <a href="https://github.com/abdullah4tech" target="_blank" class="p-3 bg-gray-800/10 backdrop-blur-md hover:bg-gray-300 hover:transition-colors hover:ease-in-out rounded-full">
            <Github />
          </a>
          <a href="mailto:abdullahmu4life@gmail.com" class="p-3 bg-gray-800/10 backdrop-blur-md hover:bg-gray-300 hover:transition-colors hover:ease-in-out rounded-full">
            <MailIcon />
          </a>
          <div class="flex items-center px-3 py-2 bg-gray-800/10 backdrop-blur-md rounded-full gap-4">
            <span>Resume</span>
            <span class="p-2 bg-black rounded-full">
              <ArrowDownFromLine class="text-white w-[17px] h-[17px]" />
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-[70%] space-y-5">
        <span class="text-gray-500 text-sm font-medium">SELECTED PROJECTS</span>
        <ul class="flex flex-col space-y-5">
          <li
            v-for="(project, index) in projects"
            :key="index"
          >
            <a :href="project.link" target="_blank" class="relative py-3 flex items-center justify-between group overflow-hidden cursor-pointer border-b border-gray-400">
              <span
                class="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              ></span>

              <span>{{ project.name }}</span>

              <span
                class="transform scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4"
              >
                <ArrowRight class="w-5 h-5 text-gray-500" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="absolute top-[100vh] left-0 w-[100%] h-[100vh] bg-black z-[1] p-5 text-white">
      <div class="flex justify-between pt-20 px-10">
        <p class="font-bold">01 / 05</p>
        <div class="flex items-center space-x-4">
          <span class="flex items-center justify-center rounded-full bg-white/30 p-1">
            <ChevronLeft />
          </span>
          <span class="flex items-center justify-center rounded-full bg-white/30 p-1">
            <ChevronRight />
          </span>
        </div>
      </div>
    </section>

  </main>

</template>
