<template>
  <div id="app">
    <p>HELLO</p>
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
