import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = { agents: [], tournaments: [], players: [], matches: [], teams: []};

  componentDidMount() {
    fetch('/sql', { 
        method: "POST", 
        body: JSON.stringify({ sql: "SELECT * FROM Agent" }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(agents => this.setState({ ...this.state, agents }));

    fetch('/sql', { 
        method: "POST", 
        body: JSON.stringify({ sql: "SELECT * FROM Tournament" }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(tournaments => this.setState({ ...this.state, tournaments }));

    fetch('/sql', { 
        method: "POST", 
        body: JSON.stringify({ sql: "SELECT * FROM Player" }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(players => this.setState({ ...this.state, players }));

    fetch('/sql', { 
        method: "POST", 
        body: JSON.stringify({ sql: "SELECT * FROM Matches" }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(matches => this.setState({ ...this.state, matches }));

    fetch('/sql', { 
        method: "POST", 
        body: JSON.stringify({ sql: "SELECT * FROM Team" }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(teams => this.setState({ ...this.state, teams }));
  }

  render() {
      return (
        <div className="App">
        <h1>Agents</h1>
            <ul>
                {this.state.agents.map(agent =>
                <li key={agent.name}>{agent.name}: {agent.type}</li>)}
            </ul>
        <h1>Tournaments</h1>
            <ul>
                {this.state.tournaments.map(t =>
                <li key={t.name}>{t.name}  - {t.organizer} - ${t.prize_pool}</li>)}
            </ul>
        <h1>Players</h1>
            <ul>
                {this.state.players.map(p =>
                <li key={p.player_id}>{p.player_id}  - {p.p_rank}</li>)}
            </ul>
        <h1>Matches</h1>
            <ul>
                {this.state.matches.map(m =>
                <li key={m.match_id}>{m.map}  - {m.gamemode}</li>)}
            </ul>
        <h1>Teams</h1>
            <ul>
                {this.state.teams.map(t =>
                <li key={t.name}>{t.name ?? "<No name>"}</li>)}
            </ul>
        </div>
        );
    }
}

export default App;
