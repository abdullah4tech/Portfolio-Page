import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Abdullah O. Mustapha | Software Engineer & Full-Stack Developer',
      description:
        'Dedicated Software Engineer focused on building scalable web applications and intuitive user interfaces, turning complex challenges into innovative solutions.',
      keywords:
        'Abdullah Mustapha, Software Engineer, Full-Stack Developer, Vue.js, TypeScript, Web Development, Portfolio',
      ogType: 'website',
      ogImage: 'https://abdullahmustapha.xyz/og-image.jpg',
      twitterCard: 'summary_large_image',
    },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: 'Page Not Found | Abdullah O. Mustapha',
      description: 'The page you are looking for could not be found.',
      noIndex: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Global navigation guard for SEO meta tags
router.beforeEach((to) => {
  // Set document title
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta && to.meta?.description) {
    descriptionMeta.setAttribute('content', to.meta.description as string)
  }

  // Update keywords
  const keywordsMeta = document.querySelector('meta[name="keywords"]')
  if (keywordsMeta && to.meta?.keywords) {
    keywordsMeta.setAttribute('content', to.meta.keywords as string)
  }

  // Update robots meta for noIndex
  let robotsMeta = document.querySelector('meta[name="robots"]')
  if (!robotsMeta) {
    robotsMeta = document.createElement('meta')
    robotsMeta.setAttribute('name', 'robots')
    document.head.appendChild(robotsMeta)
  }

  if (to.meta?.noIndex) {
    robotsMeta.setAttribute('content', 'noindex, nofollow')
  } else {
    robotsMeta.setAttribute('content', 'index, follow')
  }
})

export default router
