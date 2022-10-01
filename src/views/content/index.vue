<template>
  <div class="flex flex-col my-10">
    <h1 class="text-spacecadet-100 text-2lg">Choose the content you like</h1>
    <p class="text-spacecadet-primary text-sm">Please choose some content you need and invite your partner to learn</p>
  </div>
  <div class="flex gap-4">
    <SectionSidebar />
    <SectionContent />
  </div>
</template>

<script>
import SectionSidebar from "@/fragments/content/SectionSidebar.vue";
import SectionContent from "@/fragments/content/SectionContent.vue";

export default {
  components: {
    SectionSidebar,
    SectionContent
  },
};
</script>
