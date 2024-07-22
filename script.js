/* PRELOADER VIDEO */
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video video");
  const skipBtn = document.getElementById("skipBtn");

  // Function to trigger GSAP animation
  function triggerAnimation() {
    let tl = gsap.timeline();
    tl.to(".video", {
      scale: 0.125,
      duration: 1,
    });

    tl.to(".video", {
      duration: 2,
      y: -1000,
    });
  }

  skipBtn.addEventListener("click", function () {
    video.pause(); // Stop the video
    video.currentTime = video.duration; // Optional: Move the video to the end if needed
    triggerAnimation();
  });

  // Add event listener for when the video ends
  video.addEventListener("ended", function () {
    triggerAnimation();
  });
});

/* PRELOADER VIDEO */

gsap
  .timeline()
  .from(".floating-text", {
    x: "-100%",
    duration: 3,
  })
  .to(".floating-text", {
    x: "20%",
    duration: 10,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });

/* ANIMATED DIV */
document.addEventListener("scroll", function () {
  var targetDiv = document.querySelector(".animated-div");
  var prevDiv = targetDiv.previousElementSibling;

  var prevDivBottom = prevDiv.offsetTop + prevDiv.offsetHeight;
  var scrollTriggerToShow = prevDivBottom * 0.5; 
  var scrollTriggerToHide = prevDivBottom + window.innerHeight; 
  if (
    window.scrollY > scrollTriggerToShow &&
    window.scrollY < scrollTriggerToHide
  ) {
    targetDiv.style.visibility = "visible";
    targetDiv.style.opacity = "1";
    targetDiv.style.animation = "bouncyAppear 1s forwards";
  } else if (window.scrollY >= scrollTriggerToHide) {
    targetDiv.style.opacity = "0";
    targetDiv.style.visibility = "hidden";
    targetDiv.style.animation = "none";
  }
});
