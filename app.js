var express = require('express');
var path = require('path');
var config = require('./config');
var upload=require("express-fileupload");

var index = require('./routes/index');

var app = express();
app.use(upload());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', index);
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(function(req, res, next) {
	res.render('index.ejs') 
});

app.listen(config.port, function() {
		console.log(`app is listening at http://localhost:${config.port}`);
	});


module.exports = app;