var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');
var queryParser = require('../queryParser');

/* GET agents table */
router.get('/', function(req, res, next) {
    const SQL_command = queryParser.parseSQLGetQuery("Agent", req.query, {});
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
