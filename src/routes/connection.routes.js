const router = require('express').Router();
const controller = require('../controllers/connection.controller');
const asyncMiddleware = require('../middlewares/async.middleware');
const { validate, schema } = require('../validations/connection.validation');

router.route('/')
    .get(asyncMiddleware(controller.all));

router.route('/:id')
    .get(asyncMiddleware(controller.get));

router.route('/:id')
    .delete(asyncMiddleware(controller.delete));

router.route('/')
    .post(validate(schema), asyncMiddleware(controller.create));

router.route('/:id')
    .patch(asyncMiddleware(controller.patch));

module.exports = router;