import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {'agents': []};

  componentDidMount() {
    fetch('/sql', { 
        method: "POST", 
        body: JSON.stringify({ sql: "SELECT * FROM Agent" }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(agents => this.setState({agents}));
  }

  render() {
      return (
        <div className="App">
        <h1>Agents</h1>
            <ul>
                {this.state.agents.map(agent =>
                <li key={agent.name}>{agent.name}: {agent.type}</li>)}
            </ul>
        </div>
        );
    }
}

export default App;
