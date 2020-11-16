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
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Active",
            len: [1]
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1]
        },
        createdAt: {
            type: DataTypes.DATE,
            timestamps: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            timestamps: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
            onUpdate: DataTypes.NOW,
            allowNull: false
        }
    });

    Employee.associate = function (models) {
        // We're saying that a Timesheet should belong to an Employee
        // A Timesheet can't be created without an Employee due to the foreign key constraint
        Employee.hasMany(models.Timesheet, {
            foreignKey: 'FKemployee_id'
        });
    };

    return Employee;
};