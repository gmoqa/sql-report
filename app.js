/*
 * This file is part of the SQLReport
 * (c) fenec #devs <https://fenec.cl>
 * All rights reserved. No warranty, explicit or implicit, provided.
 * @author Guillermo Quinteros A. <gmoqa@fenec.cl>
 */
require('dotenv').config()
const express =  require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

app.use(helmet())
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

app.get('', (req, res) => {
    res.json({
        message : 'Welcome to SQL Report API',
        status : 'Ready!',
        documentation : process.env.documentation
    })
})

app.use('', require('./src/routes/security.routes'))
app.use('/connections', require('./src/routes/connection.routes'))

module.exports = app
