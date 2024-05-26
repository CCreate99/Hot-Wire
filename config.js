const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  superadmin_user: process.env.SUPERADMIN_USER,
  superadmin_pw: process.env.SUPERADMIN_PW,
};