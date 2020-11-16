var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');

/* Send SQL query */
router.post('/', function(req, res, next) {
    const cmd = req.body.sql;
    connection.query(cmd, function (err, results, fields) {
        if (err) res.err(err);
        res.json(results);
    })
});

module.exports = router;
