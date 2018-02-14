const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let cities = [];
let data = {};

const apiKey = '2fe9a294e3d840e6';
// const BASE_URL = `http://api.wunderground.com/api/${apiKey}/forecast10day/q/${state}/${city}.json`;

app.get(`/search`, (req, res) => {
    axios
        .get(`http://api.wunderground.com/api/${apiKey}/forecast10day/q/${req.query.state}/${req.query.city}.json`)
        .then(response => {
            cities.unshift(req.query.city)
            if(cities.length > 3){
                cities.pop()
            }
            data.cities = cities
            data.response = response.data.forecast.simpleforecast.forecastday;
           res.json(data);
        })
        .catch( error =>{
            error;
        })
});

//http://localhost:8000/search/?state=utah&city=orem in front end to get(/search) end point


const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`Listening on port ${ port }`)});