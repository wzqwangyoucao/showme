import { RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [
    { path: '/', component: () => import('../components/HelloWorld.vue') },
]

export default route