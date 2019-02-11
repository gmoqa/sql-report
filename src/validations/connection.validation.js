const Joi = require('joi')

const validate = (schema) => {
    return (req, res, next) => {
        const result = Joi.validate(req.body, schema)
        if (result.error) {
            return res.status(400).json(result.error)
        }

        if (!req.value) { req.value = {} }
        req.value['body'] = result.value
        next()
    }
}

module.exports = validate
