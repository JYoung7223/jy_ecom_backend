require("dotenv").config(); // gives access to process.env (ie. the .env file configurations)
const Sequelize = require("sequelize");

const sequelize = process.env.JAWS_DB_URL ? 
    new Sequelize(process.env.JAWS_DB_URL) : 
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, 
        {
            host: process.env.DEV_DB_HOST,
            dialect: process.env.DEV_DB_DIALECT,
            port: process.env.DEV_DB_PORT,
            define: {
                // Also creates "created_at" and "updated_at" fields
                timestamps: true,
                freezeTableName: true,
                underscored: true,
            },
            dialectOptions: { decimalNumbers: true, },
        }
    );

module.exports = sequelize;