let locoScroll;
function init() {
    gsap.registerPlugin(ScrollTrigger);


 locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




}
init();


const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
main.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY
    })
})

const video = document.querySelector(".page1 .video-div video");
video.addEventListener("mouseenter", () => {
    cursor.innerHTML = "soundOn";
    
    gsap.to(cursor,{
        padding: "12px 38px",
        borderRadius: "50px"
    })
})

video.addEventListener("mouseleave", () => {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        width: 20,
        height: 20,
        padding: "0px 0px",
        borderRadius: "50%"
    })
})


const timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 .main-heading h1:nth-child(1)",
        scroller: ".main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})

const timeLine2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 .main-heading h1:nth-child(1)",
        scroller: ".main",
        // markers: true,
        start: "top -127%",
        end: "top -130%",
        scrub: 3
    }
})

timeLine.to(".page1 .main-heading h1:nth-child(1)", {
    x: -100,
    duration: 1,
},"donoaiksthchalengy")

timeLine.to(".main .main-heading h1:nth-child(2)",{
    x: 100,
    duration: 1,
},"donoaiksthchalengy")

timeLine.to(".page1 .video-div video , .page1 .video-div .video-text", {
    width: "90%",
},"donoaiksthchalengy")

timeLine2.to(".main" , {
    backgroundColor: "#fff",
    color: "#000",
    duration: 1
})

const timeLine3 = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page3 .page3-footer .footer-left h2",
        // markers: true,
        start: "top 150%",
        end: "top 0",
        scrub: 2
    }
})

timeLine3.from(".page3 .page3-footer .footer-left h2",{
    y: 100,
    duration: 1,
    delay: 1.5
})


const timeLine4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 .main-heading h1:nth-child(1)",
        scroller: ".main",
        // markers: true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

timeLine4.to(".main", {
    backgroundColor: "#000",
    color: "#fff",
    duration: 1
})






const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        // box.style.backgroundColor = "red"
        const imgAttribute = box.getAttribute("data-image");
        cursor.style.width = "300px";
        cursor.style.height = "250px";
        cursor.style.borderRadius = "0%"
        cursor.style.backgroundImage = `URL(${imgAttribute})`
        cursor.style.mixBlendMode = "normal";
        
    })
    box.addEventListener("mouseleave", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderRadius = "50%";
       
        cursor.style.backgroundImage = `none`
        cursor.style.mixBlendMode = "difference";

    })
})