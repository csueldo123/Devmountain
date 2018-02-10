import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import Profile from './Components/Profile.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }
  
  
  search(){
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    console.log('FETCH_URL', FETCH_URL);
    axios
      .get('/api/artist?artist='+ this.state.query)
      // .then((res) =>{
      //   console.log(res);
      // })
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Node Music</div>
        <FormGroup>
          <InputGroup>

            <FormControl
            type="text"
            placeholder="Search for an Artist"
            value={ this.state.query }
            onChange={ event => { this.setState({ query: event.target.value })}}
            onKeyPress = { event => {
              if (event.key === 'Enter'){
                this.search()
              }
            }}
            />

            <InputGroup.Addon onClick={ () => this.search() }>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

       <Profile />
        <div className="Gallery">Gallery of Albums</div>
      </div>
    );
  }
}

export default App;
