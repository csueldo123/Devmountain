const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const spotifyService = require('./spotifyService');

const app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.get('/api/artist', (req, res) =>{
    spotifyService.getArtist(req.query.artist)
        .then(artist =>{
            res.send(artist);
        });
})

const port = process.env.PORT || 8000;

app.listen( port, () =>{ console.log( `Listening on port ${ port }` )});