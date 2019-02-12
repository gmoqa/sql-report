/*
 * This file is part of the SQLReport
 *
 * (c) fenec #devs <https://www.fenec.cl>
 * All rights reserved. No warranty, explicit or implicit, provided.
 * @author Guillermo Quinteros <gu.quinteros@gmail.com>
 *
 */
require('dotenv').config()
const express =  require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(parser.json())

const options = {
    useNewUrlParser: true,
    useCreateIndex: true
}

mongoose.connect(process.env.MONGO, options ).then(
    () => { console.log('Mongodb : connected') },
    err => { console.log(err) }
)

app.use('/', require('./src/routes/security.routes'))
app.use('/', require('./src/controllers/default.controller'))
app.use('/connections', require('./src/routes/connection.routes'))

module.exports = app
