<template>
  <div
    class="card p-4 flex items-center cursor-pointer shadow-md hover:text-white bg-white rounded"
  >
    <p class="text-sm font-semibold">
      {{ title }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'CardCategory',
  props: {
    title: {
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
    styleObject() {
      return {
        '--background-color': this.$store.root.getInitials.primary_color,
      };
    },
  },
};
</script>
<style scoped>
.card:hover {
  background-color: #0093ad;
}
</style>
