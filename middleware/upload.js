const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const date = moment().format('DDMMYYYY-HHmmss');
    cb(null, `${date}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'text/plain' ||
    file.mimetype === 'application/msword' ||
    file.mimetype ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  fileSize: 1024 * 1024 * 5,
};

module.exports = multer({
  storage,
  fileFilter,
  limits,
});
