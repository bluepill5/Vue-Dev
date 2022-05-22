export default {
    data() {
        return {
            cantidad: 0
        }
    },
    methods: {
        Saludar(nombre) {
            console.log(`Hola ${nombre}!!!`);
        },
        AumentarCantidad() {
            this.cantidad += 1;
        }
    }
}



