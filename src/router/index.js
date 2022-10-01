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
  ]
});

export default router;
