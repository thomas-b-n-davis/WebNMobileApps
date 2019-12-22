var models = require("../Model/model_index");


module.exports.getAllOrdersQuery = function (user_id,callback) {
	models.Order.findAll({
		where: {
		  user_id:user_id
		}
	  })
	  .then(function (related) {
		//console.log(related[0].role.role);
		callback(related);
	  })
	  .catch(function (err) {
		//console.log(err);
		callback(err);
	  });
  }
  
  module.exports.addOrderQuery = function (order, callback) {
  
	models.Order.build(order).save().then((data) => {
	  console.log(data.dataValues);
	  callback(data.dataValues);
	}).catch((err) => {
	  callback(err);
	})
  }
  
  
