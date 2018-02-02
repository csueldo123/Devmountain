const express = require('express');

const app = express();

const ponies = [
    'Shadowfax',
    'Seabiscuit',
    'Pegasus',
];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/team', (req, res)=>{
    res.send('Go Eagles!');
});

app.get('./ponies', (req, res)=>{
    res.send(ponies);
})

app.get('./ponies/:id', (req, res)=>{
    res.send(ponies[req.params.id]);
});

app.listen(8000, () =>{
    console.log('server is LIT');
});
