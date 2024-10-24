// Chapter 9
// Arrays
// Arrays are special objects in JavaScript that hold multiple values in a single variable.
// You can store different types of values (numbers, strings, booleans, etc.) in the same array.

// Arrays use square brackets to define a list of values.
// Syntax: let variableName = [value1, value2, value3, etc];
// Example: let myArray = [1, 2, 3, 4, 5, true, "Hello World"];

// Arrays are zero-indexed, meaning the first element is at index 0.


// Example:
const shoesInventory = ["Nike", "Adidas", "Reebok", "Puma", "Converse"];
// Accessing Array Elements
// You can access an array element by referring to the index number.


// Example:
console.log(shoesInventory[0]);            // Output: Nike
console.log(shoesInventory[1]);            // Output: Adidas
console.log(shoesInventory[2]);            // Output: Reebok
console.log(shoesInventory[3]);            // Output: Puma
console.log(shoesInventory[4]);            // Output: Converse

// Now let's assume we have added a new shoe to our inventory.
// We can add it by updtaing the elements of an array.


// Example:
shoesInventory[5] = "New Balance";
console.log(shoesInventory);               // Output: [ 'Nike', 'Adidas', 'Reebok', 'Puma', 'Converse', 'New Balance' ]

// Now assume you want partner with Comet instead of Nike and update your inventory.
// Here's how you can change the elements of an array.


// Example:
shoesInventory[0] = "Comet";               // Nike is replaced by Comet
console.log(shoesInventory);               // Output: [ 'Comet', 'Adidas', 'Reebok', 'Puma', 'Converse', 'New Balance' ]

// Arrays are mutable.