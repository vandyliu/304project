import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const ValTable = ({ tableName, results, columns, onRowDelete}) => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        title: {
            "font-family": 'valorant',
            "text-align": "center",
            "padding": "0 2rem"
        },
        div: {
            padding: "2rem"
        }
    });

    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} variant="h4" id="tableTitle" component="div">
                {tableName}
            </Typography>
            <TableContainer className={classes.container} component={Paper}>
                <Table className={classes.table} aria-label={tableName + " table"}>
                    <TableHead>
                        <TableRow>
                            {columns.map((c) => <TableCell key={c.key}>{c.displayName}</TableCell>)}
                            {onRowDelete && (<TableCell key="DELETE"/>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((row, idx) => (
                            <TableRow key={idx}>
                                {columns.map((c) =>
                                    <TableCell key={c.key}>{row[c.key]}</TableCell>
                                )}
                                {onRowDelete && (
                                    <TableCell key="DELETE">
                                        <Button variant="contained" onClick={() => onRowDelete(row)}>DELETE</Button>
                                    </TableCell>
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
