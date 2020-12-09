const {Model, DataTypes} = require("sequelize");
const SequelizeDB = require("../utils/dbConnection.js");

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
        productId:{
            type:DataTypes.INTEGER,
            references:{
                model:"product",
                key:"id"
            }
        },
        tagId:{
            type:DataTypes.INTEGER,
            references:{
                model:"tag",
                key:"id"
            }
        }
    },
    {
        // Table specific configurations
        SequelizeDB,
        modelName:"product_tag"
    }
);

module.exports = ProductTag;