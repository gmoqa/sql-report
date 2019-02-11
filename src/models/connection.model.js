const mongoose = require('mongoose')
const Schema = mongoose.Schema

const connectionSchema = new Schema({
    type: {
        type: String,
        enum: ['mysql', 'pgsql', 'sqlite'],
        required: true
    },
    ssh : {
        user : { type:String },
        host: { type: String },
        port : { type: Number },
        key: { type: String },
    },
    database: { type:String },
    user: { type:String },
    password: { type: String },
    host: { type: String },
    slug: { type: String },
    name: { type: String },
    created: { type: Date, default: Date.now }
})

const Connection = mongoose.model('Connection', connectionSchema)

module.exports = Connection
