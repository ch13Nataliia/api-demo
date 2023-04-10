
const express = require('express');

const app = express();


require('./db');
require('./middleware')(app);
require('./routes')(app);
module.exports = app;
