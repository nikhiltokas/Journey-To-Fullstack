// Practice Set 1:
// Create a func using the function keyword that takes a String as an argument and returns the number of vowels in the string.

function findVowel(str) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }
  console.log(vowelCount);
}

findVowel("meaa");


// Practice Set 2:
// For a given array of numbers, print the square of each value using the forEach loop.

const mynum = [1,2,3,4,5,67]
mynum.forEach(mynum => {
  console.log(mynum*mynum);
});

