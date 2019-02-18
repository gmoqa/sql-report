'use strict'
const jwt = require('jsonwebtoken')

const authentication = async (req, res, next) => {
    const token = req.headers['authorization']
    const msg = { message: 'No token provided.' }
    if (!token) {
        res.status(401).send(msg)
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>  {
        const msg = { message: 'Failed to authenticate token.' }
        if (err)  {
            res.status(401).send(msg)
        }
        req.user = decoded
        next()
    })
}

module.exports = authentication
