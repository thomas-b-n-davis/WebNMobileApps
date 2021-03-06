var models = require("../Model/model_index");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var Image=require("../model/ImageModel")

module.exports.getAllProductsQuery = function (callback) {
	models.Product.findAll({
		include: {model: Image, as:"image"},
		where: {
			status:0
	  	}
	  })
	  .then(function (related) {
		//console.log(related[0].role.role);
		callback(related);
	  })
	  .catch(function (err) {
		// console.log(err);
		callback(err);
	  });
  }
  
  module.exports.getAllProductsByNameQuery = function (product_name, callback) {
	models.Product.findAll({
	  where: {
		name: {
		  [Op.substring]: product_name
		}
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

  module.exports.searchAllProductsByNameQuery = function (product_name, callback) {
	models.Product.findAll({
		include: {model: Image, as:"image"},
	  where: {
		name: {
		  [Op.like]: '%'+product_name+'%'
		}
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

  module.exports.getProductByIdQuery = function (product_id, callback) {
	models.Product.findAll({
		where: {
		  id:product_id
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

  // module.exports.getProductBought = function (user_id, callback) {
  // 	models.Product.findAll({
		// include: [{
		//     model: OrderModel,
		//     where: {user_id: user_id}
		//    }]
	 //  })
	 //  .then(function (related) {
		// //console.log(related[0].role.role);
		// callback(related);
	 //  })
	 //  .catch(function (err) {
		// //console.log(err);
		// callback(err);
	 //  });
  // }

  module.exports.getProductByUserIdQuery = function (user_id, callback) {
	models.Product.findAll({
		where: {
		  user_id:user_id,
		  status: [0,1, 2,3], 
		},
		include: {model: Image, as:"image"}
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

module.exports.getProductOrders = function (user_id, callback) {
	models.Order.findAll({
		where: {
		  user_id:user_id, 
		}
	  })
	  .then(function (related) {
	  	let inCon=[];
	  	for(let i in related){
	  		inCon.push(related[i].dataValues.product_id);
	  	}
		models.Product.findAll({
			where: {
			  id: inCon, 
			},
			include: {model: Image, as:"image"}
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
  
  
  module.exports.deleteProduct = function (data,callback) {
  	models.Product.update(
  		{
  			status:4
  		},{
		  where: {
			id: data.id,
			user_id:data.user_id,
		  }
		})
	  .then(function (related) {
	  	callback(err);
	  })
	  .catch(function (err) {
		callback(err);
	  });
  }
  
  module.exports.addProductQuery = function (product, callback) {
  
	models.Product.build(product).save().then((data) => {
	  callback(data.dataValues);
	}).catch((err) => {
	  callback(err);
	})
  }

  module.exports.updateProductQuery = function (product, callback) {
  	models.Product.update({
	  name: product.name,
	  price: product.price,
	  description: product.description,
	},{
	  where: {
		user_id: product.user_id,
		id:product.pid
	  }
	})
	  .then(function (related) {
		callback(related);
	  })
	  .catch(function (err) {
		callback(err);
	  });
  }

  

  module.exports.addImageQuery = function (image, callback) {
  
	models.Image.build(image).save().then((data) => {
	  console.log(data.dataValues);
	  callback(data.dataValues);
	}).catch((err) => {
	  callback(err);
	})
  }

  module.exports.getImages = function (id, callback) {
	models.Image.findAll({
		where: {
		  product_id:id
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

  module.exports.deleteImage = function (data,callback) {
  	models.Image.destroy({
	  where: {
		id: data.id,
	  }
	})
	  .then(function (related) {
		callback(related);
	  })
	  .catch(function (err) {
		callback(err);
	  });
  }
  
  
  module.exports.updateProductStatusQuery = function (id,status,callback) {
	models.Product.update({
	  status: status
	},{
	  where: {
		id: id
	  }
	})
	  .then(function (related) {
		callback(related);
	  })
	  .catch(function (err) {
		callback(err);
	  });
  }