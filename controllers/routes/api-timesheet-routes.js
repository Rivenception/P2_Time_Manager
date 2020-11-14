var db = require("../../models");

module.exports = function (app) {
    app.get("/api/timesheets", function (req, res) {
        db.Timesheet.findAll({
            include: [db.Employee]
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.get("/api/timesheets/:user", function (req, res) {
        db.Timesheet.findAll({
            include: [db.Employee],
            where: {
                employee_id: req.params.user
            }
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.get("/api/timesheets/limit=10/:user", function (req, res) {
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
    app.post("/api/timesheets", function (req, res) {
        db.Timesheet.create(req, body).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

    app.delete("/api/timesheets/:user", function (req, res) {
        db.Timesheet.destroy({
            where: {
                id: req.params.id
            }

        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });


    app.post("/api/timesheets", function (req, res) {
        db.Timesheet.create(req.body).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });



    app.delete("/api/timesheets/:rfb", function (req, res) {
        db.Timesheet.destroy({
            where: {
                program: req.params.rfb
            }
        }).then(function (dbTimesheet) {
            res.json(dbTimesheet);
        });
    });

};