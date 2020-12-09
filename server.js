const Express = require("express");
const Sequelize = require("./utils/dbConnection.js");

// Import models to sync table with DB
const Category = require("./model/Category.js");
const Tag = require("./model/Tag.js");

