const mongoose = require('mongoose')
const Schema = mongoose.Schema

const querySchema = new Schema({
    name: { type:String },
    slug: { type:String },
    body: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    connection: { type: Schema.Types.ObjectId, ref: 'Connection' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Query = mongoose.model('Query', querySchema)

module.exports = Query
