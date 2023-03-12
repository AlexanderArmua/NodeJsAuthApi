const cors = require('cors');
const { config } = require('../config/config');

const whitelist = config.whitelist;
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

function corsHandler() {
  return cors(options);
}

module.exports = corsHandler;
