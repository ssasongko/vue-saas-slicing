<template>
  <div class="flex justify-between my-8">
    <div class="flex gap-1 items-center text-[#457B9D]">
      <p class="text-sm">Showing 1 to</p>
      <span class="group">
        <p class="bg-[#dae5eb] group-hover:hidden rounded-md px-4 py-1 items-center font-bold text-sm text-[#1F2855]">
          {{ pagination.dataPerPage }}
        </p>
        <select
          v-model="pagination.dataPerPage"
          class="group-hover:flex hidden px-4 py-0 rounded-md border-0 bg-[#dae5eb] text-sm font-bold h-6"
        >
          <option v-for="paging in pagingList" :key="paging">
            {{ paging }}
          </option>
        </select>
      </span>

      <p class="text-sm">of {{ totalData }} entries</p>
    </div>
    <div class="flex gap-1">
      <button @click="decrement" type="button" class="rounded-full bg-rossocorsa-100 p-1.5">
        <img class="w-5" src="/images/icons/chevron-left.svg" />
      </button>
      <div class="flex items-center justify-center w-full rounded-full h-7 gap-2 px-4 bg-[#f9dbdb] text-[#d2000f]">
        <div v-for="number in pagination.rangenumber" :key="number" @click="changePage(number)" class="cursor-pointer">
          <li
            v-if="typeof number === 'number'"
            class="flex items-center justify-center"
            :class="{
              'active': number == pagination.currentPage || number === 1 && !pagination.currentPage,
            }"
          >
            {{ number }}
          </li>
          <li v-else class="flex items-center justify-center">...</li>
        </div>
      </div>
      <button
        @click="increment"
        type="button"
        class="rounded-full bg-rossocorsa-100 p-1.5"
      >
        <img class="w-5 rotate-180" src="/images/icons/chevron-left.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    page: {
      type: [Number, String],
      default() {
        return 1;
      },
    },
    perPage: {
      type: [Number, String],
      default() {
        return 10;
      },
    },
    pagingList: {
      type: Array,
      default() {
        return [10, 25, 50, 100];
      },
    },
    totalPage: {
      type: [Number, String],
      default() {
        return 10;
      },
    },
    totalData: {
      type: [Number, String],
      default() {
        return 10;
      },
    },
  },
  data() {
    return {
      pagination: {
        currentPage: 1,
        dataPerPage: 10,
        rangenumber: [],
      },
    };
  },
  watch: {
    $route(to, from) {
      const { query } = to;

      this.pagination.currentPage = query.page < 0 ? 1 : query.page > this.totalPage ? this.totalPage : query.page;

      this.generateNumber(parseInt(query.page), parseInt(this.totalPage));
    },
    "pagination.dataPerPage": function (limitNumber) {
      this.changePerPage(limitNumber);

      this.generateNumber(parseInt(this.pagination.currentPage), parseInt(this.totalPage));
    },
    page: function (number) {
      this.changePage(number)

      this.generateNumber(parseInt(this.pagination.currentPage), parseInt(this.totalPage));
    },
    perPage: function (number) {
      const existQuery = this.$route.query;

      this.pagination.dataPerPage = number;

      this.$router.push({
        query: { ...existQuery, perpage: number },
      });

      this.generateNumber(parseInt(this.pagination.currentPage), parseInt(this.totalPage));
    },
    totalPage: function (number) {
      this.generateNumber(parseInt(this.pagination.currentPage), parseInt(this.totalPage));
    },
  },
  mounted() {
    const { page, perpage } = this.$router.currentRoute.value.query;

    this.pagination = {
      currentPage: page || 1,
      dataPerPage: perpage || this.pagingList[0],
    };

    this.generateNumber(parseInt(this.pagination.currentPage), parseInt(this.totalPage));
  },
  methods: {
    generateNumber(current, last, width = 2) {
      const left = current - width - 2;
      const right = current + width + 2;
      const range = [];
      const rangeWithDots = [];
      let l;

      for (let i = 1; i <= last; i += 1) {
        if (i === 1 || i === last || (i >= left && i <= right)) {
          range.push(i);
        } else if (i < left) {
          i = left - 1;
        } else if (i > right) {
          range.push(last);
          break;
        }
      }

      range.forEach((i) => {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push(null);
          }
        }
        rangeWithDots.push(i);
        l = i;
      });

      this.pagination.rangenumber = rangeWithDots;
    },
    decrement() {
      if (this.pagination.currentPage > 1) {
        this.changePage(parseInt(this.pagination.currentPage) - 1);
      }
    },
    increment() {
      if (this.pagination.currentPage < this.totalPage) {
        this.changePage(parseInt(this.pagination.currentPage) + 1);
      }
    },
    changePerPage(limitNumber) {
      const existQuery = this.$route.query;

      this.$router.push({
        query: { ...existQuery, perpage: limitNumber },
      });
    },
    changePage(pageNumber) {
      if (typeof pageNumber !== "number") return;
      const existQuery = this.$route.query;

      if (pageNumber !== this.pagination.currentPage) {
        this.$router.push({
          query: { ...existQuery, page: pageNumber },
        });
        this.pagination.currentPage = pageNumber;
      }
    },
  },
};
</script>

<style scoped>
.active {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: #d2000f;
  color: #ffffff;
  display: flex;
}
</style>
