import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from '@material-ui/core/Typography';

const FindPlayerPanel = ({ values, handleSubmit }) => {
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
    });
    const classes = useStyles();

    const onFormChange = (field, value) => {
        handleSubmit({ ...values, [field]: value });
    }

    return (
        <>
        <Typography variant="h6">Find Players</Typography>
        <Paper className={classes.root}>
            <FormControl className={classes.form} variant="outlined">
                <InputLabel>Rank</InputLabel>
                <Select
                    id="select-rank"
                    label="Rank"
                    className={classes.input}
                    value={values.rank}
                    onChange={(e) => onFormChange("rank", e.target.value)}
                >
                    <MenuItem value="All">All Ranks</MenuItem>
                    <MenuItem value="Iron">Iron</MenuItem>
                    <MenuItem value="Bronze">Bronze</MenuItem>
                    <MenuItem value="Silver">Silver</MenuItem>
                    <MenuItem value="Gold">Gold</MenuItem>
                    <MenuItem value="Platinum">Platinum</MenuItem>
                    <MenuItem value="Diamond">Diamond</MenuItem>
                    <MenuItem value="Immortal">Immortal</MenuItem>
                    <MenuItem value="Radiant">Radiant</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Min. Kills"
                type="number"
                variant="outlined"
                className={classes.input}
                value={values.kills}
                onChange={(e) => onFormChange("kills", e.target.value)}
            />
            <TextField
                label="Min. Assists"
                type="number"
                variant="outlined"
                className={classes.input}
                value={values.assists}
                onChange={(e) => onFormChange("assists", e.target.value)}
            />
            <TextField
                label="Min. Deaths"
                type="number"
                variant="outlined"
                className={classes.input}
                value={values.deaths}
                onChange={(e) => onFormChange("deaths", e.target.value)}
            />
            <TextField
                label="Min. Headshot %"
                type="number"
                variant="outlined"
                className={classes.input}
                value={values.headshotPercentage}
                onChange={(e) => onFormChange("headshotPercentage", e.target.value)}
            />
        </Paper>
        </>
    );
}

export default FindPlayerPanel;
