const mysql = require('mysql');

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',  // Change if using a different host
  user: 'root',  // Your MySQL username
  password: '',  // Your MySQL password
  database: 'property_management;'  // Your MySQL database name
});


module.exports = db;
