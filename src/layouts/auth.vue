<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
export default {
  name: "IndexLayout",
};
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
