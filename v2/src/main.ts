import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import App from './App.vue'
import router from './router'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Lenis smooth scroll — the foundation of every premium scroll experience
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 1.5,
})

// Sync Lenis with GSAP's ScrollTrigger so both systems share the same scroll position
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time: number) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// Expose lenis globally so components can access it
window.__lenis = lenis

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
