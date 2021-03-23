import { createStore } from 'vuex'
import userInfo from './userInfo'

export const store = createStore({
  modules: {
    userInfo
  }
})