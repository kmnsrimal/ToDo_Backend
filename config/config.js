var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb' 
}) 

connection.connect()

connection.query('SELECT * from user', function (err, rows, fields) {
    if (err) throw err
    
    // console.log(err);
    console.log("config/config.js");
    console.log("Successfully connected to the database.");
    // console.log('The solution is: ', rows[0])
  })

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err
  
//   console.log(err);
//   console.log(rows);

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

module.exports = connection;