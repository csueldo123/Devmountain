import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: null,
    }
  }
  componentWillMount(){
    const URL = 'https://swapi.co/api/people/1'

    axios.get(URL)
      .then((res) => {
        this.setState({
          data: res.data,
        })
      })
      .catch((err) =>{
        console.log(err);
      })
  }
  render() {
    console.log(this.state);
    const loading = !this.state.data ? 'Loading...': '';
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">hi</h1>
        </header>
        { loading }
          {
            //&& conditional rendering, && means if the statement before is true render the stuff after
            this.state.data &&
            <div>
              <h1>Name:{this.state.data.name}</h1>
              <p>Gender:</p>
              <p>Hair:</p>
              <p>Height:</p>
              <p>Skin:</p>
            </div>
          }
      </div>
    );
  }
}

export default App;
