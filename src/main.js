// 1.创建vue根实例（从node_modules加载vue对象）
// 2.挂载App组件

import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app', // vue接管 main.html这个模版中id为app的div的内容，也是挂载点
  render: h => h(App),
  router    // 路由挂载 (!注意：键必须为 router)
}).$mount('#root')  // 将 'root'挂载在el区域
