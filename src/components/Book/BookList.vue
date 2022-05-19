<template>
  <div class="bookList my-4">
    <Alert :message="message" variant="success"/>

    <div class="table-responsive-lg mt-4">
      <table class="table table-bordered table-hover table-sm">
        <thead>
        <tr>
          <TableHeadSort
              caption="Title"
              field="title"
              :sortBy="sortingSortBy"
              :orderBy="sortingOrderBy"
              :handleClick="handleSort"
          />
          <TableHeadSort
              caption="Author"
              field="author"
              :sortBy="sortingSortBy"
              :orderBy="sortingOrderBy"
              :handleClick="handleSort"
          />
          <TableHeadSort
              caption="Publisher"
              field="publisher"
              :sortBy="sortingSortBy"
              :orderBy="sortingOrderBy"
              :handleClick="handleSort"
          />
          <TableHeadSort
              caption="Price"
              field="price"
              :sortBy="sortingSortBy"
              :orderBy="sortingOrderBy"
              :handleClick="handleSort"
          />
          <TableHeadSort
              caption="Pages"
              field="pages"
              :sortBy="sortingSortBy"
              :orderBy="sortingOrderBy"
              :handleClick="handleSort"
          />
          <th>Handback</th>
          <th>Paperback</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="book in bookList" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.publisher }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.pages }}</td>
          <td>{{ showYesOrNo(book.isHandback) }}</td>
          <td>{{ showYesOrNo(book.isPaperback) }}</td>
          <td>
            <router-link
                :to="{ name: 'bookEdit', params: { id: book.id }}"
                class="btn btn-primary me-2"
            >
              <i class="bi bi-pencil"></i>
            </router-link>
            <button
                @click="handleDelete(book.id)"
                class="btn btn-danger"
            >
              <i class="bi bi-trash-fill"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <Pagination
        :totalPages="paginationTotalPages"
        :currentPage="paginationCurrentPage"
        :previousPage="paginationPreviousPage"
        :nextPage="paginationNextPage"
        :handleClick="handlePagination"
    />
  </div>
</template>

<script>
import Pagination from '@/components/UI/Pagination'
import TableHeadSort from '@/components/UI/TableHeadSort'
import Alert from '@/components/UI/Alert'
import bookMixin from '@/mixins/bookMixin'

export default {
  name: 'BookList',
  mixins: [bookMixin],
  components: {
    Pagination,
    TableHeadSort,
    Alert
  },
  created() {
    this.$store.dispatch('getBookList')
  },
  computed: {
    bookList() {
      return this.$store.getters.bookList
    },
    sortingSortBy() {
      return this.$store.getters.sortingSortBy
    },
    sortingOrderBy() {
      return this.$store.getters.sortingOrderBy
    },
    paginationTotalPages() {
      return this.$store.getters.paginationTotalPages
    },
    paginationCurrentPage() {
      return this.$store.getters.paginationCurrentPage
    },
    paginationPreviousPage() {
      return this.$store.getters.paginationPreviousPage
    },
    paginationNextPage() {
      return this.$store.getters.paginationNextPage
    }
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    async handleDelete(id) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        try {
          await this.deleteOneBookMixin(id)
          const bookList = this.$store.getters.bookList.filter(b => b.id !== id)
          this.$store.dispatch('updateBookList', bookList)
          this.message = 'The book was successfully removed'
          setTimeout(() => {
            this.message = ''
          }, 2000)
        } catch (err) {
          console.log(err)
        }
      }
    },
    handleSort(field) {
      if (field === this.sortingSortBy) {
        const orderBy = this.sortingOrderBy === 'asc' ? 'desc' : 'asc'
        this.$store.dispatch('updateSortingOrderBy', orderBy)
      } else {
        this.$store.dispatch('updateSortingSortBy', field)
        this.$store.dispatch('updateSortingOrderBy', 'asc')
      }

      this.$store.dispatch('getBookList')
    },
    handlePagination(currentPage) {
      this.$store.dispatch('updatePaginationCurrentPage', currentPage)
      this.$store.dispatch('getBookList')
    },
    showYesOrNo(val) {
      return val ? 'Yes' : 'No'
    }
  }
}
</script>