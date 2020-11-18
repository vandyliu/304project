INSERT INTO AGENT
VALUES ("Jett", "Duelist"),
("Phoenix", "Duelist"),
("Reyna", "Duelist"),
("Raze", "Duelist"),
("Omen", "Controller"),
("Brimstone", "Controller"),
("Viper", "Controller"),
("Breach", "Initiator"),
("Sova", "Initiator"),
("Skye", "Initiator"),
("Cypher", "Sentinel"),
("Killjoy", "Sentinel"),
("Sage", "Sentinel");

INSERT INTO Tournament
VALUES (00001, "First Strike", "Riot Games", "Single-elimination", 100000, "2020-12-03 12:00:00", "2020-12-06 12:00:00"),
(00002, "NSG x Renegades Invitational", "Nerd Street Gamers", "Double-elimination", 10000, "2020-10-17 12:00:00", "2020-10-18 12:00:00"),
(00003, "FaZe Clan Invitational", "FaZe Clan", "Double-elimination", 50000, "2020-08-06 12:00:00", "2020-08-09 12:00:00"),
(00004, "G2 Esports Invitational", "G2 Esports", "Double-elimination", 15000, "2020-06-19 12:00:00", "2020-06-21 12:00:00"),
(00005, "Pop Flash", "B Site Inc.", "Double-elimination", 50000, "2020-08-26 12:00:00", "2020-08-30 12:00:00");

INSERT INTO Team
VALUES (00001, "G2", 1, 0),
(00002, "TSM", 12, 2),
(00003, "Sentinels", 13, 1),
(00004, "Team Envy", 5, 1),
(00005, "Cloud9", 12, 6);

INSERT INTO Matches
VALUES (00001, "Bind", "Competitive", "2020-10-01 23:00:00", "2020-10-01 23:45:00"),
(00002, "Ascent", "Competitive", "2020-11-01 09:00:00", "2020-11-01 10:00:00"),
(00003, "Icebox", "Unrated", "2020-08-13 09:00:00", "2020-08-13 10:00:00"),
(00004, "Split", "Unrated", "2020-10-10 08:00:00", "2020-10-10 09:00:00"),
(00005, "Haven", "Deathmatch", "2020-09-21 09:00:00", "2020-09-21 10:00:00"),
(00006, "Icebox", "Deathmatch", "2020-05-05 09:00:00", "2020-05-05 10:00:00"),
(00007, "Bind", "Spike Rush", "2020-08-21 09:00:00", "2020-08-21 10:00:00"),
(00008, "Ascent", "Spike Rush", "2020-06-05 09:00:00", "2020-06-05 10:00:00"),
(00009, "Haven", "Custom", "2020-10-18 07:00:00", "2020-10-18 08:00:00"),
(00010, "Split", "Custom", "2020-10-18 08:00:00", "2020-10-18 09:00:00"),
(00011, "Bind", "Custom", "2020-10-18 09:00:00", "2020-10-18 10:00:00"),
(00012, "Ascent", "Custom", "2020-08-06 07:00:00", "2020-08-06 08:00:00"),
(00013, "Split", "Custom", "2020-08-06 08:00:00", "2020-08-06 09:00:00"),
(00014, "Bind", "Custom", "2020-08-06 09:00:00", "2020-08-06 10:00:00"),
(00015, "Haven", "Custom", "2020-06-19 07:00:00", "2020-06-19 08:00:00"),
(00016, "Ascent", "Custom", "2020-06-19 08:00:00", "2020-06-19 09:00:00"),
(00017, "Split", "Custom", "2020-06-19 09:00:00", "2020-06-19 10:00:00"),
(00018, "Bind", "Custom", "2020-08-26 07:00:00", "2020-08-26 08:00:00"),
(00019, "Haven", "Custom", "2020-08-26 08:00:00", "2020-08-26 09:00:00"),
(00020, "Ascent", "Competitive", "2020-08-26 09:00:00", "2020-08-26 10:00:00"),
(00021, "Haven", "Competitive", "2020-06-19 07:00:00", "2020-06-19 08:00:00"),
(00022, "Haven", "Competitive", "2020-06-19 08:00:00", "2020-06-19 09:00:00"),
(00023, "Split", "Competitive", "2020-06-19 09:00:00", "2020-06-19 10:00:00"),
(00024, "Bind", "Unrated", "2020-08-26 07:00:00", "2020-08-26 08:00:00"),
(00025, "Icebox", "Unrated", "2020-08-26 08:00:00", "2020-08-26 09:00:00"),
(00026, "Icebox", "Competitive", "2020-08-26 09:00:00", "2020-08-26 10:00:00");

