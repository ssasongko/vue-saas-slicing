<template>
  <div
    class="card rounded-lg overflow-hidden my-3 bg-white hover:cursor-pointer"
  >
    <!-- Fee Slot -->
    <slot></slot>

    <img :src="bgimage" class="w-full object-cover h-44" />
    <div class="mt-4 lg:px-2">
      <a href=""></a>
      <h3 class="text-base font-bold text-[#457B9D]">{{ title }}</h3>
      <p class="mt-2 text-sm text-[#8FAFC4]">{{ level }}</p>
    </div>

    <div class="flex justify-between items-center mt-5 pl-2 pr-2">
      <div class="flex items-center">
        <img :src="logoContent" class="rounded-full" />
        <div class="ml-2">
          <p class="text-sm font-bold text-[#1F2855]">{{ titleContent }}</p>
          <p class="text-sm text-[#A6A9BC]">{{ view }}x views</p>
        </div>
      </div>
      <img :src="contentImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContentPartners',
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
    level: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
    bgimage: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
    logoContent: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
    view: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
    titleContent: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
    contentImg: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    initStyle() {
      return this.$store.root.getInitials;
    },
    styleObject() {
      return {
        '--box-shadow': this.$store.root.getInitials.primary_color,
      };
    },
  },
};
</script>
<style scoped>
.card:hover {
  box-shadow: 0 0 14px rgb(37, 37, 37);
}
</style>
