var sequelize = require('../common/mysql');
var models = require("../Model/model_index");

module.exports.getAllMessagesQuery = function (product_id, sender_id, callback) {
  var statement = "SELECT messages.receiver_id,messages.sender_id,users.id,users.name,messages.message,messages.timestamp FROM messages,users where (receiver_id="+sender_id+" OR sender_id="+sender_id+") AND product_id="+product_id;
  
  sequelize.query(statement).spread((data) => {
    callback(data);
  });

}
  
module.exports.getAllCommunicationsQuery = function(user_id,product_id,callback){
  var statement = "SELECT messages.message,messages.timestamp,users.id,users.name\
  FROM messages,users \
  where product_id="+product_id+" AND ( messages.sender_id=users.id and messages.receiver_id="+user_id+") \
  or (messages.sender_id="+user_id+" and messages.receiver_id=users.id )\
  GROUP BY users.id;";
      sequelize.query(statement).spread((data) => {
          callback(data);
      });

}

module.exports.sendMessageQuery = function (message, callback) {
  
	models.Message.build(message).save().then((data) => {
	  console.log(data.dataValues);
	  callback(data.dataValues);
	}).catch((err) => {
    console.log(err);
	  callback(err);
	})
  }
