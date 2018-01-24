import React, { Component } from 'react';
import Header from './Header.js';
import logo from './logo.svg';
import './App.css';
const data = [1, 2, 3, 4, 5];

class App extends Component {
  render() {

    const thingsList = data.map(element => {
      return <div>Hi! { element } </div>
    });

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          { thingsList }
        </p>
        <Header />
      </div>
    );
  }
}

export default App;
