/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Image = sequelize.define('images', {
  id: {
    type: Sequelize.BIGINT(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  path: {
    type: Sequelize.STRING(256),
    allowNull: false
  },
  product_id: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE
  }

});


module.exports = Image;


