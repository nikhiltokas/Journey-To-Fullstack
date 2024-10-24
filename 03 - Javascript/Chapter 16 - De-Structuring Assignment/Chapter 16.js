// Chapter 16
// Destructuring Assignment in Arrays and Objects
// Destructuring is a feature used to unpack values from arrays or properties from objects into individual variables.

// Example: Usual Way (Without Destructuring)
let arr = [1,6,9,13,19,22,26];
let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
let e = arr[4];
console.log(a,b,c,d,e);                          // Output: 1 6 9 13 19

// Explanation:
// This approach works but requires multiple lines for each assignment.




// Example: De-Structuring with Arrays:
let array = [2,7,10,14,20,23,27];
let [p,q,r,s,t, ...rest] = array;
console.log(p,q,r,s,t,rest);                     // Output: 2 7 10 14 20 [ 23, 27 ]

// Explanation:
// With destructuring, we can assign multiple variables at once. The rest operator (...) captures the remaining values in an array.




// Example: Destructuring with Objects:
let obj = {
    xa: 18,
    xb: 72,
    xc: 98,
    xd: 12,
}
let {xa,xb,xc} = obj;                            // Unpacking specific properties
console.log(xa,xb,xc)                            // Output: 18 72 98

// Explanation:
// Destructuring with objects allows us to extract properties into variables easily.