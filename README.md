# CPSC 304 Project Team 101

![valorant gif](./screenshots/304proj.gif)

## Description
The domain of our application is in the world of online video games, particularly the new competitive video game: Valorant. It is for Valorant players, fans, tournament organizers, fanatics in general to easily find more information about their matches, and their account as well as other people’s accounts and matches in a single nice website. 

Our application will keep track of players, their team, the matches they play in and tournaments they join. This would include a player’s career statistics (e.g. a player would be able to see how they have performed over the past few weeks), and also information on the esports scene, so fanatics and analysts are able to follow tournaments more closely. Tournament organizers could easily display match information on streams and events. It can also help track a player's progress as they play over time to see how they improved.

## Pages
- / 
  - home page
- /Agents 
  - shows a list of the available agents in the game
- /Tournaments 
  - shows a list of all the tournaments that have happened
  - also shows list of organizers for the tournaments (Aggregation - Group By), their first tournament date, and the total amount of money the put into the prize pools for their tournaments
- /Team
  - shows list of teams in the database
  - can create a team here to add (Insert)
  - can also update a team here to change their wins, losses or name (Update)
  - can also filter to see which teams have played in which tournaments, or teams that have played in all tournaments (Division)
  - can also see each team's tournament history by clicking on the tournament history button (goes to /Team/:team_id)
- /Team/:team_id
  - view the team's tournament history (Join: Team, Team_Tournament)
- /Players
  - shows a list of players in the database
  - can select which columns you want to show by clicking a button (Projection)
  - can also filter players by rank, minimum kills, assists, death, average combat score (ACS), headshot percentage or a combination of them (Selection)
  - can also delete a player from the database here (Delete)
  - can view a player's match history (goes to /Players/:player_id)
  - there's also a button at the bottom where you can see the average ACS for each rank, where rach rank's average ACS must be greater than the average ACS across all ranks (Aggregation - Nested)
- /Players/player_id
  - view match history for the player (Join: Match_Player, Player table)
  - can filter by map, gamemode or agent 
  - can see average stats per map, gamemode or agent (Aggregation - Having)
    - only where count for the group is greater than 3 to rule out anomalies
- /Matches/
  - view all the matches
## Prerequisites:
- node v14
- MySQL
  - Download MySQL from https://dev.mysql.com/downloads/windows/installer/8.0.html
  - Create DB called `val`

If connection doesn't work:
type `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mocha'` into MySQL workbench
as seen [here](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server).

How to use.
1. `npm install` and `cd client && yarn install`
2. `npm start` starts server and React website
    - if still broken try `npm run react-start` and `npm run server-start` in different terminals
3. `http:/localhost:3000` is where React website lives on
4. `http:/localhost:3001` is where backend/Express lives

## Backend
- Backend is an express server with one REST API route (POST) which takes in the SQL queries

## Frontend
- Everything is in /client folder and we are using React
- Pages are in /client/pages folder
- Components are in /client/components folder
