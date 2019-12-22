/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

var User = require('../Controller/UserController');
// var Message = require('../Controller/MessageController');
// var Order = require('../Controller/OrderController');
// var Product = require('../Controller/ProductController');


// router.get('/user/login', User.getLogin);
// router.get('/user/add', User.createUser);
router.get('/user/getAll', User.getAllUser);
module.exports = router;