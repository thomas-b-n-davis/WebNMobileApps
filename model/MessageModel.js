var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');


var Message = sequelize.define("messages",{
    id : {
      type: Sequelize.BIGINT(11),
      autoIncrement: true,
      allowNull : false,
      primaryKey : true
    },
    product_id : {
      type: Sequelize.BIGINT(11)
    },
    sender_id : {
        type: Sequelize.BIGINT(11),
      allowNull : false,
    },
    receiver_id : {
        type: Sequelize.BIGINT(11),
      allowNull : false,
    },
    message : {
      type: Sequelize.TEXT,
      allowNull : false,
    },
    timestamp : {
      type: Sequelize.TIME,
      allowNull : false,
    }
  }
)
module.exports=Message;

