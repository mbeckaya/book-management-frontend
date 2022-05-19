import bookMixin from '@/mixins/bookMixin'
import {
    UPDATE_BOOK_LIST,
    UPDATE_SORTING_SORT_BY,
    UPDATE_SORTING_ORDER_BY,
    UPDATE_PAGINATION_TOTAL_PAGES,
    UPDATE_PAGINATION_CURRENT_PAGE,
    UPDATE_PAGINATION_PREVIOUS_PAGE,
    UPDATE_PAGINATION_NEXT_PAGE,
    UPDATE_PAGINATION_SIZE
} from './mutationTypes'

const actions = {
    updateBookList({commit}, bookList) {
        commit(UPDATE_BOOK_LIST, bookList)
    },
    async getBookList({commit, getters}) {
        try {
            const response = await bookMixin.methods.fetchBooksMixin(
                getters.sortingSortBy,
                getters.sortingOrderBy,
                getters.paginationCurrentPage,
                getters.paginationSize
            )
            commit(UPDATE_BOOK_LIST, response.data.data)
            commit(UPDATE_PAGINATION_TOTAL_PAGES, response.data.totalPages)
            commit(UPDATE_PAGINATION_CURRENT_PAGE, response.data.currentPage)
            commit(UPDATE_PAGINATION_PREVIOUS_PAGE, response.data.previousPage)
            commit(UPDATE_PAGINATION_NEXT_PAGE, response.data.nextPage)
        } catch (err) {
            console.log(err)
        }
    },
    updateSortingSortBy({commit}, sortingSortBy) {
        commit(UPDATE_SORTING_SORT_BY, sortingSortBy)
    },
    updateSortingOrderBy({commit}, sortingOrderBy) {
        commit(UPDATE_SORTING_ORDER_BY, sortingOrderBy)
    },
    updatePaginationTotalPages({commit}, paginationTotalPages) {
        commit(UPDATE_PAGINATION_TOTAL_PAGES, paginationTotalPages)
    },
    updatePaginationCurrentPage({commit}, paginationCurrentPage) {
        commit(UPDATE_PAGINATION_CURRENT_PAGE, paginationCurrentPage)
    },
    updatePaginationPreviousPage({commit}, paginationPreviousPage) {
        commit(UPDATE_PAGINATION_PREVIOUS_PAGE, paginationPreviousPage)
    },
    updatePaginationNextPage({commit}, paginationNextPage) {
        commit(UPDATE_PAGINATION_NEXT_PAGE, paginationNextPage)
    },
    updatePaginationSize({commit}, paginationSize) {
        commit(UPDATE_PAGINATION_SIZE, paginationSize)
    },
}

export default actions