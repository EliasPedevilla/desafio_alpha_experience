const { error } = require("../helpers")

module.exports = (req, res, next) => {
  const { role } = req.userData

  return (role === "admin")
    ? error({ res, message: 'request unauthorized, you need to be admin' })
    : next()
}