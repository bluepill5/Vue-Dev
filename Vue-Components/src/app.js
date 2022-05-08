// Mi primer componente
Vue.component('mi-primer-componente', {
    template: `
    <div class="divExample fondoGris">
        <h3>Este es mi primer componente</h3>
        <div>Incluye todo los que está dentro</div>
        <div>En poco tiempo podré hacerlos yo mismo</div>
    </div>
    `
});

// Con props
Vue.component('producto-grilla', {
    props: ['titulo', 'precio', 'srcImg'],
    template: `
    <div class="GrillaProducto text-center">
        <div>
            <img :alt="titulo" :src="srcImg" class="imagenProductoGrilla" />
        </div>
        <h3 class="text-center">{{titulo}}</h3>
        <div class="text-center">$ {{ precio }}</div>
    </div>
    `
});

// Con props tipadas
Vue.component('producto-grilla-tipada', {
    props: {
        titulo: {
            type: String,
            required: true
        },
        srcImg: {
            type: String,
            required: true
        },
        precio: {
            type: Number, 
            required: true
        },
        mostrarBoton: {
            type: Boolean
        }
    },
    template: `
    <div class="GrillaProducto text-center">
        <div>
            <img :alt="titulo" :src="srcImg" class="imagenProductoGrilla" />
        </div>
        <h3 class="text-center">{{titulo}}</h3>
        <div class="text-center">$ {{ precio }}</div>
        <button v-if="mostrarBoton" class="btn btn-success btn-rounded">Agregar</button>
    </div>
    `
});

const app = new Vue({
    el: '#app',
    data: {
        productos: [
            {
                titulo: "Notebook HP",
                precio: 170000,
                srcImg: "./images/notebookHP.png",
                stock: 0
            },
            {
                titulo: "Celular motorola",
                precio: 53000,
                srcImg: "./images/notebookHP.png",
                stock: 10
            },
            {
                titulo: "Monitor Samsung",
                precio: 710000,
                srcImg: "./images/notebookHP.png",
                stock: 10
            },
        ]
    },
    template: `
    <div>
        <div class="divExample">
            Mi primer componente:
            <mi-primer-componente></mi-primer-componente>

        </div>
        <div class="divExample">
            <div class="contenedorProductos">
                <producto-grilla
                    titulo="Notebook HP"
                    precio="170000"
                    src-img="./images/notebookHP.png">
                </producto-grilla>
            </div>
        </div>
        <div class="divExample">
            <div class="contenedorProductos">
                <producto-grilla-tipada
                    titulo="Notebook HP"
                    :precio="170000"
                    src-img="./images/notebookHP.png">
                </producto-grilla-tipada>
            </div>
        </div>

        <div class="divExample">
            <div>Reutilizando mi componente "producto-grilla":</div>
            <div class="contenedorProductos">
                <producto-grilla-tipada v-for="(item, i) in productos" :key="i"
                    :titulo="item.titulo"
                    :precio="item.precio"
                    :src-img="item.srcImg"
                    :mostrar-boton="item.stock > 0">
                </producto-grilla-tipada>
            </div>
        </div>
    </div>
    `
});




