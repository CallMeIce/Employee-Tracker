const mysql2 = require('mysql2');

const con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password123",
  database: "employee_db"
});

con.connect(function(err) {
  if (err) throw err;
})

module.exports = con