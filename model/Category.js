const {Model, DataTypes } = require("sequelize");
const SequelizeDB = require("../utils/dbConnection.js");

class Category extends Model {

}

Category.init(
    {
        // Columns to setup table with
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // Configurations
        SequelizeDB,
        // Table specific configurations
        modelName: "category"
    }
);

module.exports = Category;