const express = require("express")
const router = express.Router()
const userController = require("./controllers/UserController")

// User routes
Router.post("/register", userController.register)
Router.post("/login", userController.login)

// Portal routes

// Job routes

// Invoice routes

module.exports = router
