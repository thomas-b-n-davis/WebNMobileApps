/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
const Op = Sequelize.Op;
var Image = require("./ImageModel");


var Product = sequelize.define('products', {
  id: {
    type: Sequelize.BIGINT(5),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(128),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  seller_id: {
    type: Sequelize.BIGINT(11),
    allowNull: false
  }
  ,
  status: {
    type: Sequelize.BIGINT(11),
    allowNull: false
  }
  ,
  date_uploaded: {
    type: Sequelize.TIME
  }


});


Product.hasMany(Image, {foreignKey: "product_id", as : "image"});
module.exports = Product;

