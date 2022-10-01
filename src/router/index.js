import { createRouter, createWebHistory } from 'vue-router';

// autoload routes
const modules = import.meta.globEager("./**/*.js");

// setting router
const router = createRouter({
  history: createWebHistory(),
  routes: Object.entries(modules)
    .map(([path, m]) => {
      return m.default;
    })
    .flatMap((arr) => arr),
});

export default router;
