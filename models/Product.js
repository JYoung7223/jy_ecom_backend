const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection.js");

class Product extends Model {

}

Product.init(
    {
        // Configure columns
        id:{
            type:DataTypes.INTEGER,
            allowNulls: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name:{
            type: DataTypes.STRING,
            allowNulls: false
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNulls: false,
            validate:{
                isDecimal: true
            }

        },
        stock:{
            type: DataTypes.INTEGER,
            allowNulls: false,
            default:10,
            validate:{
                isInt: true
            }
        },
        category_id:{
            type: DataTypes.INTEGER,
            // Says this column refers to something else. (ie. foreign key)
            references:{
                // What model it refers to
                model:"category",
                // Column it refers to
                key: "id",
            }
        }
    },
    {
        // Configure connection attributes
        sequelize,
        modelName: "product"
    }
);

module.exports = Product;