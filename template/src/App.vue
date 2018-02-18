<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
body, html
  margin 0
  padding 0
  height 100%
  font-family 'monaco', 'menlo', serif, sans-serif
  font-size 16px
  #app
    height 100%
</style>
