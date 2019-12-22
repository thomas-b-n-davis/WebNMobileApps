User = require("../Services/UserServices");

exports.createUser  = (req, res, next) =>{
  Users.createUserQuery(
    {
    name : data.matrikel_number,
    first_name : data.name,
    email : data.email,
    telephone : data.telephone,
    password : data.password,
    status : data.status
}, (result) => {
if(utili.isEmpty(result)){
  return res.send({
    status : "success",
  })
}else{
 // console.log(result.original);
  return res.send({
    status : "failed",
    reason : result.original.sqlMessage,
  })
}
})
  };
  
 exports.getAllUser = (req, res, next) =>{
   console.log("1")
  User.getAllUserQuery((rows) => {
    if (!rows || !rows.length) {
      res.json({
        "status": "failed",
        "user": null
      })
    } else {
      res.json({
        rows
      })
    }
  })
  
  };
  
  exports.getLogin = (req, res, next) => {
    var email = req.query.email;
    var password = req.query.password;
    User.getUserQuery(email,password, (rows) => {
      if (!rows || !rows.length) {
        res.json({
          "status": "failed",
          "user": null
        })
      } else {
        res.json({
          rows
        })
      }
    })
  };