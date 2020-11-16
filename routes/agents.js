var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');
var queryParser = require('../queryParser');

// const SQL_command = 'SELECT * FROM Agent;';

/* GET agents table */
router.get('/', function(req, res, next) {
    const { select, where } = queryParser.parseRequestQuery(req.query);
    const SQL_command = `${select} FROM Agent ${where}`;
    console.log(SQL_command);
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
