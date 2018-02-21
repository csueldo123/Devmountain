const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const children = [
    {
        name: 'Luke',
        title: 'New Hope',
    },
    {
        name: 'Leah',
        title: 'Princess of Alderaan',
    },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('HIIIIIIIII');
});

app.get('/children', (req, res)=>{
    res.send(children);
});

app.post('/child', (req, res)=>{
    const child = req.body;
    children.push(child);
    res.send(child);
});

app.delete('/child:id', (req, res)=> {
    const child = children.splice(req.params.id, 1)[0];
    
    res.send(child);
});

app.listen(8000, () =>{
    console.log('digity digity');
});

