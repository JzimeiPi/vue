// 导入模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import testRouter from '../modules/test/router'

// 注册在Vue中
Vue.use(VueRouter)

const routes = [
  ...testRouter
]

// 创建实例 (传入 键 必须为routes)
const router = new VueRouter({
  routes
})

// 导航守卫（全局）
router.beforeEach((to, from, next) => {
  const list = ['/login', '/home', '/']
  if (!list.includes(to.path)) {
    // next({path: '/login'}) // 先放开权限
    next()
  } else {
    next()
  }
})

export default router