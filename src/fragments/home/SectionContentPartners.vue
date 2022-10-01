<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <section class="rounded-md p-6 shadow-md bg-white">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-base font-medium sm:text-lg-2 md:text-lg-2">
        Content Partners
      </h2>
      <router-link
        class="flex items-center opacity-70 duration-200 ease-in-out hover:opacity-100"
        to="/other-course"
      >
        <p
          class="text-md md:text-sm sm:text-base-2 font-medium lg:pr-3 pt-0.5 text-[#0093AD]"
        >
          View All
        </p>
        <mdicon class="text-[#0093AD]" name="chevron-right" />
      </router-link>
    </div>

    <div class="mt-4">
      <div class="grid lg:grid-cols-5 sm:grid-cols-2 gap-2">
        <div v-for="(item, index) in contentPartners" :key="index">
          <CardContentPartners
            :title="item.title"
            :level="item.level"
            :bgimage="item.background"
            :logoContent="item.logo"
            :view="item.view"
            :titleContent="item.titleContent"
            :contentImg="item.contentImg"
            class="pb-2"
            ><a
              href=""
              class="text-white-primary py-1 px-3 text-sm ml-2 mt-2 rounded-3xl z-0 absolute"
              :style="{
                'background-color': item.fee === 'free' ? freeColor : paidColor,
              }"
              >{{ item.fee }}</a
            >
          </CardContentPartners>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardContentPartners from '../../components/card/CardContentPartners.vue';

export default {
  name: 'SectionContentPartners',
  components: { CardContentPartners },

  data() {
    return {
      freeColor: '#0093AD',
      paidColor: '#DA4A4A',
      redColor: '#EA5455',
      greenColor: '##28C76F',
      contentPartners: [
        {
          title: 'FWA & OKR “New Ways of Working in Digital Era',
          level: '[Advanced]',
          fee: 'paid',
          view: '240',
          titleContent: 'Microsoft',
          background: '/images/home/Image.png',
          logo: '/images/home/microsoft.png',
          contentImg: '/images/home/youtube.png',
        },
        {
          title: 'FWA & OKR “New Ways of Working in Digital Era',
          level: '[Advanced]',
          fee: 'free',
          view: '140',
          titleContent: 'Huawei',
          background: '/images/home/Image.png',
          logo: '/images/home/huawei.png',
          contentImg: '/images/home/youtube.png',
        },
        {
          title: 'FWA & OKR “New Ways of Working in Digital Era',
          level: '[Intermediete]',
          fee: 'free',
          view: '200',
          titleContent: 'ITB',
          background: '/images/home/Image.png',
          logo: '/images/home/huawei.png',
          contentImg: '/images/home/youtube.png',
        },
        {
          title: 'FWA & OKR “New Ways of Working in Digital Era',
          level: '[Beginner]',
          fee: 'paid',
          view: '40',
          titleContent: 'Microsoft',
          background: '/images/home/Image.png',
          logo: '/images/home/huawei.png',
          contentImg: '/images/home/youtube.png',
        },
        {
          title: 'FWA & OKR “New Ways of Working in Digital Era',
          level: '[Beginer]',
          fee: 'free',
          view: '530',
          titleContent: 'ITB',
          background: '/images/home/Image.png',
          logo: '/images/home/huawei.png',
          contentImg: '/images/home/youtube.png',
        },
      ],
    };
  },
  computed: {
    initStyle() {
      return this.$store.root.getInitials;
    },
  },
};
</script>
