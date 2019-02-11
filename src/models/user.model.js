const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email : { type: String, lowercase: true },
    password: { type:String },
    username: { type: String },
    isVerified: { type: Boolean, default: false },
    actionToken: { type: String },
    created: { type: Date, default: Date.now }
})

const User = mongoose.model('User', userSchema)

module.exports = User