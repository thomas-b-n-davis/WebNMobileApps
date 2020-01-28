services = require("../Services/service_index");

exports.getAllOrders  = (req, res, next) =>{
	var user_id=req.body.user_id;
	services.Order.getAllOrdersQuery(user_id,(rows) => {
		res.json({
			rows
		})
	  })
  }
  exports.getAllOrderById  = (req, res, next) =>{
	var user_id=req.body.user_id;
	services.Order.getOrdersByIdQuery(user_id,req.body.product_id,(rows) => {
		res.json({
			rows
		})
	  })
  }
  
  
exports.addOrder  = (req, res, next) =>{
	var data=req.body;
	services.Order.addOrderQuery(
	  {
	  product_id : data.product_id,
	  user_id : data.user_id,
  }, (callback) => {
	if (callback.status=="failed") {
	  res.json({
		"status": "failed",
		"user": null
	  })
	} else {
	  res.json({
		callback
	  })
	}
  })
	};