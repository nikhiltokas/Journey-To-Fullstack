// Chapter 9
// Arrays
// Arrays are a special type of object in JavaScript.
// They are used to hold more than one value.
// You can even store differnt kinds of values.

// Arrays use square brackets.
// Syntax: variableName = [value1, value2, value3, etc]
// Example: let myVariable = [1, 2, 3, 4, 5, true, "Hello World"]


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