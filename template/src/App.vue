<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {}
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
