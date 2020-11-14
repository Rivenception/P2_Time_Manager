var db = require("../../models");

module.exports = function (app) {
    app.get("/api/employees", function (req, res) {
        db.Employee.findAll({
            include: [db.Timesheet]
        }).then(function (dbEmployee) {
            res.json(dbEmployee);
        });
    });

    app.get("/api/employees/:user", function (req, res) {
        db.Employee.findOne({
            where: {
                id: req.params.user
            },
            include: [db.Timesheet]
        }).then(function (dbEmployee) {
            res.json(dbEmployee);
        });
    });

    app.post("/api/employees/:user?", function (req, res) {
        db.Employee.create(req.body).then(function (dbEmployee) {
            res.json(dbEmployee);
        });
    });

    app.delete("/api/employees/:user", function (req, res) {
        db.Employee.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbEmployee) {
            res.json(dbEmployee);
        });
    });

};