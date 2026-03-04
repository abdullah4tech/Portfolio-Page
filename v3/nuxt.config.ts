import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/color-mode"],

  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },

  routeRules: {
    // Prerender all pages for maximum performance (sub-second load)
    "/": { prerender: true },
    "/projects": { prerender: true },
    "/blog": { prerender: true },
    "/photos": { prerender: true },
    "/talks": { prerender: true },
    "/blog/**": { prerender: true },
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",

  vite: {
    plugins: [tailwindcss() as any],
    optimizeDeps: {
      include: [
        "gsap",
        "gsap/ScrollTrigger",
        "@iconify/vue",
        "lenis",
        "masonry-layout",
        "imagesloaded",
        "photoswipe",
        "photoswipe/lightbox",
        "@giscus/vue",
        "markdown-it",
        "shiki",
      ],
    },
  },

  css: ["~/assets/main.css"],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Sacramento: true,
      "Fira Code": [300, 400, 500, 600],
    },
    display: "swap",
    preconnect: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Abdullah O. Mustapha | Software Engineer & Full-Stack Developer",
      meta: [
        {
          name: "description",
          content:
            "Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.",
        },
        {
          name: "keywords",
          content:
            "Abdullah Mustapha, Software Engineer, Full-Stack Developer, Vue.js, TypeScript, Web Development, Portfolio, Scalable Applications, UI/UX",
        },
        { name: "author", content: "Abdullah O. Mustapha" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        // Open Graph
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content:
            "Abdullah O. Mustapha | Software Engineer & Full-Stack Developer",
        },
        {
          property: "og:description",
          content:
            "Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.",
        },
        { property: "og:url", content: "https://www.abdullahmustapha.xyz" },
        { property: "og:site_name", content: "Abdullah Mustapha Portfolio" },
        {
          property: "og:image",
          content: "https://www.abdullahmustapha.xyz/ogg_image.webp",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "en_US" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@abdullah4tech_" },
        { name: "twitter:creator", content: "@abdullah4tech_" },
        {
          name: "twitter:title",
          content:
            "Abdullah O. Mustapha | Software Engineer & Full-Stack Developer",
        },
        {
          name: "twitter:description",
          content:
            "Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.",
        },
        {
          name: "twitter:image",
          content: "https://www.abdullahmustapha.xyz/ogg_image.webp",
        },
        // Theme
        { name: "theme-color", content: "#ffffff" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "application-name", content: "Abdullah Mustapha Portfolio" },
        { name: "apple-mobile-web-app-title", content: "Abdullah Portfolio" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        // Security
        { "http-equiv": "X-Content-Type-Options", content: "nosniff" },
        { "http-equiv": "X-XSS-Protection", content: "1; mode=block" },
      ],
      link: [
        { rel: "canonical", href: "https://www.abdullahmustapha.xyz/" },
        { rel: "icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.svg",
        },
        { rel: "icon", type: "image/svg+xml", href: "/icon-192.svg" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Abdullah O. Mustapha",
            jobTitle: "Software Engineer",
            description:
              "Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.",
            url: "https://www.abdullahmustapha.xyz/",
            sameAs: [
              "https://twitter.com/abdullah4tech_",
              "https://github.com/abdullah4tech",
            ],
            email: "abdullahmu4life@gmail.com",
            knowsAbout: [
              "Software Engineering",
              "Full-Stack Development",
              "Vue.js",
              "TypeScript",
              "JavaScript",
              "Web Development",
              "User Interface Design",
              "Scalable Applications",
            ],
            worksFor: { "@type": "Organization", name: "Freelance" },
          }),
        },
      ],
    },
  },
});
