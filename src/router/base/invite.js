import stepperLayout from "@/layouts/stepper.vue";

export default [
    {
      path: "/invite",
      name: "invite",
      component: () => import("@/views/invite/index.vue"),
      meta: {
        layout: stepperLayout
      }
    },
  ];
  