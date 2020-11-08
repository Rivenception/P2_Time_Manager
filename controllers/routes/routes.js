var express = require("express");

var router = express.Router();

// Import the model (employee.js) to use its database functions.
var employee = require("../../models/employees.js");

// Create Routes
router.get("/", function(req, res) {
  employee.all(function(data) {
    res.render("index", {employees: data});
  });
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

router.get("/pm", function(req, res) {
  res.render("pm");
});

router.post("/api/employees", function(req, res) {
  employee.create(["name", "dept"], [req.body.name, req.body.dept], function(result) {
    // Send back the ID of the new employee
    res.json({ id: result.insertId });
  });
});

// Export routes for server.js to use.
module.exports = router;
