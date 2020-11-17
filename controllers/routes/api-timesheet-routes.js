var db = require("../../models");

module.exports = function (app) {
    app.get("/api/timesheets", function (req, res) {
        db.Timesheet.findAll({
            include: [db.Employee],
            order: [
                ['id', 'DESC']
            ],
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.get("/api/timesheets/users/:user", function (req, res) {
        db.Timesheet.findAll({
            include: [db.Employee],
            where: {
                employee_id: req.params.user
            },
            order: [
                ['id', 'DESC']
            ],
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.get("/api/timesheets/limit=10", function (req, res) {
        db.Timesheet.findAll({
            include: [db.Employee],
            order: [
                ['id', 'DESC']
            ],
            limit: 10
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.get("/api/timesheets/limit=10/:user?", function (req, res) {
        db.Timesheet.findAll({
            include: [db.Employee],
            where: {
                employee_id: req.params.user
            },
            order: [
                ['id', 'DESC']
            ],
            limit: 10
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.get("/api/timesheets/programs/:rfb", function (req, res) {
        db.Timesheet.findAll({
            include: [db.Employee],
            where: {
                program: req.params.rfb
            },
            order: [
                ['id', 'DESC']
            ],
            limit: 10
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.post("/api/timesheets", function (req, res) {
        db.Timesheet.create(req.body).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.delete("/api/timesheets/:id", function (req, res) {
        db.Timesheet.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });
    app.put("/api/timesheets/:id", function(req, res) {
        db.Timesheet.update({
          where: {
            id: req.body.id
          }
        }).then(function(dbTimesheet) {
          res.json(dbTimesheet);
        });
      });
    
    };
    
