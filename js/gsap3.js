gsap.registerPlugin(ScrollTrigger);


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
    opacity: 0
}, "-=0.5") // Empieza 0.5 segundos antes de que termine la animación anterior


//tl1.seek("toYellow")

ScrollTrigger.create({
    animation: tl1,
    trigger: "#container",
    start: "top top",
    end: "+=10000",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    refreshPriority: 1,
        onComplete: () => {
        // Cuando termina el primer trigger, refrescamos ScrollTrigger
        ScrollTrigger.refresh();
    }
})

let frame_count  = 9
let offset_value = 100;

// movimiento café
gsap.to(".viewer", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: ".scene",
    start: "top+=200 top",
    end: "+=" + (frame_count * offset_value),
    pin: true,
    scrub: true,
    refreshPriority: 0
  }
});