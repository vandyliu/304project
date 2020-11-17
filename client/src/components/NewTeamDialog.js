import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const NewTeamDialog = ({ open, handleClose }) => {
    const [form, setForm] = useState({ id: 0, name: "", wins: 0, losses: 0 });

    const handleSubmit = () => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({
                sql: `INSERT INTO Team VALUES (${form.id}, "${form.name}", ${form.wins}, ${form.losses})`
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        handleClose();
    }

    const handleFormField = (field, value) => {
        setForm({ ...form, [field]: value })
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="form-dialog-title">Create New Team</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Enter the team details below.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Team ID"
                type="number"
                value={form.id}
                onChange={(e) => handleFormField("id", e.target.value)}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                value={form.name}
                onChange={(e) => handleFormField("name", e.target.value)}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Wins"
                type="number"
                value={form.wins}
                onChange={(e) => handleFormField("wins", e.target.value)}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Losses"
                type="number"
                value={form.losses}
                onChange={(e) => handleFormField("losses", e.target.value)}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
                Create
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export default NewTeamDialog;
