import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ValTable from '../components/ValTable';

const Tournaments = () => {
    const [data, setData] = useState({ results: [], columns: [] });

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
            body: JSON.stringify({ sql: "SELECT * FROM Tournament" }),
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
    }, [])

    return (
        <Container className={classes.container} maxWidth="lg">
            <ValTable tableName="Tournaments" results={data.results} columns={data.columns}></ValTable>
        </Container>
    );
}

export default Tournaments;
