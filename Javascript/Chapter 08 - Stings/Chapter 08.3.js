// Method Strings
// It helps you manipulate strings and convert them to Lower or Upper case.
// You can also replace text using Method Strings.

// Few string methods properties are:
// .length                                  // Calculates the length of the string
// .toUpperCase()                           // Converts text to UPPER CASE
// .toLowerCase()                           // Converts text to LOWER CASE


// Example 1:
let myName = "Tokas";
console.log(myName.length)                  // Output: 5
console.log(myName.toUpperCase())           // Output: TOKAS
console.log(myName.toLowerCase())           // Output: tokas




// More string methods properties are:
// .slice()                                  // Cuts or Slice or Reduces your string.
// .replace()                                // Replaces your text.


// Example 2:
let Name = "Sharad";
console.log(Name.slice(0))                       // Output: Sharad          //Starts from the charecter 0, prints till the end.
console.log(Name.slice(2))                       // Output: arad            //Starts from the charecter 2, prints till the end.
console.log(Name.slice(2,4))                     // Output: ar              //Starts from the charecter 2, prints till the end. (The end index - 4 is not included)
console.log(Name.replace("Sharad", "Nikhil"))    // Output: Nikhil          //Replaces Sharad from Nikhil.



// Some more string methods properties are:
// .concat()
// .trim()                                   // Removes blank spaces from a string.

// Example 3:
let Friend = "Anushka";
let myFriend = "Sid";
let anotherFriend = "        Caeser And Champa are Great Friends       ";

console.log(Friend.concat(" is friends with ", myFriend))        //Output: Anushka is friends with Sid
console.log(anotherFriend.trim())                                //Output: Caeser And Champa are Great Friends