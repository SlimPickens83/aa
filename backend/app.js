import express, { urlencoded, json } from "express"
const app = express()

app.use(urlencoded({ extended: false }))
app.use(json())

const server = require("http").createServer(app)

export default server
