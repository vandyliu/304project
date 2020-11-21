import React, { useState, useEffect, useCallback }  from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import TeamsAccordion from '../components/TeamsAccordion';
import NewTeamDialog from '../components/NewTeamDialog';
import TeamFilterPanel from '../components/TeamFilterPanel'

const Teams = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [data, setData] = useState({ results: [], columns: [] });
    const [teamPlayers, setTeamPlayers] = useState({});

    const [fetchParams, setFetchParams] = useState({
        selection: { tournament: "Any" }
    });

    const useStyles = makeStyles({
        table: {
            minWidth: 650
        },
        title: {
            "font-family": 'valorant',
            "text-align": "center"
        },
        container: {
            "padding": '2rem'
        }
    });

    const classes = useStyles();

    // find teams that have participated in all tournaments
    const divisionQuery = `SELECT * 
                           FROM Team 
                           WHERE NOT EXISTS (SELECT Tournament.tournament_id
                                            FROM Tournament
                                            WHERE NOT EXISTS (SELECT Team_Tournament.tournament_id
                                                              FROM Team_Tournament
                                                              WHERE Team_Tournament.tournament_id = Tournament.tournament_id
                                                              AND Team_Tournament.team_id = Team.team_id))`


    const getQuery = useCallback (() => {
        const { tournament } = fetchParams.selection;
        if (tournament === "Any") {
            return `SELECT * FROM Team`
        } else if (tournament === "All") {
            return divisionQuery;
        } else {
            return `SELECT Team.team_id, Team.name, Team.wins, Team.losses
                    FROM Team, Tournament, Team_Tournament
                    WHERE Tournament.name = "${tournament}" AND Tournament.tournament_id = Team_Tournament.tournament_id
                    AND Team.team_id = Team_Tournament.team_id`
        }
    }, [divisionQuery, fetchParams.selection]);

    const handleClose = () => {
        setDialogOpen(false);
    }

    const handleNewTeamClick = () => {
        setDialogOpen(true);
    }

    const fetchTeams = useCallback(() => {
        const sqlQuery = getQuery();
        console.log(sqlQuery);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: sqlQuery }),
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
    }, [getQuery]);

    const fetchTeamPlayers = (teamId) => {
        const sqlQuery = `SELECT player_id FROM Team_Player WHERE team_id = ${teamId}`;
        console.log(sqlQuery);
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: sqlQuery }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(players => setTeamPlayers((prevState) => ({ ...prevState, [teamId]: players.results })));
    }

    const handleFetchParamsChange = (paramType, params) => {
        setFetchParams((prevState) => ({ ...prevState, [paramType]: params }));
    }

    useEffect(() => {
        fetchTeams();
    }, [fetchParams, fetchTeams])

    return (
        <Container className={classes.container} maxWidth="lg">
            <TeamFilterPanel values={fetchParams.selection} handleSubmit={(params) => handleFetchParamsChange("selection", params)}/>
            <br/>
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
        </Container>
    );
}

export default Teams;
