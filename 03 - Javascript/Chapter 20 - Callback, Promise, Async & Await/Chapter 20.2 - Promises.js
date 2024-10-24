// Promises
// A Promise represents the "eventual" completion or failure of an asynchronous operation.
// Promises help to avoid callback hell and provide cleaner handling of async tasks.

// Promises has 3 states:
// 1. Pending
// 2. Resolve or Fulfilled   // An inbuilt JavaScript Function (known as handlers) (handled by `.then`).
// 3. Reject                 // An inbuilt JavaScript Function (known as handlers) (handled by `.catch`).

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Example:
let var1 = new Promise((resolve, reject) => {
    resolve(1996);                                // Resolve: If successful, use .then to handle this.
});
console.log(var1);                                // Output: Fulfilled Promise { <state>: "fulfilled", <value>: 1996 }

let var2 = new Promise((resolve, reject) => {
    reject("Ooopsy doopsy");                      // Reject: If failure, use .catch to handle this.
});
console.log(var2);                                // Output: Rejected Promise { <state>: "rejected", <reason>: "Ooopsy doopsy" }




// Example 2:
function datFile(fileName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(fileName);
            resolve("Successfully executed");
        }, 2000);                                 // Resolve the promise after 2 seconds
    });
}

datFile("dataFile.txt")
    .then((message) => console.log(message))     // Output: dataFile.txt (after 2 seconds), Successfully executed
    .catch((error) => console.error(error));     // If rejected, the error would be caught here




// Example 3: (Easier Way)
fetch('https://api.github.com/')                                     
.then((data) => {console.log("Website is functioning")})                 
.catch((data) => {console.log("Website unavailable at the moment")})