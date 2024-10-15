// DOM Manupilation - Part 1: querySelector() and querySelectorAll()

// 1. document.querySelector("myId / Class / tag")
// Selects the first element that matches a CSS selector.
let element = document.querySelector("p");
console.dir(element);  // Outputs the selected <p> element

// 2. document.querySelectorAll("myId / Class / tag")
// Selects all elements that match the CSS selector and returns a NodeList.
let allElements = document.querySelectorAll("p");
console.dir(allElements);




// DOM Manupilation - Part 2: Id and Class
// You can access DOM Using dot (.) for class selection and hash (#) for ID selection:

// IMPORTANT: We will be using querySelector in most cases.

let elementClass = document.querySelectorAll(".IamClass");
console.dir(elementClass);

let elementID = document.querySelector("#IamID");
console.dir(elementID);




// DOM Manupilation - Part 3 (Properties)
// Access and manipulate the content of elements

// 1. tagName: returns tag for element nodes (e.g., 'P' for a <p> element).
console.log(element.tagName);  // Example output: 'P'

// 2. innerText: returns the text content of the element and all its children
console.log(element.innerText);  // Outputs the visible text inside the element

// 3. innerHTML: returns the plain text or HTML contents in the element
console.log(element.innerHTML);  // Outputs the HTML content inside the element

// 4. textContent: returns textual content even for hidden elements
console.log(element.textContent);  // Outputs all the text inside the element, even from hidden elements




// DOM Manupilation - Part 4 (Accessing child nodes and elements)

// 1. firstChild:
console.log(element.firstChild);  // Returns the first child node (could be text or element)

// 2. lastChild:
console.log(element.lastChild);  // Returns the last child node

// 3. children:
console.log(element.children);  // Returns all child elements (excludes text nodes)




// Try this in console
// accessID.tagName