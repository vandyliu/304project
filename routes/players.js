var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');
var queryParser = require('../queryParser');

/* GET players table */
router.get('/', function(req, res, next) {
    const aliases = { name: "player_id", rank: "p_rank" };
    const SQL_GET_command = queryParser.parseSQLGetQuery("Player", req.query, aliases);
    connection.query(SQL_GET_command, function (err, results, fields) {
        if (err) res.err(err);
        response = results.map(r => {
            return {
                'name': r.player_id,
                'rank': r.p_rank,
                'kills': r.kills,
                'assists': r.assists,
                'deaths': r.deaths,
                'headshot_percentage': r.headshot_percentage
            };
        });
        res.json(response);
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
