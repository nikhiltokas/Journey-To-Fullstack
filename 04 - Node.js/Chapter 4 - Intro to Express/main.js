// Intro to Express.js 
const express = require('express');     // Importing Express
const app = express();                  // Initializing the app
const port = 3000;                      // Port where the app will listen


// 1. Basic Route
app.get('/', (req, res) => {            // Route to handle the root URL "/"
    res.send("Home Page");              // Sends "Home Page" as the response
});

app.get('/Blog', (req, res) => {        // Route to handle the URL "/Blog"
    res.send("Blog Page");              // Sends "Blog Page" as the response
});

app.get('/Contact', (req, res) => {     // Route to handle the URL "/Contact"
    res.send("Contact Us");             // Sends "Contact Us" as the response
});


// 2. Dynamic Route with a :Slug Parameter
// Slug allows a single route pattern to handle multiple pages or items
// Example: Dynamic route with a "blog" path
app.get('/blog/:slug', (req, res) => {                  // Dynamic route for blog with a "slug" parameter
    res.send(`I am a blog about ${req.params.slug}`);   // :slug is a route parameter accessed with req.params.slug to display content
    // console.log(req);                                // "Uncomment" to log the full request object and explore available properties
});


// Starting the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});