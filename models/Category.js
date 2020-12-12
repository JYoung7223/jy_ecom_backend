const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

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
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // Configurations
        sequelize,
        // Table specific configurations
        modelName: "category"
    }
);

module.exports = Category;