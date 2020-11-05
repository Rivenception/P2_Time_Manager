// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//At the moment there is no ORM but this is a template from a previous class assignment.
var employee = {
  all: function(cb) {
    orm.all("employees", function(res) {
      cb(res);
      console.log(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("employees", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("employee", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = employee;
