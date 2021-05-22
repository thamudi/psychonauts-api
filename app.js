const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
