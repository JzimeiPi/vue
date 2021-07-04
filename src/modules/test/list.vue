<template>
  <div>
    <h1>This is List Component</h1>
    <div
      style="display:flex;justify-content:space-between;padding:10px 30px;border-bottom:1px solid #999;"
      v-for="(item, i) in list"
      :key="i"
      @click="toDetail(item)"
    >
      <div>{{item.content}}</div>
      <button @click.stop="del($event, i)">del</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    for(let i = 0; i < 6; i++) {
      this.list.push({
        id: i+1,
        content: `Item View ${i+1}`,
        info: null
      })
    }
  },
  methods: {
    toDetail(item) {
      const { id } = item
      this.$router.push(`/detail/${id}`)
    },
    del(e, i) {
      // 阻止冒泡
      // stopPropagation ，也可以用vue中 stop修饰符
      // e.stopPropagation()
      this.list.splice(i, 1)
    }
  }
}
</script>