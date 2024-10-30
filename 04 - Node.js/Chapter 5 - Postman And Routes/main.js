// Chapter 5 - Routes and Postman
const express = require('express');                               // Importing Express
const app = express();                                            // Initializing the app
const port = 3000;                                                // Port where the app will listen
const usersRoute = require("./routes/users");                     // The 'routes' folder typically organizes route files (common practice)
const commentsRoute = require("./routes/comments");               // The 'routes' folder typically organizes route files (common practice)

// Routes
app.use("/users", usersRoute)
app.use("/comments", commentsRoute)

// Test endpoints using Postman

// Starting the Server
app.listen(port, () => {
    console.log("Server running");
});