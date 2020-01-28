var models = require("../Model/model_index");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var Image=require("../model/ImageModel")

module.exports.getAllProductsQuery = function (callback) {
	models.Product.findAll({
		include: {model: Image, as:"image"}
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
  
  
  module.exports.addProductQuery = function (product, callback) {
  
	models.Product.build(product).save().then((data) => {
	  console.log(data.dataValues);
	  callback(data.dataValues);
	}).catch((err) => {
	  callback(err);
	})
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