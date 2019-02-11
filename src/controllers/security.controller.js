const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

register = async (req, res) => {
    const { username, email, password } = req.body

    const foundUser = await User.findOne({ email })

    if (foundUser) {
        return res.status(403).send({ error: 'Email is already in use' })
    }

    const user = new User({
        username : username,
        email : email,
        password : bcrypt.hashSync(password, 8)
    })
    await user.save()
    res.status(201).end()
}

const login = async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) {
        return res.status(404).end()
    }

    const isValid = bcrypt.compareSync(req.body.password, user.password)

    if (!isValid) {
        return res.status(401).send({ auth: false, token: null })
    }

    const token = jwt.sign({
        id : user._id,
        email : user.email,
        username : user.username
    }, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRATION
    })

    res.status(200).send({ token })
}

const me = async (req, res) => {
    const user = await User
        .findById(req.user.id)
        .select('-__v')
        .select('-isVerified')
        .select('-password')

    if (!user) {
        res.status(404).end()
    }
    res.json(user)
}

module.exports = { register, login, me }
