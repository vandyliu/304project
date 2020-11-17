import React, { useState, useEffect }  from 'react';

import Button from "@material-ui/core/Button";

import ValTable from '../components/ValTable';
import NewTeamDialog from '../components/NewTeamDialog';

const Teams = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [state, setState] = useState({ results: [], columns: [] });

    const handleClose = () => {
        setDialogOpen(false);
    }

    const handleNewTeamClick = () => {
        setDialogOpen(true);
    }

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Team" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(teams => setState({ results: teams['results'], columns: teams['columns'] }));
    }, [])

    return (
        <>
            <ValTable tableName="Teams" results={state.results} columns={state.columns}></ValTable>
            <br/>
            <Button variant="contained" onClick={handleNewTeamClick}>CREATE NEW TEAM</Button>
            <NewTeamDialog open={dialogOpen} handleClose={handleClose} />
        </>
    );
}

export default Teams;
