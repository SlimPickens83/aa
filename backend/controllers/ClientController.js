const Client = require("../models/Client")

exports.authenticate = async function (req, res) {
  try {
    let client = await Client.findByKey(req.body.clientKey)
    res.json(client)
  } catch (e) {
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