INSERT INTO Player
VALUES ("BigEdKnorr#572", "Diamond 2", 2015, 185, 973, 18),
("SmallEdKnorr#572", "Gold 2", 111, 111, 111, 11),
("TenZ#000", "Bronze 3", 55, 5, 200, 9),
("Arrrrr#123", "Radiant", 1337, 72, 593, 23),
("gamer#123", "Iron 1", 12, 3, 46, 5),
("TSM Wardell#000", "Radiant", 1500, 1200, 800, 22),
("TSM Drone#000", "Immortal 3", 1887, 1533, 1600, 23),
("TSM Subroza#000", "Diamond 2", 1000, 131, 102, 17),
("TSM Hazed#000", "Diamond 1", 133, 31, 122, 15),
("TSM Cutler#000", "Diamond 3", 588, 111, 233, 16),
("SEN Sinatraa#000", "Radiant", 133, 131, 135, 18),
("SEN Dapr#000", "Immortal 1", 123, 111, 415, 23),
("SEN Shazam#000", "Gold 2", 111, 11, 113, 25),
("SEN Sick#000", "Immortal 2", 2555, 1344, 1333, 20),
("SEN Zombs#000", "Radiant", 1333, 809, 978, 13),
("NV Food#000", "Radiant", 144, 133, 70, 22),
("NV Crashies#000", "Bronze 3", 1232, 679, 444, 26),
("NV FNS#000", "Silver 1", 900, 907, 900, 24),
("NV Kaboose#000", "Diamond 2", 1509, 1333, 1555, 23),
("NV Mummay#000", "Immortal 3", 1223, 1355, 655, 17),
("C9 TenZ#000", "Radiant", 9000, 4555, 2455, 30),
("C9 Relyks#000", "Platinum 2", 76, 23, 13, 25),
("C9 Shinobi#000", "Radiant", 131, 56, 178, 16),
("C9 Vice#000", "Radiant", 566, 655, 544, 20),
("C9 Mitch#000", "Platinum 3", 543, 132, 131, 8);

INSERT INTO Ability
VALUES ("Tailwind", "Jett", "Primary", null, null, null),
("Updraft", "Jett", "Secondary", null, null, 2),
("Cloudburst", "Jett", "Tertiary", null, null, 3),
("Blade Storm", "Jett", "Ultimate", 50, null, null);

INSERT INTO Team_Tournament
VALUES (00002, 00001, 1),
(00003, 00001, 2),
(00004, 00001, 3),
(00005, 00001, 4),
(00002, 00002, 2),
(00003, 00002, 1),
(00004, 00002, 3),
(00005, 00002, 4),
(00002, 00003, 1),
(00003, 00003, 3),
(00004, 00003, 2),
(00005, 00003, 4),
(00002, 00004, 4),
(00003, 00004, 2),
(00004, 00004, 1),
(00005, 00004, 3);

INSERT INTO Match_Tournament
VALUES (00009, 00002),
(00010, 00002),
(00011, 00002),
(00012, 00003),
(00013, 00003),
(00014, 00003),
(00015, 00004),
(00016, 00004),
(00017, 00004),
(00018, 00005),
(00019, 00005),
(00020, 00005);

INSERT INTO Team_Player
VALUES (00001, "BigEdKnorr#572", "2020-10-01 23:00:00"),
(00001, "SmallEdKnorr#572", "2020-10-01 23:00:00"),
(00001, "TenZ#000", "2020-10-01 23:00:00"),
(00001, "Arrrrr#123", "2020-10-01 23:00:00"),
(00001, "gamer#123", "2020-10-01 23:00:00"),
(00002, "TSM Wardell#000", "2020-07-01 12:00:00"),
(00002, "TSM Drone#000", "2020-07-01 12:00:00"),
(00002, "TSM Subroza#000", "2020-07-01 12:00:00"),
(00002, "TSM Hazed#000", "2020-07-01 12:00:00"),
(00002, "TSM Cutler#000", "2020-07-01 12:00:00"),
(00003, "SEN Sinatraa#000", "2020-08-01 12:00:00"),
(00003, "SEN Dapr#000", "2020-08-01 12:00:00"),
(00003, "SEN Shazam#000", "2020-08-01 12:00:00"),
(00003, "SEN Sick#000", "2020-08-01 12:00:00"),
(00003, "SEN Zombs#000", "2020-08-01 12:00:00"),
(00004, "NV Food#000", "2020-09-01 12:00:00"),
(00004, "NV Crashies#000", "2020-09-01 12:00:00"),
(00004, "NV FNS#000", "2020-09-01 12:00:00"),
(00004, "NV Kaboose#000", "2020-09-01 12:00:00"),
(00004, "NV Mummay#000", "2020-09-01 12:00:00"),
(00005, "C9 TenZ#000", "2020-08-12 12:00:00"),
(00005, "C9 Relyks#000", "2020-08-12 12:00:00"),
(00005, "C9 Shinobi#000", "2020-08-12 12:00:00"),
(00005, "C9 Vice#000", "2020-08-12 12:00:00"),
(00005, "C9 Mitch#000", "2020-08-12 12:00:00");

