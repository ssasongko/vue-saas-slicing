<template>
  <div class="bg-[#F8F8F8] pt-1 min-h-screen w-full">
    <MainHeader2 />
    <div class="px-6 md:px-28 md:pb-14">
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
