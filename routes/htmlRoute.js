// -----------------------------------------------------------------------------
// Route:    htmlRoute.js
// Purpose:  Static HTML page router.
// Input:    <none>   
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     June 21, 2021
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------  
var path = require("path");
var express = require("express");
var router = express.Router();


// -----------------------------------------------------------------------------
// Display the exercise html page
// -----------------------------------------------------------------------------
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


// -----------------------------------------------------------------------------
// Display the stats html page
// -----------------------------------------------------------------------------
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;