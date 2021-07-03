<template>
  <div id="root">
    <!-- router-link 默认是个 a 标签 -->
    <!-- router-link to 指定链接 -->
    <router-link to="/home">Home</router-link>  
    <router-link to="/login">Login</router-link>
    <router-link to="/list">List</router-link>

    <!-- router-view 路由出口，匹配到的组件渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

