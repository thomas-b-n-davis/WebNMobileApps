/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();
const path = require('path');


router.get('/',function(req,res){
  res.render('index');
});

router.get('/contact',function(req,res){
  res.render('contact');
});

router.get('/shop',function(req,res){
  res.render('shop');
});

router.get('/product',function(req,res){
  res.render('product');
});

var User = require('../Controller/UserController');
// var Message = require('../Controller/MessageController');
// var Order = require('../Controller/OrderController');
// var Product = require('../Controller/ProductController');


// router.get('/user/login', User.getLogin);
// router.get('/user/add', User.createUser);
router.get('/user/getAll', User.getAllUser);
module.exports = router;