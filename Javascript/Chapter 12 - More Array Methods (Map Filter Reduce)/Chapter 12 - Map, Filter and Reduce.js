// Chapter 12
// More Array Methods - Map, Filter and Reduce

// In the last chapter we discussed methods that loop arrays using classical JavaScript.
// Here are more methods

// 1. map()
// Creates a new array by performing some operations on each array elemnt.
// The callback function takes three arguments: value, index, and the array.
let number = [87, 43, 52, 71];
let a = number.map((value, index, array) => {      
    console.log(value, index, array)                 // Output: 87, 43, 52, 71   |   0, 1, 2, 3    |    [87, 43, 52, 71]
    return value + 1 + index                         // (Value + 1 + Index[0,1,2,3]) - Adds 1 to each value and its index.
})
console.log(a)                                       // Output: [88, 45, 55, 75]


// 2. filter()
// The 'filter' method creates a new array with elements that pass a test (true or false) provided by a function.
let numberTwo = [21, 12, 38, 79, 4, 6, 9];
let a2 = numberTwo.filter((value) => {                  // Filter method condition
    return value<15;                                    // Keep only the values less than 15.
})
console.log(a2)                                         // Output: [12, 4, 6, 9]


// 3. reduce()
// 'reduce' applies a function to all elements of the array and reduces it to a single value.
// It takes a callback with two arguments: accumulator and currentValue.

// Syntax:
// let array = [value1, value2, value3, value4];
// let result = array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);  // Initial value is optional.
// console.log(result);

let numberThree = [21, 12, 38, 79, 4, 6, 9];
let z = numberThree.reduce((abc, xyz) => {
    return abc+xyz;                                     // Add the current value to the accumulator.
})
console.log(z)                                          // Output: 169

// Note:
// In reduce(), the parameters like accumulator and currentValue are variable names (placeholders) used in the callback function.
// You can technically name them anything, even gibberish like asdfgh and qwerty, as long as their roles stay the same.