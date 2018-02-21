import React, { Component } from 'react';
import Header from './Components/Header.jsx';
import Parent from './Components/Parent.jsx';
import Child from './Components/Child.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Star Wars Characters!" />
        <Parent name="Darth Vader"/>
        <Child title="Earth"/>
      </div>
    );
  }
}

export default App;
