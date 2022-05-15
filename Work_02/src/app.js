Vue.component('vue-table', {
    props: {
        titulos: {
            type: Array,
            required: true
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
    template: `
        <div>
            <table :class="estiloBody">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(registro, j) in registros" :key="j">
                        <th>{{ j + 1 }}</th>
                        <th>{{ registro.nombre }}</th>
                        <th>{{ registro.apellido }}</th>
                        <th>{{ registro.provincia }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

const app = new Vue({
    el: '#app',
    data : {
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
});







