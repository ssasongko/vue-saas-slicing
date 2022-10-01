<template>
  <div class="absolute z-10 left-0 w-full top-10 lg:top-14 mt-3 lg:mt-2 bg-white overflow-y-scroll">
    <div class="bg-white-primary rounded z-40 shadow-lg">
      <div class="grid grid-cols-1 md:grid md:grid-cols-5 text-black-primary py-6">
        <!-- Menu -->
        <div class="md:px-12 px-4 pb-4">
          <div class="flex items-center px-6 border-falcon-500 pb-4 gap-3">
            <img src="/images/icons/hamburger-bar.svg">
            <h3 class="text-base-2 font-bold text-[#1F2855]">Menu</h3>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-1 mt-3 gap-2 px-4">
            <div
              v-for="(item, index) in menu"
              :key="index"
              class="grid grid-cols-1"
            >
              <button
                type="button"
                @click="openRedirect(item.link)"
                class="text-[#1F2855] hover:text-virindian-primary hover:bg-[#EEF8F9] rounded-md px-3 py-3 gap-4 flex items-center"
              >
                <img class="w-6 h-6" :src="item.icon" alt="" />
                <div class="text-sm">{{ item.name }}</div>
              </button>
            </div>
          </div>
        </div>
        <!-- Categories -->
        <div class="md:px-12 px-4 pb-4 col-span-3 border-l">
          <div class="flex items-center px-6 border-falcon-500 pb-4 gap-3">
            <img src="/images/icons/hamburger-window.svg">
            <h3 class="text-[#1F2855] text-base-2 font-bold">Categories</h3>
          </div>
          <div class="grid grid-cols-1 lg:grid-rows-10 lg:grid-flow-col px-4">
            <!-- <div class="w-full mt-3" v-for="list in $store.root.initialMenuCategories" :key="list">
              <button
                type="button"
                @click="openRedirect(item.link)"
                class="flex text-sm items-center gap-4 px-3 py-3 border-transparent cursor-pointer rounded-md text-[#1F2855] hover:text-virindian-primary hover:bg-[#EEF8F9]"
              >
                <img src="/img/icons/diamond.svg">
                <div>
                  {{ list.title }}
                </div>
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuCategories",
  data() {
    return {
      menu: [
        {
          name: "Videos",
          icon: "/images/icons/youtube.svg",
          link: "/videos",
        },
        {
          name: "Podcast",
          icon: "/images/icons/podcast-color.svg",
          link: "/podcasts",
        },
        {
          name: "Webinar",
          icon: "/images/icons/video.svg",
          link: "/webinar",
        },
        {
          name: "Article",
          icon: "/images/icons/article.svg",
          link: "/articles",
        },
        {
          name: "Course",
          icon: "/images/icons/course.svg",
          link: "/courses",
        },
        {
          name: "Karya Tulis",
          icon: "/images/icons/karya_tulis.svg",
          link: "/karya-tulis",
        },
        {
          name: "Program",
          icon: "/images/icons/program.svg",
          link: "/programs",
        },
        {
          name: "Journey",
          icon: "/images/icons/journey.svg",
          link: "/journey",
        },
        {
          name: "Case Study",
          icon: "/images/icons/case_study.svg",
          link: "/case-study",
        },
        {
          name: "Library",
          icon: "/images/icons/ebook.svg",
          link: "/library",
        },
        { name: "Quiz", icon: "/images/icons/question.svg", link: "/quiz" },
      ],
    };
  },
};
</script>
<style></style>
