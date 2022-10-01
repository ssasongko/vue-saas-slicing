<template>
  <div
    class="card md:grid md:grid-cols-2 lg:w-[352px] h-auto overflow-hidden rounded-lg max-w-xs my-3 cursor-pointer"
  >
    <a
      href=""
      class="text-white-primary py-1 px-2 text-xs ml-2 mt-2 rounded-3xl absolute"
      >{{ status }}</a
    >
    <img :src="bgimage" class="w-full object-cover md:h-full h-36" />
    <div class="px-3 md:px-2 md:py-2 py-3 mb-2 md:mb-0">
      <h3 class="text-sm font-bold md:pt-2 text-[#457B9D]">
        {{ title }}
      </h3>
      <p class="text-sm text-[#8FAFC4]">[ {{ level }} ]</p>
      <div class="flex justify-between mt-5">
        <div class="flex items-center text-[#457B9D]">
          <img src="/images/icons/shield.svg" alt="" />
          <p class="text-xs pl-1">Private</p>
        </div>
        <div class="flex items-center text-[#25A0AB]">
          <p class="text-xs pr-1">Certificate</p>
          <img src="/images/icons/certificate.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardMyLearning',
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
    status: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
  },
  data() {
    return {
      completeColor: '#0093AD',
      ongoingColor: '#FF9C00',
    };
  },
  computed: {
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
