const { Model, DataTypes, STRING } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    shirts: {
      type: DataTypes.STRING
    },
    shorts: {
      type: DataTypes.STRING
    },
    shoes: {
      type: DataTypes.STRING
    },
    hats: {
      type: DataTypes.STRING
    },
    music: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;