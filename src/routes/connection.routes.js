const router = require('express').Router();
const controller = require('../controllers/connection.controller');
const asyncMiddleware = require('../middlewares/async.middleware');
const { validate, schema } = require('../validations/connection.validation');

router.get('/', controller.all);
router.get('/:id', controller.get);
router.route('/:id', controller.delete)
    .delete(asyncMiddleware(controller.delete));

router.route('/')
    .post(validate(schema), asyncMiddleware(controller.create));

router.route('/:id')
    .patch(asyncMiddleware(controller.patch));

module.exports = router;