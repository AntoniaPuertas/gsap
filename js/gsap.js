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

    gsap.to(".box", {
        background: "black",
        rotate: 180,
        duration: 3,
        delay: 1,
        xPercent: "+=500",
        opacity: 0.5,
        ease: Elastic.easeInOut,
        stagger: {
            amount: 4,
            from: "random",
            grid: [Math.ceil(w/padding), Math.ceil(h/padding)]
        },
        onComplete: () => {
            console.log("Hecho");
        }
    })




