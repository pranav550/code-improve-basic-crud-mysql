var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'all-india'
})

connection.connect((err) => {
    if (err) {
        console.log("error" + err)
    } else {
        console.log("DB Connected")
    }
})

module.exports = connection;