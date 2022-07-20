// gsap.to("#watermark_me", {
//     scrollTrigger: {
//         trigger: "#watermark_me",
//         start: "top 100px",
//         scrub: 1,
//         toggleActions: "restart pause reverse pause"
//     },
//     x: 450,
//     rotation: 360,
//     duration: 10
// });



// gsap.to('.container', {
//         y: 200,
//         duration: 8,
//     scrollTrigger: {
//         trigger: '.container', 
//         start: 'top top',
//         end: "2000",
//         scrub: 2,
//         pin: true,
//         markers: true,
//         toggleActions: "restart none none none",
//     }
// })

//     gsap.to(".video-1", {
       
//         scrollTrigger: {
//             trigger: '.wrap', 
//             start: 'top top', 
//         }
//     });
// gsap.to(".video-1", {
//     scrollTrigger: {
//         trigger: '.wrap', 
//         start: 'top top', 
//         end: "1000 ",
//         pin: true,
//         scrub: true,
//         markers: true ,
//     }
// })


// gsap.to(".container", {
//     scrollTrigger: {
//         trigger:".container",
//         start: "100px 100p",
//         scrub: 5,
//         toggleActions: "restart pause reverse pause"
//     },
//     y: 1250,
//     duration: 100

// })
// const sections = gsap.utils.toArray(".panel");
// const container = document.querySelector('.container');
// const tl = gsap.timeline({
  
//     scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: true,

//     end: () => `+=${container.offsetWidth}`
      
//   }

// })


// gsap.fromTo( ".wrap", {
//   scrollTrigger: {
//     trigger: ".video-1",
//     scrub: true,
//     end: "bottom bottom",
//   },
// });