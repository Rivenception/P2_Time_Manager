var express = require("express");

var router = express.Router();

// Import the model (employee.js) to use its database functions.
var employee = require("../../models/employee");

// Create Routes
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/admin", function(req, res) {
  res.render("admin");
});

router.get("/eng", function(req, res) {
  res.render("eng");
});

router.get("/mfg", function(req, res) {
  res.render("mfg");
});

router.get("/pm/:id", function(req, res) {
  res.render("pm");
});

router.get("/eng/:id", function(req, res) {
  res.render("eng");
});

router.get("/mfg/:id", function(req, res) {
  res.render("mfg");
});

router.get("/pm", function(req, res) {
  res.render("pm");
});

// Export routes for server.js to use.
module.exports = router;
