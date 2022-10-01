<template>
  <div class="flex flex-col my-10">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <span>
        <h1 class="text-spacecadet-100 text-2lg">Choose the content you like</h1>
        <p class="text-spacecadet-primary text-sm">
          Please choose some content you need and invite your partner to learn
        </p>
      </span>
      <div class="flex gap-x-4 mt-5 md:mt-0">
        <Badge
          v-show="selectedContent.length !== 0"
          textColor="#0093AD"
          color="#DCF0F1"
          :class="'text-xs md:text-base'"
          @click="selectedContent = []"
          >{{ selectedContent.length }} Free Course Selected <span class="ml-3 cursor-pointer">x</span></Badge
        >
        <span class="'text-xs md:text-base'">
          <input ref="fileUpload" type="file" hidden />
          <button class="flex items-center bg-virindian-100 text-white px-4 py-2 rounded-md" @click="chooseFile">
            <img src="/images/icons/download.svg" class="mr-2" alt="" /> Import Content
          </button>
        </span>
      </div>
    </div>
  </div>
  <div class="flex gap-4">
    <SectionSidebar />
    <SectionContent @selected="getSelectedContent" :clearSelected="selectedContent"/>
  </div>
</template>

<script>
import SectionSidebar from "@/fragments/content/SectionSidebar.vue";
import SectionContent from "@/fragments/content/SectionContent.vue";

export default {
  components: {
    SectionSidebar,
    SectionContent,
  },
  data() {
    return {
      selectedContent: [],
    };
  },
  methods: {
    chooseFile() {
      this.$refs.fileUpload.click();
    },
    getSelectedContent(params) {
      this.selectedContent = params;
    },
  },
};
</script>
