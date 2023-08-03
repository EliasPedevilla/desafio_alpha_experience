const jwt = require('jsonwebtoken')
const { error, serverError } = require("../helpers")


module.exports = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) return error({ res, message: 'token is required' })
  try {
    const data = await jwt.verify(
      token,
      process.env.SECRET_JWT_SEED,
    )

    if (!data) return error({ res, message: 'request unauthorized', status: 401 })

    req.userData = data;
    next()
  } catch (err) {
    serverError({ res, message: err.message })
  }
}