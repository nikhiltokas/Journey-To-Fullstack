// Chapter 5: Conditional Expressions
// Definition: Conditionals in JavaScript are used to perform different actions based on different conditions.
// Purpose: They allow you to execute certain blocks of code only if specific conditions are true or false.

// 1. if Statement
// The if statement is used to execute a block of code if a specified condition is true.
let age = 18;
if (age >= 18) {
  console.log("You are an adult."); // Output: You are an adult.
}


// 2. if-else Statement
// The if-else statement adds an alternative block of code to execute if the condition is false.
let age2 = 30;
if (age2 > 18) {
  console.log("you are eligible to drive")
} else {
  console.log("you are not eligible to drive") // Output: you are eligible to drive.
}; 


// 3. if-else if-else Statement
// This statement allows for multiple conditions.
let age3 = 20;
if (age3 < 13) {
  console.log("You are a child.");
} else if (age3 < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult."); // Output: You are an adult.
}


// 4. Ternary Operator
// The ternary operator provides a shorthand way to write if-else statements.
let age4 = 18;
let status = (age4 >= 18) ? "adult" : "not an adult";
console.log(status); // Output: adult

// If can be used as ?
// Else can be used as : 