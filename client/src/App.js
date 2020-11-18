import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Agents from './pages/Agents';
import Tournaments from './pages/Tournaments';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Matches from './pages/Matches';



class App extends Component {
  state = { page: "HOME" };

  render() {
    return (
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/Agents" component={ Agents } />
            <Route path="/Tournaments" component={ Tournaments } />
            <Route path="/Teams" component={ Teams } />
            <Route path="/Players" component={ Players } />
            <Route path="/Matches" component={ Matches } />
          </Switch>
        </Router>
      );
    }
}

export default App;
