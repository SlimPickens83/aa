const Client = require("../models/Client")

exports.authenticate = async function (req, res) {
  Client.findByKey(req.body.clientKey)
    .then(() => {
      res.json(req.body.clientKey)
    })
    // .then(function (clientDocument) {
    //   res.json(clientDocument)
    // })
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
