const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const server = require("http").createServer(app)

console.log("App is running.")

module.exports = server
