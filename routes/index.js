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

var controllers = require("../Controller/controller_index");


router.post('/user/login', controllers.User.getLogin);
router.post('/user/add', controllers.User.createUser);
router.get('/user/getAll', controllers.User.getAllUser);

router.get('/product/getById', controllers.Product.getProductById);
router.get('/product/getByName', controllers.Product.getProductByName);
router.post('/product/add', controllers.Product.addProduct);
router.get('/product/getAll', controllers.Product.getAllProducts);

router.post('/message/getAllCommunications', controllers.Message.getAllCommunications);
router.post('/message/getAllMessages', controllers.Message.getAllMessages);
router.post('/message/send', controllers.Message.send);

router.post('/orders/getAllOrders', controllers.Order.getAllOrders);
router.post('/orders/addOrder', controllers.Order.addOrder);
module.exports = router;