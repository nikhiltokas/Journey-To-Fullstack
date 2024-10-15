// Create a button element, give text "Hell Yeah", bgcol red, text color white
// Insert the btn as the first element inside the body tag.

let btn = document.createElement("Button");
btn.innerText = "Hell Yeah";
btn.style.backgroundColor = "Red";
btn.style.color = "white";

// Method 1
// let myNode = document.querySelector("body");
// myNode.prepend(btn);

// Method 2
document.querySelector("body").prepend(btn);