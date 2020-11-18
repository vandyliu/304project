import React, { useState }  from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import EditTeamDialog from './EditTeamDialog';

const TeamsAccordion = ({ title, teams, teamPlayers, onEditCallback }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const useStyles = makeStyles({
        table: {
            minWidth: 650
        },
        heading: {
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            color: 'grey',
        },
        list: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        button: {
            marginBottom: "4px",
            width: '50%',
            textAlign: 'center'
        }
    });
    const classes = useStyles();

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const handleOpenModal = (team) => {
        setSelectedTeam(team);
        setModalOpen(true);
    }

    return (
        <div className={classes.table}>
        <Typography className={classes.title} variant="h6" id="title" component="div">
            {title}
        </Typography>
        {teams.map((team) => (
           <Accordion key={team.team_id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{team.name ?? "No name"}</Typography>
                    <Typography className={classes.secondaryHeading}>Wins: {team.wins} Losses: {team.losses}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.list}>
                    <Button onClick={() => handleOpenModal(team)} variant="contained" className={classes.button}>
                        Edit Team
                    </Button>
                    {teamPlayers[team.team_id]?.map((player) => (
                        <Typography key={player.player_id}>
                            {player.player_id}
                        </Typography>
                    ))}
                </AccordionDetails>
            </Accordion>
        ))}
        <EditTeamDialog
            open={modalOpen}
            team={selectedTeam} 
            handleClose={handleCloseModal}
            onSubmitCallback={onEditCallback}
        />
    </div>

    );
}

export default TeamsAccordion;
