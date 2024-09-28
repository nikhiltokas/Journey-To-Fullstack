// Chapter 11
// Stack And Heap Memory
// JavaScript engines store their data in two places:
// Stack Memory and Heap Memory.

// Memory management in JavaScript is handled automatically by the runtime environment
// (e.g., JavaScript engines in web browsers or Node.js).
// JavaScript uses a garbage collector to manage memory and ensure that developers do not need to manually allocate or deallocate memory.


// There are two types of memory in JavaScript:
// 1. Stack Memory (Primitive Data Types like Variables, Numbers, Booleans, etc.)
// - Values are copied when assigned or passed to other variables. This is known as "pass by value."

// Example:
let myName = "Nikhil";                 // Stored in Stack Memory
let nameUpdate = myName;               // A new copy of myName is made in Stack memory. (Immutable)
nameUpdate = "Tokas";                  // A new value is assigned to nameUpdate, but myName remains unchanged.
console.log(myName);                   // Returns the original value "Nikhil"
console.log(nameUpdate);               // Returns the new value "Tokas"

// Explanation: Primitive data types are immutable, meaning a new copy is created in the stack for each assignment or change.




// 2. Heap Memory (Non-Primitive Data Types like Objects, Arrays, Functions, etc.)
// - Variables store references to the actual data in Heap memory. Changes to the reference affect the original object.

// Example:
let employeeOne = {                    // The reference to this object is stored in Stack Memory
    userID: "Rohan09",                 // The actual object is stored in Heap Memory (Mutable)
    age: 30,                           // Stored in Heap Memory (Mutable)
};

let employeeTwo = employeeOne;         // employeeTwo gets the reference to the same object in Heap memory (Pass by reference)
employeeTwo.userID = "Sharad10";       // Modifies the object in Heap Memory (Mutable)
console.log(employeeOne.userID);       // Returns the modified value "Sharad10"
console.log(employeeTwo.userID);       // Also returns "Sharad10"

// Explanation: Non-primitive data types are stored in heap memory, and both `employeeOne` and `employeeTwo` refer to the same object. 
// Changing `employeeTwo.userID` also changes `employeeOne.userID` since they both point to the same reference in Heap memory.