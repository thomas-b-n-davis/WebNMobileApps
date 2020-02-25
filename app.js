var express = require('express');
var path = require('path');
var config = require('./config');
var upload=require("express-fileupload");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
let session=require('express-session');
var index = require('./routes/index');
var partials      = require('express-partials');


var app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(upload());
// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use('/', index);
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(partials());



app.listen(config.port, function() {
		console.log(`app is listening at http://localhost:${config.port}`);
	});


module.exports = app;