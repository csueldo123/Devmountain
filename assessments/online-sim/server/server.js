const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());





const port = process.env.PORT || 8000;

app.listen(port, () => { console.log(`Listening on port ${ port }`)});