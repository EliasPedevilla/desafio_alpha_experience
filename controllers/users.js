const { User } = require('../models')
const { success, error, serverError } = require('../helpers')
const services = require('../services')

const getAllUsers = async (req, res) => {
  try {
    const users = await services.getAll(User)
    success({
      res,
      message: 'list of all users',
      data: users,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const getSingleUser = async (req, res) => {
  const { userId } = req.params
  try {
    const data = await services.getSingle(User, { id: userId })

    if (!data) return error({ res, message: 'user not found' })

    success({
      res,
      message: 'user detail',
      data,
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const updateSingleUser = async (req, res) => {
  const { userId } = req.params

  const {
    name,
    lastname,
    photo
  } = req.body;

  try {
    const data = await services.updateSingle(User, userId, {
      name,
      lastname,
      photo
    });

    (data[0] === 0)
      ? error({ res, message: 'user not found', status: 404 })
      : success({
        res,
        message: 'user updated',
        status: 200,
      });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

const deleteSingleUser = async (req, res) => {
  const { userId } = req.params
  try {
    const data = await services.deleteSingle(User, userId)

    if (data === 0) return error({ res, message: 'user not found', status: 404 })
    success({
      res,
      message: 'user deleted',
      status: 200,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
}

module.exports = {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
}