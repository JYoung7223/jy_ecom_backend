const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection.js");

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
        tag_name: {
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