var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js');

/* Send SQL query */
router.post('/', function(req, res, next) {
    const cmd = req.body.sql;
    connection.query(cmd, function (err, results, fields) {
        if (err) next(err);
        resp = {'results': results}
        if (fields) {
            const columns = fields.map(f => f.name);
            resp['columns'] = columns;
        }
        res.json(resp);
    })
});

module.exports = router;
