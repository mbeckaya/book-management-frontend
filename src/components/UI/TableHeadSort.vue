<template>
  <th
      @click="handleClick(field)"
      class="tableHeadSort"
      style="width: 200px; cursor: pointer"
  >
    <span style="float: left">{{ caption }}</span>
    <span class="d-none d-md-block" style="float: right">
      <i v-if="sortBy === field" :class="classSorting"></i>
    </span>
  </th>
</template>

<script>
export default {
  name: 'TableHeadSort',
  props: {
    caption: {
      type: String,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    sortBy: {
      type: String,
      required: true
    },
    orderBy: {
      type: String,
      required: true
    },
    handleClick: {
      type: Function,
      required: true
    }
  },
  computed: {
    classSorting() {
      return {
        'bi bi-sort-up': this.orderBy === 'asc',
        'bi bi-sort-down': this.orderBy === 'desc'
      }
    }
  }
}
</script>