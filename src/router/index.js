import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
    },
    {
        path: '/publish',
        name: 'Publish',
        component: () => import('@/views/Publish'),
    },
]

export default new Router({
    routes,
})
