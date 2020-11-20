import React, { useState, useEffect }  from 'react';
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

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `SELECT Team.name as teamName, Tournament.name, Team_Tournament.placement FROM Team, Team_Tournament, Tournament WHERE Team_Tournament.team_id = ${teamId} AND Tournament.tournament_id = Team_Tournament.tournament_id AND Team.team_id = Team_Tournament.team_id   
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
                setName(String(matches['results'][0]['teamName']) || "");
            });
    }, [teamId])

    return (
        <Container className={classes.container} maxWidth="lg">
            <ValTable 
                tableName={`Tournament History for ${teamName}`} 
                results={data.results} 
                columns={data.columns.slice(1)}>
            </ValTable>
        </Container>);
}

export default TeamTournamentHistory;
