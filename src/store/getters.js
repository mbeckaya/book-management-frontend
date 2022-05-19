const getters = {
    bookList: (state) => state.bookList,
    sortingSortBy: (state) => state.sortingSortBy,
    sortingOrderBy: (state) => state.sortingOrderBy,
    paginationTotalPages: (state) => state.paginationTotalPages,
    paginationCurrentPage: (state) => state.paginationCurrentPage,
    paginationPreviousPage: (state) => state.paginationPreviousPage,
    paginationNextPage: (state) => state.paginationNextPage,
    paginationSize: (state) => state.paginationSize
}

export default getters