module.exports = function (sequelize, DataTypes) {
    var Timesheet = sequelize.define("Timesheet", {
        employee_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
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
        program: {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [4]
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        createdAt: {
            type: DataTypes.DATE,
            timestamps: true,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            timestamps: true,
            onUpdate: DataTypes.NOW,
            allowNull: false
        }
    });

    Timesheet.associate = function (models) {
        // We're saying that a Timesheet should belong to an Employee
        // A Timesheet can't be created without an Employee due to the foreign key constraint
        Timesheet.belongsTo(models.Employee, {
            foreignKey: 'FKemployee_id'
        });
    };

    return Timesheet;
};