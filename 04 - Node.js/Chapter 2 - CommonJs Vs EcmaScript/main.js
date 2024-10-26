// Importing default and named exports from myModules.js
import tokeman from './myModules.js';
import { a, b, c } from './myModules.js';

console.log(tokeman);  // Logs the default export
console.log(a, b, c);  // Logs the named exports a, b, and c