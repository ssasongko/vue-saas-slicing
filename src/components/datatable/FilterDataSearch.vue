<template>
  <section>
    <div class="flex shadow-primary h-auto relative">
      <input
        v-model="search.fieldtext"
        type="text"
        placeholder="Search here"
        class="w-full p-4 rounded-md border-0 text-[#B4CAD8]"
      />
      <div class="absolute right-4 top-4 cursor-pointer">
        <img src="/img/icons/IconSearch.svg" alt="" />
      </div>
    </div>
    <div class="flex justify-space-between mt-6 gap-5">
      <p
        class="flex shrink-0 items-center text-[#8fafc4] text-sm whitespace-nowrap"
      >
        {{ totalData }} results found
      </p>
      <div class="flex items-start w-full flex-wrap gap-2 text-sm">
        <div
          v-if="search.filter.length > 0"
          class="flex items-center rounded-3xl text-virindian-primary bg-powerblue-primary py-2 px-4 gap-2"
        >
          <p class="text-sm cursor-default">
            {{ search.filter[0].toUpperCase() + search.filter.slice(1) }}
          </p>
          <span class="text-base-1 cursor-pointer" @click="deleteFilter()"
            >&times;</span
          >
        </div>
        <div
          v-if="search.skill.length > 0"
          class="flex items-center rounded-3xl text-virindian-primary bg-powerblue-primary py-2 px-4 flex gap-2 items-center"
        >
          <p class="text-sm cursor-default">
            {{ search.skill[0].toUpperCase() + search.skill.slice(1) }}
          </p>
          <span class="text-base-1 cursor-pointer" @click="deleteSkill()"
            >&times;</span
          >
        </div>
        <div
          v-if="search.categories && search.categories.length > 0"
          class="flex gap-2"
        >
          <div
            v-for="(item, index) in search.categories"
            :key="index"
            class="flex items-center rounded-3xl text-virindian-primary bg-powerblue-primary py-2 px-4 gap-2"
          >
            <p class="text-sm cursor-default">{{ item }}</p>
            <span
              class="text-base-1 cursor-pointer"
              @click="deleteCategory(index)"
              >&times;</span
            >
          </div>
        </div>
      </div>
      <div class="flex shrink-0 items-center gap-2">
        <button
          class="flex rounded-md p-1.5 border border-[#0093ad] items-center focus:bg-[#dcf0f1]"
          @click="modalShow = !modalShow"
        >
          <img class="w-8" src="/img/icons/filter.svg" alt="" />
        </button>
        <div
          class="flex box-border overflow-hidden items-center border border-[#0093ad] rounded-md"
        >
          <button
            @click="$emit('changeLayout', false)"
            type="button"
            class="focus:bg-[#dcf0f1] rounded-l-md border-r border-[#0093ad] color-search p-2"
          >
            <img class="w-8" src="/img/icons/IconGrid.svg" />
          </button>
          <button
            @click="$emit('changeLayout', true)"
            type="button"
            class="focus:bg-[#dcf0f1] rounded-r-md p-2"
          >
            <img class="w-8" src="/img/icons/IconList.svg" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FilterData',
  props: {
    columnMode: {
      type: Boolean,
      default() {
        return false;
      },
    },
    totalData: {
      type: Number,
      default() {
        return 0;
      },
    },
    modelValue: {
      type: Object,
      default() {
        return {
          filter: '',
          skill: [],
          categories: [],
        };
      },
    },
  },
  data() {
    return {
      modalShow: false,
      search: this.modelValue || {
        fieldtext: '',
        filter: '',
        skill: '',
        categories: [],
      },
    };
  },
  methods: {
    deleteCategory(index) {
      this.search.categories.splice(index, 1);
      this.$emit('update:modelValue', this.search);
    },
    deleteSkill() {
      this.search.skill = '';
      this.$emit('update:modelValue', this.search);
    },
    deleteFilter() {
      this.search.filter = '';
      this.$emit('update:modelValue', this.search);
    },
  },
};
</script>
