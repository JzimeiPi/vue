// 路由和组件映射关系
import Home from './home.vue'
import Login from './login.vue'
import List from './list.vue'
/**
 * 路由懒加载
 * 减少首次加载资源，提高首次加载效率
 */

const Detail = () => 
  import(/* webpackChunkName: "detail" */'./detail.vue')

const routes = [
  {
    path: '/detail/:id',
    component: Detail,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/',
    component: Home,
    redireact: '/home'  //重定向
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login
  },
]
export default routes