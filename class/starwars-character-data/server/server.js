const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');

massive('postgres://vgfyqcvpxkfzlz:920227f13a6710cefbb625125e75d2f694b5c02eb68323282c63acb62c074476@ec2-54-221-234-62.compute-1.amazonaws.com:5432/d2k5l6n3f4s4n4?ssl=true')
    .then( dbInstance => app.set('db', dbInstance) )
    .catch( err => {
        console.log( err );
    });
 
const app = express();

// const children = [
//     {
//         name: 'Luke',
//         title: 'New Hope',
//     },
//     {
//         name: 'Leah',
//         title: 'Princess of Alderaan',
//     },
// ];

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('HIIIIIIIII');
});

app.get('/children', (req, res)=>{
    const db = app.get('db');

    db.children.find()
        .then(children => {
            res.send(children);
        });
});

app.post('/child', (req, res)=>{
    const db = app.get('db');
    const postChild = req.body;
    postChild.parent_id = 1;

    db.children.insert(postChild)
        .then(child =>{
            res.send(child);
        });
});

app.delete('/child:id', (req, res)=> {
    const child = children.splice(req.params.id, 1)[0];
    
    res.send(child);
});

app.listen(8000, () =>{
    console.log('digity digity');
});



// setting up sql. 
// first npm i massive
// const massive = require('massive');
// massive('url');
// massive('postgres://vgfyqcvpxkfzlz:920227f13a6710cefbb625125e75d2f694b5c02eb68323282c63acb62c074476@ec2-54-221-234-62.compute-1.amazonaws.com:5432/d2k5l6n3f4s4n4?ssl=true');
// add ?ssl=true to the end of ^
// .then( dbInstance => app.set() ) because massive is a promise. its getting the instance of your data 
// and an error catch.

//make folder in root of project. database
// init.sql