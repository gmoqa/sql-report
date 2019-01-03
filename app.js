/**
 * sql-report
 * @author Guillermo Quinteros <gu.quinteros@gmail.com>
 */
require('dotenv').config();
const express =  require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const config = require('./config');

if (config.env === 'dev') {
    app.use(morgan('dev'));


const bodyParser = require('body-parser');
app.use(bodyParser.json());

mongoose.(config.mongo, { useNewUrlParser: true });


mongoose.set('useCreateIndex', true);

app.use('/v1/connections', require('./src/routes/connection.routes'));

app.get('/', (req, res) => {
    res.json({
        message : "Welcome to SQL Report API",
        health : "Ok"
    });
});

app.use((err, req, res, next) => {
    console.log('HANDLED ERROR');
    if (err.isServer) {
        console.log(err);
    }
    return res.status(err.output.statusCode).json(err.output.payload);
});

module.exports = app;