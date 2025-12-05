import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(MotionPlugin)

// Ensure DOM is ready before mounting
app.mount('#app')
