import { RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
    { path: '/login',component: () => import('../page/login.vue') },
]

export default route