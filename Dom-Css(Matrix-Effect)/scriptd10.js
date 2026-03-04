const p = document.querySelector("p");
const text = p.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;
function randomText() {
  const str = text.split("").map((char, idx) => {   // text.split("") Ye string ko array of characters bana deta hai.
    if (idx < iteration) {
      return char;
    }
    return characters.split("")[Math.floor(Math.random() * 53)] 
}).join("");   // characters.split("") Ye string ko array of characters bana deta hai.
    
    p.innerText = str;

  iteration += 0.3;
}

setInterval(randomText, 30);

/*
Math.floor(Math.random() * 53) ek index number generate karta hai, aur [ ... ] ka kaam hai array se us index par ka character nikalna. Agar [ ] na ho, to bas number milega — character nahi.
*/