var inc = document.querySelector("#inc");
var dec = document.querySelector("#dec");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

var counter = 0;

inc.addEventListener("click", function () {
  counter++;
  h1.innerHTML = counter;
});

dec.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  }
  h1.innerHTML = counter;
});

reset.addEventListener("click", () => {
  if (counter > 0) {
    counter = 0;
    h1.innerHTML = 0;
  }
});
