import { createRouter, createWebHistory } from 'vue-router';
import IndexLayout from '@/layouts/auth.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: () => import('@/views/register/index.vue'),
      meta: {
        layout: IndexLayout
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
    },
  ],
});

export default router;
