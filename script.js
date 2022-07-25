function burgerToggle() {
  var links = document.getElementById("links");
  if ((links.style.display = "block")) {
    links.style.display = "none";
  } else if ((links.style.display = "none")) {
    links.style.display = "block";
  }
  console.log(links.style.display);
}

function loader() {
  var loader = document.getElementById("loader");
  loader.style.display = "block";
  console.log(loader.style.display);
  setTimeout(function () {
    loader.style.display = "none";
    console.log(loader.style.display);
  }, 1600);
}
