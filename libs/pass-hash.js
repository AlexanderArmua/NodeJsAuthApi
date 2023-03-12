const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}

const hashVerifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
}

module.exports = { hashPassword, hashVerifyPassword }
