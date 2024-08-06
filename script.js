gsap.from(('h1'), {
       y:100,
       duration:1,
       rotate:5,
       opacity:0,
       stagger:0.5,
 scrollTrigger: {
            trigger: 'h1',
            scroller: 'body',
            start: 'top 50%',
            end: 'top 60%',
            scrub: 3,
        //     markers: true
        }
 });
 gsap.to(('.text'), {
        scale: 1.8,
       
        duration:2,
        scrollTrigger: {
            trigger: 'h1',
            scroller: 'body',
            start: 'top 30%',
            end: 'top 40%',
            scrub: 3,
        //     markers: true
        }
 });