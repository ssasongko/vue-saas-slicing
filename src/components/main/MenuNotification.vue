<template>
  <div class="absolute bg-white text-gray-500 shadow-global top-12 right-0 rounded-md">
    <div class="h-10 flex justify-between items-center cursor-default px-4 pt-2 w-96">
      <p class="font-semibold">Notification</p>
      <span class="rounded-full text-white py-1 px-2 bg-powerblue-primary">
        <p class="text-virindian-primary font-medium text-sm">6 New</p>
      </span>
    </div>
    <hr class="mt-2">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="flex py-3 px-4 gap-3 hover:bg-powerblue-100 cursor-pointer"
      :class="{
        'border-b': index !== list.length-1
      }"
    >
      <img class="w-10 h-10 rounded-full" :src="item.image" />
      <span class="flex flex-col text-sm">
        <p class="font-semibold">{{ item.text }}</p>
        <p class="font-light">{{ item.date }}</p>
      </span>
    </div>
    <div class="py-2 px-4 flex items-center">
      <button class="bg-virindian-primary text-white w-full rounded py-2" type="button">Read All Notification</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuNotification",
  data () {
    return {
      list: [
        {
          image: '/images/default/user-default.png',
          text: 'Congratulate Sam for work update 🎉',
          date: 'Mar 15 12:50pm'
        },
        {
          image: '/images/default/user-default.png',
          text: 'Congratulate Sam for work update 🎉',
          date: 'Mar 15 12:50pm'
        }
      ]
    }
  }
};
</script>
