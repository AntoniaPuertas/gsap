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


const tl1 = gsap
.timeline()
//.timeScale(2)
.to(".box", {
    scale: 3,
    duration: 2,
    rotation: 90,
    delay: 1,
    ease: Power2.easeOut
})
.addLabel("toYellow")
.to(".box", {
    background: "yellow"
})
.addLabel("fadeout")
.to(".box", {
    delay: 1,
    opacity: 0
})


//tl1.seek("toYellow")
