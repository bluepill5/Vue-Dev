<template>
  <div id="app">
    <img alt="R logo" src="./assets/I-LOVE-R.png">
  </div>
</template>

<script>
import ProductComp from './components/ProductComp.vue'

export default {
  name: 'App',
  components: {
    ProductComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
