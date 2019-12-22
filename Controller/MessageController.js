services = require("../Services/service_index");

exports.getAllCommunications = (req, res, next) => {
  var user_id = req.body.user_id;
  services.Message.getAllCommunicationsQuery(user_id, (rows) => {
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
}

exports.getAllMessages = (req, res, next) => {
  console.log(req.body);
  var data = req.body;


  services.Message.getAllMessagesQuery(data.receiver_id, data.sender_id, (rows) => {
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

}


exports.send = (req, res, next) => {

  var data = req.body;
  // console.log(data.message);
  var message = {
    message: data.message,
    product_id: data.product_id,
    sender_id: data.sender_id,
    receiver_id: data.receiver_id,
    timestamp: data.timestamp
  }
  console.log(message);
  services.Message.sendMessageQuery(message, (rows) => {
    if (!rows) {
      res.json({
        "status": "failed",
        "message": null
      })
    } else {
      res.json({
        "status": "sucessfull"
      })
    }
  })

}