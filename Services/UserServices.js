User = require("../model/UserModel");
var sequelize = require('../common/mysql');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.createUserQuery  = function(user, callback){
    User.create(user).then(function(related){
      callback(related);
      //console.log(related);
    }).catch(function(err){
      callback(err);
      //console.log(err);
    })
  }
  
 exports.getAllUserQuery = function(callback){
    User.findAll().then(function(result){
      callback(result);
    }).catch(function(err){
      callback(err);
    });
  
  }
  
exports.getUserQuery = function(loginKey,password,callback){
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