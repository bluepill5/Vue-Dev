let app = new Vue({
    el: '#app',
    data: {
        dibujoPrimerParrafo: true,
        caso: 1,
        hideVal: true,
        TitleButton: 'Ocultar parráfo',
        teams: [
            {
                id: 1,
                nombreImagen: 'river',
                descripcion: 'C.A. River Plate',
                jugadores: ['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4'],
            },
            {
                id: 2,
                nombreImagen: 'boca',
                descripcion: 'C.A. Boca Junior',
                jugadores: ['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4'],
            },
            {
                id: 3,
                nombreImagen: 'independiente',
                descripcion: 'C.A. Independiente',
                jugadores: ['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4'],
            },
            {
                id: 4,
                nombreImagen: 'racing',
                descripcion: 'Racing Club',
                jugadores: ['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4'],
            },
        ],
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
        classParagraph2() {
            if (this.caso == 1) {
                return "letraWhite";
            } else {
                return "fondoOrange";
            }
        },
        StyleParagraph2() {
            return {
                'background-color': 'salmon',
                'padding': '.5rem',
                'margin': '.5rem',
            };
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



