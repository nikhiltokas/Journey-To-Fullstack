const express = require('express');          
const router = express.Router();       

router.get("/", (req, res) => {                              // get request (Fetch)
    res.send("Here's your data");
}).post("/", (req, res) => {                                 // post request (Create)
    res.send("User Created");
}).put("/", (req, res) => {                                  // put request (Update)
    res.send("User Updated");
}).delete("/", (req, res) => {                               // delete request (Delete)
    res.send("User Deleted");
});

module.exports = router;