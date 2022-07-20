gsap.registerPlugin(ScrollTrigger);

gsap.to(".wrap", {

    scrollTrigger: {
        trigger: ".wrap",
        start: "top top",
        end: "+=50%",
        scrub: 2,
        pin: ".container",
        pinSpacing: false,
        // markers: true,
    },

});


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".wrap",
        start: 'top top',
        end: '+=50%',
        scrub: 1,
        pin: true,
        
        // markers: true,
    },
})

tl
    .from('.video-1', {
        
        autoAlpha: 1,
    })
    .from('.video-2', {
        autoAlpha: 0,
    });

gsap.to("#watermark_me", {
    scrollTrigger: {
        trigger: "#watermark_me",
        start: "top 100px",
        scrub: 1,
        toggleActions: "restart pause reverse pause"
    },
    x: 450,
    rotation: 360,
    duration: 10
});