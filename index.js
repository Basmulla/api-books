require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({credentials: true, origin: '*'}));
app.use('/api', api);

app.listen(port, () => {console.log(`App listening on port ${process.env.PORT || 5000}`)});