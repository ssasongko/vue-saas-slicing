<template>
  <div class="flex items-center w-fit rounded-full px-3 py-2" :style="{ background: `${color}`, color: `${textColor}` }"><slot></slot></div>
</template>
<script>
export default {
  name: "Badge",
  props: {
    textColor: {
      type: String,
      default() {
        return "#ffffff"
      }
    },
    color: {
      type: String,
      default() {
        return "#0093AD";
      },
    },
  },
};
</script>
