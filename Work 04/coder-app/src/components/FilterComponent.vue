<template>
  <div>
      {{ texto | toUpper('parametro') }}
      {{ idEnMayusculas | toLower }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            texto: 'Tecto con minúsulas!!!',
            idEnMayusculas: 'Test-Mayusculas'
        }
    },
    filters: {
        toUpper: function(input, par1) {
            console.log('Prueba: ', par1); 
            if(!input) return "";
            return input.toString().toUpperCase();
        },
        toLower: function(input) {
            if(!input) return "";
            return input.toString().toLowerCase();
        }
    }
}
</script>

<style>

</style>