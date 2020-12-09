const {Model, DataTypes} = require("sequelize");
const sequelize = require("../utils/dbConnection.js");

class Tag extends Model{

}

Tag.init(
    {
        // Declare Columns
        id:{
            type: DataTypes.INTEGER,
            allowNulls:false,
            primaryKey: true,
            autoIncrement:true
        },
        tagName: {
            type: DataTypes.STRING,
        }
    },
    {
        // Table specific configurations
        sequelize,
        modelName:"tag"
    }
);

module.exports = Tag;