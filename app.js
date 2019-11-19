$(document).ready(function() {
    //Inicializar slider
    var mySwiper = new Swiper('.swiper-container', {
        // Parámetros dirección: 'diagonal''left-right''top-bottom''radial''custom'
        direction: 'horizontal',
        loop: false,

        // Paginación
        pagination: {
            el: '.swiper-pagination',
        },

        // Flechas navegación
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Scroll
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});

// Animación gradiente back

var granimInstance7 = new Granim({
    element: '#back',
    direction: 'top-bottom',
    isPausedWhenNotInView: false,
    stateTransitionSpeed: 1000,
    image: {
        source: 'img/bg.jpg',
        blendingMode: 'hard-light'
    },
    states: {
        "default-state": {
            gradients: [
                ['#3b177b', '#ef017c'],
                ['#ef017c', '#3b177b'],


            ]

        }
    }
});

// Animación gradiente footer-menú

var granimInstance8 = new Granim({
    element: '#canvasfooter',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#fccb00', pos: .2 },
                    { color: '#fffad2', pos: .8 },
                    { color: '#c98c1a', pos: 1 }
                ],
                [
                    { color: '#f2dc8e', pos: 0 },
                    { color: '#fffad2', pos: .2 },
                    { color: '#c98c1a', pos: .75 }
                ],
            ]
        }
    }
});

var granimInstance9 = new Granim({
    element: '#canvasfooter2',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    stateTransitionSpeed: 500,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#fccb00', pos: .2 },
                    { color: '#fffad2', pos: .8 },
                    { color: '#c98c1a', pos: 1 }
                ],
                [
                    { color: '#f2dc8e', pos: 0 },
                    { color: '#fffad2', pos: .2 },
                    { color: '#c98c1a', pos: .75 }
                ],
            ]

        }
    }
});

var granimInstance10 = new Granim({
    element: '#canvasfooter3',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    stateTransitionSpeed: 500,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#fccb00', pos: .2 },
                    { color: '#fffad2', pos: .8 },
                    { color: '#c98c1a', pos: 1 }
                ],
                [
                    { color: '#f2dc8e', pos: 0 },
                    { color: '#fffad2', pos: .2 },
                    { color: '#c98c1a', pos: .75 }
                ],
            ]

        }
    }
});

var granimInstance11 = new Granim({
    element: '#canvasfooter4',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    stateTransitionSpeed: 500,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#fccb00', pos: .2 },
                    { color: '#fffad2', pos: .8 },
                    { color: '#c98c1a', pos: 1 }
                ],
                [
                    { color: '#f2dc8e', pos: 0 },
                    { color: '#fffad2', pos: .2 },
                    { color: '#c98c1a', pos: .75 }
                ],
            ]

        }
    }
});

var granimInstance12 = new Granim({
    element: '#canvasfooter5',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    stateTransitionSpeed: 500,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#fccb00', pos: .2 },
                    { color: '#fffad2', pos: .8 },
                    { color: '#c98c1a', pos: 1 }
                ],
                [
                    { color: '#f2dc8e', pos: 0 },
                    { color: '#fffad2', pos: .2 },
                    { color: '#c98c1a', pos: .75 }
                ],
            ]

        }
    }
});

var granimInstance13 = new Granim({
    element: '#canvasfooter6',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    stateTransitionSpeed: 500,
    states: {
        "default-state": {
            gradients: [
                [
                    { color: '#fccb00', pos: .2 },
                    { color: '#fffad2', pos: .8 },
                    { color: '#c98c1a', pos: 1 }
                ],
                [
                    { color: '#f2dc8e', pos: 0 },
                    { color: '#fffad2', pos: .2 },
                    { color: '#c98c1a', pos: .75 }
                ],
            ]

        }
    }
});