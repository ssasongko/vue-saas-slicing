<template>
  <div
    class="absolute bg-white text-gray-500 shadow-global top-12 right-0 rounded-md w-44"
  >
    <div class="px-2 flex justify-between my-3">
      <span class="items-center font-semibold cursor-default">Profile</span>
      <span class="bg-[#D0F5E0] text-[#28C76F] rounded px-1">free</span>
    </div>
    <div class="px-3">
      <button
        class="bg-[#0093AD] py-1 mb-2 px-1 w-full text-sm rounded text-white"
        @click="showModalUpgradePlane = !showModalUpgradePlane"
      >
        Upgrade Now
      </button>
    </div>
    <hr class="mt-2 text-[#B9B9C3]" />
    <p class="py-3 px-3 hover:bg-powerblue-100 cursor-pointer">My Profile</p>
    <p class="py-3 px-3 hover:bg-powerblue-100 cursor-pointer">Transaction</p>
    <p class="py-3 px-3 hover:bg-powerblue-100 rounded-b-md cursor-pointer">
      Logout
    </p>
  </div>
</template>
<script>
export default {
  name: 'MenuProfile',
  props: {
    closeModalUpgradePlane: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      showModalUpgradePlane: false
    }
  },
  watch: {
    showModalUpgradePlane: function(params) {
      this.$emit('showModal', params)
    },
    closeModalUpgradePlane: function(newVal) {
      this.showModalUpgradePlane = newVal
    }
  }
};
</script>
