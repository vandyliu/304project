import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import ValTable from '../components/ValTable';

const Agents = () => {
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
            body: JSON.stringify({ sql: "SELECT * FROM Agent" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(agents => {
                setData({
                    results: agents['results'],
                    columns: agents['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });
    }, [])


    return (
        <Container className={classes.container} maxWidth="lg">
            <ValTable tableName="Agents" results={data.results} columns={data.columns}></ValTable>;
        </Container>)
}

export default Agents;
