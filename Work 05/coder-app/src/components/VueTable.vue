<template>
  <div>
    <table :class=estiloBody>
      <thead class="thead-light">
        <tr>
          <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(registro, j) in registros" :key="j">
          <th>{{ j + 1 }}</th>
          <th>{{ registro.nombre }}</th>
          <th>{{ registro.edad }}</th>
          <th>{{ registro.email }}</th>
          <th>{{ registro.cursos }}</th>
          <th>{{ registro.beca }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'VueTable',
    props: {
        titulos: {
            type: Array
        },
        registros: {
            type: Array
        },
        estiloHead: {
            type: String
        },
        estiloBody: {
            type: String
        },
    },
};
</script>

<style>
.colorGreen {
    color: greenyellow;
}

.color999 {
    color: #999;
}

.color555 {
    color: #555;
}

.fondoGris {
    background-color: #333;
}

.letraAmarilla {
    color: #FF0;
}

.divExample {
    padding: 20px 50px;
    margin: 10px 0;
    border: 1px solid #222;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: white;
}

.divExample input {
    padding: 10px 20px;
    border: 1px solid #333;
    border-radius: 10px;
    font-size: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.miTabla {
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px;
    color: black;
}

.miTabla div {
    padding: 10px 60px;
}

.fondoCCC {
    background-color: #CCC;
}

.fondo888 {
    background-color: #888;
}

.filaTabla {
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
}

.GrillaProducto {
    width: 300px;
    /* height: 250px; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
}

.h1, h1 {
    font-size: 1.1em;
}
.h3, h3 {
    font-size: 1em;
}

</style>
