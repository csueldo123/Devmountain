const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const massive = require('massive');
const session = require('express-session');
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(helmet());

let NumberOfUsers = 1;

//everything that your socket can do goes in io.on ON is to recieve info EMIT is to send
io.on(`connection`, (socket) =>{
    socket.on('Send Message', (msg) => {
        io.emit('Send Message', msg);
    });
  });


const port = process.env.PORT || 8080;
http.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})