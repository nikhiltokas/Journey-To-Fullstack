// Chapter 2
// Variables & Data

// As previously explained variables are containers that stores some value.
//Example
let xVariable = "Purfume";
console.log(xVariable) //Expected output: Purfume

// Here "xVariable" is an identifier.
// And we have stored a string in "xVariable" (i.e) "Purfume"

// You can store any kind of data in the variable.
// (Refer Chapter 1)

//Example 1
let age = 23; // Here we stored a number
console.log(age) //Expected output: 23

//Example 2
let bookName = "The Alchemist"; // Here we stored a string
console.log(bookName) //Expected output: The Alchemist

//Example 3
let fact = true; // Here we stored a boolean
console.log(fact) //Expected output: true



// Lesson 2 - var, let and const in JavaScript

// var
// var is globally scoped
// var can be updated
// var can be re-declared

// let
// let is block scoped
// let can be updated
// let CAANOT be re-declared

// const
// const is block scoped
// const can NEITHER be updated NOR be re-declared

// Example 1
// let
let yourAge = 69;
console.log (yourAge) //69

yourAge = yourAge + 1 // here we updated the "let" variable yourAge
console.log (yourAge) //Expected output: 70

// Example 2
// const
const myAge = 28;
console.log(myAge) //28

myAge = myAge + 1 // here we updated the "const" variable myAge
console.log (myAge) //Expected output: ERROR