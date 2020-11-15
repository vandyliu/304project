DROP TABLE Team_Match;
DROP TABLE Player_Cosmetic;
DROP TABLE Cosmetic;
DROP TABLE Player_Mission;
DROP TABLE Team_Player;
DROP TABLE Match_Player;
DROP TABLE Match_Tournament;
DROP TABLE Team_Tournament;
DROP TABLE Ability;
DROP TABLE CosmeticNamePrice;
DROP TABLE Matches;
DROP TABLE Player;
DROP TABLE CombatScoreCalculation;
DROP TABLE Mission;
DROP TABLE Tournament;
DROP TABLE Team;
DROP TABLE Agent;

CREATE TABLE Agent (
    name CHAR(20),
    type CHAR(20),
    PRIMARY KEY (name)
);

CREATE TABLE Team (
    team_id INTEGER,
    name CHAR(20),
    wins INTEGER,
    losses INTEGER,
    PRIMARY KEY (team_id)
);

CREATE TABLE Tournament (
    tournament_id INTEGER,
    name CHAR(50),
    organizer CHAR(20),
    format CHAR(20),
    prize_pool INTEGER,
    start_date DATETIME,
    end_date DATETIME,
    UNIQUE (name, start_date),
    PRIMARY KEY (tournament_id)
);

CREATE TABLE Mission (
    mission_id INTEGER,
    description CHAR(250),
    experience INTEGER,
    PRIMARY KEY (mission_id)
);

CREATE TABLE CombatScoreCalculation (
    kills INTEGER,
    assists INTEGER,
    average_combat_score DECIMAL,
    PRIMARY KEY (kills, assists)
);

CREATE TABLE Player (
    player_id CHAR(50),
    p_rank CHAR(20),
    kills INTEGER,
    assists INTEGER,
    deaths INTEGER,
    headshot_percentage INTEGER,
    PRIMARY KEY (player_id)
);

CREATE TABLE Matches (
    match_id INTEGER,
    map CHAR(20),
    gamemode CHAR(20),
    start_time DATETIME,
    end_time DATETIME,
    PRIMARY KEY (match_id)
);

CREATE TABLE CosmeticNamePrice (
    name CHAR(20),
    price INTEGER,
    PRIMARY KEY (name)
);

CREATE TABLE Ability (
    name CHAR(20),
    agent_name CHAR(20),
    type CHAR(20),
    damage INTEGER,
    cooldown INTEGER,
    max_uses INTEGER,
    UNIQUE (type, agent_name),
    PRIMARY KEY (name, agent_name),
    FOREIGN KEY (agent_name) REFERENCES Agent(name) ON DELETE CASCADE ON UPDATE CASCADE
);



/* Renaming Competes relation to Team_Tournament */
CREATE TABLE Team_Tournament (
    team_id INTEGER,
    tournament_id INTEGER,
    placement INTEGER,
    PRIMARY KEY (team_id, tournament_id),
    FOREIGN KEY (tournament_id) REFERENCES Tournament(tournament_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (team_id) REFERENCES Team(team_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Renaming Contain relation to Match_Tournament*/
CREATE TABLE Match_Tournament (
    match_id INTEGER,
    tournament_id INTEGER NOT NULL,
    PRIMARY KEY (match_id),
    FOREIGN KEY (match_id) REFERENCES MATCHES(match_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tournament_id) REFERENCES Tournament(tournament_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Renaming ParticipatesIn relation to Match_Player*/
CREATE TABLE Match_Player (
    match_id INTEGER,
    player_id CHAR(50),
    agent_name CHAR(20) NOT NULL,
    kills INTEGER,
    deaths INTEGER,
    assists INTEGER,
    damage_dealt INTEGER,
    PRIMARY KEY (match_id, player_id),
    FOREIGN KEY (match_id) REFERENCES Matches(match_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (player_id) REFERENCES Player(player_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (agent_name) REFERENCES Agent(name)
);

/* Renaming ConsistsOf relation to Team_Player*/
CREATE TABLE Team_Player (
    team_id INTEGER,
    player_id CHAR(50),
    join_date DATETIME,
    PRIMARY KEY(team_id, player_id),
    FOREIGN KEY(team_id) REFERENCES Team(team_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(player_id) REFERENCES Player(player_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Renaming Has relation to Player_Mission*/
CREATE TABLE Player_Mission (
    player_id CHAR(50),
    mission_id INTEGER,
    start_date DATETIME,
    end_date DATETIME,
    PRIMARY KEY (player_id, mission_id),
    FOREIGN KEY (player_id) REFERENCES Player(player_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (mission_id) REFERENCES Mission(mission_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Cosmetic (
    cosmetic_id INTEGER,
    mission_id INTEGER,
    name CHAR(20),
    gun_type CHAR(20),
    PRIMARY KEY (cosmetic_id),
    FOREIGN KEY (mission_id) REFERENCES Mission(mission_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

/* Renaming Buys relation to Player_Cosmetic*/
CREATE TABLE Player_Cosmetic (
    player_id CHAR(50),
    cosmetic_id INTEGER,
    purchase_date DATETIME,
    PRIMARY KEY (player_id, cosmetic_id),
    FOREIGN KEY (player_id) REFERENCES Player(player_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (cosmetic_id) REFERENCES Cosmetic(cosmetic_id) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Renaming PlaysIn relation to Team_Match*/
CREATE TABLE Team_Match (
    team_id INTEGER,
    match_id INTEGER,
    rounds_won INTEGER,
    rounds_lost INTEGER,
    PRIMARY KEY (team_id, match_id),
    FOREIGN KEY (team_id) REFERENCES Team(team_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (match_id) REFERENCES Matches(match_id)
    ON DELETE CASCADE ON UPDATE CASCADE
);