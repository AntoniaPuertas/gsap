gsap.registerPlugin(ScrollTrigger, TextPlugin);

const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;
const { body } = document;


//crea un elemento div
function createBox(){
    const boxDomElement = document.createElement("div");
    boxDomElement.classList.add("box");

    body.appendChild(boxDomElement)

    gsap.set(boxDomElement, {
        left: w2 - 50,
        top: h2 - 50,
    });

}

    createBox();

//secuencia de animaciones utilizando un timeline
//estas animaciones se ejecutan una tras otra sobre un elemento con clase box
const tl1 = gsap
.timeline({ paused: true })
//.timeScale(2) //duplica la velocidad de todo el timeline
.to(".box", { //selecciona el elemento box y lo anima desde su estado inicial a los valores especificados
    scale: 3, //aumenta el tamaño al triple
    duration: 2, //duración de la animación en segundos
    rotation: 90, //rotación de 90 grados
    delay: 1, //espera un segundo antes de iniciar la animación
    ease: Power2.easeOut //curva de aceleración que comienza rápido y se ralentiza
})
.addLabel("toYellow") //añade una etiqueta, esto permite iniciar la animación en este punto: tl1.play("to>Yellow")
.to(".box", { //segunda animación
    background: "yellow" //cambia el fondo a amarillo. Como no se especifica duración esta es de 0.5 segundos por defecto
})
.addLabel("fadeout") //otra etiqueta
.to(".box", { //tercera animación
    delay: 1, //espera un segundo
    opacity: 0 //opacidad a cero
})

//iniciar la animación
tl1.play();

// Pausar el timeline
// tl1.pause();

// Reanudar el timeline
// tl1.resume();

// Volver al inicio y reproducir
// tl1.restart();

// Reproducir desde una etiqueta específica
// tl1.play("toYellow");

// Retroceder
// tl1.reverse();

// Ajustar la velocidad (2 = doble de rápido, 0.5 = mitad de velocidad)
// tl1.timeScale(2);