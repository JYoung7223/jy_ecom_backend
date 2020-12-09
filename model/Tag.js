const {Model, DataTypes} = require("sequelize");
const SequelizeDB = require("../utils/dbConnection.js");

class Tag extends Model{

}

Tag.init(
    {
        // Declare Columns
        id:{
            type: DataTypes.INTEGER,
            allowNulls:false,
            primarykey: true,
            autoIncrement:true
        },
        tagName: {
            type: DataTypes.STRING,
        }
    },
    {
        // Table specific configurations
        SequelizeDB,
        modelName:"tag"
    }
);

module.exports = Tag;