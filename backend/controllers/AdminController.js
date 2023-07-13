const Admin = require("../models/Admin")

exports.login = function (req, res) {
  let user = new User(req.body)
  user.adminLogin().then(function (result) {
    res.json({
      username: user.data.username,
      loggedIn: user.loggedIn,
      admin: true
    })
  })
}
