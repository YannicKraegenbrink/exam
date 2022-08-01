function burgerToggle() {
  var links = document.getElementById("links");
  if ((links.style.display = "block")) {
    links.style.display = "none";
  } else if ((links.style.display = "none")) {
    links.style.display = "block";
  }
  console.log(links.style.display);
}

window.onscroll = function () {
  scrollFunction();
};

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
