<template>
   <div class="Titulo">
       <h1>CoderApp</h1>
       <h2>
           <slot></slot>
       </h2>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    font-size: 3rem;
    padding: 2.5rem; 
    margin: 0;
}
.Titulo {
    margin: 0;
    padding: 2.5rem;
    background-color: #ccc;
    margin-inline-start: 2.5rem;
}
</style>