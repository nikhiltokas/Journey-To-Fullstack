const express = require('express');          
const router = express.Router();  

router.get("/", (req, res) => {                              // get request (Fetch)
    res.send("Here's your comment");
}).post("/", (req, res) => {                                 // post request (Create)
    res.send("Comment Created");
}).put("/", (req, res) => {                                  // put request (Update)
    res.send("Comment Updated");
}).delete("/", (req, res) => {                               // delete request (Delete)
    res.send("Comment Deleted");
});

module.exports = router;