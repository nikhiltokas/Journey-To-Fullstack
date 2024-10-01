// Chapter 11
// Array with Loops (Iteration and Methods)
// JavaScript provides multiple ways to iterate through arrays, allowing you to access, modify, or manipulate array elements efficiently.


// Example:
let variableX = [4, 10, 24, 38];

// 1. For Loop: (Classic)
// The classical way to loop through an array using an index.
for (let i = 0; i < variableX.length; i++) {
    console.log(variableX[i])                   // Output: 4, 10, 24, 38
}


// 2. For...of Loop:
// This loop iterates over the *values* of the array, making it more readable than the classical for loop.
for (let i of variableX) {
    console.log(i)                              // Output: 4, 10, 24, 38 (the values directly)
}


// 3. for...in Loop (Not Recommended for Arrays)
// This loop iterates over the *indexes* (not values) of an array, and it's generally used for objects.
for (let i in variableX) {
    console.log(i)                              // Output: 0, 1, 2, 3 (prints the indexes)
}
for (let i in variableX) {
    console.log(variableX[i])                   // Output: 4, 10, 24, 38 (prints each element using the index)
}


// 4. forEach() Method
// This is a modern method specifically designed for iterating over arrays.
// It takes a callback function that runs for each element.
variableX.forEach((variableX) => {
    console.log(variableX * variableX);                      // Output: 16, 100, 576, 1444 (squares of the elements)
});


// 5. Array.from() Method
// This method creates a new array from an array-like or iterable object.
// Useful for converting strings, sets, maps, or even NodeLists into arrays.
let word = "Tokas";
let ary = Array.from(word);
console.log(ary)                                // Output ['T', 'o', 'k', 'a', 's']