/**
 * sql-report
 * @author Guillermo Quinteros <gu.quinteros@gmail.com>
 */
require('dotenv').config();

const express =  require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useCreateIndex: true }).then(
    () => { console.log('Mongodb : connected'); },
    err => { console.log(err); }
);

app.use('/v1/connections', require('./src/routes/connection.routes'));

app.get('/', (req, res) => {
    res.json({ message : 'Welcome to SQL Report API' });
});

app.use((err, req, res) => {
    if (err.isServer) console.log(err);
    res.status(err.output.statusCode).json(err.output.payload);
});

module.exports = app;
