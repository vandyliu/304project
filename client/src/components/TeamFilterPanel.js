import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Typography from '@material-ui/core/Typography';

const TeamFilterPanel = ({ values, handleSubmit }) => {
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
                    <MenuItem value="First Strike North America">First Strike North America</MenuItem>
                    <MenuItem value="NSG x Renegades Invitational">NSG x Renegades Invitational</MenuItem>
                    <MenuItem value="FaZe Clan Invitational">FaZe Clan Invitational</MenuItem>
                    <MenuItem value="G2 Esports Invitational">G2 Esports Invitational</MenuItem>
                    <MenuItem value="First Strike CIS">First Strike CIS</MenuItem>
                    <MenuItem value="First Strike Korea">First Strike Korea</MenuItem>
                    <MenuItem value="First Strike Japan">First Strike Japan</MenuItem>
                    <MenuItem value="First Strike Brazil">First Strike Brazil</MenuItem>
                    <MenuItem value="First Strike Europe">First Strike Europe</MenuItem>
                    <MenuItem value="First Strike Turkey">First Strike Turkey</MenuItem>
                    <MenuItem value="T1 x Nerd Street Gamers Showdown">T1 x Nerd Street Gamers Showdown</MenuItem>
                    <MenuItem value="Nerd Street Gamers - Monthly September">Nerd Street Gamers - Monthly September</MenuItem>
                    <MenuItem value="Nerd Street Gamers - Monthly October">Nerd Street Gamers - Monthly October</MenuItem>
                    <MenuItem value="Nerd Street Gamers - Monthly November">Nerd Street Gamers - Monthly November</MenuItem>
                    <MenuItem value="Trovo Challenge North America">Trovo Challenge North America</MenuItem>
                    <MenuItem value="Trovo Challenge Europe">Trovo Challenge Europe</MenuItem>
                </Select>
            </FormControl>
        </Paper>
        </div>
    );
}

export default TeamFilterPanel;
