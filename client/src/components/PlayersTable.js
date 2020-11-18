import React from 'react';

import { useHistory } from 'react-router-dom'; 
import Button from '@material-ui/core/Button';
import ValTable from './ValTable';

const PlayersTable = ({ results, columns, ...props }) => {
    const history = useHistory();

    const onButtonClick = (player) => {
        history.push(`/Players/${player.player_id.replace("#", "-")}`)
    }

    return (
        <ValTable
            results={results.map((r) => ({
                ...r,
                matchHistoryLink: <Button onClick={() => onButtonClick(r)} variant="contained">MATCH HISTORY</Button>
            }))}
            columns={[...columns, { key: "matchHistoryLink", displayName: "" }]}
            {...props}
        />
    );
}

export default PlayersTable;
