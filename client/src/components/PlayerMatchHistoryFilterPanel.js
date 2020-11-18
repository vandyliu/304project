import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from '@material-ui/core/Typography';

const PlayerMatchHistoryFilterPanel = ({ values, handleSubmit }) => {
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

    const handleFormChange = (field, value) => {
        handleSubmit({ ...values, [field]: value });
    }

    return (
        <div className={classes.div}>
        <Typography variant="h6">Filter Match History</Typography>
        <Paper className={classes.root}>
            <FormControl className={classes.form} variant="outlined">
                <InputLabel>Map</InputLabel>
                <Select
                    id="select-map"
                    label="Map"
                    className={classes.input}
                    value={values.map}
                    onChange={(e) => handleFormChange("map", e.target.value)}
                >
                    <MenuItem value="All">All Maps</MenuItem>
                    <MenuItem value="Bind">Bind</MenuItem>
                    <MenuItem value="Ascent">Ascent</MenuItem>
                    <MenuItem value="Split">Split</MenuItem>
                    <MenuItem value="Icebox">Icebox</MenuItem>
                    <MenuItem value="Haven">Haven</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.form} variant="outlined">
                <InputLabel>Gamemode</InputLabel>
                <Select
                    id="select-gamemode"
                    label="Gamemode"
                    className={classes.input}
                    value={values.gamemode}
                    onChange={(e) => handleFormChange("gamemode", e.target.value)}
                >
                    <MenuItem value="All">All Gamemodes</MenuItem>
                    <MenuItem value="Competitive">Competitive</MenuItem>
                    <MenuItem value="Unrated">Unrated</MenuItem>
                    <MenuItem value="Spike Rush">Spike Rush</MenuItem>
                    <MenuItem value="Deathmatch">Deathmatch</MenuItem>
                    <MenuItem value="Custom">Custom</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.form} variant="outlined">
                <InputLabel>Agent</InputLabel>
                <Select
                    id="select-agent"
                    label="Agent"
                    className={classes.input}
                    value={values.agent}
                    onChange={(e) => handleFormChange("agent", e.target.value)}
                >
                    <MenuItem value="All">All Agents</MenuItem>
                    <MenuItem value="Breach">Breach</MenuItem>
                    <MenuItem value="Brimstone">Brimstone</MenuItem>
                    <MenuItem value="Cypher">Cypher</MenuItem>
                    <MenuItem value="Jett">Jett</MenuItem>
                    <MenuItem value="Killjoy">Killjoy</MenuItem>
                    <MenuItem value="Omen">Omen</MenuItem>
                    <MenuItem value="Phoenix">Phoenix</MenuItem>
                    <MenuItem value="Raze">Raze</MenuItem>
                    <MenuItem value="Reyna">Reyna</MenuItem>
                    <MenuItem value="Sage">Sage</MenuItem>
                    <MenuItem value="Skye">Skye</MenuItem>
                    <MenuItem value="Sova">Sova</MenuItem>
                    <MenuItem value="Viper">Viper</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained">GET AVERAGE STATS</Button>
        </Paper>
        </div>
    );
}

export default PlayerMatchHistoryFilterPanel;
