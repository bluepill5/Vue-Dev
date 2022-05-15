<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg=mensaje />
    <TituloComponent titulo='Home'/>
    <DescriptionComponent/>
    <WatchTest/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TituloComponent from './components/TituloComponent.vue';
import DescriptionComponent from './components/DescriptionComponent.vue';
import TestWatcher from './components/WatchTest.vue';

export default {
  name: 'App',
  components: {
    HelloWorld, TituloComponent, DescriptionComponent, WatchTest
  },
  data() {
    return {
      mensaje: "Hola coders!!!"
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.FondoNegro {
  background-color: black;
}
</style>
