services = require("../Services/service_index");
const sha256 = require('sha256');

exports.createUser  = (req, res, next) =>{
  var data=req.body;
  services.User.createUserQuery(
    {
    name : data.name,
    email : data.email,
    telephone : data.telephone,
    password : sha256(data.password),
    status : data.status
}, (callback) => {
  if (callback.status=="failed") {
    res.json({
      "status": "failed",
      "user": null,
      "message":callback.message
    })
  } else {
    req.session.user=callback;
    req.session.isLoggedIn=true;
    res.json({
      callback
    })
  }
})
  };
  
 exports.getAllUser = (req, res, next) =>{
  services.User.getAllUserQuery((rows) => {
    if (!rows || !rows.length) {
      res.json({
        "status": "failed",
        "user": null,
        "message":"Wrong username or password, kindly check and retry"
      })
    } else {
      res.json({
        rows
      })
    }
  })
  
  };
  
  exports.getLogin = (req, res, next) => {
    var email = req.body.email;
    var password = sha256(req.body.password);
    services.User.getUserQuery(email,password, (rows) => {
      if (!rows || !rows.length) {
        res.json({
          "status": "failed",
          "user": null
        })
      } else {
        res.json({
          callback:rows[0]
        })
      }
    })
  };