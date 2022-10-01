<template>
  <section>
    <swiper
      :modules="modules"
      :loop="true"
      :centered-slides="true"
      :navigation="true"
      :pagination="true"
      :parallax="true"
      :slides-per-view="1"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '18px',
        '--swiper-pagination-color': '#fff',
      }"
    >
      <swiper-slide v-for="(item, index) in listCarousel" :key="index">
        <a href="#">
          <img :src="item.banner" alt="" class="w-screen lg:h-80 h-36" />
        </a>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  name: 'SectionCarousel',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Parallax],
    };
  },
  data() {
    return {
      listCarousel: [
        {
          id: '1',
          banner: '/images/home/banner.png',
        },
        {
          id: '2',
          banner: '/images/home/banner.png',
        },
        {
          id: '3',
          banner: '/images/home/banner.png',
        },
      ],
    };
  },
};
</script>
<style>
.swiper-button-prev {
  left: 46px;
}
.swiper-button-next {
  right: 46px;
}
.swiper-pagination-bullet {
  border-radius: 0%;
  height: 4px;
  width: 44px;
}
@media only screen and (max-width: 600px) {
  .swiper-button-prev {
    left: 14px;
  }
  .swiper-button-next {
    right: 14px;
  }
}
</style>
