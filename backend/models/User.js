const usersCollection = require("../db").db().collection("users")
const adminCollection = require("../db").db().collection("admin")

let User = function (data) {
  this.loggedIn = false
  this.admin = false
  this.data = data
  this.errors = []
}

User.prototype.cleanUp = function () {
  if (typeof this.data.username != "string") {
    this.data.username = ""
  }
  if (typeof this.data.email != "string") {
    this.data.email = ""
  }
  if (typeof this.data.password != "string") {
    this.data.password = ""
  }
  if (typeof this.data.admin != "boolean") {
    this.data.admin = false
  }

  // get rid of any bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
    admin: this.data.admin
  }
}

User.prototype.login = function () {
  return new Promise((resolve, reject) => {
    usersCollection
      .findOne({ username: this.data.username })
      .then(attemptedUser => {
        if (this.data.password === attemptedUser.password) {
          this.data = attemptedUser
          this.loggedIn = true
          resolve("User match successful.")
        } else {
          reject(`Invalid username (${this.data.username}) / password (${this.data.password}).`)
        }
      })
      .catch(function (e) {
        reject("Please try again later.")
      })
  })
}

User.prototype.register = function () {
  return new Promise(async (resolve, reject) => {
    if (!this.errors.length) {
      await usersCollection.insertOne(this.data)
      resolve()
    } else {
      reject(this.errors)
    }
  })
}

User.prototype.adminLogin = function () {
  return new Promise((resolve, reject) => {
    adminCollection
      .findOne({ adminKey: this.data.adminKey })
      .then(attemptedAdmin => {
        if (this.data.adminKey === attemptedAdmin.adminKey) {
          this.admin = true
          resolve("Admin login authenticated.")
        } else {
          reject("Invalid admin credentials.")
        }
      })
      .catch(function (e) {
        reject("Unknown error.")
      })
  })
}

module.exports = User
