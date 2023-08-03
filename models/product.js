'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
  }
  
  Product.init({
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      require: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    photo: DataTypes.STRING,
    available: {
      allowNull: false,
      require: true,
      type: DataTypes.BOOLEAN,
    },
    price: {
      allowNull: false,
      require: true,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: true,
    createdAt: true,
    updatedAt: true,
  });
  return Product;
};