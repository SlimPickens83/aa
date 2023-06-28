const usersCollection = require("../db".db().collection("users"))

let User = function (data) {
  this.loggedIn = false
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

  // get rid of any bogus properties
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password
  }
}

User.prototype.login = function () {
  return new Promise((resolve, reject) => {
    usersCollection.findOne(
      { username: this.data.username }
        .then(attemptedUser => {
          if (this.data.password === attemptedUser.password) {
            this.data = attemptedUser
            this.loggedIn = true
            resolve("User match successful.")
          } else {
            reject("Invalid username / password.")
          }
        })
        .catch(function (e) {
          reject("Please try again later.")
        })
    )
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

module.exports = User
