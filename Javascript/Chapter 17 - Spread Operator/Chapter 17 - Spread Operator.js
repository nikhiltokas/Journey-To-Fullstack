// Chapter 17
// Spread Operator in JavaScript
// It expands an iterable (like an array or string) in places where multiple values or arguments are expected.
// In an Object literal, the Spread syntax enumerates the properties of an object and adds the key-value pairs to the Object being created.
// Syntax: (...)


// Example: Spread Operator in Object Using an Array
let arr = [1,6,9,13]
let object = {...arr}                                // Spread operator spreads the array into key-value pairs in the object.
console.log(object)                                  // Output: { '0': 1, '1': 6, '2': 9, '3': 13 }




// Example: Spread Operator in a Function
function sum(xx, xy, xz, xxx){
    return xx + xy + xz + xxx
}
console.log(sum(...arr))                             // Output: 29




// Example: Spread Operator in Arrays
let nums1 = [1,2,3,4,5]
let nums2 = [6,7,8,9,10]
let name3 = "Nikhil"
let joinedArray = [...nums1, ...nums2, ...name3]     // Spread each iterable (arrays and string) into individual elements.
console.log(joinedArray)                             // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'N', 'i', 'k', 'h', 'i', 'l']

// Explanation:
// The spread operator combines the arrays `nums1`, `nums2`, and the characters of the string `name` into a single array.