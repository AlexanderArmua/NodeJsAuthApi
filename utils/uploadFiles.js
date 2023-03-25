const multer = require('multer');
const path = require("path");

const { config } = require('../config/config');

const filesRoute = "files";

const storage = multer.diskStorage({
  destination : `${config.publicFolder}/${filesRoute}/`,
  filename : function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() +
      path.extname(file.originalname))
  }
})

const uploadFile = multer({ storage: storage });

const getFileName = (messageFile) => {
  return messageFile ? `${config.url}:${config.port}/${config.appRoute}/${filesRoute}/${messageFile}` : null;
}

module.exports = { uploadFile, getFileName };
