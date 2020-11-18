import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const PlayerMatchHistory = ({ playerId }) => {
    const [data, setData] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({
                sql: `SELECT * FROM Matches, Match_Player WHERE Matches.match_id = Match_Player.match_id AND Match_Player.player_id = "${playerId}"`
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(matches => setData({ results: matches['results'], columns: matches['columns'] }));
    }, [])

    return <ValTable tableName={`Match History for ${playerId}`} results={data.results} columns={data.columns}></ValTable>;
}

export default PlayerMatchHistory;
