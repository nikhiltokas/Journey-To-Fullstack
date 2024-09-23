// 3. While Loop
// The "while" loop executes a block of code as long as the specified condition is true.
// Syntax: while (condition) { code block }


// Example 1: Print numbers 1 to 5
let count = 1;
while (count <= 5) {
  console.log("Count is: " + count);    // Expected output: Count is 1, Count is 2, ... up to 5
  count++;  // This syntax is very important.
}




// Example 2: Print odd numbers less than 10
let j = 1;
while (j < 10) {
  console.log(j);    // Output: 1, 3, 5, 7, 9
  j += 2;  // Increment by 2
}