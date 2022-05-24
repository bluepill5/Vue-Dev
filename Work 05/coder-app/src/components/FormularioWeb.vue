<template> 
  <div class="container form-style">
    <form @submit.prevent="emitForm">
      <div class="row">
        <div class="col col-12">
          <br><br>
          <div class="input-style">
            <!-- Nombre -->
            <label for="inputNombre" class="text-start">Nombre Completo:</label>
            <input 
              type="text" 
              class="form-control" 
              id="inputNombre" 
              placeholder="Nombre completo"
              v-model="form.nombre"
              @keyup="validateNombre"
              required
            >
            <span v-if="alert.nombre" class="alert-danger">
              {{ alert.nombre }}
            </span>
          </div>
          <br>
          <div class="input-style">
            <!-- Edad -->
            <label for="inputEdad" class="form-label text-start">Edad:</label>
            <input 
              type="number" 
              class="form-control" 
              id="inputEdad" 
              placeholder="Edad" 
              v-model.number="form.edad"
              @keyup="validateEdad"
              required
            >
            <span v-if="alert.edad" class="alert-danger">
              {{ alert.edad }}
            </span>
          </div>
          <br>
          <div class="input-style">
            <!-- Email -->
            <label for="inputEmail" class="form-label text-start">Email</label>
            <input 
              type="email" 
              class="form-control" 
              id="inputEmail" 
              placeholder="tu@email.com" 
              v-model="form.email"
              @keyup="validateEmail"
              required
            >
            <span v-if="alert.email" class="alert-danger">
              {{ alert.email }}
            </span>
          </div>
          <br>
          <!-- Curso -->
          <h4>Selecciona tu curso</h4>
          <div class="row options-style">
            <div class="col col-2">
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  value="javascript" 
                  id="checkJS" 
                  v-model="form.cursos">
                <label class="form-check-label" for="checkJS">
                  JavaScript
                </label>
              </div>
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  value="react" 
                  id="checkReact" 
                  v-model="form.cursos">
                <label class="form-check-label" for="checkReact">
                  React
                </label>
              </div>
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  value="angular" 
                  id="checkNg" 
                  v-model="form.cursos">
                <label class="form-check-label text-start" for="checkNg">
                  Angular
                </label>
              </div>
              <div class="form-check">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  value="vue" 
                  id="checkVue" 
                  v-model="form.cursos">
                <label class="form-check-label" for="checkVue">
                  Vue
                </label>
              </div>
            </div>
          </div>
          <br>
          <div class="input-style">
            <!-- Comentarios -->
            <label for="areaComentarios" class="form-label text-start">Comentarios</label>
            <textarea class="form-control" id="areaComentarios" rows="3"></textarea>
          </div>
          <br>
          <div class="input-style">
            <!-- Tipo beca -->
            <div class="row">
              <h4>Tipo de Beca</h4>
              <div class="col">
                <input 
                  type="radio" 
                  name="check100" 
                  class="form-check-input"
                  value="Beca 100%"
                  v-model="form.beca"
                >
                <label for="check100">Beca completa</label>
              </div>
              <div class="col">
                <input 
                  type="radio" 
                  name="check50" 
                  class="form-check-input"
                  value="Beca 50%"
                  v-model="form.beca"
                >
                <label for="check50">Beca 50%</label>
              </div>
              <div class="col">
                <input 
                  type="radio" 
                  name="check0" 
                  class="form-check-input"
                  value="Sin beca"
                  v-model="form.beca"
                >
                <label for="check0">Sin beca</label>
              </div>
            </div>
          </div>
          <hr>

          <hr>
          <div class="row">
            <br>
            <div class="col-10"></div>
            <br>
            <div class="col-3 center">
              <input 
                type="submit" 
                class="btn btn-primary" 
                value="ENVIAR"
              >
            </div>
            <br>
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioWeb',
  data: () =>  ({
      form: {
        nombre: '',
        edad: '',
        email: '',
        cursos: [],
        comentarios: '',
        beca: ''
      },
      alert: {
        nombre: '',
        edad: '',
        email: '',
      }
  }),
  methods: {
    emitForm() {
      this.$emit('submit-form', this.form);
      this.resetForm();
    },
    resetForm() {
      this.form.nombre = '';
      this.form.edad = '';
      this.form.email = '';
      this.form.cursos = [];
      this.form.comentarios = '';
      this.form.beca = '';
    },
    validateNombre() {
      if (this.form.nombre.length < 2) {
        this.alert.nombre = 'Escribe un nombre real';
      } else {
        this.alert.nombre = '';
      }
    },
    validateEdad() {
      if (this.form.edad < 18) {
        this.alert.edad = 'Debes tener más de 18 años';
      } else if (this.form.edad > 100) {
        this.alert.edad = 'Seguro tienes más de 100 años?';
      } else {
        this.alert.edad = '';
      }
    },
    validateEmail() {
      if (!this.form.email.includes('@')) {
        this.alert.email = 'Ingresa un correo válido';
      } else {
        this.alert.email = '';
      }
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
</style>
