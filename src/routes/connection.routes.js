const router = require('express').Router()
const controller = require('../controllers/connection.controller')

router.get('/', controller.all)
router.get('/:id', controller.get)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router
