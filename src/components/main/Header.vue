<template>
  <header
    class="flex justify-between py-2.5 px-6 shadow-sm bg-red-500 sticky top-0 z-50"
  >
    <div class="flex items-center">
      <div class="cursor-pointer hidden lg:block">
        <LogoHeader />
      </div>
      <div class="cursor-pointer lg:ml-8">
        <MenuIcon @click="showCategories = !showCategories" />
        <MenuCategories
          @click="showCategories = false"
          :class="{
            slidedown: showCategories,
            slideup: !showCategories,
          }"
        />
      </div>
      <div class="lg:ml-6">
        <button class="cursor-pointer text-sm text-white hidden md:block">
          Knowledge Feed
        </button>
      </div>
      <div class="lg:ml-8 ml-4">
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <MagnifierIcon />
          </div>
          <input
            id="default-search"
            type="search"
            class="block rounded-full py-1.5 pl-10 lg:w-[30rem] text-sm focus:outline-none bg-red-200 text-gray-900"
            placeholder="Search content or author..."
            required
          />
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex items-center">
        <router-link to="browse-content">
          <p class="text-sm pr-2 hidden lg:block cursor-pointer text-white">
            Browse Content Liblary
          </p>
        </router-link>
        <div
          v-click-outside="() => onClickOutside('Content')"
          class="flex items-center pr-6 gap-3 relative"
          @click="showContent = !showContent"
        >
          <img src="/images/icons/plus.svg" class="cursor-pointer" />
          <MenuContent
            :class="{
              slidedown: showContent,
              slideup: !showContent,
            }"
          />
        </div>
        <div class="block pr-6 cursor-pointer">
          <img src="/images/icons/cart.svg" />
        </div>
        <div
          v-click-outside="() => onClickOutside('Notification')"
          class="pr-6 block cursor-pointer relative"
          @click="showNotification = !showNotification"
        >
          <NotificationIcon :value="10" />
          <MenuNotification
            :class="{
              slidedown: showNotification,
              slideup: !showNotification,
            }"
          />
        </div>
        <div
          v-click-outside="() => onClickOutside('Profile')"
          class="flex items-center relative"
          @click="showProfile = !showProfile"
        >
          <img
            src="/images/default/user-default.png"
            class="w-8 h-8 rounded-full cursor-pointer border bg-gray-100"
            alt=""
          />
          <p class="lg:ml-3 text-sm hidden lg:block cursor-pointer text-white">
            John Doe
          </p>
          <MenuProfile
            :class="{
              slidedown: showProfile,
              slideup: !showProfile,
            }"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showCategories: false,
      showProfile: false,
      showNotification: false,
      showContent: false,
    };
  },
  methods: {
    onClickOutside(type) {
      this[`show${type}`] = false;
    },
  },
};
</script>
