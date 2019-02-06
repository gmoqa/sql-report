const Joi = require('joi');

module.exports = {
    validate: (schema) => {
        return(req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value;
            next();
        };
    },
    schema: Joi.object().keys({
        type: Joi.string().valid(['mysql', 'pgsql', 'sqlite']).required(),
        user: Joi.string(),
        ssh : {
            user: Joi.string(),
            host: Joi.string(),
            port: Joi.number(),
            key: Joi.string()
        },
        database: Joi.string().required(),
        host: Joi.string(),
        name: Joi.string(),
    })
};