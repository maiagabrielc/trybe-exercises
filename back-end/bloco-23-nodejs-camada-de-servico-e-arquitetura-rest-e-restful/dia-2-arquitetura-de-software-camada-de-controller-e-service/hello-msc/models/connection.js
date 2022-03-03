const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Ab123465@',
  database: 'model_example',
});

module.exports = connection;