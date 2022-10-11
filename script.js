// Burgermenu toggle
function burgerToggle() {
  var links = document.getElementById("links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
  console.log(links.style.display);
}

// scroll listener
window.onscroll = function () {
  scrollFunction();
};

// show bar on scroll
const nav = document.getElementById("nav");
const sidenav = document.getElementById("sidenav");

function scrollFunction() {
  const scrolled =
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
  nav.classList.toggle("--scrolled", scrolled);
  sidenav.style.toggle("--scrolled", scrolled);
}

// reset form
const form = document.getElementById("form");

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

// debug
function console() {
  console.log("Hello World");
}
