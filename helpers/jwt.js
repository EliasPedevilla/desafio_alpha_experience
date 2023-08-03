const jwt = require('jsonwebtoken');

const generateToken = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.SECRET_JWT_SEED, {
    expiresIn: '7d',
  }, (err, token) => {
    if (err) {
      reject(Error('error in token generation'));
    }
    resolve(token);
  });
});

const validateToken = (token) => {
  if (!token) {
    return {
      status: false,
      message: 'token is requeried',
    };
  }
  try {
    const data = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED,
    );
    return {
      status: true,
      message: 'success',
      data
    };
  } catch (error) {
    return {
      status: false,
      message: 'not valid Token'
    };
  }
};

module.exports = {
  generateToken,
  validateToken,
};
