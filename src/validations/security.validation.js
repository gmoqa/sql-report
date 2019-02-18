const Joi = require('joi')

const register = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainAtoms: 2 })
})

const login = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().min(3).required()
})

module.exports = { register, login }
