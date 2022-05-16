<template>
  <div id="app">
    <h1>Componentes personalizadas:</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Tabla 1:</h2>
    <VueTable
        :titulos=tabla1.titulos
        :registros=tabla1.registros
        :estilo-body=tabla1.estiloBody
        :estilo-head=tabla1.estiloHead>
    </VueTable>
    <h2>Tabla 2:</h2>
    <VueTable
        :titulos=tabla2.titulos
        :registros=tabla2.registros
        :estilo-body=tabla2.estiloBody
        :estilo-head=tabla2.estiloHead>
    </VueTable>
    <h2>Tabla 3:</h2>
    <VueTable
        :titulos=tabla3.titulos
        :registros=tabla3.registros
        :estilo-body=tabla3.estiloBody
        :estilo-head=tabla3.estiloHead>
    </VueTable>
  </div>
</template>

<script>
import VueTable from './components/VueTable.vue';

export default {
  name: 'App',
  components: {
    VueTable
  },
  data() {
        return {
            tabla1: {
                titulos: ['ID', 'Nombre', 'Apellidos', 'Provincia'],
                registros: [
                    {
                        nombre: 'Jose',
                        apellido: 'Velez',
                        provincia: 'San Luis'
                    },
                    {
                        nombre: 'Ramon',
                        apellido: 'Gomez',
                        provincia: 'Santa Fe'
                    },
                    {
                        nombre: 'Marcelo',
                        apellido: 'Godino',
                        provincia: 'Buenos Aires'
                    },
                    {
                        nombre: 'Ramiro',
                        apellido: 'Gimenez',
                        provincia: 'Salta'
                    },
                    ],
                    estiloBody: "table table-striped table-dark",
                    estiloHead: "table-dark",
            },
            tabla2: {
                titulos: ['ID', 'Nombre', 'Apellidos', 'Provincia'],
                registros: [
                    {
                        nombre: 'Jose',
                        apellido: 'Velez',
                        provincia: 'San Luis'
                    },
                    {
                        nombre: 'Ramon',
                        apellido: 'Gomez',
                        provincia: 'Santa Fe'
                    },
                    {
                        nombre: 'Marcelo',
                        apellido: 'Godino',
                        provincia: 'Buenos Aires'
                    },
                    {
                        nombre: 'Ramiro',
                        apellido: 'Gimenez',
                        provincia: 'Salta'
                    },
                ],
                estiloBody: "table table-striped table-warning",
                estiloHead: "table-dark",
            },
            tabla3: {
                titulos: ['ID', 'Nombre', 'Apellidos', 'Provincia'],
                registros: [
                    {
                        nombre: 'Jose',
                        apellido: 'Velez',
                        provincia: 'San Luis'
                    },
                    {
                        nombre: 'Ramon',
                        apellido: 'Gomez',
                        provincia: 'Santa Fe'
                    },
                    {
                        nombre: 'Marcelo',
                        apellido: 'Godino',
                        provincia: 'Buenos Aires'
                    },
                    {
                        nombre: 'Ramiro',
                        apellido: 'Gimenez',
                        provincia: 'Salta'
                    },
                ],
                estiloBody: "table table-striped table-info",
                estiloHead: "table-dark",
            }
        }
    }
}
</script>

<style>
body {
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 60px;
    background-color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
