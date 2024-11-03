// Chapter - 6 - Middlewares
const express = require("express");                            // Importing Express
const app = express();                                         // Initializing the app
const port = 3000;                                             // Port where the app will listen
const retrieveData = require("./routes/Random_Data.json");     // Importing JSON data
const fs = require("fs");                                      // Importing FS module


// Custom Middlewares

// Logging Middleware (Use Postman to send Requests)
// This middleware logs each incoming request to a file (log.txt) with details like
// the timestamp, request method, and request path.
app.use((req, res, next) => {
  fs.appendFile(                                               // Using FS Module to Append a File (log.txt).
    "log.txt",
    `\n${Date.now()}: ${req.method}: ${req.path}`,             // Log entry format: "timestamp: method: path"
    (err) => {
      if (err) {
        console.error("Failed to write to log file", err);     // Log error if write fails
      }
      next();                                                  // Pass control to the next middleware or route handler
    }
  );
});


// Route to Retrieve Data
// This route handles GET requests to "/api/retrieveData" and returns JSON data.
// The JSON data is imported from an external file, "Random_Data.json".
app.get("/api/retrieveData", (req, res) => {
  return res.json(retrieveData);                                // Send the JSON data as the response
});


// Starting the Server
// This function starts the server on the specified port and logs a message to confirm it's running.
app.listen(port, () => {
  console.log(`App running on port ${port}`);                   // Log message on successful startup
});