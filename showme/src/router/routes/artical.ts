import { RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [{
    path: '/artical',
    component: () => import('../../page/artical/index.vue'),
    children: [
        { path: 'allArtical', component: () => import('../../page/artical/center/allArtical.vue'), name: 'allArtical' },
        { path: '/artical/:id', component: () => import('../../page/artical/center/articalDetal.vue'), name: 'articalDetal' }
    ]
}]

export default route