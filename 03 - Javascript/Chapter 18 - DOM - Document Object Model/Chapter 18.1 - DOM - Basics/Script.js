// Chapter 18
// DOM - Document Object Model


// DOM Basics - Part 1: console.log() vs console.dir()

// console.log()
// Used to print the structure of a DOM element (HTML structure).
console.log(document.body);

// console.dir()
// Displays the properties and methods of the DOM element in an object-like view.
console.dir(document.body);

// Accessing child nodes
// childNodes returns all child elements, including text nodes (spaces, new lines).
console.log(document.body.childNodes);




// DOM Basics - Part 2 (getElement)
// Selection Methods:

// 1. getElementById() - Selects ID
// 2. getElementsByClassName() - Selects Classes
// 3. getElementsByTagName() - Selects Tags


let accessID = document.getElementById("IamID");
console.dir(accessID);                                              // Outputs the element with the ID "IamID"

let accessClass = document.getElementsByClassName("IamClass");
console.dir(accessClass);                                           // Outputs a collection of elements with the class "IamClass"

let accessTag = document.getElementsByTagName("p");
console.dir(accessTag);                                             // Outputs a collection of <p> elements