const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ24abcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

para.addEventListener("mouseenter", () => {
  const matrix = setInterval(() => {
    const str = text.split("").map((char, idx) => {
        return characters.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");

    para.innerText = str;
  }, 30);
  
  setTimeout(() => {
    clearInterval(matrix)
  },1000);

});
