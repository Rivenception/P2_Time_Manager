module.exports = function (sequelize, DataTypes) {
    var Timesheet = sequelize.define("employees", {
        employee_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        task: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        timespent: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        timespent: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [4]
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
    });

    employee.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Timesheet.belongsTo(models.Employee, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Timesheet;
};