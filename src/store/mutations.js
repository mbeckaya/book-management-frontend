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

const mutations = {
    [UPDATE_BOOK_LIST](state, payload) {
        state.bookList = payload
    },
    [UPDATE_SORTING_SORT_BY](state, payload) {
        state.sortingSortBy = payload
    },
    [UPDATE_SORTING_ORDER_BY](state, payload) {
        state.sortingOrderBy = payload
    },
    [UPDATE_PAGINATION_TOTAL_PAGES](state, payload) {
        state.paginationTotalPages = payload
    },
    [UPDATE_PAGINATION_CURRENT_PAGE](state, payload) {
        state.paginationCurrentPage = payload
    },
    [UPDATE_PAGINATION_PREVIOUS_PAGE](state, payload) {
        state.paginationPreviousPage = payload
    },
    [UPDATE_PAGINATION_NEXT_PAGE](state, payload) {
        state.paginationNextPage = payload
    },
    [UPDATE_PAGINATION_SIZE](state, payload) {
        state.paginationSize = payload
    }
}

export default mutations