<template>
  <div>
    <h1>This is Home Component</h1>
    <div></div>
    <button @click="btn('h')">H</button>
    <button @click="btn('c')">C</button>
    <button @click="btn('f')">F</button>
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script>
import Header from './component/Header.vue'
import Content from './component/Content.vue'
import Footer from './component/Footer.vue'

export default {
  components: {
    Header,
    Content,
    Footer
  },
  data() {
    return {
      status: 'h',
    }
  },
  computed: {
    component() {
      const info = {
        'h': Header,
        'c': Content,
        'f': Footer,
      }
      return info[this.status]
    }
  },
  methods: {
    // keep-alive 使用，
    // 可以用 v-show实现相同效果，但是第一次消耗较大，可根据组件重量决定
    btn(flag) {
      this.status = flag
    }
  }
}
</script>