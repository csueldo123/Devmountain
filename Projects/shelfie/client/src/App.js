import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { routes } 
      </div>
    );
  }
}

export default App;
