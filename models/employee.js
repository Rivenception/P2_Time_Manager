module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
        employee_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
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
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
        }
    });

    Employee.associate = function (models) {
        // We're saying that a Timesheet should belong to an Employee
        // A Timesheet can't be created without an Employee due to the foreign key constraint
        Employee.hasMany(models.Timesheet, {
            foreignKey: 'FKempoyee_id'
        });
    };

    return Employee;
};