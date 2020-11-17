import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Agents = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Agent" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(agents => setState({ results: agents['results'], columns: agents['columns'] }));
    }, [])
    const useStyles = makeStyles({
        table: {
          minWidth: 650
        },
      });
    const classes = useStyles();
    return (
        // <div>
        //  <h1>Agents</h1>
        //     <ul>
        //         {state.results.map(agent =>
        //         <li key={agent.name}>{agent.name}: {agent.type}</li>)}
        //     </ul>
        // </div>
        <TableContainer className={classes.container} component={Paper}>
            <Table className={classes.table} aria-label="Agents table">
                <TableHead>
                    <TableRow>
                        {state.columns.map(c => <TableCell>c</TableCell>)}
                        {/* <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.results.map((agent) => {
                        <TableRow key={agent[0]}>
                            {state.columns.map((c) => 
                                <TableCell>{agent[c]}</TableCell>
                            )}
                        </TableRow>
                    })}
                    <TableRow>
                        <TableCell>asdf</TableCell>
                        <TableCell>fdadsf</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Agents;
