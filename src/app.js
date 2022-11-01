const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/users'));

module.exports = app;