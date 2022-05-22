<template>
  <div id="app">
    <CarritoComponent :productos="productosEnCarrito" />

    <TituloComponent>
       A new block of ideas
    </TituloComponent>

    <img class="roundedImg" alt="Logo" src="./assets/I-LOVE-R.png" />
    <div class="contenedorProductos">
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
    <br><br>
    <SlotsComponent>
      <template v-slot:slot1>
        <h3>Un título para la página</h3>
      </template>

      <p>Un párrafo para el contenido principal</p>
      <p>y otro más</p>

      <template v-slot:slot2>
        <h3>Footer de la página</h3>
      </template>
    </SlotsComponent>
    <br><br>

    <FilterComponent></FilterComponent>
    <br><br>
    
    <MixinComponent></MixinComponent>
  </div>
</template>

<script> 
import ProductComponent from "./components/ProductComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import TituloComponent from "./components/TituloComponent.vue";
import SlotsComponent from "./components/SlotsComponent.vue";
import FilterComponent from "./components/FilterComponent.vue";
import MixinComponent from "./components/MixinComponent.vue";

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
    ProductComponent, CarritoComponent, TituloComponent, SlotsComponent,
    FilterComponent, MixinComponent
  },
  methods: {
    AgregarAlCarrito(id){
      let result = this.productos.find((prod) => {
        return prod.id == id;
      });
      this.productosEnCarrito.push(result);
    }
  }
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
.contenedorProductos {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
