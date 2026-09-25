function upDate(element) {
  console.log("upDate function activated");

  document.getElementById("image").innerHTML = element.alt;

  document.getElementById("image").style.backgroundImage =
    "url('" + element.src + "')";
}

function unDo() {
  console.log("unDo function activated");

  document.getElementById("image").innerHTML =
    "Hover your mouse or use the Tab key to select an image below.";

  document.getElementById("image").style.backgroundImage = "url('')";
}

function addTabIndex() {
  console.log("addTabIndex function activated");

  var images = document.querySelectorAll(".preview");

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

window.onload = addTabIndex;
