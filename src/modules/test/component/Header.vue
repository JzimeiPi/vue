<template>
  <div>
    <h2>Header</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('Header mounted')
  },
  destroyed() {
    console.log('Header destroyed')
  }
}
</script>