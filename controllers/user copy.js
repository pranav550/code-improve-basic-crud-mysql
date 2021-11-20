var connection = require('../config/db');
var addUser = (req, res) => {
    // connection.query('Insert into users Set?', [req.body], function (err, results, field) {
    //     if (err) throw err;
    //     res.status(200).json({
    //         message: "added",
    //         lastId: results.insertId
    //     });
    // });

    // let data = req.body;
    // var querySql = connection.query("Insert into users Set name=?,email=?,gender=?", [data.name, data.email, data.gender], function (err, results, field) {
    //     if (err) throw err;
    //     res.status(200).json({
    //         message: "added",
    //         lastId: results.insertId
    //     })
    // })

    let data = req.body;
    let sql = `Insert into users set name=${connection.escape(data.name)},
    email=${connection.escape(data.email)},gender=${connection.escape(data.gender)}
    `;
    var querySql = connection.query(sql, function (err, results, field) {
        if (err) throw err;
        res.status(200).json({
            message: "added",
            lastId: results.insertId
        })
    })
}

var userList = (req, res) => {
    sqlQuery = 'Select * from users';
    connection.query(sqlQuery, function (err, results, field) {
        if (err) throw err;
        res.status(200).json(results);
    });
}

var userInfo = (req, res) => {
    console.log(req.params.id)
    sqlQuery = `Select * from users where id=` + req.params.id;
    connection.query(sqlQuery, function (err, results, field) {
        if (err) throw err;
        res.status(200).json(results);
    });
}

var userUpdate = (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    let data = req.body;
    // sqlQuery = 'Update users set name=?,email=?,gender=? where id=?', [data.name, data.email, data.gender, req.params.id];
    // console.log(sqlQuery)
    connection.query('Update users set name=?,email=?,gender=? where id=?', [data.name, data.email, data.gender, req.params.id], function (err, results, field) {
        if (err) throw err;
        res.status(200).json({
            message: "Updated"
        });
    });
}

var userDelete = (req, res) => {
    console.log(req.params.id)
    sqlQuery = `Delete from users where id=` + req.params.id;
    connection.query(sqlQuery, function (err, results, field) {
        if (err) throw err;
        res.status(200).json({
            message: "Deleted"
        });
    });
}

module.exports = {
    addUser,
    userList,
    userInfo,
    userUpdate,
    userDelete
}