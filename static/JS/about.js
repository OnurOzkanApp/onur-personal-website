/* === Variable Declarations === */

// First and second content sections
let section1 = document.getElementsByClassName("section-1")[0];
let section2 = document.getElementsByClassName("section-2")[0];

// Header text in section 1
let aboutMe = document
  .getElementsByClassName("section-1-content")[0]
  .getElementsByTagName("h1")[0];

// Down arrow button
let downArrow = document.querySelector(".next");

/* === Page Load Animation === */

// Fade in the header and down arrow when page loads
window.onload = function () {
  aboutMe.style.opacity = "1";
  downArrow.style.opacity = "1";
  aboutMe.style.transition = "1.5s ease 300ms";
  downArrow.style.transition = "1.5s ease 600ms";
};

/* === Button-Based Scroll Navigation === */

// Scroll between section elements when clicking "prev" or "next"
const sections = document.querySelectorAll(".sections");
const prev = document.querySelectorAll(".prev")[0];
const next = document.querySelectorAll(".next")[0];

const idlePeriod = 100;             // Delay between scrolls (not currently used)
const animationDuration = 1000;     // For future animation timing if needed

let lastAnimation = 0;              // Not used, but included for potential throttle
let index = 0;                      // Track current visible section index

// Scroll up to previous section
prev.addEventListener("click", () => {
  if (index < 1) return;
  index--;
  sections.forEach((section, i) => {
    if (i === index) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll down to next section
next.addEventListener("click", () => {
  if (index > 2) return;
  index++;
  sections.forEach((section, i) => {
    if (i === index) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* === Mouse Wheel Navigation (Desktop Only) === */

// Enable scroll navigation with mouse wheel if screen is wide enough
if (screen.width >= 850) {
  /**
   * Detect mouse wheel direction
   * Credit: https://deepmikoto.com/coding/1--javascript-detect-mouse-wheel-direction
   */
  function detectMouseWheelDirection(e) {
    var delta = null,
      direction = false;

    if (!e) e = window.event;

    if (e.wheelDelta) {
      delta = e.wheelDelta / 60;         // Most browsers
    } else if (e.detail) {
      delta = -e.detail / 2;             // Firefox fallback
    }

    if (delta !== null) {
      direction = delta > 0 ? "up" : "down";
    }

    return direction;
  }

  /**
   * Trigger section navigation based on scroll direction
   */
  function handleMouseWheelDirection(direction) {
    let event = new Event("click");
    if (direction == "down") {
      next.dispatchEvent(event);
    } else if (direction == "up") {
      prev.dispatchEvent(event);
    }
  }

  // Bind to mouse wheel scroll events
  document.onmousewheel = function (e) {
    handleMouseWheelDirection(detectMouseWheelDirection(e));
  };
  if (window.addEventListener) {
    document.addEventListener("DOMMouseScroll", function (e) {
      handleMouseWheelDirection(detectMouseWheelDirection(e));
    });
  }
}