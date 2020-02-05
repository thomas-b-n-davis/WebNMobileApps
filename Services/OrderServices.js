var models = require("../Model/model_index");
var sequelize = require('../common/mysql');



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

   module.exports.getReviews = function (user_id,callback) {
	models.Reviews.findAll({
		where: {
		  seller_id:user_id
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

  

  module.exports.createReviews = function (data,callback) {
      let reviewData={
      	user_id:data.user_id,
      	seller_id:data.seller_id,
      	product_id:data.product_id,
      	review:data.review
      };
      models.Reviews.build(reviewData).save().then((result) => {
		models.Product.update(
  		{status:3},
  		{where: {id: data.product_id,status:2}})
	  .then(function (related) {})
	  .catch(function (err) {});
	 
	 	callback(related);

	}).catch((err) => {
	  callback(err);
	}) 
  }

  module.exports.cancalOrder = function (data,callback) {
  	models.Order.findOne({
		where: {
		  product_id:data.product_id
		}
	  })
	  .then(function (related) {
	  	let rec=related.dataValues.user_id;
		let message={product_id:data.product_id,message:'Sorry the user has cancelled your purchase order',receiver_id:rec,sender_id:data.sender_id};
	  	models.Message.build(message).save().then((result) => {
	  		models.Order.destroy({
			where: {
			  product_id:data.product_id
			}
		  })
		  .then(function (related) {
			console.log(related);
			models.Product.update(
				{
	  			status:0
		  		},{
				  where: {
					id: data.product_id,
					status:1
				  }
				})
			  .then(function (related) {
				

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
	  	})
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
  		{where: {id: order.product_id,status:0}})
	  .then(function (related) {

	  	let message={product_id:order.product_id,message:'The seller has accepted your request to buy this item',receiver_id:order.user_id,sender_id:order.receiver_id};
	  	models.Message.build(message).save().then((result) => {})
	  	 callback(data.dataValues);
	  })
	  .catch(function (err) {});
	 

	}).catch((err) => {
	  callback(err);
	})
  }
  
  
