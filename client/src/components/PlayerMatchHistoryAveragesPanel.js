import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

const PlayerMatchHistoryAveragesPanel = ({ value, handleSubmit }) => {
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

    const handleButtonClick = (newValue) => {
        if (value === newValue) {
            handleSubmit(null);
        } else {
            handleSubmit(newValue);
        }
    }

    return (
        <div className={classes.div}>
        <Typography variant="h6">Stats Averages</Typography>
        <Typography variant="subtitle2">* must have at least 3 matches played per group</Typography>
        <Paper className={classes.root}>
            <Button
                variant="contained"
                color={value === "map" ? "primary" : undefined}
                className={classes.input}
                onClick={(e) => handleButtonClick("map")}
            >
                AVERAGES BY MAP
            </Button>
            <Button
                variant="contained"
                color={value === "gamemode" ? "primary" : undefined}
                className={classes.input}
                onClick={(e) => handleButtonClick("gamemode")}
            >
                AVERAGES BY GAMEMODE
            </Button>
            <Button
                variant="contained"
                color={value === "agent" ? "primary" : undefined}
                className={classes.input}
                onClick={(e) => handleButtonClick("agent")}
            >
                AVERAGES BY AGENT
            </Button>
        </Paper>
        </div>
    );
}

export default PlayerMatchHistoryAveragesPanel;
