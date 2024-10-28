// 1.1 FS Module (File System Module)
import fs from "fs/promises";  // Importing the FS module with promises

// 1. writeFile() method:
// Used to create and write content to a file.
await fs.writeFile("ForGithub.txt", "This is how you write a file");
console.log("File Written");


// 2. readFile() method:
// Arguments for readFile("FileName", (error, data)) - callback
// Reads the contents of a file.
// Takes file name as argument and returns the data (async).
let var1 = await fs.readFile("ForGithub.txt");
console.log(var1);


//3. appendFile() method
// Appends content to an existing file.
// Takes file name and content as arguments.
let var2 = await fs.appendFile("ForGithub.txt", "\n\nAdding a new Line");
console.log(var2.toSring());            // .toString() method converts the binary output to string format.
console.log("Content Appended");