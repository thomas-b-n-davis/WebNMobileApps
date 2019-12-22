var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');
const Op = Sequelize.Op;


var User = sequelize.define("users",{
    id : {
      type: Sequelize.BIGINT(11),
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



module.exports.createUserQuery  = function(user, callback){
  User.create(user).then(function(related){
    callback(related);
    //console.log(related);
  }).catch(function(err){
    callback(err);
    //console.log(err);
  })
}

module.exports.getAllUserQuery = function(callback){
  User.findAll().then(function(result){
    callback(result);
  }).catch(function(err){
    callback(err);
  });

}

module.exports.getUserQuery = function(loginKey,password,callback){
  console.log(loginKey + " " +  password);
  User.findAll({
    where: {
      [Op.or]:  [{username: loginKey}, {matrikel_number: loginKey}],
      password:password
    }
  }).then(function(result){
    callback(result);
  }).catch(function(err){
    callback(err);
    console.log(err);
  });

}
