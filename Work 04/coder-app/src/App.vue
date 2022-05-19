<template>
  <div id="app">
    <img class="roundedImg" alt="Logo" src="./assets/I-LOVE-R.png" />
    <div>
      <ProductComponent
        v-for="(item, i) in productos"
        :key="i"
        :id="item.id"
        :titulo="item.titulo"
        :precio="item.precio"
        :nombre-imagen="item.nombreImagen"
        :destacado="item.destacado"
        @agregar-al-carrito="AgregarAlCarrito"
      >
      </ProductComponent>
    </div>
  </div>
</template>

<script>
import ProductComponent from "./components/ProductComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";

export default {
  name: "App",
  data() {
    return {
      productos: [
        {
          id: 1,
          titulo: "Notebook HP",
          precio: 170000,
          nombreImagen: "notebookHP.png",
          destacado: false,
        },
        {
          id: 2,
          titulo: "Celular Motorola",
          precio: 53000,
          nombreImagen: "celular-motorola.png",
          destacado: false,
        },
        {
          id: 3,
          titulo: "Monitor Samsung",
          precio: 71000,
          nombreImagen: "monitor-samsung.png",
          destacado: true,
        },
      ],
      productosEnCarrito: [],
    };
  },
  components: {
    ProductComponent, CarritoComponent
  },
};
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
.roundedImg {
  border-radius: 50%;
  block-size: 17%;
  inline-size: 17%;
}
</style>
