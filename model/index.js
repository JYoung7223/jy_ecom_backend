// import models
const Product = require('./Product.js');
const Category = require('./Category.js');
const Tag = require('./Tag.js');
const ProductTag = require('./ProductTag.js');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
