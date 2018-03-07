const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require( 'dotenv' ).config();

const app = express();


massive( 'postgres://gdsssrtjzvqgdx:caa70bd41c30b5e2bd694ff8564b95ac1531e023601f498c092e3ce36789155a@ec2-54-83-37-223.compute-1.amazonaws.com:5432/dp6imruiji2ar?ssl=true')
.then( (db) =>{
    app.set('db', db);
})
app.use(cors());
app.use(bodyParser.json());


app.get('/api/bins/:id', (req, res)=>{
    const db = req.app.get('db');
    db.shelfie.find({shelf:req.params.id.toLowerCase()})
        .then((bins)=>{
            res.json(bins);
        })
        .catch((err)=>{
            console.err(err)
        })
})
app.put('/api/bins/:id', (req, res)=>{
    const db = req.app.get('db');
    db.shelfie.update({id:req.params.id, name:req.body.name, price:req.body.price})
        .then((bins)=>{
            res.json(bins);
        })
        .catch((err)=>{
            console.error(err)
        })
})
app.delete('/api/bins/:shelf:bins', (req, res)=>{
    const db=req.app.get('db');
    
})



const port = process.env.PORT || 5000;

app.listen(port, ()=>{console.log(`Listening on port ${ port }`)});