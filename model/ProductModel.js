/*user model*/
var Sequelize = require('sequelize');
var sequelize = require('../common/mysql');

var Product = sequelize.define('users', {
	id: {
		type: Sequelize.BIGINT(11),
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING(45),
		allowNull: false
	},
	slug: {
		type: Sequelize.STRING(25)
	},
	description: {
		type: Sequelize.TEXT(100)
	},
	price: {
		type: Sequelize.STRING(25),
		allowNull: false
	},
	img_id: {
		type: Sequelize.BIGINT(11)
	},
	seller_id: {
		type: Sequelize.BIGINT(11)
	}
	,
	more_details: {
		type: Sequelize.STRING(145)
	},
	status: {
		type: Sequelize.BIGINT(1)
	}
	,
	category_id: {
		type: Sequelize.BIGINT(11)
	},
	condition: {
		type: Sequelize.BIGINT(11)
	},
	create_date: {
		type: Sequelize.DATE
	},
	modified_date: {
		type: Sequelize.DATE
	}

});

module.exports.getAllProducts = function(callback) {
        User.findAll()
		.then(function(related) {
			//console.log(related[0].role.role);
			callback( related);
		  })
		  .catch(function(err) {
			//console.log(err);
			callback(err);
		  });
	}

	module.exports.getAllProductsByName = function(name,callback) {
        User.findAll({
			where: {
				 	  name:name
				 	}			
		  })
		.then(function(related) {
			//console.log(related[0].role.role);
			callback( related);
		  })
		  .catch(function(err) {
			//console.log(err);
			callback(err);
		  });
	}

	// models.product.findAll({
	// 	where: {
	// 	  category: category
	// 	},
	// 	order: [
	// 		['views', 'DESC']
	// 	],
	// 	include: [
	// 	  {model: models.image, as: 'images'}
	// 	]
	//   })