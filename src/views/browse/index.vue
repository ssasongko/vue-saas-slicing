<template>
  <div class="mx-[25px]">
    <div class="flex flex-col my-10">
      <div class="flex justify-between items-center">
        <div class="flex">
          <img src="/images/icons/icon-shopping.svg" alt="" />
          <p class="ml-2 text-spacecadet-100 text-2lg text-[24px] mr-20">
            Browse Library
          </p>
          <div class="flex items-center gap-3 text-celadon-100 text-sm">
            <img src="/images/icons/IconHome.svg" alt="" />
            <img src="/images/icons/IconRight.svg" alt="" />
            <p class="text-sm">Marketplace</p>
          </div>
        </div>
        <div class="flex gap-x-4">
          <Badge textColor="#0093AD" color="#DCF0F1"
            >2 Free Course Selected
            <span class="ml-3 cursor-pointer">x</span></Badge
          >
          <span>
            <input ref="fileUpload" type="file" hidden />
            <button
              class="flex items-center bg-virindian-100 text-white px-4 py-2 rounded-md"
              @click="chooseFile"
            >
              <img src="/images/icons/download.svg" class="mr-2" alt="" />
              Import Content
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <SectionSidebar />
      <FilterDataSearch />
    </div>
  </div>
</template>

<script>
import SectionSidebar from '@/fragments/content/SectionSidebar.vue';
import FilterDataSearch from '../../components/datatable/FilterDataSearch.vue';

export default {
  components: {
    SectionSidebar,
    FilterDataSearch,
  },
  methods: {
    chooseFile() {
      this.$refs.fileUpload.click();
    },
  },
};
</script>
