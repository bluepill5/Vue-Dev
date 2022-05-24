<template>
  <div id="app">
    <img class="logo-vue" alt="Vue logo" src="./assets/logo.png">
    <FormularioWeb @submit-form="addUser"/>
    <VueTable
        :titulos=titles
        :registros=users
        :estilo-body=estiloBody
        :estilo-head=estiloHead>
    </VueTable>
  </div>
</template>

<script>
import FormularioWeb from './components/FormularioWeb.vue';
import VueTable from './components/VueTable.vue';

export default {
  name: 'App',
  components: {
    FormularioWeb, VueTable
  },
  data() {
    return {
      titles: ['ID', 'Nombre', 'Edad', 'Email', 'Cursos', 'Beca'],
      users: [],
      estiloBody: "table table-striped table-dark",
      estiloHead: "table-dark",
      showForm: true,
      showVueForm: false
    }
  },
  methods: {
    addUser(form) {
      const newUser = {...form};
      this.users.push(newUser);
      console.log(newUser);
    }
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
