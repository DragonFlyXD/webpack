import * as types from './mutation-types'

export default {
  // 检验登录状态
  [types.CHECKOUT_LOGIN_STATUS](state) {
    state.isLogined = !!window.localStorage.ACCESS_TOKEN
  },
  // 用户退出
  [types.USER_LOGOUT](state) {
    // 清除用户的 ACCESS_TOKEN
    window.localStorage.removeItem('ACCESS_TOKEN')
  }
}