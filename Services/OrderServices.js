var models = require("../Model/model_index");



module.exports.getOrdersByIdQuery = function (user_id,product_id,callback) {
	models.Order.findAll({
		where: {
		  product_id:product_id
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

  module.exports.cancalOrder = function (product_id,callback) {
	models.Order.destroy({
		where: {
		  product_id:product_id
		}
	  })
	  .then(function (related) {
		//console.log(related[0].role.role);
		models.Product.update(
			{
  			status:0
	  		},{
			  where: {
				id: product_id,
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
	  })
	  .catch(function (err) {
		//console.log(err);
		callback(err);
	  });
  }

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
		models.Product.update(
  		{status:1},
  		{where: {id: order.product_id,}})
	  .then(function (related) {})
	  .catch(function (err) {});
	  callback(data.dataValues);

	}).catch((err) => {
	  callback(err);
	})
  }
  
  
