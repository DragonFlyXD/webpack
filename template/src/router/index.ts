import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router: Router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

// 导航钩子
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // 判断该路由是否需要登录权限
    if (window.localStorage.ACCESS_TOKEN) { // 如果本地存在 access_token，则继续导航
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
