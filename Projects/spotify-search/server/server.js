const express = require('express');
const request = require('request');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const cors = require('cors');
const artistService = require('./artistService');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use( cors() );
app.use( bodyParser.json() );

let access_token;

const BASE_URL = 'https://api.spotify.com/v1/search?';
const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
//-----------------------------------------------------------------------------------------
// ------THIS IS ALL THE CODE FOR THE LOGIN AUTHORIZATION TOKENS------

//this is a variable redirect_uri that has the call back URI that we told spotify was ok in our Spotify Developer Account. It is requiered. IT IS THE ADDRESS TO REDIRECT TO AFTER AUTHENTICATION SUCESS OR FALIURE FROM SPOTIFY/LOGIN. 
let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8000/callback'

//Here we have the url route /login after localhost:8000/login. Its a GET Request with a response that REDIRECT to url authorize spotify. not sure what querystring.stringify does, but it is an object that sends our spotify developer
app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email',
      redirect_uri
    }))
})

//we now have the authorization token in the headers.

app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'

    res.redirect(uri + '?access_token=' + access_token)
  })
})

//THIS IS THE END OF THE AUTHORIZATION PROCESS
//---------------------------------------------------------------------------------------

// app.get('api/artist', (req, res)=>{
//   artistService.getArtist(req.query.artist, req.query.accessToken)
//     .then(artist =>{
//       res.send(artist)
//     })
// })

app.get(`/search`, (request, response) => { 
  let data = {};
  let FETCH_URL = `${BASE_URL}q=${request.query.query}&type=artist&limit=1`;

  axios({
    method: 'get',
    url: FETCH_URL,
    headers: {
      'Authorization': 'Bearer ' + access_token 
    }
  })
  .then(res => {
    console.log(res)
    const artist = res.data.artists.items[0];
    console.log('artist', artist)
    data.artist = artist;

    //after we get the artist back and we have their ID we can call a request to get the top albums using spotify route and the id.
    axios({
      method: 'get',
      url: `${ALBUM_URL}${artist.id}/top-tracks?country=US&`,
      headers:{
        'Authorization': 'Bearer ' + access_token
      }
    })
    .then(res => {
      const tracks = res.data.tracks;
      data.tracks = tracks;
      response.send(data);
    })
   });
})

const port = process.env.PORT || 8000

app.listen(port, () => { console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)})