const Joi = require('joi')

const user = Joi.object().keys({
    name : Joi.string().required(),
    lastName : Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().required()
})

module.exports = user