const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, (err) => {
    if(err){
        console.log(err);
    }else {
        console.log(`db is connected`);
    }
})

const app = express();

app.use(helmet());
app.use(bodyParser.json());

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    height: String,
    abc: String,
    array: [String],
    dateAdded: {type:Date, default:Date.now}
})
const userModel = mongoose.model('Users', userSchema);

app.post('/api/newUser', (req, res)=>{
    const me = new userModel({
        name: 'Carlos',
        age: 28,
        height: "5 11",
        abc: `I'm an example that the key names don't matter`,
        array: ['mom', 'victor']
    })
    me.save()
})


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

