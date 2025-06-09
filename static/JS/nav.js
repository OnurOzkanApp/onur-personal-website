/* === Variable Declarations === */

// Header background container
let header = document.querySelectorAll(".headercontbackg")[0];

// Dropdown burger menu
let burgerMenu = document.querySelectorAll(".burgermenu")[0];
let linksMenu = document.getElementById("links");

// Search bar elements
let searchBar = document.getElementById("searchbar");
let searchTool = document.getElementById("searchtool");
let bar = document.getElementById("bar");

// Main page content section
let content = document.querySelectorAll(".content")[0];

/* FUNCTIONS */

/* === Link Hover and Click Animations === */

// Background and color changes on hover for navigation link animations
function hoverChangeBackground(x) {
  if (window.innerWidth < 850) {
    x.style.backgroundColor = "#191919";
  } else {
    x.style.backgroundColor = "#C8C8C8";
  }
  x.style.color = "purple";
  x.style.transition = "500ms ease";
}

// Hover color change for other link animations
function hoverLink(x) {
  x.style.color = "purple";
  x.style.transition = "500ms ease";
}

// Clicking animation
function clickLink(x) {
  x.style.color = "red";
}

// Reset styles after hover or click
function changeBackLink(x) {
  x.style.color = "";
  x.style.backgroundColor = "";
  x.style.transition = "800ms ease";
}

/* ***************** OLD VERSION OF MENU TOGGLE *********************** */
// burger menu and header (can be optimized)
/*
function toggleMenu() {
  if (burgerMenu.style.display == "block") {
    if (window.scrollY <= 115) {
      header.style.backgroundColor = "";
    }
    burgerMenu.style.display = "none";
  } else {
    header.style.backgroundColor = "black";
    burgerMenu.style.display = "block";
  }
  bar.value = "";
  header.style.transition = "200ms ease";
}*/

/* === Burger Menu Toggle (New Version) === */

// jQuery slide toggle for the nav menu
$(function () {
  $(".burgericon").click(function () {
    $("#links").slideToggle(300);
  });
});

/* === Responsive Resize Handling === */

// Make the header links visible after resizing window
window.addEventListener("resize", function () {
  if (window.innerWidth >= 850) {
    linksMenu.style.display = "";
    bar.style.visibility = "hidden";
  } else {
    bar.style.visibility = "visible";
    searchBar.style.width = "";
  }
});

/* === Search Bar Toggle Function === */

// Toggle search bar on icon click (desktop only)
function toggleSearchBar() {
  if (window.innerWidth >= 850) {
    if (bar.style.visibility == "hidden" || bar.style.visibility == "") {
      bar.style.visibility = "visible";
    } else if (bar.style.visibility == "visible") {
      bar.style.visibility = "hidden";
      bar.value = "";
    }
  }
}