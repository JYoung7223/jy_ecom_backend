const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection.js");

class ProductTag extends Model {

}

ProductTag.init(
    {
        // Configure columns
        id: {
            type: DataTypes.INTEGER,
            allowNulls: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id:{
            type:DataTypes.INTEGER,
            references:{
                model:"product",
                key:"id"
            }
        },
        tag_id:{
            type:DataTypes.INTEGER,
            references:{
                model:"tag",
                key:"id"
            }
        }
    },
    {
        // Table specific configurations
        sequelize,
        modelName:"product_tag"
    }
);

module.exports = ProductTag;