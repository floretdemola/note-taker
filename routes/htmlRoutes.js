// DEPENDENCIES: include the path package to get the correct file path for html
const path = require("path");
const router = require("express").Router();

// ROUTING

// HTML GET Request: Responds with the notes.html file
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

// HTML GET Request: Added for Heroku
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

// HTML GET Request: Responds with the index.html & all other file(s)
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
    });


module.exports = router;