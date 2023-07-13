const Client = require("../models/Client")

exports.authenticate = function (req, res) {
  let client = new Client(req.body)
  client
    .findSingleByKey()
    .then(function (result) {
      res.json({
        clientName: client.data.clientName
      })
    })
    .catch(function (e) {
      res.json(false)
    })
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
