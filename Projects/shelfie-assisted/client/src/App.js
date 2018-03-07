import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Shelf from './components/Shelf.js';
import Bin from './components/Bin.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            {/* <Route path="/" component={Header}/> */}
            <Route path="/bins/:shelf" component={Shelf}/>
            <Route path="/bin/:shelf:bin" component={Bin}/>
            <Route path="/bin/create/:shelf:bin" component={Bin}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
