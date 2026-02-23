var btn = document.querySelector("button");
var main = document.querySelector("main");

btn.addEventListener("click", () => {
  var div = document.createElement("div");  // sticky notes
  var x = Math.random() * 100; // number between 0-100
  var y = Math.random() * 100; // number between 0-100
  var rot = Math.random() * 360;

  var c1 = Math.floor(Math.random() * 256); // number between 0-256
  var c2 = Math.floor(Math.random() * 256); // number between 0-256
  var c3 = Math.floor(Math.random() * 256); // number between 0-256

  div.style.height = "100px";
  div.style.width = "100px";

  div.style.position = "absolute";
  div.style.top = y + "%";
  div.style.left = x + "%";
  div.style.rotate = rot + "deg";
  div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

  main.appendChild(div);
});
