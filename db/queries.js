// Connect to your database
const { Pool } = require('pg');

const pool = new Pool ({
user: process.env.DATA_USER,
host: process.env.DATA_HOST,
database: process.env.DATA_DATABASE,
password: process.env.DATA_PASS,
port: process.env.DATA_PORT
});

module.exports = pool;

