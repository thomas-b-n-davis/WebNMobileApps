services = require("../Services/service_index");

exports.getAllOrders  = (req, res, next) =>{
	var user_id=req.body.user_id;
	services.Order.getAllOrdersQuery(user_id,(rows) => {
		if (!rows || !rows.length) {
		  res.json({
			"status": "failed",
			"user": null
		  })
		} else {
		  res.json({
			rows
		  })
		}
	  })
  }
  
  
exports.addOrder  = (req, res, next) =>{
	var data=req.body;
	services.Order.addOrderQuery(
	  {
	  product_id : data.product_id,
	  user_id : data.user_id,
	  timestamp : data.timestamp,
	  status : data.status
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