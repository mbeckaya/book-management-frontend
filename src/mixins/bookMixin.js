import axios from 'axios'

const url = process.env.VUE_APP_BASE_API_URL

const bookMixin = {
    methods: {
        fetchBooksMixin: function (sortBy, orderBy, currentPage, size) {
            return axios.get(
                `${url}/api/v1/books`
                + `?sort_by=${sortBy}&order_by=${orderBy}`
                + `&page=${currentPage}&size=${size}`
            )
        },
        fetchOneBookMixin: function (id) {
            return axios.get(`${url}/api/v1/books/${id}`)
        },
        createOneBookMixin: function (payload) {
            return axios.post(`${url}/api/v1/books`, payload)
        },
        updateOneBookMixin: function (id, payload) {
            return axios.put(`${url}/api/v1/books/${id}`, payload)
        },
        deleteOneBookMixin: function (id) {
            return axios.delete(`${url}/api/v1/books/${id}`)
        }
    }
}

export default bookMixin

