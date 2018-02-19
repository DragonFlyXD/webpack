import { MutationTree } from 'vuex'
import types from './mutation-types'

const mutations: MutationTree<any> = {
  // 检验登录状态
  [types.CHECKOUT_LOGIN_STATUS](state): void {
    state.isLogined = !!window.localStorage.ACCESS_TOKEN
  },
  // 用户退出
  [types.USER_LOGOUT](state): void {
    // 清除用户的 ACCESS_TOKEN
    window.localStorage.removeItem('ACCESS_TOKEN')
  }
}

export default mutations