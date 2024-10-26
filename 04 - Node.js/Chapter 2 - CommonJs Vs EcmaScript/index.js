// Chapter 2: CommonJS vs ECMAScript Modules

// 1. CommonJS Modules:
// CommonJS uses synchronous module loading.
// Syntax for importing a module:
// const http = require('node:http');  // CommonJS Syntax for importing modules

// 2. ECMAScript Modules (ES6 Onwards):
// ECMAScript modules support asynchronous loading of modules.
// Syntax for importing a module:
// import http from 'http';  // ES6 Syntax for importing modules

// These modules are required to start and run any server in Node.js.


// Named Export: Explicitly exports individual components from a module.
// Example:
// export const a = 1;  // Named export
// export const b = 2;  // Named export
// Importing named exports:
// import { a, b, c } from './myModules.js';


// Default Export: Exports a single default export from a module, which can be imported with any name.
// Example:
// let myModule;
// export default myModule = {  // Default export
//     x: 10,
//     y: 15
// };
// Importing default export:
// import tokeman from './myModules.js';
// console.log(tokeman);


// NOTE: Run the command `npm install` to install dependencies listed in package.json.
// If starting a new project, run `npm init` first to create package.json.