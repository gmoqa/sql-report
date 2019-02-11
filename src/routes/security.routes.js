const router = require('express').Router()
const controller = require('../controllers/security.controller')
const authentication = require('../middlewares/authentication.middleware')

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/me', authentication, controller.me)

module.exports = router
