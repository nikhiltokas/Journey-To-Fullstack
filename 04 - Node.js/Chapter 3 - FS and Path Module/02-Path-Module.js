// 1.2 Path Module:
import path from "path";  // Importing the Path module

// Example path:
let myPath = "D:\\AddPath\\ForGithub.txt";


// Methods of Path Module:
// 1. extname() method:
// Returns the file extension.
console.log(path.extname(myPath));  // Output: .txt

// 2. dirname() method:
// Returns the directory path of the file.
console.log(path.dirname(myPath));  // Output: D:\AddPath

// 3. basename() method:
// Returns the file name with extension.
console.log(path.basename(myPath));  // Output: ForGithub.txt

// 4. join() method:
// Joins multiple segments into a single path.
console.log(path.join("C:\\Users\\User\\Desktop", "NewFolder\\File.txt"));  // Output: C:\Users\User\Desktop\NewFolder\File.txt
