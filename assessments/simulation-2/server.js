const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
require('dotenv').config()

const app = express();
massive( process.env.CONNECTION_STRING )
    .then( (dbInstance) => {
        console.log('this server is seeing the DB');
        app.set('db', dbInstance);
    } )
    .catch( err => {
        console.ward('Failed to connect: ');
        console.log(err);
    } );

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, ()=>{console.log(`Listening on port ${ port }`)});