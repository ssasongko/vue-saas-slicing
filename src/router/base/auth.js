import IndexLayout from '@/layouts/auth.vue';

export default [
  {
    path: "/",
    name: "profile",
    component: () => import("@/views/register/index.vue"),
    meta: {
      layout: IndexLayout,
    }
  },
];
