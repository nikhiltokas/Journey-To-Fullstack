// Chapter 13: Functions
// A function is a block of code designed to perform a specific task. Functions can be called (invoked) whenever needed.

// JavaScript already has built-in functions like:
// console.log(), array.push(), string.toUpperCase(), etc.

// We can also define our own functions and call them when necessary.

// Function Syntax:
// 1. Defining a Function:
// function functionName(parameter1, parameter2) {
// Code to perform a task, using parameters (like local variables within the function).
// return parameter1 + parameter2;  // The return statement sends a value back to the caller.
// }

// 2. Calling a Function:
// functionName(argument);

// Example 1:
function addNumbers(abc, pqr) {        // Created a function with two parameters: abc and pqr.
    return abc + pqr;                  // Return the sum of abc and pqr.
}
addNumbers(1, 5);                      // Called the function
console.log(addNumbers)                // Output: 6




// Arrow Functions
// Arrow functions provide a shorter syntax for writing functions.
// They can be stored in variables.

// Variation 1: Arrow function without return (when you don't need to return a value)
const additionVariable = (a, b) => {
    console.log(a + b);                // Simply logs the sum.
};
additionVariable(10, 2);               // Output: 12

// Variation 2: Arrow function with return (to return a value)
const additionVariable2 = (a, b) => {
    return a + b;                      // Return keywords ends function execution and specifies a value to be returned to the function caller.
};
console.log(additionVariable2(10, 2));  // Output: 12