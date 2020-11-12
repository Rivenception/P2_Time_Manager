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

    // app.post("/api/employees", function (req, res) {
    //     db.Employee.create(req.body).then(function (dbEmployee) {
    //         res.json(dbEmployee);
    //     });
    // });

    // app.delete("/api/employees/:id", function (req, res) {
    //     db.Employee.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbEmployee) {
    //         res.json(dbEmployee);
    //     });
    // });

};