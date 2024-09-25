// Template Literal

// Template literals are literals delimited with backtick (`) (Find backtick below esc or above tab)
// It allows for multi-line strings.
// String interpolation with "embedded expressions"
// Syntax: `this is a string`

// Watch video by Telusko on Template Literal for better understanding.
// Link: https://youtu.be/K4Kh5gw4PRE?si=p56n1d4uqu2hwQ_T


// Let's understand with example:
// If you want to print a result of 2 numbers, with strings.
let x = 3;
let y = 5;
let result = x+y;

//Read carefully:
console.log("The output of x and y is result")                 // Output: The output of x and y is result.  // (Using inverted comma)
console.log(`The output of ${x} and ${y} is ${result}`)        // Output: The output of 3 and 4 is 11.      // (Using backtick with embedded expressions)


// Backtick basically allows you to manipulate strings.