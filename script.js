var navigation = new TimelineLite({ paused: true, reversed: true });
navigation
  .to("#navigationWrap", 0.5, { opacity: 1, display: "block" })
  .to(".navbar", 0.3, { opacity: 0 }, "-=0.1")
  .to(".close", 0.3, { display: "block", opacity: 1 }, "-=0.1")
  .from(".menu", 0.5, { opacity: 0, y: 30 })
  .from(".social", 0.5, { opacity: 0 });

$(".navbar, .close").on("click", function () {
  navigation.reversed() ? navigation.play() : navigation.reverse();
});

// ".navbar, .close".click(function () {
//   navigation.reversed() ? navigation.play() : navigation.reverse();
// });
const bm = document.querySelector("#bubble_machine"),
  bubble_rate = 500; //milliseconds per release

function addBubble() {
  var b = document.createElement("div");
  b.className = "bubble";
  b.style.width = Math.random() * 100 + 28 + "px";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDuration = Math.floor(Math.random() * 10) + 8 + "s";
  // b.style.filter = 'hue-rotate('+Math.random()*360+'deg)'
  b.onclick = function () {
    this.classList.add("pop_bubble");
    var pop = new Audio(
      "http://contentservice.mc.reyrey.net/audio_v1.0.0/?id=e049b733-1543-51fd-9ce9-680f57226aa1"
    );
    pop.play();
  };
  b.onanimationend = function () {
    this.remove();
  };
  bm.appendChild(b);

  setTimeout(addBubble, bubble_rate);
}

addBubble();

gsap.registerPlugin(
  MotionPathPlugin,
  MotionPathHelper,
  DrawSVGPlugin,
  ScrollTrigger,
  ScrollSmoother
);
// create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 0.4, // seconds it takes to "catch up" to native scroll position
//   effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
// });
squiggle = document.getElementById("squiggle");
document.getElementById("myPath").style.visibility = "visible";
document.getElementById("circle").style.visibility = "visible";
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#group",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    scrub: 0.3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    invalidateOnRefresh: true,
    snap: [0.17857142857142858, 0.4123376623376623, 0.5454545454545454, 0.6753246753246753, 0.8051948051948052, 1],
    
  },
  defaults: { ease: "ease", },
});
var tl2 = gsap.timeline({ defaults: { ease: "none",  } });
// draw in and then out
// gsap.set("#group", { xPercent: 50, yPercent: 50, left: "50%", top: "50%", transformOrigin: "-50%, -50%", });

