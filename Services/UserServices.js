var sequelize = require('../common/mysql');
var models = require("../Model/model_index");

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.createUserQuery = function (user, callback) {
  console.log(user);
  models.User.findAll({
    where: {
      email: user.email ,
    }
  }).then(function (result) {
    if(result.length===0){
        models.User.build(user).save().then((data) => {
          console.log(data.dataValues);
          callback(data.dataValues);
        }).catch((err) => {
          callback({status:"failed",message:"Sorry we are unable to create your account at this time "});
        })
    }else{
        callback({status:"failed",message:"User is already in use"});
    }
  }).catch(function (err) {
    callback({status:"failed",message:"Sorry we are unable to create your account at this time "});
  }); 
}

module.exports.getAllUserQuery = function (callback) {
  models.User.findAll().then(function (result) {
    callback(result);
  }).catch(function (err) {
    callback(err);
    console.log(err);
  });

}

exports.getUserQuery = function (email, password, callback) {
  console.log(email + " " + password);
  models.User.findAll({
    where: {
      email: email ,
      password: password
    }
  }).then(function (result) {
    callback(result);
  }).catch(function (err) {
    callback(err);
    console.log(err);
  });

}