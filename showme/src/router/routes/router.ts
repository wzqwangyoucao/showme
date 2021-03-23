import { RouteRecordRaw } from 'vue-router'

import userRouter from './user'

const route: Array<RouteRecordRaw> = [
    ...userRouter
]

export default route