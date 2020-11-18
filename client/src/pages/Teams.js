import React, { useState, useEffect }  from 'react';

import Button from "@material-ui/core/Button";

import TeamsAccordion from '../components/TeamsAccordion';
import NewTeamDialog from '../components/NewTeamDialog';

const Teams = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [data, setData] = useState({ results: [], columns: [] });
    const [teamPlayers, setTeamPlayers] = useState({});

    const handleClose = () => {
        setDialogOpen(false);
    }

    const handleNewTeamClick = () => {
        setDialogOpen(true);
    }

    const fetchTeams = () => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Team" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then((teams) => {
                teams?.results.forEach((team) => {
                    fetchTeamPlayers(team.team_id);
                });
                return teams;
            })
            .then(teams => setData({ results: teams['results'], columns: teams['columns'] }))
    }

    const fetchTeamPlayers = (teamId) => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `SELECT player_id FROM Team_Player WHERE team_id = ${teamId}` }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(players => setTeamPlayers((prevState) => ({ ...prevState, [teamId]: players.results })));
    }

    useEffect(() => {
        fetchTeams();
    }, [])

    return (
        <>
            <TeamsAccordion
                title="Teams"
                teams={data.results}
                teamPlayers={teamPlayers}
                onEditCallback={fetchTeams}
            />
            <br/>
            <Button variant="contained" onClick={handleNewTeamClick}>CREATE NEW TEAM</Button>
            <NewTeamDialog
                open={dialogOpen}
                handleClose={handleClose}
                onSubmitCallback={fetchTeams}
            />
        </>
    );
}

export default Teams;
