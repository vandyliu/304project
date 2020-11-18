import React, { useState, useEffect }  from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { useParams } from 'react-router-dom';

import PlayerMatchHistoryFilterPanel from '../components/PlayerMatchHistoryFilterPanel';
import ValTable from '../components/ValTable';

const PlayerMatchHistory = () => {
    const [data, setData] = useState({ results: [], columns: [] });
    const [fetchParams, setFetchParams] = useState({ map: "All", gamemode: "All", agent: "All" });
    const { playerId } = useParams();

    const parsedPlayerId = playerId.replace('-', '#');

    const useStyles = makeStyles({
        table: {
            minWidth: 650
        },
        title: {
            "font-family": 'valorant',
            "text-align": "center"
        },
        container: {
            "padding": '2rem'
        }
    });

    const classes = useStyles();

    const getWhereClauseString = () => {
        let whereClause = `WHERE Matches.match_id = Match_Player.match_id AND Match_Player.player_id = "${parsedPlayerId}"`
        const { map, gamemode, agent } = fetchParams;
        if (map !== "All") {
            whereClause += (` AND Matches.map = "${map}"`)
        }
        if (gamemode !== "All") {
            whereClause += (` AND Matches.gamemode = "${gamemode}"`)
        }
        if (agent !== "All") {
            whereClause += (` AND Match_Player.agent_name = "${agent}"`)
        }
        return whereClause;
    }

    useEffect(() => {
        const where = getWhereClauseString();
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({
                sql: `
                    SELECT Matches.match_id, Matches.map, Matches.gamemode, Matches.start_time, Matches.end_time,
                        Match_Player.agent_name, Match_player.kills, Match_player.assists, Match_player.deaths, Match_player.damage_dealt
                    FROM Matches, Match_Player
                    ${where}
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
    }, [fetchParams])

    const handleFetchParamsChange = (newParams) => {
        setFetchParams(newParams);
    }

    return (
        <Container className={classes.container}>
            <PlayerMatchHistoryFilterPanel values={fetchParams} handleSubmit={handleFetchParamsChange} />
            <ValTable tableName={`Match History for ${parsedPlayerId}`} results={data.results} columns={data.columns}></ValTable>
        </Container>
    );
}

export default PlayerMatchHistory;
