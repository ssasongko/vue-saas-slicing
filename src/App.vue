<template>
  <div>
    <component :is="layout">
      <router-view :key="$route.fullPath" />
    </component>
  </div>
</template>

<script>
import defaultLayout from "@/layouts/default.vue";

export default {
  name: "App",
  components: {
    defaultLayout
  },
  computed: {
    layout() {
      return defaultLayout;
    },
  },
}
</script>