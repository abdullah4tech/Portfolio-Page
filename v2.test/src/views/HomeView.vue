<script setup lang="ts">
import { ArrowRight, Twitter, Github, MailIcon, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useHead } from '@vueuse/head'
import ResumeButton from '../components/ResumeButton.vue'

// SEO and meta tags
useHead({
  title: 'Abdullah O. Mustapha | Software Engineer & Full-Stack Developer',
  meta: [
    {
      name: 'description',
      content:
        'Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.',
    },
    {
      name: 'keywords',
      content:
        'Abdullah Mustapha, Software Engineer, Full-Stack Developer, Vue.js, TypeScript, Web Development, Portfolio, Scalable Applications, UI/UX',
    },
    { name: 'author', content: 'Abdullah O. Mustapha' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    {
      property: 'og:title',
      content: 'Abdullah O. Mustapha | Software Engineer & Full-Stack Developer',
    },
    {
      property: 'og:description',
      content:
        'Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.',
    },
    { property: 'og:url', content: 'https://abdullahmustapha.xyz' },
    { property: 'og:site_name', content: 'Abdullah Mustapha Portfolio' },
    { property: 'og:image', content: 'https://abdullahmustapha.xyz/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Abdullah O. Mustapha - Software Engineer Portfolio' },
    { property: 'og:locale', content: 'en_US' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@abdullah4tech_' },
    { name: 'twitter:creator', content: '@abdullah4tech_' },
    {
      name: 'twitter:title',
      content: 'Abdullah O. Mustapha | Software Engineer & Full-Stack Developer',
    },
    {
      name: 'twitter:description',
      content:
        'Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.',
    },
    { name: 'twitter:image', content: 'https://abdullahmustapha.xyz/og-image.jpg' },
    { name: 'twitter:image:alt', content: 'Abdullah O. Mustapha - Software Engineer Portfolio' },

    // Additional SEO
    { name: 'theme-color', content: '#ffffff' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'application-name', content: 'Abdullah Mustapha Portfolio' },
    { name: 'apple-mobile-web-app-title', content: 'Abdullah Portfolio' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
  ],
  link: [
    { rel: 'canonical', href: 'https://abdullahmustapha.xyz' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Abdullah O. Mustapha',
        jobTitle: 'Software Engineer',
        description:
          'Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.',
        url: 'https://abdullahmustapha.xyz',
        sameAs: [
          'https://twitter.com/abdullah4tech_',
          'https://github.com/abdullah4tech',
          'https://linkedin.com/in/abdullah4tech',
        ],
        email: 'abdullahmu4life@gmail.com',
        knowsAbout: [
          'Software Engineering',
          'Full-Stack Development',
          'Vue.js',
          'TypeScript',
          'JavaScript',
          'Web Development',
          'User Interface Design',
          'Scalable Applications',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance',
        },
      }),
    },
  ],
})

const projects = [
  {
    name: 'Zenon Router',
    link: 'https://github.com/n8bird-oss/zenon-router',
    description: 'Modern routing solution for web applications',
  },
  {
    name: 'Backend Starter CLI',
    link: 'https://www.npmjs.com/package/backend-starter-cli/',
    description: 'CLI tool for rapid backend development setup',
  },
  {
    name: 'Linux Shell (fsh)',
    link: 'https://github.com/n8bird-oss/fsh',
    description: 'Custom Linux shell implementation',
  },
  {
    name: 'Community Extension',
    link: 'https://github.com/abdullah4tech/community-extension',
    description: 'Browser extension for enhanced community features',
  },
]
</script>

<template>
  <main class="relative z-10">
    <!-- Hero Section -->
    <section
      class="px-4 sm:px-6 md:px-10 lg:px-15 my-12 md:my-49 flex flex-col md:flex-row items-start gap-8 md:gap-20 lg:gap-40 justify-between fixed top-0 left-0 w-[100%] h-[100vh] z-[1] p-4 sm:p-5"
      itemscope
      itemtype="https://schema.org/Person"
    >
      <div>
        <div class="flex flex-col w-[100%] gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <h1
            class="font-medium text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[130px] mt-16 md:mt-0 tracking-tight leading-tight md:leading-none font-sans md:font-['Yantramanav']"
            itemprop="name"
          >
            I'm Abdullah<br />Mustapha.
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl italic font-light text-gray-700 leading-relaxed" itemprop="description">
            A dedicated Software Engineer focused on building scalable web applications and
            intuitive user interfaces, turning imaginations into practical solutions.
          </p>
          <meta itemprop="jobTitle" content="Software Engineer" />
          <meta itemprop="url" content="https://abdullahmustapha.xyz" />
          <meta itemprop="email" content="abdullahmu4life@gmail.com" />
        </div>

        <div class="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-6 sm:mt-8 md:mt-10">
          <a
            href="https://twitter.com/abdullah4tech_"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 sm:p-3 bg-gray-800/10 backdrop-blur-md hover:bg-gray-300 transition-colors duration-200 rounded-full"
            aria-label="Follow Abdullah on Twitter"
            itemprop="sameAs"
          >
            <Twitter class="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://github.com/abdullah4tech"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 sm:p-3 bg-gray-800/10 backdrop-blur-md hover:bg-gray-300 transition-colors duration-200 rounded-full"
            aria-label="View Abdullah's GitHub profile"
            itemprop="sameAs"
          >
            <Github class="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:abdullahmu4life@gmail.com"
            class="p-2.5 sm:p-3 bg-gray-800/10 backdrop-blur-md hover:bg-gray-300 transition-colors duration-200 rounded-full"
            aria-label="Send email to Abdullah"
          >
            <MailIcon class="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <ResumeButton />
        </div>
      </div>

      <!-- Projects Section -->
      <div class="flex flex-col w-full md:w-[70%] lg:w-[60%] xl:w-[50%] space-y-4 sm:space-y-5">
        <span class="text-gray-500 text-xs sm:text-sm font-medium">RECENT PROJECTS...</span>
        <ul class="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5" role="list">
          <li v-for="(project, index) in projects" :key="index" role="listitem">
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="relative py-2 sm:py-3 flex items-center justify-between group overflow-hidden cursor-pointer border-b border-gray-400 text-sm sm:text-base md:text-lg"
              :aria-label="`View ${project.name} project`"
            >
              <span
                class="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              ></span>

              <span>{{ project.name }}</span>

              <span
                class="transform scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4"
                aria-hidden="true"
              >
                <ArrowRight class="w-5 h-5 text-gray-500" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Additional Content Section -->
    <section class="absolute top-[100vh] left-0 w-[100%] h-[100vh] bg-black z-[1] p-4 sm:p-5 text-white">
      <div class="flex justify-between pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <p class="font-bold text-sm sm:text-base md:text-lg" aria-label="Page 1 of 5">01 / 05</p>
        <div class="flex items-center space-x-2 sm:space-x-3 md:space-x-4" role="navigation" aria-label="Page navigation">
          <button
            class="flex items-center justify-center rounded-full bg-white/30 p-1 sm:p-1.5 hover:bg-white/40 transition-colors duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button
            class="flex items-center justify-center rounded-full bg-white/30 p-1 sm:p-1.5 hover:bg-white/40 transition-colors duration-200"
            aria-label="Next page"
          >
            <ChevronRight class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
