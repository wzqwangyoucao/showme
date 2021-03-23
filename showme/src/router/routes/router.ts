import { RouteRecordRaw } from 'vue-router'

import userRouter from './user'
import articalRouter from './artical'

const route: Array<RouteRecordRaw> = [
    ...userRouter,
    ...articalRouter
]

export default route