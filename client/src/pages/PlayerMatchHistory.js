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
                sql: `
                    SELECT Matches.match_id, Matches.map, Matches.gamemode, Matches.start_time, Matches.end_time,
                        Match_Player.agent_name, Match_player.kills, Match_player.assists, Match_player.deaths, Match_player.damage_dealt
                    FROM Matches, Match_Player
                    WHERE Matches.match_id = Match_Player.match_id AND Match_Player.player_id = "${parsedPlayerId}"
                `
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(matches => {
                setData({
                    results: matches['results'],
                    columns: matches['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });
    }, [])

    return <ValTable tableName={`Match History for ${parsedPlayerId}`} results={data.results} columns={data.columns}></ValTable>;
}

export default PlayerMatchHistory;
