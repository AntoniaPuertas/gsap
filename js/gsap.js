gsap.registerPlugin(ScrollTrigger, TextPlugin);

const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;
const { body } = document;
const padding = 120;

function randomFloat(min, max){
    return Math.random() * (max - min) + min;
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function createBox(left, top){
    const boxDomElement = document.createElement("div");
    boxDomElement.classList.add("box");

    body.appendChild(boxDomElement)

    gsap.set(boxDomElement, {
        left,
        top,
        scale: randomFloat(0.25, 1.15),
        background: `rgba(${randomInt(50, 255)}, 0, 0, 1)`,
    });

}

for(let x = 0 ; x < w ; x += padding){
    for(let y = 0 ; y < h ; y += padding){
        createBox(x, y);
    }
}

 
    gsap.to(".box", {  //selecciona todos los elementos con la clase box
        background: "black", //cambia el color de fondo
        rotate: 180, //rota los elementos 180 grados
        duration: 3, //la animación dura 3 segundos
        delay: 1, //espera un segundo antes de iniciar la animación
        xPercent: "+=500", //mueve los elementos un 500% de su propio ancho hacia la derecha += es relativo a su posición actual
        opacity: 0.5, //cambia la opacidad al 50%
        ease: Elastic.easeInOut, //define el easing, como progresa la animación a lo largo del tiempo, esta crea un efecto elástico al inicio y al final
        stagger: { //stagger permite crear animaciones escalonadas o secuenciales entre múltiples elementos en vez de que todos se animen a la vez
            amount: 4, //duración desde que comienza a animarse el primer elemento hasta el último 4 segundos
            from: "random", //los elementos comienzan a animarse en orden aleatorio
            grid: [Math.ceil(w/padding), Math.ceil(h/padding)] //indica que los elementos están organizados en una cuadrícula y calcula las dimensiones de la cuadrícula
        },
        onComplete: () => { //esta función se ejecuta cuando termina la animación
            console.log("Hecho");
        }
    })




