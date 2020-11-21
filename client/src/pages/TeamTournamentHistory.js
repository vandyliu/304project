import React, { useState, useEffect, useCallback }  from 'react';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

import ValTable from '../components/ValTable';

const TeamTournamentHistory = () => {
    const [data, setData] = useState({ results: [], columns: [] });
    const [teamName, setName] = useState("");

    const { teamId } = useParams();

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

    const fetchTournamentData = useCallback(() => {
        const sqlQuery = `SELECT Tournament.name, Team_Tournament.placement FROM Team_Tournament, Tournament WHERE Team_Tournament.team_id = ${teamId} AND Tournament.tournament_id = Team_Tournament.tournament_id
        `;
        console.log(sqlQuery);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: sqlQuery }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(matches => {
                setData({
                    results: matches['results'],
                    columns: matches['columns'].map((c) => ({ key: c, displayName: c }))
                });
            });
    }, [teamId]);

    const fetchTeamName = useCallback(() => {
        const sqlQuery = `SELECT name 
        FROM TEAM 
        WHERE team_id = ${teamId}`;
        console.log(sqlQuery);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: sqlQuery }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(name => {
                try {
                    setName(name.results[0].name);
                } catch (e) {
                    setName("unnamed");
                }
            });
    }, [teamId]);

    useEffect(() => {
        fetchTeamName();
        fetchTournamentData();
    }, [teamId, fetchTeamName, fetchTournamentData])

    return (
        <Container className={classes.container} maxWidth="lg">
            <ValTable 
                tableName={`Tournament History for ${teamName}`} 
                results={data.results} 
                columns={data.columns}>
            </ValTable>
        </Container>);
}

export default TeamTournamentHistory;
