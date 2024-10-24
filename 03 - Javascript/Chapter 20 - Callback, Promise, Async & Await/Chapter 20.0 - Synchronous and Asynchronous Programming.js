// Chapter 20
// Synchronous and Asynchronous Programming

// Synchronous Programming:
// Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Example:
console.log("one")
console.log("two")
console.log("three")
console.log("four")
// Each program runs in sync and waits for the previous line of code to execute


// Asynchronous Programming:
// Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// Example:
// .setTimeout() is a function in javascript that works asynchronously. As the name suggests it works after a set time. Let's see this in action.
function sayWord() {
    console.log("Guitar")
    console.log("Aeroplane")
}

console.log("Again, one")
setTimeout(sayWord, 2000) // Timeout: 2 seconds = 2000 ms
console.log("Again, two")
console.log("Again, three")
console.log("Again, four")
// Here setTimeout will automatically execute after 2 seconds, and our other statements of console.log will not be dependant on setTimeout(sayWord).