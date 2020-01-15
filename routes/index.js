/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();
let path = require('path');
var controllers = require("../Controller/controller_index");


// const multer = require('multer');
// const upload = multer({
//   dest: './uploads/' // this saves your file into a directory called "uploads"
// }); 

router.get('/',function(req,res){
	
  	res.render('index');
});

router.get('/index',function(req,res){
	res.redirect('/');
});

router.get('/contact',function(req,res){
  res.render('contact');
});
router.get('/upload',function(req,res){
  res.render('upload',{message:''});
});
router.post('/upload',function(req,res){
  let message='Item successfully uploaded';
  if(req.files==null){
    message='You have to add and image to the item you are uploading';
  }else{
    controllers.Product.addProduct(req,function(result){
      console.log(result.id);
      for(let n=0;n<req.files.file.length;n++){
        req.files.file[n].mv(__dirname + '/../uploads/' + req.files.file[n]['name'], function(err) {
          if (err) {
            // return res.status(500).send(err);
          }else{
            controllers.Product.addProductImage('uploads/' + req.files.file[n]['name'],result.id,function(result){});
          }
        });
      }
    });
  }
  res.render('upload',{message:message});
});

router.get('/selling',function(req,res){
  res.render('selling');
});
router.get('/login',function(req,res){
  res.render('login');
});
router.get('/register',function(req,res){
  res.render('register');
});

router.get('/shop',function(req,res){
  res.render('shop');
});

router.get('/product',function(req,res){
  res.render('product');
});



router.post('/user/login', controllers.User.getLogin);
router.post('/user/add', controllers.User.createUser);
router.get('/user/getAll', controllers.User.getAllUser);

router.get('/product/getAll', controllers.Product.getAllProducts);
router.get('/product/getById', controllers.Product.getProductById);
router.get('/product/getByUserId/:id', controllers.Product.getProductByUserId);
router.get('/product/getByName', controllers.Product.getProductByName);
router.post('/product/add', controllers.Product.addProduct);
router.post('/product/changeProductStatus', controllers.Product.changeProductStatus);

router.post('/message/getAllCommunications', controllers.Message.getAllCommunications);
router.post('/message/getAllMessages', controllers.Message.getAllMessages);
router.post('/message/send', controllers.Message.send);

router.post('/orders/getAllOrders', controllers.Order.getAllOrders);
router.post('/orders/addOrder', controllers.Order.addOrder);
module.exports = router;