/* Page Load code */
var colors = ["blue", "red", "purple", "orange", "yellow", "green"];

function pageLoad() {
  document.getElementById("text-intro").style.color = colors[Math.floor(Math.random() * colors.length)];
}
/* -------- */

/* Button Click code */
var clicked = false;

function buttonClick() {
  if (!clicked) {
    document.getElementById("text-one").innerHTML = "Ny text!";
    clicked = true;
  } else {
    document.getElementById("text-one").innerHTML = "Du har allerede trykket på knappen!!!!!!";
  }
}
/* -------- */