INSERT INTO Match_Player
VALUES (00001, "C9 TenZ#000", "Jett", 5, 20, 10, 5421),
(00001, "C9 Relyks#000", "Raze", 20, 16, 2, 13213),
(00001, "C9 Shinobi#000", "Omen", 0, 22, 6, 725),
(00001, "C9 Vice#000", "Sova", 16, 15, 18, 9834),
(00001, "C9 Mitch#000", "Killjoy", 9, 17, 5, 6214),
(00001, "NV Crashies#000", "Omen", 13, 19, 9, 6221),
(00001, "NV Kaboose#000", "Phoenix", 6, 18, 10, 5421),
(00001, "NV Mummay#000", "Jett", 15, 15, 3, 8521),
(00001, "NV FNS#000", "Cypher", 4, 20, 0, 2421),
(00001, "NV Food#000", "Reyna", 23, 17, 7, 12321),
(00002, "gamer#123", "Jett", 5, 20, 10, 5421),
(00002, "SmallEdKnorr#572", "Raze", 20, 16, 2, 13213),
(00002, "Arrrrr#123", "Omen", 0, 22, 6, 725),
(00002, "TenZ#000", "Sova", 16, 15, 18, 9834),
(00002, "BigEdKnorr#572", "Killjoy", 9, 17, 5, 6214),
(00002, "TSM Wardell#000", "Omen", 13, 19, 9, 6221),
(00002, "TSM Drone#000", "Phoenix", 6, 18, 10, 5421),
(00002, "TSM Subroza#000", "Jett", 15, 15, 3, 8521),
(00002, "TSM Hazed#000", "Cypher", 4, 20, 0, 2421),
(00002, "TSM Cutler#000", "Reyna", 23, 17, 7, 12321),
(00003, "BigEdKnorr#572", "Killjoy", 11, 12, 5, 133),
(00004, "BigEdKnorr#572", "Killjoy", 16, 10, 3, 1555),
(00005, "BigEdKnorr#572", "Killjoy", 8, 17, 2, 333),
(00006, "BigEdKnorr#572", "Killjoy", 9, 17, 14, 123),
(00007, "BigEdKnorr#572", "Reyna", 5, 17, 5, 123),
(00008, "BigEdKnorr#572", "Killjoy", 23, 3, 14, 223),
(00009, "BigEdKnorr#572", "Killjoy", 33, 14, 5, 6214),
(00010, "BigEdKnorr#572", "Killjoy", 12, 12, 12, 144),
(00011, "BigEdKnorr#572", "Killjoy", 12, 14, 2, 156),
(00012, "BigEdKnorr#572", "Killjoy", 34, 13, 28, 556),
(00013, "BigEdKnorr#572", "Killjoy", 36, 13, 2, 144),
(00014, "BigEdKnorr#572", "Reyna", 1, 5, 5, 90),
(00015, "BigEdKnorr#572", "Killjoy", 13, 2, 2, 133),
(00016, "BigEdKnorr#572", "Killjoy", 40, 3, 36, 9000),
(00017, "BigEdKnorr#572", "Killjoy", 18, 12, 1, 1223),
(00018, "BigEdKnorr#572", "Reyna", 4, 14, 14, 122),
(00019, "BigEdKnorr#572", "Killjoy", 6, 25, 24, 1333),
(00020, "BigEdKnorr#572", "Reyna", 38, 5, 33, 1323),
(00021, "BigEdKnorr#572", "Brimstone", 11, 2, 7, 88),
(00022, "BigEdKnorr#572", "Reyna", 50, 2, 2, 9000),
(00023, "BigEdKnorr#572", "Sage", 13, 13, 13, 1331),
(00024, "BigEdKnorr#572", "Reyna", 16, 16, 16, 1666),
(00025, "BigEdKnorr#572", "Sage", 18, 17, 5, 1233),
(00026, "BigEdKnorr#572", "Reyna", 13, 12, 12, 500);
