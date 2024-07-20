/* PRELOADER VIDEO */
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video video");
  const skipBtn = document.getElementById("skipBtn");

  // Function to trigger GSAP animation
  function triggerAnimation() {
    let tl = gsap.timeline();
    tl.to(".video", {
      scale: 0.125,
      duration: 3,
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

gsap.timeline()
  .from(".floating-text", {
    x: "-100%",
    duration: 3
  }) 
  .to(".floating-text", {
    x: "20%",
    duration: 10,
    ease: "none",
    repeat: -1,
    yoyo : true
  }) 


const scrollingContent = document.getElementById('scrolling-content1');
const cards = Array.from(scrollingContent.children);

const duplicateCards = () => {
  const contentWidth = scrollingContent.scrollWidth;
  const containerWidth = scrollingContent.parentElement.clientWidth;

  if (contentWidth < containerWidth * 2) {
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      scrollingContent.appendChild(clone);
    });
    duplicateCards(); // Recursively ensure there are enough cards
  }
};

duplicateCards();

scrollingContent.addEventListener('animationiteration', () => {
  scrollingContent.appendChild(scrollingContent.firstElementChild);
});


