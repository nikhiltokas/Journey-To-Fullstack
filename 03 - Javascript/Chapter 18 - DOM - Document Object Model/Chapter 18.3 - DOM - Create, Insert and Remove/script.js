// Chapter 18.3
// Create, Insert and Delete

// --------------------- Create --------------------------
// 1. createElement()
// Creates an Element (p, div, script, etc)

let elem = document.createElement("button");     // Stored "button" using createElement inside the varable elem.
elem.innerText = "Don't Click";                  // Accessing the variable elem and adding text to it.
console.log(elem);



// --------------------- ADD --------------------------
// 1. node.append(var)
// Adds the Element, at the end of the node.

let var2 = document.querySelector("div");        // Accessing the div node using query selector
var2.append(elem);                               // Appending the new Element at the end of DIV



// 2. node.prepend(var)
// Adds the Element, at the start of the node.

var2.prepend(elem);                              // Prepending the new Element at the start of DIV



// 3. node.before(var)
// Adds the Element, (before) outside the start of the node.

var2.before(elem);                               // Appending the new Element (before) outside the start of DIV



// 4. node.after(var)
// Adds the Element, (after) outside the start of the node.

var2.after(elem);                               // Appending the new Element (after) outside the start of DIV



// --------------------- Delete --------------------------
// 1. node.remove()
// Deletes the Element Node.
let var3 = document.querySelector("p");         // Accessing the paragraph tag node using query selector
var3.remove()                                   // Deleted the p node
var2.remove()                                   // Deleted the div node