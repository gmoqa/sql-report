const Joi = require('joi')

const connection = Joi.object().keys({
    type : Joi.string().required(),
    ssh : Joi.object({
        user : Joi.string().required(),
        host : Joi.string().required(),
        port : Joi.string().required(),
        key : Joi.string().required()
    }).optional(),
    database : Joi.string().required(),
    user : Joi.string().required(),
    password : Joi.string().required(),
    host : Joi.string().required(),
    name : Joi.string().required()
})

module.exports = connection