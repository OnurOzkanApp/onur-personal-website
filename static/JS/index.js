/* === Variable Declarations === */

// Select the main header inside the introduction section
let introHeader = document
  .getElementById("introduction")
  .getElementsByTagName("h1")[0];

// Select the two intro paragraph elements inside the "columntexts" container
let introPs = document
  .getElementsByClassName("columntexts")[0]
  .getElementsByTagName("p");

/* FUNCTIONS */

/* === Scroll Event: Animate Header Background === */

// Change header background to black when scrolling down
window.addEventListener("scroll", function () {
  // header animations
  if (window.scrollY > 115 || linksMenu.style.display == "block") {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "transparent";
  }
  header.style.transition = "300ms ease";
});

// Add a class to change header background when burger icon is clicked
$(function () {
  $(".burgericon").click(function () {
    $(".headercontbackg").toggleClass("toggleBackground");
  });
});

/* === Page Load Animation === */

// Fade in the header and paragraphs with animation on page load
window.onload = function () {
  introHeader.style.opacity = "1";
  introHeader.style.transition = "2s ease 300ms";

  for (var i = 0, l = 2; i < l; i++) {
    introPs[i].style.opacity = "1";
    introPs[i].style.transition = "2.5s ease 1.5s";
  }
};

/* === Responsive Font Resize === */

// Adjust header font size based on screen width when resizing
window.addEventListener("resize", function () {
  if (window.innerWidth < 600) {
    introHeader.style.fontSize = "4rem";
  } else if (window.innerWidth >= 850) {
    introHeader.style.fontSize = "6rem";
  }
});