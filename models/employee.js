module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define("employees", {
        employee_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        dept: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        }
    });

    Employee.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Employee.hasMany(models.Timesheet, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Employee;
};