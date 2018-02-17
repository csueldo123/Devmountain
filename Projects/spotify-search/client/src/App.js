import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
// queryString is used in componentDidMount. Parse a query string into an object. Leading ? or # are ignored, so you can pass location.search or location.hash directly. .parse(string, [options])
import queryString from "query-string";
import Profile from './Components/Profile.jsx';
import Gallery from './Components/Gallery.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      serverData: {} ,
      query: '',
      artist: null,
      tracks: [],
      login : false
    }
    this.search = this.search.bind(this);
  }
  
  
  search(){
    // console.log('this.state', this.state);
    // const BASE_URL = 'https://api.spotify.com/v1/search?';
    // let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    // const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    // console.log('FETCH_URL', FETCH_URL);
    //grabs the token given to us by spotify and parses it into an object.
    // let parsed = queryString.parse( window.location.search );
    //console.log( parsed ) = access_token: "Bdjkfsoeijlkaolkj323"
    // let accessToken = parsed.access_token;
     //conole.log( accessToken ) = Bdjkfsoeijlkaolkj323
    //  fetch(FETCH_URL, {
    //    headers: {
    //      'Authorization': 'Bearer ' + this.state.accessToken 
    //    }
    //  })
    //  .then(res => res.json())
    //  .then(json => {
    //    const artist = json.artists.items[0];
    //    console.log('artist', artist)
    //    this.setState({artist});

    //    //after we get the artist back and we have their ID we can call a request to get the top albums using spotify route and the id.
    //    FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
    //    fetch(FETCH_URL, {
    //      headers:{
    //       'Authorization': 'Bearer ' + this.state.accessToken 
    //      }
    //    })
    //    .then(res => res.json())
    //    .then(json => {
    //      console.log('artist top tracks:', json);
    //      const tracks = json.tracks;
    //      this.setState({tracks});
    //    })
    //   });
    // axios
    //   .get('/api/artist?artist='+ this.state.query, )
      // .then((res) =>{
      //   console.log(res);
      // })
      //debuger
    axios
      .get(`/search/?query=${this.state.query}`)
      .then((res) => {
        //debugger
        console.log(res)
        this.setState({
          artist: res.data.artist,
          tracks: res.data.tracks,
        })
      })

  }

  logout(){
    this.setState({
      serverData: {}
    })
  }

  componentDidMount(){
    //grabs the token given to us by spotify and parses it into an object.
    let parsed = queryString.parse( window.location.search );
    console.log( parsed )
    let accessToken = parsed.access_token;
     console.log( accessToken )
     //if there is no access token, dont do anything else. user has to login
    if(!accessToken){
      return;
    }
  
     fetch( 'https://api.spotify.com/v1/me', {
       headers: {
         'Authorization': 'Bearer ' + accessToken 
        }
     })
     .then(res => res.json())
     //.then( data => console.log(data)) shows all the my profile info. 
     .then( data => this.setState({
       serverData: {
        user: {
          name: data.display_name
       }}
     }))
     
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">

      {/* -----LOG IN PART 1-----
      we use { this.state.serverData.user ? : <button> }  to check if this.state.serverData has data in it. when you first go to the site it will not becuase we arent logged in yet. if not ? : do whatever is after the : we wrapped all our jsk in a div container so that none of it shows and just a button which is after the : */}

      { this.state.serverData.user ?
      <div>
        <div className="header-container">

            <div className="App-title">Node Music</div>
            
            <div className="logged-in">
            Logged in as {this.state.serverData.user.name}
            </div>
            {console.log('user', this.state.serverData.user)}
            <button className="log-out" onClick={ () => this.logout() }>logout</button>
           
            <FormGroup className="form-group">
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
                }
              }
                />

                <InputGroup.Addon onClick={ () => this.search() }>
                  <Glyphicon glyph="search"></Glyphicon>
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
        </div>
          { 
            this.state.artist !==null ?
          <div className="profile-container">
            <Profile 
              artist={this.state.artist}
            />
            <Gallery 
              tracks={this.state.tracks}
            />
          </div>
         :  <div></div>
        }


          {/* -------LOG IN PART 2 -------
          WHEN YOU FIRST GO TO WEBPAGE, BECAUSE THERE IS NO serverData IN STATE. there will be a button here that when onClick is activated it will redirect the user to http://localhost:8000/login which is our backend get request to get the the log in through spotity */}

      </div> 
      
      : 
      <div className="log-in-container">
        <button onClick={()=> window.location= 'http://localhost:8000/login'}>
          Please Log In
        </button>
      </div>
          
      }

      </div>
    );
  }
}

export default App;
