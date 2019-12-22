var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
// // const Op = Sequelize.Op;

var User = sequelize.define("users",{
    id : {
      type: Sequelize.BIGINT(11),
      autoIncrement: true,
      allowNull : false,
      primaryKey : true
    },
    name : {
      type: Sequelize.STRING(64),
      allowNull : false,
    },
    email : {
      type: Sequelize.STRING(128),
      allowNull : false,
    },
    telephone : {
      type: Sequelize.STRING(15),
      allowNull : false,
    },
    password : {
      type: Sequelize.STRING(128),
      allowNull : false,
    },
    status : {
      type: Sequelize.BIGINT(11),
      allowNull : false
    }

  }
)
module.exports=User;
