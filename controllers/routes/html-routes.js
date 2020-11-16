var db = require("../../models");

// Import the model (employee.js) to use its database functions.
module.exports = function(app) {

  // Create Routes
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/admin", function(req, res) {
    res.render("admin");
  });

  app.get("/eng", function(req, res) {
    res.render("eng");
  });

  app.get("/mfg", function(req, res) {
    res.render("mfg");
  });

  app.get("/pm", function(req, res) {
    res.render("pm");
  });

  app.get("/eng/:user", function (req, res) {
    db.Employee.findOne({
        where: {
            employee_id: req.params.user
        }
    }).then(function (dbEmployee) {
        console.log(dbEmployee.employee_id);
        res.render("eng", {
            userId: dbEmployee.employee_id,
            employeeName: dbEmployee.name,
        });
    }
    );
  });
  app.get("/mfg/:user", function (req, res) {
    db.Employee.findOne({
        where: {
            employee_id: req.params.user
        }
    }).then(function (dbEmployee) {
        console.log(dbEmployee.employee_id);
        res.render("eng", {
            userId: dbEmployee.employee_id,
            employeeName: dbEmployee.name,
        });
    }
    );
  });

  app.get("/pm/:user", function (req, res) {
    db.Employee.findOne({
        where: {
            employee_id: req.params.user
        }
    }).then(function (dbEmployee) {
        console.log(dbEmployee.employee_id);
        res.render("eng", {
            userId: dbEmployee.employee_id,
            employeeName: dbEmployee.name,
        });
    }
    );
  });
  
};
