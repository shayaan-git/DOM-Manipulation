// <!-- DOM 4 Pillars -->
// <!-- Selection of an Element --> ✅
// <!-- Channging HTML --> ✅
// <!-- Changing CSS --> ✅
// <!-- Event Listeners -->
// <!-- document -> HTML -->

// H1 tag
var h1 = document.querySelector("h1");
h1.innerHTML = "Frontend JS";
h1.style.color = "lightgreen";

// Event Listner
btn.addEventListener("click", function () {
  h1.innerHTML = "I am Shayaan";
  h1.style.color = "cyan";
  h1.style.fontSize = "10rem";
  console.log("click hua");
});
