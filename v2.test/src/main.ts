import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)

// Ensure DOM is ready before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    app.mount('#app')
  })
} else {
  app.mount('#app')
}
