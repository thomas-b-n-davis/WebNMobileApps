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


//router.get('/product/findAll', user.getOne);
module.exports = router;