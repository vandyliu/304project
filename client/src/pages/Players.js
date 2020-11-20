import React, { useState, useEffect, useCallback }  from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import PlayersTable from '../components/PlayersTable';
import FindPlayerPanel from '../components/FindPlayerPanel';
import FilterPlayerColumnsPanel from "../components/FilterPlayerColumnsPanel";
import ValTable from '../components/ValTable';

const Players = () => {
    const [data, setData] = useState({ results: [], columns: [] });
    const [fetchParams, setFetchParams] = useState({
        projection: { rank: true, kills: true, assists: true, deaths: true, headshotPercentage: true, AverageCombatScore: true },
        selection: { rank: "All", kills: "", assists: "", deaths: "", headshotPercentage: "", AverageCombatScore: "" }
    });

    const [AvgACS, setAvgACS] = useState({ results: [], columns: []});
    const [showAvgACS, setShowAvgACS] = useState(false);

    const onShowAvgACSClick = () => setShowAvgACS(!showAvgACS);

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
    const getWhereClauseString = useCallback(() => {
        const whereClauses = [];
        const { rank, kills, assists, deaths, headshotPercentage, AverageCombatScore } = fetchParams.selection;
        if (rank === "Radiant") {
            whereClauses.push("p_rank = 'Radiant'")
        }
        if (rank !== "All" && rank !== "Radiant") {
            whereClauses.push(`(p_rank = "${rank} 1" OR p_rank = "${rank} 2" OR p_rank = "${rank} 3")`)
        }
        if (kills !== "") {
            whereClauses.push(`kills > ${kills}`)
        }
        if (assists !== "") {
            whereClauses.push(`assists > ${assists}`)
        }
        if (deaths !== "") {
            whereClauses.push(`deaths > ${deaths}`)
        }
        if (headshotPercentage !== "") {
            whereClauses.push(`headshot_percentage > ${headshotPercentage}`)
        }
        if (AverageCombatScore !== "") {
            whereClauses.push(`average_combat_score > ${AverageCombatScore}`)
        }
        return whereClauses.length === 0 ? "" : ` WHERE ${whereClauses.join(" AND ")}`;
    }, [fetchParams.selection]);

    const getSelectString = useCallback(() => {
        const { rank, kills, assists, deaths, headshotPercentage, AverageCombatScore } = fetchParams.projection;
        let selectClause = "SELECT player_id";
        if (rank) {
            selectClause += ", p_rank"
        }
        if (kills) {
            selectClause += ", kills"
        }
        if (assists) {
            selectClause += ", assists"
        }
        if (deaths) {
            selectClause += ", deaths"
        }
        if (headshotPercentage) {
            selectClause += ", headshot_percentage"
        }
        if (AverageCombatScore) {
            selectClause += ", average_combat_score"
        }
        return selectClause;
    }, [fetchParams.projection]);

    const fetchData = useCallback (() => {
        const where = getWhereClauseString();
        const select = getSelectString();

        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `${select} FROM Player${where}` }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(players => {
                setData({
                    results: players['results'],
                    columns: players['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });
    }, [getSelectString, getWhereClauseString]);

    const fetchAvgACS = () => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `SELECT p_rank, AVG(average_combat_score) as AvgACS 
                                         FROM Player 
                                         GROUP BY p_rank 
                                         HAVING AVG(average_combat_score) >= (SELECT AVG(average_combat_score)
                                                                              FROM Player)
            ` }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(AvgACS => {
                setAvgACS({
                    results: AvgACS['results'],
                    columns: AvgACS['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });        
    };


    const handleDelete = (player) => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `DELETE FROM Player WHERE player_id = "${player.player_id}"`}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            fetchData();
        })
    }

    useEffect(() => {
        fetchData();
        fetchAvgACS();
    }, [fetchParams, fetchData])

    const handleFetchParamsChange = (paramType, params) => {
        setFetchParams((prevState) => ({ ...prevState, [paramType]: params }));
    }

    return (
        <Container className={classes.container} maxWidth="lg">
            <FindPlayerPanel values={fetchParams.selection} handleSubmit={(params) => handleFetchParamsChange("selection", params)}/>
            <FilterPlayerColumnsPanel values={fetchParams.projection} handleSubmit={(params) => handleFetchParamsChange("projection", params)}/>
            <PlayersTable tableName="Players" results={data.results} columns={data.columns} onRowDelete={handleDelete}></PlayersTable>
            <br></br>
            <Button variant="contained" onClick={onShowAvgACSClick}>Show Nested Aggregation</Button>
            {showAvgACS && 
            <div>
                <br></br>
                <ValTable tableName="Average ACS per rank" results={AvgACS.results} columns={AvgACS.columns}></ValTable>
                <br></br>
                <h6>*AvgACS for each rank must be greater than average ACS across all ranks to appear</h6>
            </div>
            }
        </Container>
    );
}

export default Players;
