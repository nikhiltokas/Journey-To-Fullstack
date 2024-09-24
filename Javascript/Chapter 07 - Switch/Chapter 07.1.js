// Chapter 07
// Switch
// A JavaScript switch statement is a way to control the flow of your program based on different conditions. It's like a decision-making tool. 
// If it finds a match, it executes the corresponding block of code until a 'break' statement is encountered. 
// If no 'break' is found, it continues executing the following cases, known as 'fall-through' behavior.

// Watch video by Telusko on Switch for better understanding.
// Link: https://www.youtube.com/watch?v=SJPsOFfvEQA&ab_channel=Telusko


// Imagine you're choosing a snack, and based on the snack, you want to do something different.
// If you choose apple, you'll eat it.
// If you choose chips, you'll open the bag.
// If you choose chocolate, you'll unwrap it.


// Example 1:
// Fall-Through:
// Purpose: This isn’t a specific keyword, but it’s an important concept.
// If you don’t put a break; after a case, JavaScript will continue to execute the next case even if a match was found.
// This is called fall-through behavior.

let snack = "apple";
switch (snack) {
  case "apple":
    console.log("Eat the apple.");           // Output: Eat the apple.
  case "chips":
    console.log("Open the chips bag.");      // Output: Open the chips bag.
  case "chocolate":
    console.log("Unwrap the chocolate.");    // Output: Unwrap the chocolate.
}




// Example 2:
// Case:
// Purpose: Stops the execution of more case blocks after a match is found.
// Without break, the code will "fall through" to the next case
// (which usually isn’t what you want unless you're grouping cases).

let dessert = "Pudding";
switch (dessert) {
  case "Cake":
    console.log("This is Cake");              // Output: This is Cake (Will not be executed)
    break;
  case "Pudding":
    console.log("This is Pudding");           // Output: This is Pudding
    break;
  case "Ice Cream":
    console.log("This is Ice Cream");         // Output: This is Ice Cream (Will not be executed)
}




// Example 3:
// Default:
// Purpose: If no cases match, the default block is executed.
// Think of it like the "else" in an if-else statement.

let day = undefined;
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  default:
    console.log("Not Monday.");               // Output: Not Monday
}