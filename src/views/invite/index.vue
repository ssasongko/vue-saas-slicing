<template>
  <div class="flex flex-col gap-y-12 py-5 bg-[#F8F8F8]">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div class="flex flex-col justify-center gap-y-1 text-left">
        <h1 class="text-spacecadet-100 text-lg-2">Invite User</h1>
        <span class="text-spacecadet-60">Send invitation by email to join you domain</span>
      </div>

      <router-link to="home">
        <button
          class="text-sm font-medium w-[188px] bg-virindian-100 mt-5 md:mt-0 py-2.5 px-5 text-white flex items-center justify-center gap-x-2 rounded-lg">
          Finish
        </button>
      </router-link>
    </div>

    <div class="flex flex-col md:flex-row justify-between gap-y-6 md:gap-y-0 gap-x-6">
      <div
        class="w-full md:w-1/2 flex flex-col justify-center gap-y-4 bg-white rounded-lg shadow-lg py-3.5 px-6">
        <h1 class="text-spacecadet-100 text-sm font-medium">Invite by email</h1>
        <div class="flex flex-col gap-y-1">
          <div>
            <label class="text-spacecadet-100 text-xs">Email </label>
            <span class="text-virindian-100 text-xs">*</span>
          </div>
          <div class="flex gap-x-5">
            <input class="w-full text-xs !outline-none border rounded-md" placeholder="mail@mail.com" />
            <button
              class="text-sm font-medium w-[134px] bg-virindian-100 px-3 py-3 text-white flex items-center justify-center gap-x-2 rounded-lg">
              <span class="">Send Invite</span>
            </button>
          </div>
        </div>
        <div v-for="item in [1,2,3]" :key="item" class="flex justify-between items-center">
          <span class="text-spacecadet-60 font-medium font-[15px]">johndoe@mail.com</span>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.9663 11.533C13.233 11.7997 13.233 12.1997 12.9663 12.4663C12.833 12.5997 12.6997 12.6663 12.4997 12.6663C12.2997 12.6663 12.1663 12.5997 12.033 12.4663L8.49967 8.93301L4.96634 12.4663C4.83301 12.5997 4.69967 12.6663 4.49967 12.6663C4.29967 12.6663 4.16634 12.5997 4.03301 12.4663C3.76634 12.1997 3.76634 11.7997 4.03301 11.533L7.56634 7.99967L4.03301 4.46634C3.76634 4.19967 3.76634 3.79967 4.03301 3.53301C4.29967 3.26634 4.69967 3.26634 4.96634 3.53301L8.49967 7.06634L12.033 3.53301C12.2997 3.26634 12.6997 3.26634 12.9663 3.53301C13.233 3.79967 13.233 4.19967 12.9663 4.46634L9.43301 7.99967L12.9663 11.533Z"
              fill="black" />
            <mask id="mask0_5276_148868" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="11"
              height="10">
              <path
                d="M12.9663 11.533C13.233 11.7997 13.233 12.1997 12.9663 12.4663C12.833 12.5997 12.6997 12.6663 12.4997 12.6663C12.2997 12.6663 12.1663 12.5997 12.033 12.4663L8.49967 8.93301L4.96634 12.4663C4.83301 12.5997 4.69967 12.6663 4.49967 12.6663C4.29967 12.6663 4.16634 12.5997 4.03301 12.4663C3.76634 12.1997 3.76634 11.7997 4.03301 11.533L7.56634 7.99967L4.03301 4.46634C3.76634 4.19967 3.76634 3.79967 4.03301 3.53301C4.29967 3.26634 4.69967 3.26634 4.96634 3.53301L8.49967 7.06634L12.033 3.53301C12.2997 3.26634 12.6997 3.26634 12.9663 3.53301C13.233 3.79967 13.233 4.19967 12.9663 4.46634L9.43301 7.99967L12.9663 11.533Z"
                fill="white" />
            </mask>
            <g mask="url(#mask0_5276_148868)">
              <rect x="0.5" width="16" height="16" fill="#0093AD" />
            </g>
          </svg>

        </div>
      </div>
      <div
        class="w-full md:w-1/2 flex flex-col gap-y-4 bg-white rounded-lg shadow-lg py-3.5 px-6 h-min-full">
        <h1 class="text-spacecadet-100 text-sm font-medium">Invite by link</h1>
        <div class="flex flex-col gap-y-1">
          <div>
            <label class="text-spacecadet-100 text-xs">Link</label>
          </div>
          <div class="flex gap-x-5">
            <input class="w-full text-xs !outline-none border rounded-md" placeholder="mail@mail.com" />
            <button
              class="text-sm font-medium w-[134px] bg-virindian-100 p-3 text-white flex items-center justify-center gap-x-2 rounded-lg">
              <span class="">Copy Link</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>