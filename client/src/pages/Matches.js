import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ValTable from '../components/ValTable';

const Matches = () => {
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
        const sqlCommand = "SELECT * FROM Matches"
        console.log(sqlCommand);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: sqlCommand }),
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

    return (
        <Container className={classes.container} maxWidth="lg">
            <ValTable tableName="Matches" results={data.results} columns={data.columns}></ValTable>
        </Container>);
}

export default Matches;
