gsap.registerPlugin(ScrollTrigger);

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