gsap.set("#contactus", {
  opacity: 0,
});
gsap.set(".squiggle", {
  drawSVG: "0%",
  opacity: 0,
  //y: 10
});
gsap.set(".washingmachine", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".washingline", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".i", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".t", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".the1", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".the2", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".the3", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".the3", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".laundry1", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".laundry3", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".laundry2", {
  drawSVG: "100% 100%",
  opacity: 0,
});
gsap.set(".co1", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".co2", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".iron", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".bed", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set(".bag", {
  drawSVG: "0%",
  opacity: 0,
});
gsap.set("#circle", {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "-50%, -50%",
  opacity: 0,
  motionPath: {
    path: ".squiggle",
    align: ".squiggle",
    alignOrigin: [0.5, 0.5],
    start: 0,
    end: 1,
  },
});
gsap.set(".textscroll", {
  xPercent: 150,
});
gsap.set(".boldscroll", {
  opacity: 0,
});
gsap.set("#laundry", {
  xPercent: 250,
  opacity: 0.1,
});
gsap.set("#linen", {
  xPercent: 350,
  opacity: 0.1,
});
gsap.set("#ironing", {
  xPercent: 250,
  opacity: 0.1,
});
gsap.set("#hire", {
  xPercent: 450,
  opacity: 0.1,
});
gsap.set("#purchase", {
  xPercent: 250,
  opacity: 0.1,
});
gsap.set("#contactus", {
  xPercent: 250,
  opacity: 0.1,
});

//to animations
tl.to(".squiggle", { duration: 2, drawSVG: "0% 100%", opacity: 1, })
.to( "#circle", { motionPath: { path: ".squiggle", align: ".squiggle", alignOrigin: [0.5, 0.5], }, duration: 2, opacity: 1, }, 0 )
  .to( ".i", { duration: 0.1, drawSVG: "0% 100%", opacity: 1, }, 3 )
  .to( ".t", { duration: 0.1, drawSVG: "0% 100%", opacity: 1, }, 3.3 )
  .to( ".the1", { duration: 0.1, drawSVG: "0% 100%", opacity: 1, }, 3.5 )
  .to( ".the2", { duration: 0.1, drawSVG: "0% 100%", opacity: 1, }, 3.6 )
  .to( ".the3", { duration: 0.4, drawSVG: "0% 100%", opacity: 1, }, 3.7 )
  .to( ".laundry1", { duration: 0.1, drawSVG: "0% 100%", opacity: 1, }, 4.1 )
  .to( ".laundry3", { duration: 0.6, drawSVG: "100%", opacity: 1, }, 4.2 )
  .to( ".laundry2", { duration: 0.1, drawSVG: "0% 100%", opacity: 1, }, 4.8 )
  .to( ".co2", { duration: 0.2, drawSVG: "0% 100%", opacity: 1, }, 5 )
  .to( ".co1", { duration: 0.3, drawSVG: "0% 100%", opacity: 1, }, 5.2 )
  .addLabel("firststop") ////FIRST STOP
  .to( ".co1", { duration: 0.3, drawSVG: "0%", opacity: 0, }, 6.5 )
  .to( ".co2", { duration: 0.3, drawSVG: "0%", opacity: 0, }, 6.8 )
  .to( ".laundry3", { duration: 0.6, drawSVG: "0%", opacity: 1, }, 7.1 )
  .to( ".laundry2", { duration: 0.1, drawSVG: "0%", opacity: 1, }, 7.7 )
  .to( ".laundry1", { duration: 0.1, drawSVG: "0%", opacity: 1, }, 7.8 )
  .to( ".the3", { duration: 0.4, drawSVG: "0%", opacity: 1, }, 7.9 )
  .to( ".the2", { duration: 0.1, drawSVG: "0%", opacity: 1, }, 8.3 )
  .to( ".the1", { duration: 0.1, drawSVG: "0% ", opacity: 1, }, 8.4 )
  .to( ".i", { duration: 0.1, drawSVG: "0%", opacity: 1, }, 8.5 )
  .to( ".t", { duration: 0.1, drawSVG: "0%", opacity: 1, }, 8.6 )
  .to( ".squiggle", { duration: 2, drawSVG: "0%", opacity: 1, }, 8.7 )
  .from( "#circle", { motionPath: { path: ".squiggle", align: ".squiggle", alignOrigin: [0.5, 0.5], }, duration: 2, }, 8.7 )
  .to( "#laundry", { xPercent: 0, duration: 2, }, 10.7 )
  .to( "#textscroll", { duration: 2, xPercent: 0, opacity: 1, }, 10.7 )
  .to( ".washingmachine", { duration: 2, drawSVG: "0% 100%", opacity: 1, }, 10.7 )
  .to( "#circle", { motionPath: { path: ".washingmachine", align: ".washingmachine", alignOrigin: [0.5, 0.5], }, duration: 2, }, 10.7 )
  .addLabel("ending")
  .to( ".washingmachine", { duration: 2, drawSVG: "0%", opacity: 1, }, 12.8 )
  .from( "#circle", { motionPath: { path: ".washingmachine", align: ".washingmachine", alignOrigin: [0.5, 0.5], }, duration: 2, }, 12.8 )
  .to( "#laundry", { xPercent: -200, duration: 2, }, 12.8 )
  .to( "#textscroll", { duration: 2, xPercent: -150, opacity: 1, }, 12.8 )
  .to( "#ironing", { xPercent: 0, duration: 2, }, 14.8 )
  .to( "#textscroll2", { xPercent: 0, duration: 2, }, 14.8 )
  .to( ".iron", { duration: 2, drawSVG: "0% 100%", opacity: 1, }, 14.8 )
  .to( "#circle", { motionPath: { path: ".iron", align: ".iron", alignOrigin: [0.5, 0.5], }, duration: 2, }, 14.8 )
  .addLabel("ending2")
  .to( ".iron", { duration: 2, drawSVG: "0%", opacity: 1, }, 16.8 )
  .from( "#circle", { motionPath: { path: ".iron", align: ".iron", alignOrigin: [0.5, 0.5], }, duration: 2, }, 16.8 )
  .to( "#ironing", { xPercent: -300, duration: 2, }, 16.8 )
  .to( "#textscroll2", { xPercent: -300, duration: 2, }, 16.8 )
  .to( "#linen", { xPercent: 0, duration: 2, }, 18.8 )
  .to( "#textscroll3", { xPercent: 0, duration: 2, }, 18.8 )
  .to( ".bed", { duration: 2, drawSVG: "0% 100%", opacity: 1, }, 18.8 )
  .to( "#circle", { motionPath: { path: ".bed", align: ".bed", alignOrigin: [0.5, 0.5], }, duration: 2, }, 18.8 )
  .addLabel("ending3")
  .to( ".bed", { duration: 2, drawSVG: "0%", opacity: 1, }, 20.8 )
  .from( "#circle", { motionPath: { path: ".bed", align: ".bed", alignOrigin: [0.5, 0.5], }, duration: 2, }, 20.8 )
  .to( "#linen", { xPercent: -300, duration: 2, }, 20.8 )
  .to( "#textscroll3", { xPercent: -300, duration: 2, }, 20.8 )
  .to( "#hire", { xPercent: 0, duration: 2, }, 22.8 )
  .to( "#textscroll5", { xPercent: 0, duration: 2, }, 22.8 )
  .to( ".washingline", { duration: 2, drawSVG: "0% 100%", opacity: 1, }, 22.8 )
  .to( "#circle", { motionPath: { path: ".washingline", align: ".washingline", alignOrigin: [0.5, 0.5], }, duration: 2, }, 22.8 )
  .addLabel("washend")
  .to( ".washingline", { duration: 2, drawSVG: "0%", opacity: 1, }, 24.8 )
  .from( "#circle", { motionPath: { path: ".washingline", align: ".washingline", alignOrigin: [0.5, 0.5], }, duration: 2, }, 24.8 )
  .to( "#hire", { xPercent: -150, duration: 2, }, 24.8 )
  .to( "#textscroll5", { xPercent: -150, duration: 2, }, 24.8 )
  .to( "#purchase", { xPercent: 0, duration: 2, }, 26.8 )
  .to( "#textscroll6", { xPercent: 0, duration: 2, }, 26.8 )
  .to( ".bag", { duration: 4, drawSVG: "0% 100%", opacity: 1, }, 26.8 )
  .to( "#circle", { motionPath: { path: ".bag", align: ".bag", alignOrigin: [0.5, 0.5], }, duration: 4, }, 26.8 )
  .addLabel("theactualend");

//circle/////////////////////////////////////////////////////////////////////////////////////




  
 

  
  

// gsap.to( "#circle", { rotation: 720, duration: 50, repeat: -1, yoyo: true, scale: 2, transformOrigin: "50% 50%", }, 2.1 );


///scroll trigger animation
function labelsToProgress(timeline, labels) {
  let progress = [];
  labels.forEach((label) =>
    progress.push(timeline.labels[label] / timeline.duration())
  );
  return progress;
}

var snapPos = labelsToProgress(tl, [
  "firststop",
  "ending",
  "ending2",
  "ending3",
  "washend",
  "theactualend",
]);
console.log(snapPos);
