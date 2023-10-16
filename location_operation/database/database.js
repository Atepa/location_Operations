const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// eslint-disable-next-line func-names
exports.connect = async function () {
  await mongoose.connect(process.env.DATABASEURL);
};
