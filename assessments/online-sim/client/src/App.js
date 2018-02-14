import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> DevWeather </h1>
        </header>
          
          <form>
            <input className="" placeholder="city"></input>
            <br></br>
            <select>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
              <option value="Utah">Utah</option>
              <option value="Nevada">Nevada</option>
            </select>
          </form>
        <br></br>
        <button>Get Weather</button>
        <h2>Enter City</h2>
        <Card />
        <h2>Recent Searches</h2>
      </div>
    );
  }
}

export default App;
