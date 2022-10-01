<template>
  <footer>
    <hr class="mb-8 mt-2 text-[#B9B9C3]" />
    <div class="lg:flex justify-between text-[#797F99] mx-4 pb-5">
      <!-- categories -->
      <div>
        <h3 class="text-base-2 mb-4">Categories</h3>
        <ul v-for="(item, index) in categories" :key="index">
          <li class="text-sm py-1">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <!-- Products -->
      <div>
        <h3 class="text-base-2 mb-4">Products</h3>
        <ul v-for="(item, index) in productsList" :key="index">
          <li class="text-sm py-1">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- Support -->
      <div>
        <h3 class="text-base-2 mb-4">Support</h3>
        <ul v-for="(item, index) in supportList" :key="index">
          <li class="text-sm py-1">
            {{ item.name }}
          </li>
        </ul>
        <h3 class="text-base-2 mb-4 mt-4">Our Company</h3>
        <ul v-for="(item, index) in aboutList" :key="index">
          <li class="text-sm py-1">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div>
        <img src="/images/logo/logo-footer.svg" alt="" />
        <h4 class="text-[18px]">
          myDigiLearn makes <br />
          learning matter
        </h4>
        <p>Follow Us</p>
        <div class="flex gap-2">
          <div v-for="(item, index) in socialMedia" :key="index">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <img :src="item.icon" alt="" />
            </a>
          </div>
        </div>
        <p class="mt-6 text-xs font-normal">
          © 2022 myDigiLearn <br />
          All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'SectionFooter',
  components: {},
  data() {
    return {
      categories: [
        { id: '1', title: 'Digital Strategy, Transformasion & Investmnet' },
        { id: '2', title: 'Digital Network & Connectivity' },
        { id: '3', title: 'Digital Technology, Data & Platform' },
        { id: '4', title: 'Digital Security & Business Sustainability' },
        { id: '5', title: 'Governance, Risk & Compliance' },
        { id: '6', title: 'Leading People & Organization' },
        { id: '7', title: 'Data Content & Service' },
        { id: '8', title: 'Corporate Enabler' },
        { id: '9', title: 'Leading Business' },
        { id: '10', title: 'Health' },
        { id: '11', title: 'Investment' },
      ],
      productsList: [
        {
          name: 'video',
          link: '/video',
        },
        {
          name: 'podcast',
          link: '/podcast',
        },
        {
          name: 'webinar',
          link: '/webinar',
        },
        {
          name: 'article',
          link: '/articles',
        },
        {
          name: 'course',
          link: '/courses',
        },
        {
          name: 'pathway',
          link: '/pathway',
        },
        {
          name: 'class',
          link: '/class-of-data-scientist',
        },
        {
          name: 'digilib',
          link: '/digilib',
        },
      ],
      supportList: [
        {
          name: 'FAQ',
          link: '/faq',
        },
        {
          name: 'Term & Conditions',
          link: '/terms',
        },
        {
          name: 'Privacy Policy',
          link: '/user-policy',
        },
      ],
      aboutList: [
        {
          name: 'About Us',
          link: '/about-us',
        },
        {
          name: 'Contact Us',
          link: '/contact-us',
        },
      ],
      socialMedia: [
        {
          icon: '/images/icons/instagram-fill.svg',
          link: 'https://www.instagram.com/telkomdigilearn/',
        },
        {
          icon: '/images/icons/facebook-box-fill.svg',
          link: 'https://www.facebook.com/telkomcorpu/',
        },
        {
          icon: '/images/icons/linkedin-box-fill.svg',
          link: 'https://www.linkedin.com/company/mydigilearn-indonesia/',
        },
        {
          icon: '/images/icons/youtube-fill.svg',
          link: 'https://www.youtube.com/channel/UCOhvQBC8KyvfLp5GBd05i7A',
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
