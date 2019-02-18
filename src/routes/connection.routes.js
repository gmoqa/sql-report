const router = require('express').Router()
const controller = require('../controllers/connection.controller')
const authentication = require('../middlewares/authentication.middleware')
const validate = require('../middlewares/validate.middleware')
const schema = require('../validations/connection.validation')

router.use(authentication)

router.get('', controller.all)
router.get('/:id', controller.get)
router.delete('/:id', controller.remove)
router.post('', validate(schema), controller.create)
router.post('/check', validate(schema), controller.check)
router.patch('/:id', controller.update)

module.exports = router
