var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top:"120%",
    left: "0%"
},'orange')

tl.to("#orange-cut",{
    top:"160%",
    left: "20%"
},'orange')

tl.to("#orange",{
    width:"15%",
    top:"170%",
    right: "10%"
},'orange')

tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')

tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "5%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
}})

tl2.from(".coca-logo1",{
    rotate: "-90deg",
    left: "-10%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')


tl2.from(".sprite-logo1",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#sprite",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    left: "39%",
    top: "200%",
}, 'ca')
tl2.to("#fanta",{
    width:"28%",
    top: "214%",
    left: "36%",
}, 'ca')