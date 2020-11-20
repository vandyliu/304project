import React from 'react';

import { useHistory } from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ValTable from './ValTable';

const PlayersTable = ({ results, columns, ...props }) => {
    const history = useHistory();

    const useStyles = makeStyles({
        div: {
            margin: '2rem 0rem 0rem 0rem'
        }
    });

    const classes = useStyles();

    const onButtonClick = (player) => {
        history.push(`/Players/${player.player_id.replace("#", "-")}`)
    }

    return (
        <div className={classes.div}>
            <ValTable
            results={results.map((r) => ({
                ...r,
                matchHistoryLink: <Button onClick={() => onButtonClick(r)} variant="contained">MATCH HISTORY</Button>
            }))}
            columns={[...columns, { key: "matchHistoryLink", displayName: "" }]}
            {...props}
        />
        </div>
    );
}

export default PlayersTable;
