// 1.创建vue根实例（从node_modules加载vue对象）
// 2.挂载App组件

import Vue from 'vue'
import App from './App.vue'

// vue接管 main.html这个模版中id为app的div的内容
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})