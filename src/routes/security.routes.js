const router = require('express').Router()
const controller = require('../controllers/security.controller')
const authentication = require('../middlewares/authentication.middleware')
const validate = require('../middlewares/validate.middleware')
const schemas = require('../validations/security.validation')

router.post('/login', validate(schemas.login), controller.login)
router.post('/register', validate(schemas.register), controller.register)
router.get('/me', authentication, controller.me)

module.exports = router
