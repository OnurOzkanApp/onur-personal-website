/* === Variable Declarations === */

// Main heading ("Links")
let intro1 = document.getElementsByTagName("h1")[0];

// Subheading ("Contact Me")
let intro2 = document.getElementsByTagName("h2")[0];

// Contact form element (second form on page)
let emailForm = document.getElementsByTagName("form")[1];

/* === Page Load Animation === */

// Fade in headings and form on page load
window.onload = function () {
  intro1.style.opacity = "1";
  intro2.style.opacity = "1";
  emailForm.style.opacity = "1";

  intro1.style.transition = "2s ease";
  intro2.style.transition = "2s ease 1s";
  emailForm.style.transition = "2s ease 1.5s";
};

/* === Submit Button Interactions === */

// Change button background color on hover
function buttonHover(x) {
  x.style.backgroundColor = "#9c2d63";
}

// Revert button background color on mouse out
function buttonChangeBack(x) {
  x.style.backgroundColor = "";
}