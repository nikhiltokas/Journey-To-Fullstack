// Chapter 15: Rest Operator in Functions
// The rest operator (...) allows a function to accept an indefinite number of arguments and bundle them into an array.
// Useful when you don't know how many arguments will be passed into the function.



// Example 1: Without Rest Operator
function calculateCart(item1) {
    return item1; // This function can only handle one argument.
}
console.log(calculateCart(80, 50, 90, 300, 7000));  // Output: 80

// Explanation: 
// - Only the first argument (80) is returned because the function only accepts one parameter (item1).
// - The rest of the arguments (50, 90, 300, 7000) are ignored because they are not part of the function signature.

// Solution: Use the rest operator (...) to capture multiple arguments.




// Example 2: Using the Rest Operator
function calculateCartTwo(...item1) {
    return item1;  // item1 is now an array containing/holding all passed arguments.
}
console.log(calculateCartTwo(80, 50, 90, 300, 7000));  // Output: [80, 50, 90, 300, 7000]

// Explanation:
// - The rest operator (...) collects all arguments into an array called `item1`.
// - Now the function can handle any number of arguments.




// Example 3: Combining Rest Operator with Regular Parameters
function calculateCartThree(discount, tax, ...items) {
    return items;  // 'items' will only contain the remaining arguments after 'discount' and 'tax'
}
console.log(calculateCartThree(80, 50, 90, 300, 7000));  // Output: [90, 300, 7000]

// Explanation:
// - The function now accepts (discount and tax)
// - Hence, the first two values (80, 50) are assigned to "discount and tax", while the rest (90, 300, 7000) are bundled into the `items` array.