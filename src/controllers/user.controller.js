const User = require('../models/user.model')
const mailer = require('../utils/mailer.util')

const create = async (req, res) => {
    const { name, lastName, email, password } = req.body
    const token = require('crypto').randomBytes(16).toString('hex')
    const user = new User({
        name : name,
        lastName : lastName,
        email : email,
        token : token,
        password : password
    })
    await user.save()
    await mailer.sendActivationEmail(email, token)
    res.status(201).end()
}

const update = async () => {}
const remove = async () => {}
const profile = async () => {}

module.exports = { create, update, remove, profile }