// 路由和组件映射关系
import Home from './home.vue'
import Login from './login.vue'
import List from './list.vue'

const routes = [
  {
    path: '/list',
    component: List,
    redireact: '/list'  //重定向
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