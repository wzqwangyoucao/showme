import { userInfo, getUserInfo } from '../api/login'
export default {
    state() {
        return {
            userName: ''
        }
    },
    mutations: {
        setUserInfo(state: any, userInfo: userInfo) {
            state.userName = userInfo.userName
        }
    },
    actions: {
        getUserInfo(context: any) {
            getUserInfo().then(res => {
                context.commit('setUserInfo', res.data.userInfo)
            })
        }
    }
}