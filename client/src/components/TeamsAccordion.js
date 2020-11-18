import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const TeamsAccordion = ({ title, teams, teamPlayers }) => {
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
        }
    });

    const classes = useStyles();

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
                    {teamPlayers[team.team_id]?.map((player) => (
                        <Typography key={player.player_id}>
                            {player.player_id}
                        </Typography>
                    ))}
                </AccordionDetails>
            </Accordion>
        ))}
    </div>

    );
}

export default TeamsAccordion;
