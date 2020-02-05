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

exports.createReviews  = (req, res, next) =>{
	services.Order.createReviews(req.body,(rows) => {
		res.json({
			rows
		})
	  })
  }
  
  exports.getReviews  = (req, res, next) =>{
	services.Order.getReviews(req.params.id,(rows) => {
		res.json({
			rows
		})
	  })
  }

  
  exports.cancalOrder  = (req, res, next) =>{
	var data=req.body;
	services.Order.cancalOrder(
	  data, (callback) => {
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
  
exports.addOrder  = (req, res, next) =>{
	var data=req.body;
	services.Order.addOrderQuery(
	  {
	  product_id : data.product_id,
	  user_id : data.user_id,
	  receiver_id : data.receiver_id,
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