import { createRouter, createWebHistory } from 'vue-router';

// autoload routes
const modules = import.meta.globEager('./**/*.js');

// setting router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: () => import('@/views/register/index.vue'),
      meta: {
        layout: IndexLayout,
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
    },
  ],
  history: createWebHistory(),
  routes: Object.entries(modules)
    .map(([path, m]) => {
      return m.default;
    })
    .flatMap((arr) => arr),
});

export default router;
