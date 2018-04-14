import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Shelf from './components/Shelf/Shelf.js';
import Bin from './components/Bin/Bin.js';

import './App.css';

const App = () => {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/bins/:shelf" component={Shelf}/>
            <Route path="/bin/:shelf:bin" component={Bin}/>
            <Route path="/create/:shelf:bin" component={Bin}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
