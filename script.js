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
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.backgroundImage =
      "linear-gradient(45deg, #74EBD5 0%, #9FACE6 100%)";
    document.getElementById("sidenav").style.backgroundImage =
      "linear-gradient(45deg, #74EBD5 0%, #9FACE6 100%)";
  } else {
    document.getElementById("nav").style.backgroundImage = "none";
    document.getElementById("sidenav").style.backgroundImage = "none";
  }
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
