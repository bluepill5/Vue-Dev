<template>
  <div>
      {{ titulo }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: 'Hola bluepill5!!!!'
        }
    },
    mounted() {
        setTimeout(() => {
            this.titulo = 'Hola coders!!!!'
        }, 3000);
    },
    watch: {
        titulo: function(newVal, oldVal) {
            console.log(`El titulo ha cambiado de ${oldVal} a ${newVal}`)
        }
    }
}
</script>

<style>

</style>
