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
export default new VueRouter({
  routes
})