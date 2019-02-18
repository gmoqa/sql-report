const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name : { type: String },
    lastName : { type: String },
    email : { type: String, lowercase: true },
    password: { type:String },
    verified: { type: Boolean, default: false },
    token: { type: String },
    created: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)

module.exports = User