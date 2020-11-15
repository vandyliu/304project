# CPSC 304 Project

Download MySQL from https://dev.mysql.com/downloads/windows/installer/8.0.html
Create DB called `val`

If connection doesn't work:
type `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mocha'` into MySQL workbench
as seen [here](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server).

How to use.
1. `npm start` starts server and React website
    - if still broken try `npm run react-start` and `npm run server-start` in different terminals
2. `http:/localhost:3000` is where React website lives on
3. `http:/localhost:3001` is where backend/Express lives

## Backend
Create REST API routes by creating `.js` file in `/routes` folder.
Add route to `app.json` to use

## Frontend
Everything is in /client folder and we are using React
