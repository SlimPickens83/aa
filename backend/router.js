const express = require("express")
const router = express.Router()
const userController = require("./controllers/UserController")
const cors = require("cors")

router.use(cors())

console.log("Router is running.")

router.get("/", (req, res) => res.json("Hello, if you see this message that means your backend is up and running successfully."))

// User routes
router.post("/register", userController.register)
router.post("/login", userController.login)

// Portal routes

// Job routes

// Invoice routes

module.exports = router
