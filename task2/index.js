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

/* Delay code */
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
/* -------- */

/* Quote fetch code (async) */
function fetchQuote() {
  /* sleep(5000); */

  /* await new Promise(resolve => setTimeout(resolve, 5000)); */
  
  $.getJSON('https://api.kanye.rest/', function(data) {
    document.getElementById("text-two").innerHTML = data.quote;
  });
}
/* -------- */
