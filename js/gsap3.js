gsap.registerPlugin(ScrollTrigger);

//crea un timeline y lo guarda en la constante tl1
//contiene tres animaciones secuenciales para distintos elementos: .box.a, box.b y box.c
//el primer elemento se mueve hacia arriba fuera de la pantalla con una duración de 1 segundo
//el segundo elemento se mueve a la derecha, reduce su tamaño y rota con una duración de dos segundos
//el tercer elemento se mueve hacia arriba y se desvanece

const tl1 = gsap
.timeline()
.to(".box.a", {
    top: "-100vh",
    duration: 1,
    ease: "power2.inOut"
}, "-=0.5") // Empieza 0.5 segundos antes de que termine la animación anterior
.to(".box.b", {
    left: "100vw",
    duration: 2,
    scale: 0.5,
    rotation: 180,
    ease: "power2.inOut"
}, "-=0.5") // Empieza 0.5 segundos antes de que termine la animación anterior
.to(".box.c", {
    top: "-100vh",
    duration: 2,
    //opacity: 0
}, "-=0.5") // Empieza 0.5 segundos antes de que termine la animación anterior


//vincula la animación tl1 al desplazamiento de la página
//el elemento con id container dispara la animación
//la animación comienza cuando el elemento disparador alcanza la parte superior de la ventana (top top)

ScrollTrigger.create({
    animation: tl1,
    trigger: "#container",
    start: "top top",
    end: "+=3000", //la duración del efecto es de 3000 píxeles de desplazamiento
    scrub: 1, //hace que la animación avance proporcionalmente al desplazamiento
    pin: true, //hace que el elemento disparador permanezca visible durante toda la animación
    pinSpacing: true,
    refreshPriority: 1,
    onComplete: () => {
        // Cuando termina el primer trigger, refrescamos ScrollTrigger
        ScrollTrigger.refresh();
    }
})

let frame_count  = 11 //define cuantas imágenes hay en la secuencia
let offset_value = 100; //valor de desplazamiento: 100px para cada frame


// (-offset_value * frame_count * 2) + "px 50%"
// mueve el fondo de la imagen horizontalmente
//calcula cuanto se mueve el fondo
//(-offset_value * frame_count * 2) 11 * 100 * 2 = 2200px
//50% mantiene la posición vertical del fondo centrada

/**
 * ease: "steps(" + frame_count + ")" crea una función de facilidad escalonada.
    En lugar de una transición suave, la animación salta directamente entre los 9 frames definidos.
    Esto es crucial para animaciones de sprite sheet, ya que queremos mostrar cada frame individualmente en secuencia, no una mezcla de frames.
 */

gsap.to(".viewer", { //elemento con clase .viewer
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%", 
  ease: "steps(" + frame_count + ")", 
  scrollTrigger: {
    trigger: ".scene", //la animación se activa cuando el elemento scene entra en la ventana
    start: "top+=200 top", //comienza cuando la parte superior del elemento + 200px alcanza la parte superior de la ventana
    end: "+=" + (frame_count * offset_value), //duración del scrolling 
    pin: true, //fija el elemento trigger en su lugar durante la animación, evitando que se desplace 
    scrub: true, //vincula el progreso de la animación al progreso del scroll
    refreshPriority: 0
  }
});