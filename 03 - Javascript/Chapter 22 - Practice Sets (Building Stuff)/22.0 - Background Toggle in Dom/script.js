const var1 = document.querySelector(".box");
let color = "light";

var1.addEventListener("click", () => {
    if (color === "light") {
        color = "dark"
        document.querySelector("body").style.backgroundColor = "#E6E6E6";
    } else {
        color = "light"
        document.querySelector("body").style.backgroundColor = "#0F0F0F";
    }
});


// ChatGPT's way to write this code.
// document.querySelector(".box").addEventListener("click", () => {
//     document.body.style.backgroundColor = 
//         document.body.style.backgroundColor === "rgb(230, 230, 230)" ? "#0F0F0F" : "#E6E6E6";
// });