const mysql = require('mysql')

const connection = mysql.createConnection({
  host: "localhost",
  user: "financeiro",
  password: "bC#7ecN0",
  database: 'health'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  // connection.query('SELECT 1 + 1 AS resultado', (error, res, fild) => {
  //   if (err) throw err;
  //   console.log('Resultado: ', res[0].resultado)
  // })

module.exports = connection

