let app = new Vue({
    // Elemento donde va dibujar
    el: '#app',
    data: {
        message: 'Hola bluepill5',
        html_message: '<p>Hola coders!!!</p>',
        urlImage: './assets/images/abraxas.webp',
        description: 'Abraxas',
        a: 12,
        b: 24,
        textParagraph_vbind: 'Abraxas',
        textParagraph_vmodel: '',
    },
    methods: {
        SumarAB() {
            return this.a + this.b;
        },
        methodTest() {
            console.log(this.SumarABC);
        },
        updateVariable(e) {
            this.textParagraph_vbind = e?.target?.value;
        },
    },
    computed: {
        SumarABC() {
            return this.a + this.b;
        }
    }
});
