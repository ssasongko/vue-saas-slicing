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
