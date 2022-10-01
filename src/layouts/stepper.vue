<template>
  <div class="bg-[#F8F8F8] h-full w-full pt-1">
    <MainHeader2 />
    <div class="px-28 pb-14">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepperLayout",
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
