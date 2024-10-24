// Chapter 1: Basics of Node.js & npm (Node Package Manager)

// 1. Basics:
// Steps to Initialize a Node Project:
// - Install Node.js (Ensure Node.js is installed on your system)
// - Open Terminal (Inside VS Code or your preferred code editor)
// - Run Command: npm init
// - Follow the instructions to create a package.json file, which contains details about the project (name, version, description, etc.)



// 2. npm:
// npm is a package manager for the JavaScript programming language, maintained by npm, Inc.
// - Used to manage dependencies for Node.js applications.
// - It is a command-line tool for installing, updating, and uninstalling packages.
// - It acts as a repository for open-source Node.js packages (modules).

// What are packages?
// Packages: Pre-written blocks of code that perform specific tasks, improving productivity by reducing the need to write everything from scratch.

// Example:
// Slugify: A package used to create URL-friendly slugs (e.g., "My Blog Post" -> "my-blog-post").
// This helps in creating clean, readable, and SEO-friendly URLs, often used in blogs or websites.



// 3. Benefits of npm packages:
// - These packages increase productivity and reusability.
// - You can share your project without the `node_modules` folder after running `npm init`.
// - Others can install the exact dependencies with the versions specified in the `package.json` file by running `npm install` (or `npm i`).
// - To install the required packages for a project, run: `npm i` (short for `npm install`).


// Let's do a TEST RUN
// Run this command in the terminal:
// node index.js                                   // index.js is the name of the file. This command will run the file in the terminal.

console.log("String: node [directory]")            // Output in the Terminal: String: node [directory]