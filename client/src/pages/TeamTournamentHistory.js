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
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `SELECT Tournament.name, Team_Tournament.placement FROM Team_Tournament, Tournament WHERE Team_Tournament.team_id = ${teamId} AND Tournament.tournament_id = Team_Tournament.tournament_id
            ` }),
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
    }, []);

    const fetchTeamName = useCallback(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `SELECT name 
                                         FROM TEAM 
                                         WHERE team_id = ${teamId}
            `}),
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
    }, []);

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
