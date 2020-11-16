var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');
var queryParser = require('../queryParser');

/* GET players table */
router.get('/', function(req, res, next) {
    const hasJoin =  queryParser.queryHasJoinParam(req.query);
    const cmd = queryParser.parseSQLGetQuery("Player", req.query);
    connection.query({ sql: cmd, nestTables: hasJoin ? "_" : false }, function (err, results, fields) {
        if (err) res.err(err);
        res.json(results);
    })
});

/* Add player */
router.post('/', function(req, res, next) {
    const orderedFields = ["name", "rank", "kills", "assists", "deaths", "headshot_percentage"];
    const cmd = queryParser.parseSQLPostQuery("Player", req.body, orderedFields);
    connection.query(cmd, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    })
});


module.exports = router;
