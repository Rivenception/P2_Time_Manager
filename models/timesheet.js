module.exports = function (sequelize, DataTypes) {
    var Timesheet = sequelize.define("Timesheet", {
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
            type: DataTypes.STRING,
            allowNull: false,
            len: [4]
        },
        ecr: {
            type: DataTypes.STRING,
            defaultValue: "N/A",
            len: [5]
        },
        notes: {
            type: DataTypes.STRING,
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

    Timesheet.associate = function (models) {
        // We're saying that a Timesheet should belong to an Employee
        // A Timesheet can't be created without an Employee due to the foreign key constraint
        Timesheet.belongsTo(models.Employee, {
            foreignKey: 'FKname'
        });
    };

    return Timesheet;
};