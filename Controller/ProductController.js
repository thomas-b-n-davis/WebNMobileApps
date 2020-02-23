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

 //  exports.getProductBought  = (req, res, next) =>{
	// services.Product.getProductBought(req.body.user_id,(rows) => {
	// 	if (!rows || !rows.length) {
	// 	  res.json({
	// 		"status": "failed",
	// 		"user": null
	// 	  })
	// 	} else {
	// 	  res.json({
	// 		rows
	// 	  })
	// 	}
	//   })
 //  }


exports.searchAllProductsByNameQuery = (req, res, next) =>{
	var name=req.body.name;
	services.Product.searchAllProductsByNameQuery(name,(rows) => {
		res.json({
			rows
		  });
	  })
  }
  
exports.getProductByName = (req, res, next) =>{
	var name=req.params.name;
	console.log(" name = "+name);
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
	console.log("This is id "+id);
	services.Product.getProductByIdQuery(id,(rows) => {
		let product=rows;
			  services.Product.getImages(id,(rows) => {
				let images=rows;
					  services.Message.getAllMessagesQuery(id,req.body.user_id,(rows) => {
						res.json({
							images:images,
							rows:product,
							messages:rows
						  })
					  })
			  })
	  })
  }
  
  exports.getProductByUserId = (req, res, next) =>{
	var id=req.params.id;
	console.log("This is id "+id);
	services.Product.getProductByUserIdQuery(id,(rows) => {
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

  exports.getProductOrders = (req, res, next) =>{
	var id=req.params.id;
	console.log(id);
	services.Product.getProductOrders(id,(rows) => {
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
  
  
exports.addProduct  = (req, callbackData) =>{
	var data=req.body;
	
	services.Product.addProductQuery({
	  name : data.name,
	  price : data.price,
	  category : data.category,
	  description : data.description,
	  date_uploaded : data.date_uploaded,
	  status : data.status,
	  user_id : data.user_id
  }, (callback) => {
	if (callback.status=="failed") {
	  return callbackData({
		"status": "failed",
		"user": null
	  })
	} else {
		return callbackData({
		"status": "sucess",
		"id": callback.id
		
	  })
	}
  })
	};


	exports.updateProduct  = (req, callbackData) =>{
	var data=req.body;
	
	services.Product.updateProductQuery(data, (callback) => {
	if (callback.status=="failed") {
	  return callbackData({
		"status": "failed",
		"user": null
	  })
	} else {
		return callbackData({
		"status": "sucess",
		"id": callback.id
		
	  })
	}
  })
	};

	

	exports.addProductImage  = (path,product_id, callbackData) =>{
	services.Product.addImageQuery(
	  {
	  path :path,
	  product_id : product_id,
  }, (callback) => {
	if (callback.status=="failed") {
	  return callbackData({
		"status": "failed",
		"user": null
	  })
	} else {
		return callbackData({
		"status": "sucess",
		"id": callback.id
	  })
	}
  })
	};



exports.deleteProduct  = (req,res, next) =>{
	services.Product.deleteProduct(
	  {
	  id :req.body.id,
	  user_id :req.body.user_id,
  }, (callback) => {
	res.json({
		"status": "sucess",
		"id": callback.id
	  });
  })
	};


	exports.deleteImage  = (req,res, next) =>{
	services.Product.deleteImage(
	  {
	  id :req.body.id,
  }, (callback) => {
	res.json({
		"status": "sucess",
		"id": callback.id
	  });
  })
	};

	


	
	exports.changeProductStatus  = (req, res, next) =>{
	var id = req.body.id;
	var status = req.body.status;
	services.Product.updateProductStatusQuery(id, status, (rows) => {
	  if (!rows) {
		res.json({
		  "status": "failed",
		  "user": null
		})
	  } else {
		console.log(rows)
  
		res.json({
		  product: {
			"product_id": id,
			"status": "Successful"
		  }
		});
  
	  }
	});
  }
  