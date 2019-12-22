services = require("../Services/service_index");

exports.getAllProducts  = (req, res, next) =>{
	services.Product.getAllProductsQuery((rows) => {
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
  
exports.getProductByName = (req, res, next) =>{
	var name=req.body.name;
	services.Product.getAllProductsByNameQuery(name,(rows) => {
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

  exports.getProductById = (req, res, next) =>{
	var id=req.body.id;
	services.Product.getProductByIdQuery(id,(rows) => {
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
  
  
exports.addProduct  = (req, res, next) =>{
	var data=req.body;
	services.Product.addProductQuery(
	  {
	  name : data.name,
	  price : data.price,
	  description : data.description,
	  date_uploaded : data.date_uploaded,
	  status : data.status,
	  seller_id : data.seller_id
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