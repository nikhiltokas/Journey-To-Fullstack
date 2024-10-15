// Chapter 18.2 - More DOM
// DOM Manipulation - Attributes & Styles

// 1. getAttribute(attr)              // To get attribute value
// getAttribute is a method that can access the node to get its value.

// Syntax:
// let nameOfVariable = document.document.querySelector("tag/attribute");

// Example:
// <div id="box">
// div is a Node
// id is attribute
// box is value

let varA = document.querySelector("div");
console.dir(varA)  // Will print div node

let varB = varA.getAttribute("id")
console.dir(varB)  // Will print value of id                          // box

let varC = varA.getAttribute("name")
console.dir(varC)  // Will print value of name                        // Kalashmikov




// 2. setAttribute(attr, value)       // To set the attribute value
console.log(varA.setAttribute("name", "Lensol"))                      // name attribute's value is now Lensol, previously "Kalashmikov".
console.log(varA)  // Will print div


//3. node.style
// Changes the properties of any styled element.
let varD = document.querySelector("div");
console.log(varD.style)

varD.style.backgroundColor = "YellowGreen"
varD.style.fontSize = "1.8rem"