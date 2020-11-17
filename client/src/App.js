import './App.css';
import React, { Component } from 'react';

import Agents from './pages/Agents';
import Tournaments from './pages/Tournaments';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Matches from './pages/Matches';

class App extends Component {
  state = { page: "HOME" };

  render() {
      return (
        <div className="App">
            <div>
                <button onClick={() => (this.setState({ page: "AGENTS" }))}>AGENTS</button>
                <button onClick={() => (this.setState({ page: "TOURNAMENTS" }))}>TOURNAMENTS</button>
                <button onClick={() => (this.setState({ page: "TEAMS" }))}>TEAMS</button>
                <button onClick={() => (this.setState({ page: "PLAYERS" }))}>PLAYERS</button>
                <button onClick={() => (this.setState({ page: "MATCHES" }))}>MATCHES</button>
            </div>
            {this.state.page === "HOME" && (
                <h1>VALORANT!</h1>
            )}
            {this.state.page === "AGENTS" && (
                <Agents />
            )}
            {this.state.page === "TOURNAMENTS" && (
                <Tournaments />
            )}
            {this.state.page === "TEAMS" && (
                <Teams />
            )}
            {this.state.page === "PLAYERS" && (
                <Players />
            )}
            {this.state.page === "MATCHES" && (
                <Matches />
            )}
        </div>
        );
    }
}

export default App;
