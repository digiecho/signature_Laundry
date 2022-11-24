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
let smoother = ScrollSmoother.create({
  smooth: 0.4, // seconds it takes to "catch up" to native scroll position
  effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});
document.getElementById("myPath").style.visibility = "visible";
document.getElementById("circle").style.visibility = "visible";
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".group",
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500",
    // markers:true,// end after scrolling 500px beyond the start
    //onUpdate: ScrollTrigger.update,
    scrub: 0.3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: [
      0.2217741935483871,
      0.5120967741935484,
      0.6774193548387097,
      0.8387096774193549,
      1,
      1
    ]
  },
  defaults: { ease: "ease", duration: 24.8 }
});
var tl2 = gsap.timeline({ defaults: { ease: "none", duration: 11 } });
// draw in and then out
gsap.set(".squiggle", {
  drawSVG: "0%",
  opacity: 0
  //y: 10
});
gsap.set(".washingmachine", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".washingline", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".i", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".t", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".the1", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".the2", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".the3", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".the3", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".laundry1", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".laundry3", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".laundry2", {
  drawSVG: "100% 100%",
  opacity: 0
});
gsap.set(".co1", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".co2", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".iron", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set(".bed", {
  drawSVG: "0%",
  opacity: 0
});
gsap.set("#circle", {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50%, 50%",
  opacity: 0,
  motionPath: {
    path: ".squiggle",
    align: ".squiggle",
    alignOrigin: [0.5, 0.5],
    start: 0,
    end: 1
  }
});
gsap.set(".textscroll", {
  x: "150%"
});
gsap.set(".boldscroll", {
  opacity: 0
});
gsap.set("#laundry", {
  x: "250%",
  opacity: 0.1
});
gsap.set("#linen", {
  x: "350%",
  opacity: 0.1
});
gsap.set("#ironing", {
  x: "250%",
  opacity: 0.1
});
gsap.set("#hire", {
  x: "450%",
  opacity: 0.1
});
gsap.set("#purchase", {
  x: "250%",
  opacity: 0.1
});

//to animations
tl.to(".squiggle", {
  duration: 2,
  drawSVG: "0% 100%",
  opacity: 1
})
  .to(
    ".i",
    {
      duration: 0.1,
      drawSVG: "0% 100%",
      opacity: 1
    },
    3
  )
  .to(
    ".t",
    {
      duration: 0.1,
      drawSVG: "0% 100%",
      opacity: 1
    },
    3.3
  )
  .to(
    ".the1",
    {
      duration: 0.1,
      drawSVG: "0% 100%",
      opacity: 1
    },
    3.5
  )
  .to(
    ".the2",
    {
      duration: 0.1,
      drawSVG: "0% 100%",
      opacity: 1
    },
    3.6
  )
  .to(
    ".the3",
    {
      duration: 0.4,
      drawSVG: "0% 100%",
      opacity: 1
    },
    3.7
  )
  .to(
    ".laundry1",
    {
      duration: 0.1,
      drawSVG: "0% 100%",
      opacity: 1
    },
    4.1
  )
  .to(
    ".laundry3",
    {
      duration: 0.6,
      drawSVG: "100%",
      opacity: 1
    },
    4.2
  )
  .to(
    ".laundry2",
    {
      duration: 0.1,
      drawSVG: "0% 100%",
      opacity: 1
    },
    4.8
  )
  .to(
    ".co2",
    {
      duration: 0.2,
      drawSVG: "0% 100%",
      opacity: 1
    },
    5
  )
  .to(
    ".co1",
    {
      duration: 0.3,
      drawSVG: "0% 100%",
      opacity: 1
    },
    5.2
  )
  .addLabel("firststop") ////FIRST STOP
  .to(
    ".co1",
    {
      duration: 0.3,
      drawSVG: "0%",
      opacity: 0
    },
    6.5
  )
  .to(
    ".co2",
    {
      duration: 0.3,
      drawSVG: "0%",
      opacity: 0
    },
    6.8
  )
  .to(
    ".laundry3",
    {
      duration: 0.6,
      drawSVG: "0%",
      opacity: 1
    },
    7.1
  )
  .to(
    ".laundry2",
    {
      duration: 0.1,
      drawSVG: "0%",
      opacity: 1
    },
    7.7
  )
  .to(
    ".laundry1",
    {
      duration: 0.1,
      drawSVG: "0%",
      opacity: 1
    },
    7.8
  )
  .to(
    ".the3",
    {
      duration: 0.4,
      drawSVG: "0%",
      opacity: 1
    },
    7.9
  )
  .to(
    ".the2",
    {
      duration: 0.1,
      drawSVG: "0%",
      opacity: 1
    },
    8.3
  )
  .to(
    ".the1",
    {
      duration: 0.1,
      drawSVG: "0% ",
      opacity: 1
    },
    8.4
  )
  .to(
    ".i",
    {
      duration: 0.1,
      drawSVG: "0%",
      opacity: 1
    },
    8.5
  )
  .to(
    ".t",
    {
      duration: 0.1,
      drawSVG: "0%",
      opacity: 1
    },
    8.6
  )
  .to(
    ".squiggle",
    {
      duration: 2,
      drawSVG: "0%",
      opacity: 1
    },
    8.7
  )
  .to(
    "#laundry", ////FIRST TEXT
    {
      x: 0,
      duration: 2
    },
    10.7
  )
  .to(
    "#textscroll",
    {
      duration: 2,
      x: "0%",
      opacity: 1
    },
    10.7
  )
  .to(
    ".washingmachine",
    {
      duration: 2,
      drawSVG: "0% 100%",
      opacity: 1
    },
    10.7
  )
  .addLabel("ending")
  .to(
    ".washingmachine",
    {
      duration: 2,
      drawSVG: "0%",
      opacity: 1
    },
    12.8
  )
  .to(
    "#laundry",
    {
      x: "-200%",
      duration: 2
    },
    12.8
  )
  .to(
    "#textscroll",
    {
      duration: 2,
      x: "-150%",
      opacity: 1
    },
    12.8
  )
  .to(
    "#ironing",
    {
      x: 0,
      duration: 2
    },
    14.8
  )
  .to(
    "#textscroll2",
    {
      x: 0,
      duration: 2
    },
    14.8
  )
  .to(
    ".iron",
    {
      duration: 2,
      drawSVG: "0% 100%",
      opacity: 1
    },
    14.8
  )
  .addLabel("ending2")
  .to(
    "#ironing",
    {
      x: "-300%",
      duration: 2
    },
    16.8
  )
  .to(
    "#textscroll2",
    {
      x: "-300%",
      duration: 2
    },
    16.8
  )
  .to(
    ".iron",
    {
      duration: 2,
      drawSVG: "0%",
      opacity: 1
    },
    16.8
  )
  .to(
    "#linen",
    {
      x: 0,
      duration: 2
    },
    18.8
  )
  .to(
    "#textscroll3",
    {
      x: 0,
      duration: 2
    },
    18.8
  )
  .to(
    ".bed",
    {
      duration: 2,
      drawSVG: "0% 100%",
      opacity: 1
    },
    18.8
  )
  .addLabel("ending3")
  .to(
    "#linen",
    {
      x: "-300%",
      duration: 2
    },
    20.8
  )
  .to(
    "#textscroll3",
    {
      x: "-300%",
      duration: 2
    },
    20.8
  )
  .to(
    ".bed",
    {
      duration: 2,
      drawSVG: "0%",
      opacity: 1
    },
    20.8
  )
  .to(
    ".washingline",
    {
      duration: 2,
      drawSVG: "0% 100%",
      opacity: 1
    },
    22.8
  )
  .addLabel("washend")
  .to(
    "#hire",
    {
      x: 0,
      duration: 2
    },
    22.8
  )
  .to(
    "#textscroll5",
    {
      x: 0,
      duration: 2
    },
    22.8
  )
  .addLabel("theactualend");

//circle

tl.to(
  "#circle",
  {
    motionPath: {
      path: ".squiggle",
      align: ".squiggle",
      alignOrigin: [0.5, 0.5]
    },
    duration: 2,
    opacity: 1
  },
  0
)
  .from(
    "#circle",
    {
      motionPath: {
        path: ".squiggle",
        align: ".squiggle",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    8.7
  )
  .to(
    "#circle",
    {
      motionPath: {
        path: ".washingmachine",
        align: ".washingmachine",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    10.7
  )
  .from(
    "#circle",
    {
      motionPath: {
        path: ".washingmachine",
        align: ".washingmachine",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    12.8
  )
  .to(
    "#circle",
    {
      motionPath: {
        path: ".iron",
        align: ".iron",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    14.8
  )
  .from(
    "#circle",
    {
      motionPath: {
        path: ".iron",
        align: ".iron",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    16.8
  )
  .to(
    "#circle",
    {
      motionPath: {
        path: ".bed",
        align: ".bed",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    18.8
  )
  .from(
    "#circle",
    {
      motionPath: {
        path: ".bed",
        align: ".bed",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    20.8
  )
  .to(
    "#circle",
    {
      motionPath: {
        path: ".washingline",
        align: ".washingline",
        alignOrigin: [0.5, 0.5]
      },
      duration: 2
    },
    22.8
  );

gsap.to(
  "#circle",
  {
    rotation: 720,
    duration: 50,
    repeat: -1,
    yoyo: true,
    scale: 2,
    transformOrigin: "50% 50%"
  },
  2.1
);

squiggle = document.getElementById("squiggle");
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
  "theactualend"
]);
console.log(snapPos);

// const texts = gsap.utils.toArray('.boldscroll');
// texts.forEach(text => {
//   tl.from(text, {
//     x: "300%",

//     scrollTrigger: {
//       // start: 'bottom',
//       trigger:'#group',
//       scrub: true,
//       stagger:1,
//       deley:4,
//     }
//   })
// });