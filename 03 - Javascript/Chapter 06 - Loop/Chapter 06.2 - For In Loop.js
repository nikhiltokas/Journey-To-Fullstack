//For In Loop
// A "for...in" loop is used to loop through the properties of an object.
// Example:
// Syntax: for (key in object) { code block }


// Example 1:  Loop through the properties of an object.
const person = {
  name: "John",
  age: 30,
  city: "New York"
}
for (let key in person) {
  console.log(key + ": " + person[key]);    // Expected outcome: name: John, age: 30, city: New York
}

// Explanation:
// The "for...in" loop goes through each key in the object and prints the key and its value.




// Example 2: Loop through the indices of an array
const fruits = [
  "Apple",
  "Banana",
  "Cherry"
]
for (let index in fruits) {
  console.log(index + ": " + fruits[index]);    // Expected outcome: 0: Apple, 1: Banana, 2: Cherry
}

// Explanation:
// The loop runs through each index of the array and prints both the index and the corresponding fruit.