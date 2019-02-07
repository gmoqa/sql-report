const router = require('express').Router();
const controller = require('../controllers/connection.controller');
const { validate, schema } = require('../validations/validator');

router.get('/', controller.all);
router.get('/:id', controller.get);
router.delete('/:id', controller.delete);
router.post('/', validate(schema), controller.create);
router.patch('/:id', controller.patch);

module.exports = router;
