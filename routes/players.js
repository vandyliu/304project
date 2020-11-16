var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');

/* GET players table */
router.get('/', function(req, res, next) {
    const SQL_GET_command = 'SELECT * FROM Player;';
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
    console.log(req);
    const player = req.body;
    const cmd = `INSERT INTO Player VALUES ("${player.name}", "${player.rank}", ${player.kills}, ${player.assists}, ${player.deaths}, ${player.headshot_percentage})`;
    connection.query(cmd, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    })
});


module.exports = router;
