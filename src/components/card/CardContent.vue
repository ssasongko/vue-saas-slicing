<template>
  <div
    class="card-content relative flex h-full bg-white shadow-lg rounded-md"
    :class="{
      'flex-col': isColumn,
    }"
  >
    <div class="relative">
      <img
        v-if="banner"
        :src="banner"
        :class="{
          'h-[250px] w-full rounded-t-md': isColumn,
          'h-auto w-1/3 rounded-l-md': !isColumn,
        }"
      />
      <div class="backdrop-banner absolute top-0 w-full h-full backdrop-brightness-[.4] rounded z-10">
        <div class="flex justify-center items-center h-full w-full">
          <a :href="link" class="border outline-white text-white text-sm px-5 py-2 rounded">review</a>
          <button class="bg-white text-black text-sm px-5 py-2 rounded ml-4" @click="this.$emit('selected')">{{ isChecked.includes(id) ? 'Remove' : 'Select' }}</button>
        </div>
      </div>
    </div>
    <div class="absolute w-full top-4">
      <div class="flex justify-between">
        <Badge class="ml-5">Free</Badge>
        <img :src="isChecked.includes(id) ? '/images/icons/checked.svg' : '/images/icons/uncheked.svg'" class="mr-5" alt="select-icon" />
      </div>
    </div>
    <div
      class="flex flex-col gap-4 justify-between"
      :class="{
        'w-full pl-6 pr-3 py-2': !isColumn,
        'h-full': isColumn,
      }"
    >
      <div class="py-2 px-3" :class="!isColumn ? 'flex justify-between' : ' mt-1'">
        <div class="">
          <h4 class="text-[#457B9D] text-base font-bold">
            {{ title }}
          </h4>
          <p class="text-[#8fafc4] mt-2 text-xs">[ {{ level }} ]</p>
        </div>
        <slot v-if="!isColumn" name="point"></slot>
      </div>
      <div class="flex justify-between p-2 px-3 items-center">
        <div class="flex items-center gap-2">
          <img v-if="authorImage" class="rounded-full w-10 h-10" :src="authorImage" />
          <img v-else class="rounded-full w-10 h-10" src="/images/default/user-default.png" />
          <div class="flex flex-col gap-1">
            <p class="font-light text-spacecadet-100 text-xs">
              {{ authorName }}
            </p>
            <slot></slot>
          </div>
        </div>
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardContent",
  props: {
    id: {
      type: [String, Number],
      required: true,
      default() {
        return "";
      },
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default() {
        return "";
      },
    },
    banner: {
      type: String,
      default() {
        return "";
      },
    },
    level: {
      type: String,
      default() {
        return "";
      },
    },
    authorName: {
      type: String,
      default() {
        return "";
      },
    },
    authorSubtitle: {
      type: String,
      default() {
        return "-";
      },
    },
    isChecked: {
      type: [Array],
      default() {
        return "";
      },
    },
    authorImage: {
      type: String,
      default() {
        return "";
      },
    },
    isColumn: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data(){
    return {
      selectedContent: []
    }
  }
};
</script>

<style lang="scss" scoped>
.card-content {
  & .backdrop-banner {
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
  }
  &:hover .backdrop-banner {
    opacity: 1;
    visibility: visible;
  }
}
</style>
