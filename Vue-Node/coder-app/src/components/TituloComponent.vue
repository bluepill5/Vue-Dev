<template>
  <div class="Titulo">
      {{ titulo }}
      {{ numeroA }}
  </div>
</template>

<script>
export default {
  name: 'TituloComponent',
  props: {
    titulo: {
      type: String,
      required: true
    }
  },
  data() {
      return {
          numeroA: 1
      }
  },
  mounted() {
      this.Titulo = 3;
  },
  computed: {
      NumeroA: {
          get() {
              return this.numeroA;
          },
          set(newValue) {
              this.numeroA = newValue;
          }
      }
  }
}
</script>

<style scoped>
.Titulo {
    background-color: #999;
    padding: 1rem;
    font-size: 1.2rem;
}
</style>
