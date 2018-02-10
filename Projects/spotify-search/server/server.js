const express = require('express');
const request = require('request');
const querystring = require('querystring');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use( cors() );
app.use( bodyParser.json() );

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
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
})

//THIS IS THE END OF THE AUTHORIZATION PROCESS
//---------------------------------------------------------------------------------------

const port = process.env.PORT || 8000

app.listen(port, () => { console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)});