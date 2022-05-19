<template>
  <ul
      v-if="totalPages > 0"
      class="pagination"
  >
    <li class="page-item" :class="{ 'disabled': previousPage === 0 }">
      <button
          @click="handleClick(previousPage)"
          :value="previousPage"
          class="page-link"
      >
        Previous
      </button>
    </li>
    <li
        v-for="page in paginationList" :key="page"
        class="page-item"
        :class="{ active: this.currentPage === page }"
    >
      <button
          @click="handleClick(page)"
          :value="page"
          class="page-link"
      >
        {{ page }}
      </button>
    </li>
    <li class="page-item" :class="{ 'disabled': totalPages === currentPage }">
      <button
          @click="handleClick(nextPage)"
          :value="nextPage"
          class="page-link"
      >
        Next
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    }
  },
  computed: {
    paginationList() {
      let paginationList = []
      for (let i = 1; i <= this.totalPages; i++) {
        paginationList.push(i)
      }

      return paginationList
    }
  }
}
</script>