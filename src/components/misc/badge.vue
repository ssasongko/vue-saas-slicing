<template>
  <div class="flex items-center font-bold w-fit rounded-full px-3 py-2 text-white" :style="{ background: `${color}` }"><slot></slot></div>
</template>
<script>
export default {
  name: "Badge",
  props: {
    color: {
      type: String,
      default() {
        return "#0093AD";
      },
    },
  },
};
</script>
