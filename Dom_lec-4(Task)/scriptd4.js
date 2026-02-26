var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var bar = document.querySelector("#inner");

var count = 0;

btn.addEventListener("click", function () {

  btn.style.pointerEvents = "none";
  btn.style.opacity = "50%";

  var num = 20 + Math.floor(Math.random() * 50);    // start from 20 and end to 69
  
  var meter = setInterval(function () {
    count++;
    h1.innerHTML = count + "%";
    bar.style.width = count + "%";
    //   console.log("chal rha");

    if (count >= 100) {
      clearInterval(meter);
    }
  }, num);
});
