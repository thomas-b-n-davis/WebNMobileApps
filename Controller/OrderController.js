var Order = require('../model/OrderModel');

module.exports.getAllCategories = function (callback) {
	Order.findAll()
	  .then(function (related) {
		//console.log(related[0].role.role);
		callback(related);
	  })
	  .catch(function (err) {
		//console.log(err);
		callback(err);
	  });
  }