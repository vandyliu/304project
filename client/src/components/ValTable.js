import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ValTable = (props) => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650
        },
    });

    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                {props.tableName}
            </Typography>
            <TableContainer className={classes.container} component={Paper}>
                <Table className={classes.table} aria-label={props.tableName + " table"}>
                    <TableHead>
                        <TableRow>
                            {props.columns.map((c) => <TableCell>{c}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.results.map((agent, idx) => (
                            <TableRow key={idx}>
                                {props.columns.map((c) =>
                                    <TableCell>{agent[c]}</TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

export default ValTable;
