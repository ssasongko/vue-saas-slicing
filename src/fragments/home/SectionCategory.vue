<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/import-v-for-key -->
<template>
  <section>
    <div class="flex justify-between items-center">
      <h2 class="text-[24px] font-medium">Category</h2>
      <div class="flex gap-2 text-[#DCF0F1]">
        <div @click="handleSlidePrev">
          <mdicon class="cursor-pointer" name="chevron-left-circle" />
        </div>
        <div @click="handleSlideNext">
          <mdicon class="cursor-pointer" name="chevron-right-circle" />
        </div>
      </div>
    </div>
    <div class="mt-4">
      <swiper
        class="!px-1 !py-3"
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        :grid="{
          rows: 2,
          fill: row,
        }"
        :breakpoints="{
          '1024': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(item, index) in getCategory" :key="index.id">
          <router-link class="w-full h-full" to="/home">
            <CardCategory :title="item" class="h-full" />
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination, Autoplay, Parallax, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import CardCategory from '../../components/card/CardCategory.vue';
export default {
  name: 'SectionCategory',
  components: { Swiper, SwiperSlide, CardCategory },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Parallax, Grid],
    };
  },
  data() {
    return {
      swiper: null,
      getCategory: [
        'Digital Strategy,Transformasion & Investmnet',
        'Digital Technology, Data & Platform',
        'Digital Strategy,Transformasion & Investmnet',
        'Digital Technology, Data & Platform',
        'Digital Strategy,Transformasion & Investmnet',
        'Digital Technology, Data & Platform',
        'Digital Strategy,Transformasion & Investmnet',
        'Digital Technology, Data & Platform',
        'Digital Strategy,Transformasion & Investmnet',
        'Digital Technology, Data & Platform',
        'Digital Strategy,Transformasion & Investmnet',
        'Digital Technology, Data & Platform',
        'Digital Strategy,Transformasion & Investmnet',
        'Digital Technology, Data & Platform',
      ],
    };
  },
  computed: {
    initStyle() {
      return this.$store.root.getInitials;
    },
    getCategoriesList() {
      return this.$store.root.initialMenuCategories;
    },
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    handleSlideNext() {
      this.swiper.slideTo(6);
    },
    handleSlidePrev() {
      this.swiper.slideTo(0);
    },
  },
};
</script>
<style>
.swiper-slide {
  height: auto;
}
</style>
