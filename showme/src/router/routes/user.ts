import { RouteRecordRaw } from 'vue-router'

const route: Array<RouteRecordRaw> = [{
    path: '/user',
    component: () => import('../../page/user/user.vue'),
    children: [
        { path: 'login', component: () => import('../../page/user/login.vue'), name: 'login' },
        { path: 'register', component: () => import('../../page/user/register.vue'), name: 'register' }
    ]
}]

export default route