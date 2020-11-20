# CPSC 304 Project Team 101

![valorant gif](./screenshots/304proj.gif)

## Description
The domain of our application is in the world of online video games, particularly the new competitive video game: Valorant. It is for Valorant players, fans, tournament organizers, fanatics in general to easily find more information about their matches, and their account as well as other people’s accounts and matches in a single nice website. 

Our application will keep track of players, their team, the matches they play in and tournaments they join. This would include a player’s career statistics (e.g. a player would be able to see how they have performed over the past few weeks), and also information on the esports scene, so fanatics and analysts are able to follow tournaments more closely. Tournament organizers could easily display match information on streams and events. It can also help track a player's progress as they play over time to see how they improved.

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
