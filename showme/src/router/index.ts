import { createRouter, createWebHashHistory } from "vue-router";
import routes from './routes/router'
import { getLoginStatus, getUserInfo } from '../api/login'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    async function letsBegin() {
        let val = await getLoginStatus()
        if (val.data) {
            await getUserInfo()
            next()
        } else {
            if(to.name === 'login' || to.name === 'register'){
                next()
            } else {
                router.replace('/user/login');
            }
        }
    }
    letsBegin()
})

export default router