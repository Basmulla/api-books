require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors({credentials: true, origin: '*'}));
app.use('https://book-directory-rest-api.herokuapp.com/', api);

app.listen(console.log(`App listening on book directory heroku api`));