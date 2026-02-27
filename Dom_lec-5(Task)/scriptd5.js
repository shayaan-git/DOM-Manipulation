var img = document.querySelector("img");
var like = document.querySelector("#like");

img.addEventListener("dblclick", () => {
  like.style.opacity = 1;
  like.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(() => {
    like.style.opacity = 1;
    like.style.transform = "translate(-50%, -150%) scale(1) rotate(60deg)";
  }, 800);

  setTimeout(() => {
    like.style.opacity = 0;
  }, 900);

  setTimeout(() => {
    like.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1200);
});
