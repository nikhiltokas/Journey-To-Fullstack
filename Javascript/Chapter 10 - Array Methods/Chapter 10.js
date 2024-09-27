// Chapter 10
// Array Methods
// These functions built-in to JavaScript that we can apply to our arrays.
// Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.


// 1. The .push() method adds new items to the end of an array.
// The .push() method changes the length of the array.

// Example:
const fruits = [];                           // This is an empty Array
fruits.push("banana", "apple", "peach");     // Here we changed the "length" of an array.

console.log(fruits.length);                  // Output: 3
console.log(fruits[0]);                      // Output: banana
console.log(fruits[1]);                      // Output: apple
console.log(fruits[2]);                      // Output: peach




// 2. The .toString() method converts an array to a string.

//Example
const numbers = [1, 2, 3];
let items = numbers.toString();               // Here we changed the array of numbers to string.

console.log(items);                           // Output: 1,2,3
console.log(typeof items);                    // Output: string




// 3. The .join() method is used to join all elements of an array into a string.

//Example
let addingString = numbers.join("__")
console.log(addingString);                    // Output: 1__2__3




// Most popular methods are:
// .toString()       // Converts an array to a string.
// .join()           // Join all elements of an array into a string.
// .pop()            // Removes last element of an array.
// .push()           // Adds new items to the end of an array.
// .shift()          // Removes first elemnet and retuns new array length.
// .unshift()        // Adds to the array and returns new array length.
// .delete()         // The delete operator deletes both the value of the property and the property itself.
// .concat()         // The concat method joins two or more strings. This method does not change the existing strings.