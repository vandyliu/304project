var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');

const SQL_command = 'SELECT * FROM Agent;';

/* GET agents table */
router.get('/', function(req, res, next) {
    connection.query(SQL_command, function (err, results, fields) {
        if (err) throw err;
        response = results.map(r => {
            return {
                'name': r.name,
                'type': r.type
            };
        });
        res.json(response);
    })
});

module.exports = router;
