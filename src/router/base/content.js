import stepperLayout from "@/layouts/stepper.vue";

export default [
    {
      path: "/content",
      name: "content",
      component: () => import("@/views/content/index.vue"),
      meta: {
        layout: stepperLayout,
        nextStep: '/invite'
      }
    },
  ];
  