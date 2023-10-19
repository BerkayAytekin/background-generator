var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", backgroundChange);
color2.addEventListener("input", backgroundChange);
function backgroundChange() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background;
}

var rndmButton = document.createElement("button");
rndmButton.appendChild(
  document.createTextNode("Random Create Background Color")
);
body.appendChild(rndmButton);

rndmButton.addEventListener("click", run1);
function run1() {
  var sty1 =
    "rgb(" +
    Math.floor(Math.random() * 255 + 1) +
    "," +
    Math.floor(Math.random() * 255 + 1) +
    "," +
    Math.floor(Math.random() * 255 + 1) +
    ")";
  var sty2 =
    "rgb(" +
    Math.floor(Math.random() * 255 + 1) +
    "," +
    Math.floor(Math.random() * 255 + 1) +
    "," +
    Math.floor(Math.random() * 255 + 1) +
    ")";
  body.style.background = "linear-gradient(to right, " + sty1 + "," + sty2;
  css.textContent = body.style.background;
}
