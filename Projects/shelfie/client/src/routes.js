import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home.js';
import ShelfA from './views/ShelfA.js';
import ShelfB from './views/ShelfB.js';
import ShelfC from './views/ShelfC.js';
import ShelfD from './views/ShelfD.js';
import Bin from './components/Bin.js';

export default (
    <Router>
        <Switch>
            <Route component={ Home } exact path="/" />
            <Route component={ ShelfA } path="/shelf-a" />
            <Route component={ ShelfB } path="/shelf-b" />
            <Route component={ ShelfC } path="/shelf-c" />
            <Route component={ ShelfD } path="/shelf-d" />
            <Route component={ Bin } path="/bin1" />
        </Switch>
    </Router>
  )