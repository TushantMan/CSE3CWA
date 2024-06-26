module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false

        }
    });
    return Task;
};