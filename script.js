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
      "linear-gradient(40deg, #8EC5FC 0%, #E0C3FC 100%)";
  } else {
    document.getElementById("nav").style.backgroundImage = "none";
  }
}
