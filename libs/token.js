const jwt = require('jsonwebtoken');

const { config } = require('../config/config');

const secret = config.jwtSecret;
const secretRecoveryPassword = config.jwtSecretRecoveryPassword;

function buildPayload(id, role) {
  return {
    sub: String(id),
    role: String(role)
  };
}

function signToken(payload) {
  return jwt.sign(payload, secret);
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

function signRecoveryToken(payload = {}, expiresIn = '15min') {
  return jwt.sign(payload, secretRecoveryPassword, { expiresIn });
}

function verifyRecoveryToken(token) {
  return jwt.verify(token, secretRecoveryPassword);
}

function getUserId(req) {
  return req.user.sub;
}

function getUserRole(req) {
  return req.user.role;
}

module.exports = { buildPayload, signToken, verifyToken, getUserId, getUserRole, verifyRecoveryToken, signRecoveryToken };
