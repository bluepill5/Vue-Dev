<template>
  <div>
      {{ this.cantidad }}
  </div>
</template>

<script>
import mixinComunes from '../mixins/mixinsComunes.js';

export default {
    data() {
        return {
            mensaje: 'Hola'
        }
    },
    mixins: [mixinComunes],
    mounted() {
        this.Saludar('Usuario');
        this.AumentarCantidad();
        setInterval(() => {
            this.AumentarCantidad()
        }, 1000);
    },
}
</script>

<style>

</style>