import { createRouter, createWebHistory } from 'vue-router'
import BookIndex from '../views/BookIndex'
import BookCreate from '../views/BookCreate'
import BookEdit from '../views/BookEdit'

const routes = [
    {
        path: '/',
        name: 'bookIndex',
        component: BookIndex
    },
    {
        path: '/add',
        name: 'bookCreate',
        component: BookCreate
    },
    {
        path: '/edit/:id',
        name: 'bookEdit',
        component: BookEdit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
