var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');

const SQL_command = 'SELECT * FROM Agent;';

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query(SQL_command, function (err, results, fields) {
        if (err) throw err;
        const response = [];
        for (var i = 0; i < results.length; i++) {
            response.push({name: results[i].name, type: results[i].type});
        }
        res.json(response);
    })
});

module.exports = router;
