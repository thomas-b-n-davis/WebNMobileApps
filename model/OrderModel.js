var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Order = sequelize.define("orders",{
  id : {
    type: Sequelize.BIGINT(11),
    autoIncrement: true,
    allowNull : false,
    primaryKey : true
  },
  product_id : {
    type: Sequelize.BIGINT(11)
  },
  user_id : {
      type: Sequelize.BIGINT(11),
    allowNull : false,
  },
  status : {
      type: Sequelize.BIGINT(11),
    allowNull : false,
  },
  timestamp : {
    type: Sequelize.TIME,
    allowNull : false,
  }
  }
)
module.exports=Order;

