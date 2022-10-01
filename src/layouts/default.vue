<template>
  <MainHeader />
  <div class="pb-14">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/main/Header';

export default {
  name: 'DefaultLayout',
  components: {
    MainHeader,
  },
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
