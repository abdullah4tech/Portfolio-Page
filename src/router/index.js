import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/components/AboutPage.vue';
import HeroSection from '@/components/HeroSection.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HeroSection
  },
  {
    path: '/about', 
    name: 'About',
    component: AboutPage
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
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
