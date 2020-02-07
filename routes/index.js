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
      console.log("created product::");
      if(Array.isArray(req.files.file)==false){
        req.files.file.mv(__dirname + '/../uploads/' + req.files.file['name'], function(err) {
            if (err) {}else{
              console.log("uploaded::"+req.files.file['name']);
              controllers.Product.addProductImage('uploads/' + req.files.file['name'],result.id,function(result){});
            }
          });
      }else{
        for(let n=0;n<req.files.file.length;n++){
          console.log("Files : "+req.files.file[n]['name']);
          req.files.file[n].mv(__dirname + '/../uploads/' + req.files.file[n]['name'], function(err) {
            if (err) {
              console.log(err);
              // return res.status(500).send(err);
            }else{
              console.log("uploaded::"+req.files.file[n]['name']);
              controllers.Product.addProductImage('uploads/' + req.files.file[n]['name'],result.id,function(result){});
            }
          });
        }
      }
    });
  }
  res.render('upload',{message:message});
});


router.post('/updateupload/:id',function(req,res){
  let message='Item successfully updates';
  req.body.pid=req.params.id;
  controllers.Product.updateProduct(req,function(result){
    
      if(Array.isArray(req.files.file)==false){
        console.log(req.files);
        req.files.file.mv(__dirname + '/../uploads/' + req.files.file['name'], function(err) {
            if (err) {}else{
              controllers.Product.addProductImage('uploads/' + req.files.file['name'],req.body.pid,function(result){});
            }
          });
      }else{

        for(let n=0;n<req.files.file.length;n++){
          console.log("Files : "+req.files.file[n]['name']);
          req.files.file[n].mv(__dirname + '/../uploads/' + req.files.file[n]['name'], function(err) {
            if (err) {
              console.log(err);
              // return res.status(500).send(err);
            }else{
              console.log("uploaded::"+req.files.file[n]['name']);
              controllers.Product.addProductImage('uploads/' + req.files.file[n]['name'],req.body.pid,function(result){});
            }
          });
        }
      }
    });
  res.render('update',{id:req.params.id,path:'../',message:message});
});


router.get('/selling',function(req,res){
  res.render('selling');
});

router.get('/buying',function(req,res){
  res.render('buying');
});

router.get('/conversation/:id/product/:product',function(req,res){
  console.log(req.params);
  res.render('conversation',{product:req.params.product,id:req.params.id,path:'../../../'});
});

router.get('/messages/:id',function(req,res){
  res.render('sellingmessages',{id:req.params.id,path:'../'});
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

router.get('/product/:id',function(req,res){
  res.render('product',{id:req.params.id,path:'../../'});
});

router.get('/update/:id',function(req,res){
  res.render('update',{id:req.params.id,path:'../',message:''});
});

router.get('/updateupload/:id',function(req,res){
  res.render('update',{id:req.params.id,path:'../',message:''});
});


router.post('/user/login', controllers.User.getLogin);
router.post('/user/add', controllers.User.createUser);
router.get('/user/getAll', controllers.User.getAllUser);


router.delete('/image', controllers.Product.deleteImage);
router.delete('/product', controllers.Product.deleteProduct);
router.post('/product/getAll', controllers.Product.getAllProducts);
router.post('/product/getById', controllers.Product.getProductById);
router.get('/product/getByUserId/:id', controllers.Product.getProductByUserId);
<<<<<<< HEAD
router.get('/product/getByName/:name', controllers.Product.getProductByName);
router.get('/product/getByName', controllers.Product.getProductByName);
router.post('/product/searchProduct', controllers.Product.searchAllProductsByNameQuery);
=======
router.get('/product/orders/:id', controllers.Product.getProductOrders);
router.get('/product/getByName', controllers.Product.getProductByName);
>>>>>>> 95297b0326b89848d9d11e233a60df088797359d
router.post('/product/add', controllers.Product.addProduct);
// router.post('/product/getProductBought', controllers.Product.getProductBought);
router.post('/product/changeProductStatus', controllers.Product.changeProductStatus);

router.post('/message/getAllCommunications', controllers.Message.getAllCommunications);
router.post('/message/getAllMessages', controllers.Message.getAllMessages);
router.post('/message/send', controllers.Message.send);

router.post('/orders/getAllOrders', controllers.Order.getAllOrders);
router.post('/orders/getAllOrderById', controllers.Order.getAllOrderById);
router.post('/orders/addOrder', controllers.Order.addOrder);
router.post('/orders/cancel', controllers.Order.cancalOrder);
router.post('/reviews', controllers.Order.createReviews);
router.get('/reviews/:id', controllers.Order.getReviews);




module.exports = router;