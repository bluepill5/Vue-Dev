let app = new Vue({
    el: '#app',
    data: {
        dibujoPrimerParrafo: true,
        numContador: 0,
        caso: 1,
        hideVal: true,
        TitleButton: 'Ocultar parráfo',
        cssParagraph: {
            "fondoOrange": true,
            "letraWhite": true
        },
    },
    methods: {
        hideParagraph() {
            if (this.hideVal) {
                this.TitleButton = 'Mostrar parráfo';
            } else {
                this.TitleButton = 'Ocultar parráfo';
            }
            this.hideVal = !this.hideVal;
        },
        upContador() {
            this.numContador = this.numContador + 1;
            return this.numContador;

        },
        downContador() {
            if (this.numContador === Number(0)) {
                return this.numContador;
            } else {
                this.numContador = this.numContador - 1;
                return this.numContador;
            }
        },
        classColumn(i) {
            if (i % 2 === 0) {
                return 'filaTabla fondoCCC';
            } else {
                return 'filaTabla fondo444';
            }
        }
    },
    computed: {
        classParagraph() {
            if (this.caso == 1) {
                return "letraWhite";
            } else {
                return "fondoOrange";
            }
        },
        StyleParagraph() {
            return {
                'background-color': 'salmon',
                'border-radius': '.5rem',
                'padding': '.5rem',
                'margin': '.5rem',
            };
        }
    }
});



