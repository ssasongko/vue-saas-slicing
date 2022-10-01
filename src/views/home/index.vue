<template>
  <div class="px-4 pt-10 bg-[#F8F8F8]">
    <SectionCarousel class="mb-11" />
    <SectionMenu class="mb-11" />
    <SectionContentPartners class="mb-11" />
    <SectionCategory class="mb-11" />
    <SectionContentPartners class="mb-11" />
    <SectionFooter />
  </div>
</template>

<script>
import SectionCarousel from '../../fragments/home/SectionCarousel.vue';
import SectionMenu from '../../fragments/home/SectionMenu.vue';
import SectionContentPartners from '../../fragments/home/SectionContentPartners.vue';
import SectionCategory from '../../fragments/home/SectionCategory.vue';
import SectionFooter from '../../fragments/home/SectionFooter.vue';

export default {
  name: 'HomePage',
  components: {
    SectionCarousel,
    SectionMenu,
    SectionContentPartners,
    SectionCategory,
    SectionFooter,
  },
  data() {
    return {
      isShow: false,
    };
  },
  created() {},
};
</script>
