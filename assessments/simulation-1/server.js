const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require( 'dotenv' ).config();

const app = express();


massive(process.env.CONNECTION_STRING)
.then( (db) =>{
    app.set('db', db);
    console.log('connected to DB');
})
app.use(cors());
app.use(bodyParser.json());

// Get get bins for Shelf(ID)
app.get('/api/bins/:id', (req, res)=>{
    const db = req.app.get('db');
    //find() gets ALL ROWS in table
    db.shelf.find( { shelf: req.params.id.toLowerCase() } )
        .then( (bins) =>{
            res.json(bins);
        })
        .catch((err)=>{
            console.err(err)
        })
})

// Get whats in the Bin to a specific Shelf
app.get('/api/bin/:shelf:bin', (req, res) =>{
        const db = req.app.get('db');
        //findOne() gets ONE SPECIFIC ROW in a db table
        db.shelf.findOne( { shelf: req.params.shelf.toLowerCase(), bin: req.params.bin } )
            .then( (bin) => {
                res.json(bin);
            })
            .catch( (err) =>{
                console.err(err);
            })
    })
// ADD OR EDIT A BIN
app.put('/api/bin/:id', (req, res)=>{
    const db = req.app.get('db');
    db.shelf.update( {id:req.params.id, name:req.body.name, price:req.body.price} )
        .then((bins)=>{
            res.json(bins);
        })
        .catch((err)=>{
            console.error(err)
        })
})
// DELETE A BIN
app.delete('/api/bin/:id', (req, res)=>{
    const db=req.app.get('db');
    db.shelf.update( {id:req.params.id, name:'', price:''} )
        .then((bins) =>{
            res.json(bins);
        })
        .catch((err)=>{
            console.error(err)
        })
})



const port = process.env.PORT || 5000;

app.listen(port, ()=>{console.log(`Listening on port ${ port }`)});