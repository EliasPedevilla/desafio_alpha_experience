const {
  success,
  error,
  serverError,
  encryptPassword,
  comparePassword,
  generateToken,
} = require('../helpers');

const jwt = require('jsonwebtoken');

const services = require('../services');

const { User } = require('../models')

const register = async (req, res) => {
  const { name, lastName, email, username, password, role } = req.body
  try {
    const encrypted = await encryptPassword(password);

    const user = await services.createSingle(User, { name, lastName, email, password: encrypted, role: role, username });

    const token = await generateToken({ userId: user.id, role: user.role });

    if (user && !token) return error({ res, message: 'the user as created correctly but has error ocurred in the token creation. Please login' })

    success({
      res,
      message: 'user created',
      data: { user, token },
      status: 201,
    });
  } catch (err) {
    serverError({ res, message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await services.getSingle(User, { email });

    if (!user) return error({ res, message: 'user not found', status: 404 });

    if (comparePassword(password, user.password)) {
      const token = await generateToken({
        id: user.id,
        name: user.name,
        role: user.role
      }
      );
      return success({ res, message: 'successfull login', data: token, status: 200, });
    }
    return error({ res, message: 'invalid password', status: 401 });
  } catch (err) {
    return serverError({ res, message: err.message });
  }
};

module.exports = {
  register,
  login,
};
