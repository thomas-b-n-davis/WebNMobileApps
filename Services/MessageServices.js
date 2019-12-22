var sequelize = require('../common/mysql');
var models = require("../Model/model_index");

module.exports.getAllMessagesQuery = function (reciever_id, sender_id, callback) {
  var statement = "SELECT users.id,users.name,messages.message\
  FROM messages,users\
   where (messages.sender_id="+ reciever_id + " and messages.receiver_id=" + sender_id + " and messages.sender_id=users.id )\
     or( messages.sender_id="+ sender_id + " and messages.receiver_id=" + reciever_id + " and messages.sender_id=users.id)";
  sequelize.query(statement).spread((data) => {
    callback(data);
  });

}
  
module.exports.getAllCommunicationsQuery = function(user_id,callback){
  var statement = "SELECT users.id,users.name\
  FROM messages,users \
  where ( messages.sender_id=users.id and messages.receiver_id="+user_id+") \
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
