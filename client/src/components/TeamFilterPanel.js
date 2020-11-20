import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from '@material-ui/core/Typography';

const TeamFilterPanel = ({ values, handleSubmit }) => {
    const [data, setData] = useState({ results: [], columns: [] });

    const useStyles = makeStyles({
        root: {
            padding: 4,
            display: "flex",
            flexDirection: "row"
        },
        form: {
            display: "flex",
            flexDirection: "row"
        },
        input: {
            width: 200,
            marginRight: 8
        },
        div: {
            margin: '0rem 0rem 2rem 0rem'
        }
    });

    const classes = useStyles();

    const fetchTournaments = () => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT DISTINCT name FROM Tournament" }),
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

    const handleFormChange = (field, value) => {
        handleSubmit({ ...values, [field]: value });
    }

    useEffect(() => {
        fetchTournaments();
    }, [])

    return (
        <div className={classes.div}>
        <Typography variant="h6">Filter teams</Typography>
        <Paper className={classes.root}>
            <FormControl className={classes.form} variant="outlined">
                <InputLabel>Tournament</InputLabel>
                <Select
                    id="select-tournament"
                    label="Tournament"
                    className={classes.input}
                    value={values.tournament}
                    onChange={(e) => handleFormChange("tournament", e.target.value)}
                >
                    <MenuItem value="Any">Any Tournament</MenuItem>
                    <MenuItem value="All">All Tournaments</MenuItem>
                    {data.results.map((n) => 
                        <MenuItem value={n.name}>{n.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Paper>
        </div>
    );
}

export default TeamFilterPanel;
