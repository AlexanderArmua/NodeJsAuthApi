require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',

  port: process.env.PORT || 3000,
  url: process.env.URL || 'http://localhost',

  dbUser:  process.env.DB_USER,
  dbPassword:  process.env.DB_PASSWORD,
  dbHost:  process.env.DB_HOST,
  dbName:  process.env.DB_NAME,
  dbPort:  process.env.DB_PORT,

  whitelist: ['http://localhost:8080', 'https://myapp.co', 'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop'],

  jwtSecret: process.env.JWT_SECRET,
  jwtSecretRecoveryPassword: process.env.JWT_SECRET_RECOVERY_PASSWORD,

  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASSWORD,
  emailSmptHost: process.env.EMAIL_HOST,
  emailSmptPort: process.env.EMAIL_PORT,
}

module.exports = { config };
