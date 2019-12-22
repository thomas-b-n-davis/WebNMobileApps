var sequelize = require('../common/mysql');

module.exports.getAllMessages = function (reciever_id, sender_id, callback) {
  var statement = "SELECT users.matrikel_number,users.first_name,users.last_name,chat.message\
     FROM sell_it.chat,sell_it.users\
      where chat.sender_id="+ reciever_id + " and chat.receiver_id=" + sender_id + " and chat.sender_id=users.matrikel_number \
        or chat.sender_id="+ sender_id + " and chat.receiver_id=" + reciever_id + " and chat.sender_id=users.matrikel_number";
  sequelize.query(statement).spread((data) => {
    callback(data);
  });

}
  
module.exports.getAllCommunications = function(matrikel_number,callback){
  var statement = "SELECT users.matrikel_number,users.first_name,users.last_name\
  FROM sell_it.chat,sell_it.users \
  where chat.sender_id=users.matrikel_number and chat.receiver_id="+matrikel_number+" \
  or chat.sender_id="+matrikel_number+" and chat.receiver_id=users.matrikel_number \
  GROUP BY users.matrikel_number;";
      sequelize.query(statement).spread((data) => {
          callback(data);
      });

}
