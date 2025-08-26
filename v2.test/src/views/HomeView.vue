<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { Github, Twitter, Mail, MapPin, Coffee, Code, Heart } from 'lucide-vue-next'
import ResumeButton from '../components/ResumeButton.vue'

// SEO and meta tags
useHead({
  title: 'Abdullah O. Mustapha | Software Engineer & Open Source Enthusiast',
  meta: [
    {
      name: 'description',
      content:
        'Software Engineer passionate about building scalable applications and contributing to open source. Creator of innovative web solutions.',
    },
    {
      name: 'keywords',
      content:
        'Abdullah Mustapha, Software Engineer, Full-Stack Developer, Open Source, Vue.js, TypeScript, Web Development',
    },
    { name: 'author', content: 'Abdullah O. Mustapha' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Abdullah O. Mustapha | Software Engineer' },
    {
      property: 'og:description',
      content:
        'Software Engineer passionate about building scalable applications and contributing to open source.',
    },
    { property: 'og:url', content: 'https://abdullahmustapha.xyz' },
    { property: 'og:image', content: 'https://abdullahmustapha.xyz/og-image.jpg' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@abdullah4tech_' },
    { name: 'twitter:title', content: 'Abdullah O. Mustapha | Software Engineer' },
  ],
})

const isLoaded = ref(false)
const currentQuote = ref(0)

const quotes = [
  'Building the future, one line of code at a time.',
  'Passionate about creating solutions that make a difference.',
  'Open source enthusiast and problem solver.',
]

const projects = [
  {
    name: 'Zenon Router',
    description: 'Modern routing solution for web applications',
    link: 'https://github.com/n8bird-oss/zenon-router',
    tech: ['TypeScript', 'Router', 'Web'],
  },
  {
    name: 'Backend Starter CLI',
    description: 'CLI tool for rapid backend development setup',
    link: 'https://www.npmjs.com/package/backend-starter-cli/',
    tech: ['Node.js', 'CLI', 'DevTools'],
  },
  {
    name: 'Linux Shell (fsh)',
    description: 'Custom Linux shell implementation',
    link: 'https://github.com/n8bird-oss/fsh',
    tech: ['C', 'Linux', 'Shell'],
  },
  {
    name: 'Community Extension',
    description: 'Browser extension for enhanced community features',
    link: 'https://github.com/abdullah4tech/community-extension',
    tech: ['JavaScript', 'Browser Extension', 'Community'],
  },
]

const skills = [
  'Vue.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Linux',
  'Git',
]

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 300)

  // Rotate quotes every 4 seconds
  setInterval(() => {
    currentQuote.value = (currentQuote.value + 1) % quotes.length
  }, 4000)
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
    >
      <nav class="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo/Name -->
        <div class="flex items-center space-x-3">
          <div
            class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg"
          >
            A
          </div>
          <span class="font-semibold text-gray-900 dark:text-white">Abdullah</span>
        </div>

        <!-- Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >About</a
          >
          <a
            href="#projects"
            class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >Projects</a
          >
          <a
            href="#contact"
            class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >Contact</a
          >
        </div>

        <!-- Theme Toggle -->
        <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg
            class="w-5 h-5 text-gray-600 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
            ></path>
          </svg>
        </button>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="pt-20">
      <!-- Hero Section -->
      <section id="about" class="max-w-4xl mx-auto px-6 py-16">
        <div class="space-y-8" :class="{ 'animate-fade-in': isLoaded }">
          <!-- Main Heading -->
          <div class="space-y-4">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Abdullah O. Mustapha
            </h1>
            <div class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-8 overflow-hidden">
              <div
                class="transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateY(-${currentQuote * 100}%)` }"
              >
                <div v-for="(quote, index) in quotes" :key="index" class="h-8 flex items-center">
                  {{ quote }}
                </div>
              </div>
            </div>
          </div>

          <!-- Bio -->
          <div class="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none">
            <p>
              Hey! I'm Abdullah, a passionate software engineer focused on building scalable web
              applications and intuitive user interfaces. I love turning complex challenges into
              innovative solutions.
            </p>

            <p>
              Working with modern technologies like <strong>Vue.js</strong>,
              <strong>TypeScript</strong>, and <strong>Node.js</strong>. I believe in writing clean,
              maintainable code and contributing to the open source community.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open
              source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <!-- Current Status -->
          <div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
            <div class="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Remote / Nigeria</span>
            </div>
          </div>

          <!-- Social Links & Resume -->
          <div class="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/abdullah4tech"
              target="_blank"
              class="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors group"
            >
              <Github className="w-4 h-4 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span>GitHub</span>
            </a>

            <a
              href="https://twitter.com/abdullah4tech_"
              target="_blank"
              class="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors group"
            >
              <Twitter className="w-4 h-4 group-hover:text-blue-500" />
              <span>Twitter</span>
            </a>

            <a
              href="mailto:abdullahmu4life@gmail.com"
              class="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:text-red-500" />
              <span>Email</span>
            </a>

            <ResumeButton />
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="max-w-4xl mx-auto px-6 py-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Technologies I work with
        </h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="max-w-4xl mx-auto px-6 py-16">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <a
            href="https://github.com/abdullah4tech"
            target="_blank"
            class="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            View all →
          </a>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="project in projects"
            :key="project.name"
            class="group border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ project.name }}
                </h3>
                <a
                  :href="project.link"
                  target="_blank"
                  class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </div>

              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="max-w-4xl mx-auto px-6 py-16">
        <div class="text-center space-y-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Let's work together</h2>

          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Whether
            you want to collaborate or just say hi, feel free to reach out!
          </p>

          <div class="flex items-center justify-center space-x-6">
            <a
              href="mailto:abdullahmu4life@gmail.com"
              class="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </a>

            <a
              href="#"
              class="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
            >
              <Coffee className="w-4 h-4" />
              <span>Buy me coffee</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-700">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>by Abdullah</span>
          </div>

          <div>
            <span>© 2024 Abdullah O. Mustapha</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.prose strong {
  color: #1f2937;
}

.dark .prose strong {
  color: #f9fafb;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-thumb {
  background: #4b5563;
}

::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
