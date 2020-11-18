import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/RadioGroup";
import FormControlLabel  from "@material-ui/core/FormControlLabel";
import Checkbox  from "@material-ui/core/Checkbox";
import Typography from '@material-ui/core/Typography';

const FilterPlayerColumnsPanel = ({ values, handleSubmit }) => {
    const useStyles = makeStyles({
        root: {
            padding: 4,
            display: "flex",
            flexDirection: "row"
        },
        form: {
            width: "100%"
        },
        formGroup: {
            display: "flex",
            flexDirection: "row",
            width: "100%"
        },
        input: {
            marginRight: 64
        },
    });
    const classes = useStyles();

    const handelFormChange = (field, value) => {
        handleSubmit({ ...values, [field]: value });
    }

    return (
        <>
        <Typography variant="h6">Select Result Columns</Typography>
        <Paper className={classes.root}>
            <FormControl className={classes.form}>
                <FormGroup className={classes.formGroup}>
                    <FormControlLabel
                        value="Rank"
                        control={<Checkbox checked={values.rank}/>}
                        onChange={() => handelFormChange("rank", !values.rank)}
                        className={classes.input}
                        label="Rank"
                    />
                    <FormControlLabel
                        value="Kills"
                        control={<Checkbox checked={values.kills}/>}
                        onChange={() => handelFormChange("kills", !values.kills)}
                        className={classes.input}
                        label="Kills"
                    />
                    <FormControlLabel
                        value="Assists"
                        control={<Checkbox checked={values.assists}/>}
                        onChange={() => handelFormChange("assists", !values.assists)}
                        className={classes.input}
                        label="Assists"
                    />
                    <FormControlLabel
                        value="Deaths"
                        control={<Checkbox checked={values.deaths}/>}
                        onChange={() => handelFormChange("deaths", !values.deaths)}
                        className={classes.input}
                        label="Deaths"
                    />
                    <FormControlLabel
                        value="HeadshotPercentage"
                        control={<Checkbox checked={values.headshotPercentage}/>}
                        onChange={() => handelFormChange("headshotPercentage", !values.headshotPercentage)}
                        label="Headshot %"
                    />
                </FormGroup>
            </FormControl>
        </Paper>
        </>
    );
}

export default FilterPlayerColumnsPanel;
