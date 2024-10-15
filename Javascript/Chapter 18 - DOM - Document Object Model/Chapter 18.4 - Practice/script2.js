// Create a p tag in html
// GIve it class and styling
// Create new class in CSS and append this class to the P element.

// Basically - keep color1 and add color2.
// <p class ="color1">

let varA = document.querySelector("p");
// varA.setAttribute("class", "color2");             // This overwrites the previous color1 attribute

varA.classList.add("color2");                        // This adds without overwriting
varA.classList.add("faultyCol");                     // This adds without overwriting
varA.classList.remove("color1");                     // This simply removes the class