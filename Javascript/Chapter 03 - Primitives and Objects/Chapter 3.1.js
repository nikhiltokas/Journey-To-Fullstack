// Difference between Primitives and Objects
// - Primitives are vaiable data type.
// - Primitives are immutable (cannot be changed).

// - Objects are reference vaiable data type.
// - Objects are mutable (can be changed).


// Example 1 - Primatives
let x = 10;
x = 5 + 20; // Here x gets a new value but the original 10 remains unchanged.
console.log(x); // Expected output: 25

// In this case, the variable x is just a label or a reference to a value.
// When you write let x = 10;, you are ASSIGNING the value 10 to the variable x.
// When you later do x = 5 + 10;, We compute it which results in 25.
// We are REASSIGNING x to hold the value 25 now. This does not modify the original value (10). Instead, the variable x now points to a new value (25).
// The number "10" itself is immutable. You can't change it in place, you can only create a new string if you want a different value.


// Example 2 - Object
let obj = { name: "Raftaar", age: 25 };
obj.age = 26;  // This changes the original object!
console.log(obj); // Expected output: { name: "Raftaar", age: 26 }

// In this case, we are modifying the object in place. We're not creating a new object; we're just changing the age property inside the original object.

// Key Clarification:
// REASSIGNING a variable does not make something mutable or immutable. Reassignment is about changing the REFERENCE or value stored in a variable.
// Mutability and immutability refer to whether the value itself can be changed in place, not whether the variable pointing to that value can change.