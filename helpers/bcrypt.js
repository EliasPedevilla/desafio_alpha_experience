const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = (password, passwordHashed) => bcrypt.compareSync(password, passwordHashed);

module.exports = {
  encryptPassword,
  comparePassword,
};
