import React, { useState, useEffect, useCallback }  from 'react';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

import PlayerMatchHistoryFilterPanel from '../components/PlayerMatchHistoryFilterPanel';
import PlayerMatchHistoryAveragesPanel from '../components/PlayerMatchHistoryAveragesPanel';
import ValTable from '../components/ValTable';

const PlayerMatchHistory = () => {
    const [data, setData] = useState({ results: [], columns: [] });
    const [fetchParams, setFetchParams] = useState({
        selection: { map: "All", gamemode: "All", agent: "All" },
        groupBy: null
    });
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

    const getWhereClauseString = useCallback (() => {
        let whereClause = `WHERE Matches.match_id = Match_Player.match_id AND Match_Player.player_id = "${parsedPlayerId}"`
        const { map, gamemode, agent } = fetchParams.selection;
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
    }, [fetchParams.selection, parsedPlayerId]);

    const fetchData = (sql) => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql }),
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
    }

    const getStatsSQL = useCallback (() => {
        const where = getWhereClauseString();
        return `
            SELECT Matches.match_id, Matches.map, Matches.gamemode, Matches.start_time, Matches.end_time,
                Match_Player.agent_name, Match_player.kills, Match_player.assists, Match_player.deaths, Match_player.damage_dealt
            FROM Matches, Match_Player
            ${where}
        `;
    }, [getWhereClauseString]);


    const getAverageStatsSQL = useCallback (() => {
        const where = getWhereClauseString();
        const { groupBy } = fetchParams;
        let sqlGroup = ""
        if (groupBy === "map") {
            sqlGroup = "Matches.map"
        }
        if (groupBy === "gamemode") {
            sqlGroup = "Matches.gamemode"
        }
        if (groupBy === "agent") {
            sqlGroup = "Match_Player.agent_name"
        }
        return `
            SELECT ${sqlGroup}, Count(*) as count,
                Avg(Match_Player.kills) as avg_kills, Avg(Match_Player.assists) as avg_assists, Avg(Match_Player.deaths) as avg_deaths, Avg(Match_Player.damage_dealt) as avg_damage_dealt 
            FROM Matches, Match_Player
            ${where}
            GROUP BY ${sqlGroup}
            HAVING count >= 3
        `
    }, [fetchParams, getWhereClauseString]);

    useEffect(() => {
        const { groupBy } = fetchParams;
        const sql = groupBy ? getAverageStatsSQL() : getStatsSQL();
        fetchData(sql);
    }, [fetchParams, getAverageStatsSQL, getStatsSQL])

    const handleFetchParamsChange = (paramType, params) => {
        setFetchParams((prevState) => ({ ...prevState, [paramType]: params}));
    }

    return (
        <Container className={classes.container}>
            <PlayerMatchHistoryFilterPanel values={fetchParams.selection} handleSubmit={(params) => handleFetchParamsChange("selection", params)} />
            <PlayerMatchHistoryAveragesPanel value={fetchParams.groupBy} handleSubmit={(params) => handleFetchParamsChange("groupBy", params)}/>
            <ValTable tableName={`Match History for ${parsedPlayerId}`} results={data.results} columns={data.columns}></ValTable>
        </Container>
    );
}

export default PlayerMatchHistory;
