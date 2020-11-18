import React, { useState, useEffect }  from 'react';

import { useParams } from 'react-router-dom';

import ValTable from '../components/ValTable';

const PlayerMatchHistory = () => {
    const [data, setData] = useState({ results: [], columns: [] });
    const { playerId } = useParams();

    const parsedPlayerId = playerId.replace('-', '#');

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({
                sql: `SELECT * FROM Matches, Match_Player WHERE Matches.match_id = Match_Player.match_id AND Match_Player.player_id = "${parsedPlayerId}"`
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
