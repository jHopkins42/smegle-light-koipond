// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { HasMany } = require('sequelize');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey:,
  onDelete: 'CASCADE',
});
// Categories have many Products
Category:HasMany(Product, {
  //cat on the keyboard
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {

});
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
>
