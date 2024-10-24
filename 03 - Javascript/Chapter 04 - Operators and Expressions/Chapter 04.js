// NOTE: I recommend watching a Youtube video for this topic. (Have mentioned in this doc)


// Chapter 4: JavaScript Operators and Expressions
// Operators are symbols that perform operations on variables and values. JavaScript has many different types of operators.

// 1. Arithmetic Operators
// These operators perform basic arithmetic:
// +    Addition
// -    Subtraction
// *    Multiplication
// /    Division
// %    Modulus (Returns the remainder of a division)
// **   Exponentiation (Raises a number to the power of another)
// ++   Increment (Adds 1 to a variable)
// --   Decrement (Subtracts 1 from a variable)

//Example
let x = 10;
let y = 5;
console.log(x + y);      // Expected output: 15
console.log(x - y);      // Expected output: 5
console.log(x * y);      // Expected output: 50
console.log(x / y);      // Expected output: 2
console.log(x % y);      // Expected output: 0 (10 divided by 5 leaves a remainder of 0)

// Watch this video by Bro Code for better understanding > https://youtu.be/FyGIKD2fxIo?si=59YlX2OachKA-G88




// 2. Assignment Operators
// These assign values to variables:
// =     Assigns a value
// +=    Adds and assigns the result to the variable
// -=    Subtracts and assigns the result to the variable

//Example
let z = 10;
console.log(z = 5);       // Expected output: 5   (z is assigned the value 5)
console.log(z += 5);      // Expected output: 15  (z = z + 5, so z becomes 10)
console.log(z -= 5);      // Expected output: 5   (z = z - 5, so z becomes 5)




// 3. Comparison Operators
// Used to compare values and return a Boolean (true or false):
// ==   Equal to      (checks value only)
// ===  Strict equal  (checks both value and data type) (String, Number, Booleans)
// !=   Not equal
// !==  Strict not equal
// >    Greater than
// <    Less than
// >=   Greater than or equal to
// <=   Less than or equal to

let p = "20";
let q = 20;
console.log(p == q);      // Expected output: true    (checks only value, "20" == 20)
console.log(p < q);       // Expected output: false   (string "20" is not less than number 20)
console.log(p === q);     // Expected output: false   (different data types: string is not equal to number)
console.log(p != q);      // Expected output: false   (values are equal)
console.log(p !== q);     // Expected output: true    (data types are not the same: p is string, q is number)




// 4. Logical Operators
// Used to combine multiple conditions:
// && (AND)    // Here both conditions must be true
// || (OR)     // Here at least one condition must be true 
// ! (NOT)     // Inverts the condition (true becomes false, false becomes true)

let name = "Nikhil";
let age = 28;
let isStudent = true;
let isSchoolPricipal = false;
console.log(age >= 18 && isStudent);            // Expected output: true
console.log(age >= 18 && isSchoolPricipal);     // Expected output: false
console.log(age < 18 || isStudent);             // Expected output: true
console.log(age < 18 || isSchoolPricipal);      // Expected output: false

// Watch this video by Bro Code for better understanding > https://youtu.be/ovWYhDVQiR8?si=PWd-DOfng7UtA4Ia