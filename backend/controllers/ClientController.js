const Client = require("../models/Client")

exports.ifClientExists = function (req, res, next) {
  Client.findByKey(req.body.clientKey)
    .then(function (clientDocument) {
      req.client = clientDocument
      next()
    })
    .catch(function (e) {
      res.json(false)
    })
}

exports.clientData = function (req, res) {
  if (req.client) {
    res.json({
      clientName: req.client.clientName
    })
  } else {
    res.json(false)
  }
}

exports.create = function (req, res) {
  let client = new Client(req.body)
  client
    .create()
    .then(() => {
      res.json({
        clientName: client.data.clientName
      })
    })
    .catch(regErrors => {
      res.status(500).send(regErrors)
    })
}
