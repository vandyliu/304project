import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ValTable from '../components/ValTable';

const Tournaments = () => {
    const [data, setData] = useState({ results: [], columns: [] });
    const [organizers, setOrganizers] = useState({ results: [], columns: []});
    const [showOrganizers, setShowOrganizers] = useState(false);

    const onShowOrganizersClick = () => setShowOrganizers(!showOrganizers);

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

    const fetchTournaments = () => {
        const sqlQuery = "SELECT * FROM Tournament";
        console.log(sqlQuery);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: sqlQuery }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(tournaments => {
                setData({
                    results: tournaments['results'],
                    columns: tournaments['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });        
    };

    const fetchOrganizers = () => {
        const sqlQuery = "SELECT organizer, SUM(prize_pool) AS 'Total prize pool ($)' , MIN(start_date) AS 'First tournament date' FROM Tournament GROUP BY organizer";
        console.log(sqlQuery);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: sqlQuery }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(organizers => {
                setOrganizers({
                    results: organizers['results'],
                    columns: organizers['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });        
    };

    useEffect(() => {
        fetchTournaments();
        fetchOrganizers();
    }, [])

    return (
        <Container className={classes.container} maxWidth="lg">
            <ValTable tableName="Tournaments" results={data.results} columns={data.columns}></ValTable>
            <br></br>
            <Button variant="contained" onClick={onShowOrganizersClick}>Show organizers</Button>
            {showOrganizers && <br></br> && <ValTable tableName="Organizers" results={organizers.results} columns={organizers.columns}></ValTable>}
        </Container>
    );
}

export default Tournaments;
