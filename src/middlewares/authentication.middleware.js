'use strict'
const jwt = require('jsonwebtoken')

const authentication = async (req, res, next) => {
    const token = req.headers['authorization']
    const msg = { auth: false, message: 'No token provided.' }
    if (!token) {
        res.status(500).send(msg)
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>  {
        const msg = { auth: false, message: 'Failed to authenticate token.' }
        if (err)  {
            res.status(500).send(msg)
        }
        req.user = decoded
        next()
    })
}

module.exports = authentication
