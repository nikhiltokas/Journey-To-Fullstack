// Chapter 4 - Intro to Express:
// Express is a Node.js framework for building RESTful APIs.
// It makes handling HTTP requests and responses easier.

// Basic Setup
const express = require('express');
const app = express();
const port = 3000;

// Followed by "Starting the server" (AT THE END)
// - app.listen(port, callback)

app.listen(port, () => {
    console.log(`Example Server Started on port ${port}`);
});


// Express.js HTTP Methods:
// Syntax:
// app.get('/route', (req, res) => { /* code to handle request */ });

// 1. app.get(path, callback)
// - Handles GET requests to retrieve data or display information.
// - Used to fetch and display data
app.get('/welcome', (req, res) => {
    res.send("Welcome to the homepage!");
});  // Responds with "Welcome to the homepage!" when visiting '/welcome'

// 2. app.post(path, callback)
// - Handles POST requests to send data to the server.
// - Used to push data (Example, submit a form)
app.post('/submit', (req, res) => {
    res.send("Form submitted!");
});  // Responds with "Form submitted!" when data is posted to '/submit'

// 3. app.put(path, callback)
// - Handles PUT requests to update data.
// - Used to replace the entire resource with new data. (completely overwrite an existing record)
app.put('/update', (req, res) => {
    res.send("Data updated!");
});  // Responds with "Data updated!" when data is updated at '/update'

// 4. app.delete(path, callback)
// - Handles DELETE requests to remove data.
// - Used to delete data
app.delete('/delete', (req, res) => {
    res.send("Data deleted!");
});  // Responds with "Data deleted!" when data is deleted at '/delete'