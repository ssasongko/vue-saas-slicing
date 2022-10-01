<template>
  <div class="absolute bg-white text-gray-500 shadow-global top-10 lg:top-12 right-0 rounded-md">
    <span class="h-14 flex items-center font-semibold cursor-default gap-2 px-4">
      <img src="/images/icons/plus-black.svg">
      <p>Add Content</p>
    </span>
    <router-link
      v-for="(item, index) in list"
      :key="index"
      class="flex gap-3 py-3 px-4 hover:bg-powerblue-100 w-48 cursor-pointer"
      :class="{
        'rounded-b-md': index === list.length-1
      }"
      :to="item.link"
    >
      <img class="w-6 h-6" :src="item.icon" />
      <p>{{ item.name }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "MenuContent",
  data () {
    return {
      list: [
        {
          name: 'Video',
          link: '/video/create',
          icon: '/images/icons/video.svg'
        },
        {
          name: 'Podcast',
          link: '/podcast/create',
          icon: '/images/icons/podcast.svg'
        },
        {
          name: 'Article',
          link: '/article/create',
          icon: '/images/icons/article.svg'
        },
        {
          name: 'Karya tulis',
          link: '/karya-tulis/create',
          icon: '/images/icons/karya_tulis.svg'
        },
        {
          name: 'Case Study',
          link: '/case-study/create',
          icon: '/images/icons/case_study.svg'
        },
        {
          name: 'E-Book',
          link: '/e-book/create',
          icon: '/images/icons/ebook.svg'
        }
      ]
    }
  }
};
</script>
