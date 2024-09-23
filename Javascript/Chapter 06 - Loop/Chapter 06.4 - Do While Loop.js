// 4. Do While Loop
// The "do...while" loop runs the code block once, 
// and then repeats as long as the condition is true.
// Syntax: do { code block } while (condition)


// Example 1: Print numbers 1 to 5
let k = 1;
do {
  console.log(k);    // Output: 1, 2, 3, 4, 5
  k++;  // Increment k
} while (k <= 5);

// Explanation:
// The loop runs once, and then continues while k <= 5.




// Example 2: Print "Hello" at least once
let l = 10;
do {
  console.log("Hello");    // Output: Hello
  l++;
} while (l < 10);

// Explanation:
// Even though the condition (l < 10) is false, the loop runs once before checking the condition.