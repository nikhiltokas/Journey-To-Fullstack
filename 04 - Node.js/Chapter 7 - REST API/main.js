// Chapter 7 - APIs (Using Express and Postman)
const express = require('express');                            // Importing Express
const app = express();                                         // Initializing the app
const port = 3000;                                             // Port where the app will listen
const retrieveData = require("./routes/Random_Data.json");     // Importing JSON data
const fs = require('fs')                                       // Importing FS module

// Built-in Middleware to parse x-www-form-urlencoded data (Postman)
app.use(express.json(), express.urlencoded({ extended: true }));

// Logging Middleware
app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path}`, next);
  });

// Routes (GET REQUESTS)

// 1. API Route - Sending JSON Data
// - This route sends JSON data directly as the response.
// - Using a dedicated API route for JSON ("/api/retrieveData") is a best practice as it separates data from HTML content.
app.get("/api/retrieveData", (req, res) => {
    return res.json(retrieveData);           // Sends JSON data from 'retrieveData'
});


// 2. HTML Route - Sending HTML Content
// - This route serves HTML content using Server-Side Rendering (SSR).
// - We use a JavaScript template string to create an HTML unordered list with each user's `first_name`.
// - `Array.map()` is used to loop over `retrieveData` and insert each `first_name` into an <li> element.
app.get("/retrieveData", (req, res) => {
    const ourUser = `
    <ul>
    ${retrieveData.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(ourUser);                       // Sends the constructed HTML content as the response
});


// 3. Dynamic Path Parameters (FOR ID)
app.get("/api/retrieveData/:id", (req, res) => {
    const id = Number(req.params.id);
    const userID = retrieveData.find((item) => item.id === id);
    if (userID) {
        return res.json(userID);
    } else {
        return res.status(404).json({ error: "Data not found" });
    }
});


// 4. Dynamic Path Parameters (For Sorting People with Genders)
app.get("/api/peopleByGender/:gender", (req, res) => {
    const gender = req.params.gender.toLowerCase();
    
    // Filter the data by gender
    const filteredPeople = retrieveData.filter((person) => person.gender.toLowerCase() === gender);

    if (filteredPeople.length > 0) {
        return res.json(filteredPeople);
    } else {
        return res.status(404).json({ error: "No people found with this gender" });
    }
});


// 5. Routes (POST REQUESTS)
app.post("/api/retrieveData", (req, res) => {
    const body = req.body;
    retrieveData.push({...body, id: retrieveData.length + 1});
    fs.writeFile('./routes/Random_Data.json', JSON.stringify(retrieveData), (err, data) => {
        return res.json();
    });
});


// 6. Routes (DELETE REQUESTS)
app.delete("/api/retrieveData/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedData = retrieveData.filter(item => item.id !== id);
    if (updatedData.length === retrieveData.length) {
        return res.status(404).json({ error: "Data not found" });
    }
    fs.writeFile('./routes/Random_Data.json', JSON.stringify(updatedData), err => {
        if (err) {
            console.error("Error writing to file", err);
            return res.status(500).json({ error: "Failed to delete data" });
        }
        return res.json({ message: "Data deleted successfully" });
    });
});


// Starting the server
app.listen(port, () => {
    console.log("Server running on port", port);
});