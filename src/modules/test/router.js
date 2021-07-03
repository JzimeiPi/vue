// 路由和组件映射关系
import Home from './home.vue'
import Login from './login.vue'

const routes = [
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