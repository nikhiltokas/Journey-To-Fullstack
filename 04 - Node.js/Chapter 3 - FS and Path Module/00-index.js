// Chapter 2: FS Module (File System) and Path Module

// 1. FS Module:
// The File System (FS) module allows us to interact with the file system on our OS.
// - **Reading** files
// - **Writing** files
// - **Updating** files
// - **Deleting** files

// To use FS in your project:
// import fs from "fs/promises";   // For promises-based methods

// Key Methods:
// - `fs.writeFile()`: Creates or overwrites a file with content.
// - `fs.readFile()`: Reads the contents of a file.
// - `fs.appendFile()`: Appends content to an existing file.
// - `fs.unlink()`: Deletes a file.



// 2. Path Module:
// The Path module provides utilities for working with file and directory paths.
// Useful for constructing file paths, finding file extensions, and navigating directories.

// To use Path in your project:
// import path from "path";   // Built-in module, no need to install

// Key Methods:
// - `path.extname()`: Returns the file extension (e.g., .txt).
// - `path.basename()`: Returns the file name with extension.
// - `path.dirname()`: Returns the directory path of the file.
// - `path.join()`: Combines multiple segments into a single path.
