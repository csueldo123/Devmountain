import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
import Wizard from './components/Wizard.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/wizard/:id" component={Wizard}/>
            <Route path="/" component={Login}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
