require('dotenv').config();

const config = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.HOST,
  port: process.env.PORT,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
