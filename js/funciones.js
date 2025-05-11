   // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Progress Bar
        gsap.to(".progress", {
            width: "100%",
            duration: 0.3,
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3
            }
        });

        // Hero Animations
        gsap.timeline({
            delay: 0.5
        })
        .to(".logo", {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)"
        })
        .to(".subtitle", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5");

        // Parallax Effect
        gsap.timeline({
            scrollTrigger: {
                trigger: ".parallax-section",
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        })
        .to(".parallax-text", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        })
        .to(".parallax-section", {
            scale: 1.1,
            duration: 1,
            ease: "power2.out"
        }, "<");

        // Features Stagger Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: ".features",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
            }
        })
        .to(".feature", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.out"
        });

        // Interactive Text Effect
        const glitchText = document.getElementById('glitchText');
        let isGlitching = false;

        glitchText.addEventListener('mouseenter', () => {
            if (!isGlitching) {
                isGlitching = true;
                glitchText.style.color = '#ff0000';
                
                let originalText = glitchText.innerText;
                let glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let iterations = 0;
                
                const interval = setInterval(() => {
                    glitchText.innerText = originalText
                        .split('')
                        .map((char, index) => {
                            if (index < iterations) {
                                return originalText[index];
                            }
                            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                        })
                        .join('');
                    
                    if (iterations >= originalText.length) {
                        clearInterval(interval);
                        isGlitching = false;
                        glitchText.style.color = '';
                    }
                    
                    iterations += 1/3;
                }, 30);
            }
        });

        // Scroll Snap Effect
        ScrollTrigger.create({
            trigger: ".container",
            start: "top top",
            end: "bottom bottom",
            onUpdate: self => {
                let sections = gsap.utils.toArray("section");
                let i = Math.round(self.progress * (sections.length - 1));
                
                gsap.to(window, {
                    duration: 0.6,
                    scrollTo: {y: sections[i], offsetY: 0},
                    overwrite: true,
                    ease: "power2.inOut"
                });
            }
        });

        // Parallax Mouse Movement
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX - window.innerWidth / 2;
            const mouseY = e.clientY - window.innerHeight / 2;
            
            gsap.to('.logo', {
                x: mouseX * 0.05,
                y: mouseY * 0.05,
                duration: 0.6,
                ease: "power2.out"
            });
            
            gsap.to('.parallax-overlay', {
                x: mouseX * 0.02,
                y: mouseY * 0.02,
                duration: 0.8,
                ease: "power2.out"
            });
        });


