const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require( 'dotenv' ).config();
const app = express();

massive( 'postgres://gdsssrtjzvqgdx:caa70bd41c30b5e2bd694ff8564b95ac1531e023601f498c092e3ce36789155a@ec2-54-83-37-223.compute-1.amazonaws.com:5432/dp6imruiji2ar?ssl=true' )
    .then( ( dbInstance ) =>{
        app.set('db', dbInstance);
    })
app.get('/api/getbins/:id', (req, res)=>{
    const db = req.app.get('db')
    db.shelf.find({
        shelf: req.params.id
    })
    .then(bins =>{
        res.send(bins);
    })
})

app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 8080;

app.listen(port, ()=>{console.log(`Listening on port ${ port }`)});

