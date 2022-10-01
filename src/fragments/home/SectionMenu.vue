<template>
  <div class="bg-white p-6 rounded-md shadow-md">
    <!-- Menu -->
    <div class="lg:grid lg:grid-cols-7 lg:gap-6 grid grid-cols-2 gap-4">
      <div v-for="(item, index) in menu" :key="index">
        <router-link
          :to="item.link"
          class="flex items-center cursor-pointer hover:bg-[#DCF0F1] py-2.5 px-3 rounded-md"
        >
          <img class="w-8 h-8" :src="item.icon" alt="" />
          <p class="text-[#1F2855] font-semibold text-sm pl-[10px]">
            {{ item.name }}
          </p>
        </router-link>
      </div>
    </div>
    <hr class="mt-6" />
    <!-- Insight -->
    <div class="mt-4">
      <h2 class="text-[24px] font-medium text-black">Insight</h2>
      <div class="lg:grid lg:grid-cols-4 mt-6">
        <div
          v-for="(item, index) in insight"
          :key="index"
          class="font-medium text-[18px] text-[#1F2855] lg:border-r lg:mr-1.5"
        >
          <h4>{{ item.name }}'s keep spirit</h4>
          <div class="grid grid-cols-2 gap-y-3 mt-7 text-green-400">
            <div class="flex items-center">
              <img src="/images/icons/ceklis.svg" alt="" />
              <div class="ml-6">
                <h3 class="text-[#457B9D] font-medium text-base">
                  {{ item.complete }}
                </h3>
                <p class="text-xs font-semibold text-black">Complete</p>
              </div>
            </div>
            <div class="flex items-center">
              <img src="/images/icons/hour.svg" alt="" />
              <div class="ml-6">
                <h3 class="text-[#457B9D] font-medium text-base">
                  {{ item.hours }}
                </h3>
                <p class="text-xs font-semibold text-black">Hours</p>
              </div>
            </div>
            <div class="flex items-center">
              <img src="/images/icons/ongoing.svg" alt="" />
              <div class="ml-6">
                <h3 class="text-[#457B9D] font-medium text-base">
                  {{ item.ongoing }}
                </h3>
                <p class="text-xs font-semibold text-black">Ongoing</p>
              </div>
            </div>
          </div>
        </div>
        <!-- My Learning -->
        <div class="col-span-3 mt-8 lg:mt-0">
          <div class="flex lg:justify-between items-center text-green-400">
            <h4 class="font-medium text-[18px] text-[#1F2855]">My Learning</h4>
            <router-link to="/home">
              <div class="flex items-center">
                <h6 class="font-medium lg:mr-3 pt-0.5 text-sm text-[#0093AD]">
                  Continue my learning
                </h6>
                <mdicon class="text-[#0093AD]" name="chevron-right" />
              </div>
            </router-link>
          </div>
          <div class="mt-3">
            <swiper
              :modules="modules"
              :loop="true"
              :centered-slides="true"
              :slides-per-view="1"
              :space-between="20"
              :breakpoints="{
                '1024': {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
              }"
              :style="{
                '--swiper-pagination-color': '#fff',
              }"
            >
              <swiper-slide v-for="(item, index) in myLearning" :key="index">
                <CardMyLearning
                  :title="item.title"
                  :level="item.level"
                  :bgimage="item.background"
                  :status="item.status"
                  class="mx-2"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import CardMyLearning from '../../components/card/CardMyLearning.vue';
export default {
  name: 'SectionMenu',
  components: { Swiper, SwiperSlide, CardMyLearning },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      menu: [
        {
          name: 'Videos',
          icon: '/images/icons/youtube-red.svg',
          link: '/videos',
        },
        {
          name: 'Podcast',
          icon: '/images/icons/podcast.svg',
          link: '/podcasts',
        },
        {
          name: 'Webinar',
          icon: '/images/icons/video.svg',
          link: '/webinar',
        },
        {
          name: 'Article',
          icon: '/images/icons/article.svg',
          link: '/articles',
        },
        {
          name: 'Course',
          icon: '/images/icons/course.svg',
          link: '/courses',
        },
        {
          name: 'Karya Tulis',
          icon: '/images/icons/karya_tulis.svg',
          link: '/videos',
        },
        {
          name: 'Journey',
          icon: '/images/icons/journey.svg',
          link: '/journey',
        },
        {
          name: 'Program',
          icon: '/images/icons/program.svg',
          link: '/programs',
        },
        {
          name: 'Survei',
          icon: '/images/icons/clipboard.svg',
          link: '/survei',
        },
        {
          name: 'Case Study',
          icon: '/images/icons/case_study.svg',
          link: '/case-study',
        },
        {
          name: 'Digilib',
          icon: '/images/icons/ebook.svg',
          link: '/digilib',
        },
      ],
      insight: [{ name: 'Ali', complete: '20', ongoing: '7', hours: '96' }],
      myLearning: [
        {
          title: 'Teknologi WiFi - Optimalisasi WiFi IndiHome',
          level: 'Advanced',
          background: '/images/home/menu-image.png',
          status: 'Ongoing',
        },
        {
          title: 'Teknologi WiFi - Optimalisasi WiFi IndiHome',
          level: 'Advanced',
          background: '/images/home/menu-image.png',
          status: 'Complete',
        },
        {
          title: 'Teknologi WiFi - Optimalisasi WiFi IndiHome',
          level: 'Advanced',
          background: '/images/home/menu-image.png',
          status: 'Ongoing',
        },
        {
          title: 'Teknologi WiFi - Optimalisasi WiFi IndiHome',
          level: 'Advanced',
          background: '/images/home/menu-image.png',
          status: 'Complete',
        },
        {
          title: 'Teknologi WiFi - Optimalisasi WiFi IndiHome',
          level: 'Advanced',
          background: '/images/home/menu-image.png',
          status: 'Ongoing',
        },
      ],
      swiperOption: {
        loop: true,
        centeredSlides: true,
        slidesPerView: '3',
        spaceBetween: '50',
      },
    };
  },
  computed: {
    // initStyle() {
    //   return this.$store.root.getInitials;
    // },
    // insightStyle() {
    //   return this.$store.home.insight;
    // },
  },
};
</script>
<style></style>
