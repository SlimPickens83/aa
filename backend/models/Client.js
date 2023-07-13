const clientCollection = require("../db").db().collection("clients")
const ObjectId = require("mongodb").ObjectId

clientCollection.createIndex({ clientName: "text", clientKey: "text" })

let Client = function (data) {
  this.data = data
  this.errors = []
}

Client.prototype.cleanUp = function () {
  if (typeof this.data.clientName != "string") {
    this.data.clientName = ""
  }

  if (typeof this.data.clientKey != "string") {
    this.data.clientKey = ""
  }

  this.data = {
    clientName: this.data.clientName.trim().toLowerCase(),
    clientKey: this.data.clientKey.trim()
  }
}

Client.prototype.create = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await clientCollection.insertOne(this.data)
      resolve()
    } else {
      f
      reject(this.errors)
    }
  })
}

Client.reusableClientQuery = function (uniqueOperations, finalOperations = []) {
  return new Promise(async function (resolve, reject) {
    let aggOperations = uniqueOperations
      .concat([
        { $lookup: { from: "clients", localField: "clientKey", foreignField: "clientKey", as: "clientDocument" } },
        {
          $project: {
            clientKey: "$clientKey",
            clientName: { $arrayElemAt: ["$clientDocument", 0] }
          }
        }
      ])
      .concat(finalOperations)

    let client = await clientCollection.aggregate(aggOperations).toArray()

    resolve(client)
  })
}

Client.findSingleByKey = function (key) {
  return new Promise(async function (resolve, reject) {
    if (typeof key != "string") {
      reject()
      return
    }

    let client = await Client.reusableClientQuery([{ $match: { clientKey: key } }])

    if (client.length) {
      resolve(client[0])
    } else {
      reject()
    }
  })
}

module.exports = Client
