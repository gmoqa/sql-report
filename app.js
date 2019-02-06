/**
 * sql-report
 * @author Guillermo Quinteros <gu.quinteros@gmail.com>
 */
require('dotenv').config();
const express =  require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();

if (process.env.ENV === 'dev') {
    app.use(morgan('dev'));
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const options = { useNewUrlParser: true, useCreateIndex: true };

mongoose.connect(process.env.MONGO, options).then(
    () => { console.log('Mongodb : connected'); },
    err => { console.log(err) }
);

app.use('/v1/connections', require('./src/routes/connection.routes'));

app.get('/boom', (req, res) => {
    res.json({ message : 'message' });
})

app.get('/', (req, res) => {
    res.json({
        message : "Welcome to SQL Report API",
        health : "Ok"
    });
});

app.use((err, req, res, next) => {
    if (err.isServer) {
        console.log(err);
    }
    return res.status(err.output.statusCode).json(err.output.payload);
});

module.exports = app;