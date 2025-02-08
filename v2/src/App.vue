<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import { ArrowRight, Twitter, Github, MailIcon, ArrowDownFromLine } from "lucide-vue-next";

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
    nane: "Product Landing Page",
    link: "https://e-commerce-product-page-three-pi.vercel.app/",
  },
];
</script>


<template>
  <HeaderComponent />
  <main class="">
    <section class="px-15 my-20 flex items-start gap-52 justify-between">
      <div>
        <div class="flex flex-col w-[100%] gap-10">
          <h1 class="font-medium text-8xl">I'm Abdullah<br>Mustapha.</h1>
          <p class="text-2xl italic font-light">I'm a dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.</p>
        </div>
        <div class="flex items-center gap-5 mt-10">
          <a href="https://twitter.com/abdullah4tech_" target="_blank" class="p-3 bg-gray-800/10 backdrop-blur-md rounded-full">
            <Twitter />
          </a>
          <a href="https://github.com/abdullah4tech" target="_blank" class="p-3 bg-gray-800/10 backdrop-blur-md rounded-full">
            <Github />
          </a>
          <a href="mailto:abdullahmu4life@gmail.com" class="p-3 bg-gray-800/10 backdrop-blur-md rounded-full">
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
              <!-- Border Fill Effect -->
              <span
                class="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              ></span>

              <span>{{ project.name }}</span>

              <!-- Arrow Appears on Hover -->
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

  </main>
</template>
