import React from 'react';

import TeamDialog from './TeamDialog';

const NewTeamDialog = ({ open, handleClose, onSubmitCallback }) => {
    const handleSubmit = (form) => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({
                sql: `INSERT INTO Team VALUES (${form.id}, "${form.name}", ${form.wins}, ${form.losses})`
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
            title="Create Team"
            initState={null}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            submitButtonText="Create"
        />
    );
}

export default NewTeamDialog;
