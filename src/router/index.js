import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HeroSection.vue')
  },
  {
    path: '/about', 
    name: 'About',
    component: () => import('@/components/AboutPage.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/components/ProjectsPage.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('@/components/TestimonialsPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/components/ContactPage.vue')
  },
  { 
    path: '/:catchAll(.*)', 
    name: '404',
    component: () => import('@/components/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
