// Chapter 1
// Introduction to JavaScript.
// JavaScrip is a programming langugage used to communicate with your computer.

// 1. "var" or "let" or "const" are used to declare a variable in JavaScript.
// 2. A variable is like a container that stores data (like numbers, words, etc.) for use later.

// Variables can store different types of data like:
// 1. Numbers (25, 5.6, etc.)
// 2. Strings (text) like "Hello bro what's good!"
// 3. Booleans (true or false)
// Etc.

// CONSOLE dot LOG
// console.log() is a built-in function in JavaScript that prints or logs whatever is inside the parentheses to the browser’s console.

//Example:
let studentName = "ABCDEFG"; // Here "let" is used to declare the variable "studentName" and stores a string "ABCDEFG" in it.
console.log(studentName) // Printing the value of the variable to the console. 
//Expected output: ABCDEFG


// IMPORTANT NOTES:

// var, let & const are ways to declare variables.
// var is outdated way of declaring variables and it can cause problems.
// Instead let should be used to declare variables.

// A vaiable cannot be a reserved keyword (let const = 89;)
// Here "const" is a reserved keyword

// Variables should be a meaningful keyword (let studentAge = 16;)
// Here "studentAge" is a meaningful Keyword, as it is easer to undertand.

// Variables cannot start with a number (1name)
// Variables cannot contain a space or hyphen (-)
// Variables are case-sensitive (studentAge and StudentAge) are two different variables

// Strings needs to be in inverted commas.
// And we should declare each variable in new line (example below)

let firstName = "First";
let lastName = "Script";
console.log(firstName + lastName) //Expected output: FirstScript