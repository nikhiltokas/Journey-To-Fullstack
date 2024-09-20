// Chapter 3: Primitives and Objects in JavaScript

// Primitives
// Primitives are basic data types in JavaScript. They include:
// 1. Number – For example: 55, 3.14
// 2. String – For example: "Hello", "JavaScript"
// 3. Boolean – Either true or false
// 4. Undefined – A variable that has been declared but not assigned a value is undefined.
// 5. Null – Represents an intentional absence of value. (Also known as object)

let name = "Tokas";              // This is a string literal
let age = 28;                    // This is a number literal
let isApproved = true;           // This is a boolean literal
let anyName;                     // This is an undefined literal
let anotherName = undefined;     // This is also an undefined literal
let slctColor = null;            // This is null/object literal


// Objects
// An object is a collection of key-value pairs.
// It is often created using curly brackets {}.

let person = {
    firstName: "Nikhil",
    age: 28,
    isStudent: false,
};

console.log(person); // Expected output: { firstName: "Nikhil", age: 28, isStudent: false }

// This is an object because it holds key-value pairs, where "firstName" is the key and "Nikhil" is the value, and so on.