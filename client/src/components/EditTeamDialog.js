import React from 'react';

import TeamDialog from './TeamDialog';

const EditTeamDialog = ({ open, handleClose, team, onSubmitCallback }) => {
    const handleSubmit = (form) => {
        const sqlCommand = `UPDATE Team SET name = "${form.name}", wins = ${form.wins}, losses = ${form.losses} WHERE team_id = ${form.id}`;
        console.log(sqlCommand);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({
                sql: sqlCommand
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            onSubmitCallback();
        });
        handleClose();
    }
    return (
        <TeamDialog
            open={open}
            title="Update Team"
            initState={team ? { id: team.team_id, name: team.name, wins: team.wins, losses: team.losses } : null}
            disabledFields={{ id: true }}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            submitButtonText="Update"
        />
    );
}

export default EditTeamDialog;
