var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Reviews = sequelize.define("reviews",{
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
  seller_id : {
      type: Sequelize.BIGINT(11),
    allowNull : false,
  },
  review : {
      type: Sequelize.TEXT(128),
    allowNull : true,
  },
  timestamp : {
    type: Sequelize.TIME,
    allowNull : true,
  }
  }
)
module.exports=Reviews;

