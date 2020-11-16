var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');
var queryParser = require('../queryParser');

/* GET agents table */
router.get('/', function(req, res, next) {
    const hasJoin =  queryParser.queryHasJoinParam(req.query);
    const cmd = queryParser.parseSQLGetQuery("Agent", req.query, {});
    connection.query({ sql: cmd, nestTables: hasJoin ? "_" : false }, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    })
});

module.exports = router;
