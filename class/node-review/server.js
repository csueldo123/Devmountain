const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let data = [
    'car',
    'people',
    'stuff'
];

let newData;

app.get('/api/hello', (req, res, next) =>{
    console.log(req.params)
        res.json(data);
});

app.post('/api/create', (req, res, next) =>{
    newData = req.body.arr;
    res.json(newData);  
});

app.put('/api/update', (req, res, next) =>{
    data.push(req.body.string);
    res.json(data);  
});

app.delete('/api/delete', (req, res, next)=>{
    console.log(req.query)
    if(Number (req.query.id) === 1){
        //http://localhost:8000/api/delete?id=1 in postman, needs a query ? and id = 1 to delete the array.
        data = [];
        res.json(data);
    }
    else{
        //http://localhost:8000/api/delete in postmon first would simply return the data array.
        res.json(data);
    }
});

const port = process.env.PORT || 8000;

app.listen(port, ()=>{console.log(`Listening on port ${ port }`)});

//-------SET UP SERVER-------
//npm init (creates package.json)
//npm i express (allows us to set up backend) and require it
//npm i body-parser (backages into json)
//npm i cors
//create app and set it equal to express, invoking it. app is an obj with tons of methods.
//app.use() is a method and use cors().
//app.use() use bodyParser.json()
//set up port, process is a global variabe in node, env means enviornment variables, PORT 
//app.listen(port, () => {console.log(`listening on port ${port}`)}); console logs that the port is working.
//run either node server.js in terminal or nodemon 

//-------CRUD-------
//app.get('/'  , (req, res, next) =>{ }) 
//respond.json, respond.send   json is to send back obj, send is to send status
//request.query and request.params params need to be defined in app.get with / . query you dont need to define. 
// 


