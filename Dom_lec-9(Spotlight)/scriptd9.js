addEventListener("mousemove", (e) => {
  // console.log(clientX, clientY);
  document.body.style.setProperty("--x", e.x + "px"); //  --x: 400px;

  // setproperty is used to change/update root variables
  document.body.style.setProperty("--y", e.y + "px"); //  --y: 400x;
});

/*

setProperty isliye kyunki .style.--x = value valid JavaScript nahi hai — CSS variables ko normal property ki tarah assign nahi kar sakte. Unke liye setProperty mandatory hai.

Core reason: CSS variables (--) are not JavaScript-accessible as direct properties — that's why setProperty exists for them. Normal properties directly kaam karti hain.

*/
