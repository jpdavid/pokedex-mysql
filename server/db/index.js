// TODO: Establish connection to mysql database
const mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'pokedex'
});

connection.connect();

module.exports = connection;